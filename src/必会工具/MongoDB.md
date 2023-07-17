# MongoDB

## 1.1.1)安装MongoDB
拉取镜像
```
docker pull mongo
```
创建容器
```
docker run -di --name mongo-service --restart=always -p 27017:27017 -v ~/data/mongodata:/data mongo
```
## 1.1.2)导入资料中的mongo-demo项目到beisheng-leadnews-test中

其中有三项配置比较关键：
第一：mongo依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

第二：mongo配置
```yaml
server:
  port: 9998
spring:
  data:
    mongodb:
      host: 192.168.200.130
      port: 27017
      database: leadnews-history
```

第三：映射
```java
package com.beisheng.mongo.pojo;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Date;

/**
 * <p>
 * 联想词表
 * </p>
 *
 * @author beisheng
 */
@Data
@Document("ap_associate_words")
public class ApAssociateWords implements Serializable {

    private static final long serialVersionUID = 1L;

    private String id;

    /**
     * 联想词
     */
    private String associateWords;

    /**
     * 创建时间
     */
    private Date createdTime;

}
```

### 1.1.3)核心方法
```java
package com.beisheng.mongo.test;


import com.beisheng.mongo.MongoApplication;
import com.beisheng.mongo.pojo.ApAssociateWords;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@SpringBootTest(classes = MongoApplication.class)
@RunWith(SpringRunner.class)
public class MongoTest {


    @Autowired
    private MongoTemplate mongoTemplate;

    //保存
    @Test
    public void saveTest(){
        /*for (int i = 0; i < 10; i++) {
            ApAssociateWords apAssociateWords = new ApAssociateWords();
            apAssociateWords.setAssociateWords("123");
            apAssociateWords.setCreatedTime(new Date());
            mongoTemplate.save(apAssociateWords);
        }*/
        ApAssociateWords apAssociateWords = new ApAssociateWords();
        apAssociateWords.setAssociateWords("123");
        apAssociateWords.setCreatedTime(new Date());
        mongoTemplate.save(apAssociateWords);

    }

    //查询一个
    @Test
    public void saveFindOne(){
        ApAssociateWords apAssociateWords = mongoTemplate.findById("60bd973eb0c1d430a71a7928", ApAssociateWords.class);
        System.out.println(apAssociateWords);
    }

    //条件查询
    @Test
    public void testQuery(){
        Query query = Query.query(Criteria.where("associateWords").is("123"))
                .with(Sort.by(Sort.Direction.DESC,"createdTime"));
        List<ApAssociateWords> apAssociateWordsList = mongoTemplate.find(query, ApAssociateWords.class);
        System.out.println(apAssociateWordsList);
    }

    @Test
    public void testDel(){
        mongoTemplate.remove(Query.query(Criteria.where("associateWords").is("123")),ApAssociateWords.class);
    }
}
```
## MongoDB补充
| 逻辑存储 | MongoDB | mysql |
| --- | --- | --- |
| 库 | 数据库DB | 数据库DB |
|  | 集合Collection | 表TABLE |
|  | 文档Document | 记录Row Record |
|  | 域/字段 Feild | 字段/属性Feild |
|  | 索引 | 索引 |
|  | **无** | 多表关联Join |
|  | 4.0+(副本集级别的多文档事务)；4.2+(分布式集群的多文档事务) | 支持事务 |



## 1.为什么使用MongoDB
1）读写性能高于mysql
2）(单集合)存储数据量大于mysql，拓展性非常高——分布式集群容易拓展。
3）数据结构灵活(采用BSON结构，属性比较松散)

## 2.spring-data-mongodb基于接口的使用套路

> spring-data体系，整合了市面上优秀的第三方存储层框架：
>
> spring-data-elasticsearch （没建议使用，很多高级查询必须要依赖原生API）
>
> spring-data-redis (RedisTemplate)
>
> spring-data-JPA（没学。整合了ORM框架：hibernate，有多表关联）
>
> spring-data-mongodb （MongoTemplate

### 2.1 引入起步依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```
### 2.2 配置文件
> 配置连接等

```yaml
spring:
  data:
    mongodb:
      host: 192.168.200.130
      port: 27017
      database: leadnews-history
```
### 2.3 POJO对应集合
```java
@Data
@org.springframework.data.mongodb.core.mapping.Document("ap_associate_words")
public class ApAssociateWords implements Serializable {

    private static final long serialVersionUID = 1L;

    //声明主键 -- 给文档ID(_id)使用
    @org.springframework.data.annotation.Id
    private String id;

    /**
     * 联想词
     */

    @Field //声明域 -- 同名则无需处理
    private String associateWords;

    /**
     * 创建时间
     */
    private Date createdTime;

}
```
> @org.springframework.data.mongodb.core.mapping.Document("ap_associate_words")
>
> 指定POJO映射的MongoDB中的集合！

### 2.4 自定义接口(不需要实现)
```java
public interface ApAssociateDao extends MongoRepository<ApAssociateWords,String> {
}
```

> MongoRepository<T, ID>
>
> T表示DAO操作的POJO和对应的集合；
>
> ID(可序列化)表示POJO的主键类型。 ObjectId（MongoDB默认的主键类型）

## 2.5 注入接口，使用API
```java
@SpringBootTest(classes = MongoApplication.class)
@RunWith(SpringRunner.class)
public class MongoDaoTest {

    @Autowired
    private ApAssociateDao associateDao;
}
```
## API:
```java
@Test
public void saveTest(){
    ApAssociateWords apAssociateWords = new ApAssociateWords();
    apAssociateWords.setAssociateWords("123");
    apAssociateWords.setCreatedTime(new Date());
    associateDao.save(apAssociateWords);
}
```
> 既是插入也是修改


```java
@Test
public void saveFindOne(){
    Optional<ApAssociateWords> result = associateDao.findById("60bd0043aab4f3022ce4a119");
    System.out.println(result.get());
}
```
> 按照ID查询


```java
@Test
public void findPageAndSord(){
    Pageable pageable = PageRequest.of(0,10,Sort.Direction.DESC,"createdTime");
    Page<ApAssociateWords> page = associateDao.findAll(pageable);

    //获取总记录数
    long totalElements = page.getTotalElements();
    //获取总页数
    int totalPages = page.getTotalPages();
    //获取本页集合数据
    List<ApAssociateWords> content = page.getContent();
    System.out.println(totalElements + "xxxx" + totalPages);
}
```
## 按照规范使用接口方法
> findBy开头 (首字母大写)属性 查询方式(条件参数)；

```java
public interface ApAssociateDao extends MongoRepository<ApAssociateWords,String> {

    List<ApAssociateWords> findByAssociateWordsEquals(String words);
}
```
可以按条件查询并分页、排序
```java
@Test
public void findInterPage(){

    Pageable pageable
        = PageRequest.of(1,5,Sort.by(Sort.Direction.ASC,"createdTime"));
    Page<ApAssociateWords> page
        = associateDao.findByAssociateWordsStartsWith("456", pageable);
    //获取总记录数
    long totalElements = page.getTotalElements();
    //获取总页数
    int totalPages = page.getTotalPages();
    //获取本页集合数据
    List<ApAssociateWords> content = page.getContent();
    System.out.println(totalElements + "xxxx" + to>talPages);
}
```

> 接口中，Pageable放在最后！

```java
public interface ApAssociateDao extends MongoRepository<ApAssociateWords,String> {

    List<ApAssociateWords> findByAssociateWordsEquals(String words);

    void deleteById(String id);

    Page<ApAssociateWords> findByAssociateWordsStartsWith(String prefix, Pageable pageable);

    Page<ApAssociateWords> findByAssociateWordsStartingWithAndAndCreatedTimeLessThan(String prefix,Date date);
}
```


