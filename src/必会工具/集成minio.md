# 集成minio实现分布式文件存储



框架默认存储使用的本地磁盘，对于一些文件较大较多且有数据备份、数据安全、分布式等等就满足不了我们的要求，对于这种情况我们可以集成`OSS`对象存储服务。 `minio`是目前`github`上`star`最多的数据存储框架。`minio`可以用来搭建分布式存储服务，可以很好的和机器学习相结合。

##  1、`xxx-common/pom.xml`文件添加`minio`依赖。



```xml
<!-- Minio 文件存储 -->
<dependency>
	<groupId>io.minio</groupId>
	<artifactId>minio</artifactId>
	<version>8.2.1</version>
</dependency>
```

## 2、`ruoyi-admin`文件`application.yml`，添加`minio`配置

```yml
# Minio配置
minio:
  url: http://localhost:9000
  accessKey: minioadmin
  secretKey: minioadmin
  bucketName: ruoyi
```

## 3、`CommonController.java`自定义`Minio`服务器上传请求

```java
/**
 * 自定义 Minio 服务器上传请求
 */
@PostMapping("/uploadMinio")
public AjaxResult uploadFileMinio(MultipartFile file) throws Exception
{
	try
	{
		// 上传并返回新文件名称
		String fileName = FileUploadUtils.uploadMinio(file);
		AjaxResult ajax = AjaxResult.success();
		ajax.put("url", fileName);
		ajax.put("fileName", fileName);
		ajax.put("newFileName", FileUtils.getName(fileName));
		ajax.put("originalFilename", file.getOriginalFilename());
		return ajax;
	}
	catch (Exception e)
	{
		return AjaxResult.error(e.getMessage());
	}
}
```



## 4、`MinioConfig.java` 自定义`Minio`配置信息

在\xxx-common\src\main\java\com\xxx\common\config

```java
package com.xxx.common.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.minio.MinioClient;

/**
 * Minio 配置信息
 */
@Configuration
@ConfigurationProperties(prefix = "minio")
public class MinioConfig
{
    /**
     * 服务地址
     */
    private static String url;

    /**
     * 用户名
     */
    private static String accessKey;

    /**
     * 密码
     */
    private static String secretKey;

    /**
     * 存储桶名称
     */
    private static String bucketName;

    public static String getUrl()
    {
        return url;
    }

    public void setUrl(String url)
    {
        MinioConfig.url = url;
    }

    public static String getAccessKey()
    {
        return accessKey;
    }

    public void setAccessKey(String accessKey)
    {
        MinioConfig.accessKey = accessKey;
    }

    public static String getSecretKey()
    {
        return secretKey;
    }

    public void setSecretKey(String secretKey)
    {
        MinioConfig.secretKey = secretKey;
    }

    public static String getBucketName()
    {
        return bucketName;
    }

    public void setBucketName(String bucketName)
    {
        MinioConfig.bucketName = bucketName;
    }

    @Bean
    public MinioClient getMinioClient()
    {
        return MinioClient.builder().endpoint(url).credentials(accessKey, secretKey).build();
    }
}

```



## 5、 `Minio.java` 文件存储工具类

```java
package com.xxx.common.utils.file;

import com.thesis.common.utils.file.FileUploadUtils;
import com.xxx.common.utils.ServletUtils;
import com.xxx.common.utils.spring.SpringUtils;
import io.minio.*;
import io.minio.http.Method;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * Minio 文件存储工具类
 */
public class MinioUtil {
    /**
     * 上传文件
     *
     * @param bucketName 桶名称
     * @param fileName
     * @throws IOException
     */
    public static String uploadFile(String bucketName, String fileName, MultipartFile multipartFile) throws IOException {
        String url = "";
        MinioClient minioClient = SpringUtils.getBean(MinioClient.class);
        try (InputStream inputStream = multipartFile.getInputStream()) {
            minioClient.putObject(PutObjectArgs.builder().bucket(bucketName).object(fileName).stream(inputStream, multipartFile.getSize(), -1).contentType(multipartFile.getContentType()).build());
            url = minioClient.getPresignedObjectUrl(GetPresignedObjectUrlArgs.builder().bucket(bucketName).object(fileName).method(Method.GET).build());
            url = url.substring(0, url.indexOf('?'));
            return ServletUtils.urlDecode(url);
        } catch (Exception e) {
            throw new IOException(e.getMessage(), e);
        }
    }


    /**
     * 下载文件
     *
     * @param fileName
     * @param bucketName
     * @param response
     */
    public static void fileDownload(String fileName,
                                    String bucketName,
                                    HttpServletResponse response) {

        InputStream inputStream = null;
        OutputStream outputStream = null;
        try {
            if (StringUtils.isBlank(fileName)) {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                String data = "文件下载失败";
                OutputStream ps = response.getOutputStream();
                ps.write(data.getBytes("UTF-8"));
                return;
            }

            outputStream = response.getOutputStream();

            MinioClient minioClient = SpringUtils.getBean(MinioClient.class);
            // 获取文件对象
            inputStream = minioClient.getObject(GetObjectArgs.builder().bucket(bucketName).object(fileName).build());

            byte buf[] = new byte[1024];
            int length = 0;
            response.reset();
            response.setHeader("Content-Disposition", "attachment;filename=" +
                    URLEncoder.encode(fileName.substring(fileName.lastIndexOf("/") + 1), "UTF-8"));
            response.setContentType("application/octet-stream");
            response.setCharacterEncoding("UTF-8");
            // 输出文件
            while ((length = inputStream.read(buf)) > 0) {
                outputStream.write(buf, 0, length);
            }
            System.out.println("下载成功");
            inputStream.close();
        } catch (Throwable ex) {
            response.setHeader("Content-type", "text/html;charset=UTF-8");
            String data = "文件下载失败";
            try {
                OutputStream ps = response.getOutputStream();
                ps.write(data.getBytes("UTF-8"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        } finally {
            try {
                outputStream.close();
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


    /**
     * 下载文件并保存到本地指定文件夹
     *
     * @param fileName
     * @param bucketName
     * @param response
     * @param localFolderPath
     */
    public static void fileDownloadAndSaveToLocal(String fileName,
                                                  String bucketName,
                                                  HttpServletResponse response,
                                                  String localFolderPath) {

        InputStream inputStream = null;
        OutputStream outputStream = null;
        try {
            if (StringUtils.isBlank(fileName)) {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                String data = "文件下载失败";
                OutputStream ps = response.getOutputStream();
                ps.write(data.getBytes("UTF-8"));
                return;
            }

            // 创建本地文件路径
            String localFilePath = localFolderPath + fileName;

            outputStream = new FileOutputStream(localFilePath);

            MinioClient minioClient = SpringUtils.getBean(MinioClient.class);
            // 获取文件对象
            inputStream = minioClient.getObject(GetObjectArgs.builder().bucket(bucketName).object(fileName).build());


            byte buf[] = new byte[1024];
            int length = 0;
            // 输出文件并保存到本地
            while ((length = inputStream.read(buf)) > 0) {
                outputStream.write(buf, 0, length);
            }
            System.out.println("下载成功");

            // 关闭文件流
            outputStream.close();
            inputStream.close();
        } catch (Throwable ex) {
            response.setHeader("Content-type", "text/html;charset=UTF-8");
            String data = "文件下载失败";
            try {
                OutputStream ps = response.getOutputStream();
                ps.write(data.getBytes("UTF-8"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        } finally {
            try {
                if (outputStream != null) {
                    outputStream.close();
                }
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    // 检查文件是否存在
    public static Boolean fileExists(String bucketName, String objectName) throws Exception {
        try {
            MinioClient minioClient = SpringUtils.getBean(MinioClient.class);
            boolean fileExists = minioClient.statObject(
                    StatObjectArgs.builder().bucket(bucketName).object(objectName).build()
            ) != null;
            if (fileExists) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }


    public static List<String> getListFiles(String folderName) throws Exception {
        MinioClient minioClient = SpringUtils.getBean(MinioClient.class);
        // 查询指定文件夹下的所有文件名称
        List<String> fileNames = listFiles(minioClient, "audio", folderName);
        return fileNames;
    }

    private static List<String> listFiles(MinioClient minioClient, String bucketName, String folderName) throws Exception {

        ListObjectsArgs args = ListObjectsArgs.builder()
                .bucket(bucketName)
                .prefix(folderName)
                .recursive(true)
                .build();

        Iterable<Result<Item>> results = minioClient.listObjects(args);

        List<String> fileNames = new ArrayList<>();
        Iterator<Result<Item>> iterator = results.iterator();
        while (iterator.hasNext()) {
            Result<Item> result = iterator.next();
            Item item = result.get();
            String objectName = item.objectName();
            fileNames.add(objectName);
        }

        return fileNames;
    }


    /**
     * 获取七天外链接
     *
     * @param fileUrl 文件路径
     * @throws IOException
     */
    public static String getShare(String fileUrl) throws IOException {
        if (StringUtils.isEmpty(fileUrl) || StringUtils.isEmpty(fileUrl)) {
            return "桶名称为空或者路径为空";
        }
        try {
            MinioClient minioClient = SpringUtils.getBean(MinioClient.class);
            String url = minioClient.getPresignedObjectUrl(GetPresignedObjectUrlArgs.builder()
                    .method(Method.GET)
                    .bucket(FileUploadUtils.getBucketName()) //桶名字
                    .object(fileUrl)
                    .expiry(7, TimeUnit.DAYS).build()); // 7天的外链
            return url;
        } catch (Exception e) {
            System.out.println("获取文件外链失败");
            throw new IOException(e.getMessage(), e);
        }
    }


    /**
     * 自定义桶获取七天外链接
     *
     * @param fileUrl    文件路径
     * @param bucketName 桶名
     * @throws IOException
     */
    public static String getShare(String fileUrl, String bucketName) throws IOException {
        if (StringUtils.isEmpty(fileUrl) || StringUtils.isEmpty(fileUrl)) {
            return "桶名称为空或者路径为空";
        }
        try {
            MinioClient minioClient = SpringUtils.getBean(MinioClient.class);
            String url = minioClient.getPresignedObjectUrl(GetPresignedObjectUrlArgs.builder()
                    .method(Method.GET)
                    .bucket(bucketName)
                    .object(fileUrl)
                    .expiry(7, TimeUnit.DAYS).build()); // 7天的外链
            return url;
        } catch (Exception e) {
            System.out.println("获取文件外链失败");
            throw new IOException(e.getMessage(), e);
        }
    }


    public static void fileDownloadToLocal(HttpServletResponse response, String folderName) throws Exception {

        String localFolderPath = "D:\\minio\\";

        MinioClient minioClient = SpringUtils.getBean(MinioClient.class);
        // 查询指定文件夹下的所有文件名称
        List<String> fileNames = listFiles(minioClient, "audio", folderName);
        for (String fileName : fileNames) {
            System.out.println(fileName); // 34/195/中国罪犯心理测试表/3.wav


            InputStream inputStream = null;
            OutputStream outputStream = null;
            try {

                String[] parts = fileName.split("/");
                String lastPartFileName = parts[parts.length - 1];

                // 创建本地文件路径

                String localFilePath = localFolderPath + lastPartFileName;

                outputStream = new FileOutputStream(localFilePath);
                // 获取文件对象
                inputStream = minioClient.getObject(GetObjectArgs.builder().bucket("audio").object(fileName).build());

                byte buf[] = new byte[1024];
                int length = 0;
                // 输出文件并保存到本地
                while ((length = inputStream.read(buf)) > 0) {
                    outputStream.write(buf, 0, length);
                }

                // 关闭文件流
                outputStream.close();
                inputStream.close();
            } catch (Throwable ex) {
            } finally {
                try {
                    if (outputStream != null) {
                        outputStream.close();
                    }
                    if (inputStream != null) {
                        inputStream.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }


        List<String> localFilePaths = new ArrayList<>();
        for (String fileName : fileNames) {
            String[] parts = fileName.split("/");
            String lastPartFileName = parts[parts.length - 1];
            String localFilePath = localFolderPath + lastPartFileName;
            localFilePaths.add(localFilePath);
        }

        // 压缩文件
        FileUtils.compressAudioFiles(localFolderPath, "音频文件.zip", localFilePaths);
        log.info("压缩文件成功");

        // 下载文件
        String zipName = localFolderPath + "音频文件.zip";
        FileUtils.extracted(response, zipName, "gameName.zip");
        log.info("下载文件成功");


        FileUtils.deleteDocument(localFolderPath);
        log.info("删除文件成功");
    }


}

```



## 6、 `FileUploadUtils.java` 文件上传工具类

```java
package com.xxx.common.utils.file;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Objects;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;
import com.xxx.common.config.MinioConfig;
import com.xxx.common.config.RuoYiConfig;
import com.xxx.common.constant.Constants;
import com.xxx.common.exception.file.FileNameLengthLimitExceededException;
import com.xxx.common.exception.file.FileSizeLimitExceededException;
import com.xxx.common.exception.file.InvalidExtensionException;
import com.xxx.common.utils.DateUtils;
import com.xxx.common.utils.StringUtils;
import com.xxx.common.utils.uuid.Seq;

/**
 * 文件上传工具类
 */
public class FileUploadUtils
{
    /**
     * 默认大小 50M
     */
    public static final long DEFAULT_MAX_SIZE = 50 * 1024 * 1024;

    /**
     * 默认的文件名最大长度 100
     */
    public static final int DEFAULT_FILE_NAME_LENGTH = 100;

    /**
     * 本地默认上传的地址
     */
    private static String defaultBaseDir = RuoYiConfig.getProfile();

    /**
     * Minio默认上传的地址
     */
    private static String bucketName = MinioConfig.getBucketName();

    public static void setDefaultBaseDir(String defaultBaseDir)
    {
        FileUploadUtils.defaultBaseDir = defaultBaseDir;
    }

    public static String getDefaultBaseDir()
    {
        return defaultBaseDir;
    }

    public static String getBucketName()
    {
        return bucketName;
    }

    /**
     * 以默认配置进行文件上传
     *
     * @param file 上传的文件
     * @return 文件名称
     * @throws Exception
     */
    public static final String upload(MultipartFile file) throws IOException
    {
        try
        {
            return upload(getDefaultBaseDir(), file, MimeTypeUtils.DEFAULT_ALLOWED_EXTENSION);
        }
        catch (Exception e)
        {
            throw new IOException(e.getMessage(), e);
        }
    }

    /**
     * 根据文件路径上传
     *
     * @param baseDir 相对应用的基目录
     * @param file 上传的文件
     * @return 文件名称
     * @throws IOException
     */
    public static final String upload(String baseDir, MultipartFile file) throws IOException
    {
        try
        {
            return upload(baseDir, file, MimeTypeUtils.DEFAULT_ALLOWED_EXTENSION);
        }
        catch (Exception e)
        {
            throw new IOException(e.getMessage(), e);
        }
    }

    /**
     * 文件上传
     *
     * @param baseDir 相对应用的基目录
     * @param file 上传的文件
     * @param allowedExtension 上传文件类型
     * @return 返回上传成功的文件名
     * @throws FileSizeLimitExceededException 如果超出最大大小
     * @throws FileNameLengthLimitExceededException 文件名太长
     * @throws IOException 比如读写文件出错时
     * @throws InvalidExtensionException 文件校验异常
     */
    public static final String upload(String baseDir, MultipartFile file, String[] allowedExtension)
            throws FileSizeLimitExceededException, IOException, FileNameLengthLimitExceededException,
            InvalidExtensionException
    {
        int fileNamelength = Objects.requireNonNull(file.getOriginalFilename()).length();
        if (fileNamelength > FileUploadUtils.DEFAULT_FILE_NAME_LENGTH)
        {
            throw new FileNameLengthLimitExceededException(FileUploadUtils.DEFAULT_FILE_NAME_LENGTH);
        }

        assertAllowed(file, allowedExtension);

        String fileName = extractFilename(file);

        String absPath = getAbsoluteFile(baseDir, fileName).getAbsolutePath();
        file.transferTo(Paths.get(absPath));
        return getPathFileName(baseDir, fileName);
    }

    /**
     * 以默认BucketName配置上传到Minio服务器
     *
     * @param file 上传的文件
     * @return 文件名称
     * @throws Exception
     */
    public static final String uploadMinio(MultipartFile file) throws IOException
    {
        try
        {
            return uploadMinino(getBucketName(), file, MimeTypeUtils.DEFAULT_ALLOWED_EXTENSION);
        }
        catch (Exception e)
        {
            throw new IOException(e.getMessage(), e);
        }
    }

    /**
     * 自定义bucketName配置上传到Minio服务器
     *
     * @param file 上传的文件
     * @return 文件名称
     * @throws Exception
     */
    public static final String uploadMinio(MultipartFile file, String bucketName) throws IOException
    {
        try
        {
            return uploadMinino(bucketName, file, MimeTypeUtils.DEFAULT_ALLOWED_EXTENSION);
        }
        catch (Exception e)
        {
            throw new IOException(e.getMessage(), e);
        }
    }

    private static final String uploadMinino(String bucketName, MultipartFile file, String[] allowedExtension)
            throws FileSizeLimitExceededException, IOException, FileNameLengthLimitExceededException,
            InvalidExtensionException
    {
        int fileNamelength = file.getOriginalFilename().length();
        if (fileNamelength > FileUploadUtils.DEFAULT_FILE_NAME_LENGTH)
        {
            throw new FileNameLengthLimitExceededException(FileUploadUtils.DEFAULT_FILE_NAME_LENGTH);
        }
        assertAllowed(file, allowedExtension);
        try
        {
            String fileName = extractFilename(file);
            String pathFileName = MinioUtil.uploadFile(bucketName, fileName, file);
            return pathFileName;
        }
        catch (Exception e)
        {
            throw new IOException(e.getMessage(), e);
        }
    }

    /**
     * 编码文件名
     */
    public static final String extractFilename(MultipartFile file)
    {
        return StringUtils.format("{}/{}_{}.{}", DateUtils.datePath(),
                FilenameUtils.getBaseName(file.getOriginalFilename()), Seq.getId(Seq.uploadSeqType), getExtension(file));
    }

    public static final File getAbsoluteFile(String uploadDir, String fileName) throws IOException
    {
        File desc = new File(uploadDir + File.separator + fileName);

        if (!desc.exists())
        {
            if (!desc.getParentFile().exists())
            {
                desc.getParentFile().mkdirs();
            }
        }
        return desc;
    }

    public static final String getPathFileName(String uploadDir, String fileName) throws IOException
    {
        int dirLastIndex = RuoYiConfig.getProfile().length() + 1;
        String currentDir = StringUtils.substring(uploadDir, dirLastIndex);
        return Constants.RESOURCE_PREFIX + "/" + currentDir + "/" + fileName;
    }

    /**
     * 文件大小校验
     *
     * @param file 上传的文件
     * @return
     * @throws FileSizeLimitExceededException 如果超出最大大小
     * @throws InvalidExtensionException
     */
    public static final void assertAllowed(MultipartFile file, String[] allowedExtension)
            throws FileSizeLimitExceededException, InvalidExtensionException
    {
        long size = file.getSize();
        if (size > DEFAULT_MAX_SIZE)
        {
            throw new FileSizeLimitExceededException(DEFAULT_MAX_SIZE / 1024 / 1024);
        }

        String fileName = file.getOriginalFilename();
        String extension = getExtension(file);
        if (allowedExtension != null && !isAllowedExtension(extension, allowedExtension))
        {
            if (allowedExtension == MimeTypeUtils.IMAGE_EXTENSION)
            {
                throw new InvalidExtensionException.InvalidImageExtensionException(allowedExtension, extension,
                        fileName);
            }
            else if (allowedExtension == MimeTypeUtils.FLASH_EXTENSION)
            {
                throw new InvalidExtensionException.InvalidFlashExtensionException(allowedExtension, extension,
                        fileName);
            }
            else if (allowedExtension == MimeTypeUtils.MEDIA_EXTENSION)
            {
                throw new InvalidExtensionException.InvalidMediaExtensionException(allowedExtension, extension,
                        fileName);
            }
            else if (allowedExtension == MimeTypeUtils.VIDEO_EXTENSION)
            {
                throw new InvalidExtensionException.InvalidVideoExtensionException(allowedExtension, extension,
                        fileName);
            }
            else
            {
                throw new InvalidExtensionException(allowedExtension, extension, fileName);
            }
        }
    }

    /**
     * 判断MIME类型是否是允许的MIME类型
     *
     * @param extension
     * @param allowedExtension
     * @return
     */
    public static final boolean isAllowedExtension(String extension, String[] allowedExtension)
    {
        for (String str : allowedExtension)
        {
            if (str.equalsIgnoreCase(extension))
            {
                return true;
            }
        }
        return false;
    }

    /**
     * 获取文件名的后缀
     *
     * @param file 表单文件
     * @return 后缀名
     */
    public static final String getExtension(MultipartFile file)
    {
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        if (StringUtils.isEmpty(extension))
        {
            extension = MimeTypeUtils.getExtension(Objects.requireNonNull(file.getContentType()));
        }
        return extension;
    }
}
```





