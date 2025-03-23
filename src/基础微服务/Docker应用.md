---

category:
- 基础微服务

tag:
 - Docker



---

# Docker应用篇

启动docker 

```cmd
systemctl start docker
```




## Nginx

```cmd
docker run -d \
-p 14066:14066 \
-p 80:18080 \
-p 9031:9031 \
--name my-nginx \
--restart=always \
-v /usr/ysjdata/ysjNginx/html:/usr/share/nginx/html \
-v /usr/ysjdata/ysjNginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /usr/ysjdata/ysjNginx/conf/vhost:/etc/nginx/conf.d \
-v /usr/local/h5yjNginx/logs:/var/log/nginx \
-v /etc/localtime:/etc/localtime:ro \
-v /h5:/yjmp4 \
nginx
```

docker  部署nginx  开放宿主机的端口号 到容器内部

在nginx.conf  

例如下面这个 宿主机 80端口号 代理到内部18080

```nginx
# 成果项目前端
server {
  listen       18080;
  server_name  localhost;
  charset utf-8;

  location / {
    root  /usr/share/nginx/html/dist;
    try_files $uri $uri/ /index.html;
    index  index.html index.htm;
  }

  location /prod-api/ {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    # 后端超时时间设置
    proxy_connect_timeout 600s;
    proxy_read_timeout 600s;
    proxy_send_timeout 600s;

    proxy_pass http://172.18.12.34:18087/;
  }

  # onlyoffice  服务代理
  location /onlyoffice/ {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    # 后端超时时间设置
    proxy_connect_timeout 600s;
    proxy_read_timeout 600s;
    proxy_send_timeout 600s;

    proxy_pass http://172.18.12.34:8088/;
  }
  
   #nginx  代理图片配置
  location /images/ {
            autoindex on;
            charset utf-8;
            alias   C:/Users/DELL/Pictures/壁纸/;
	}

  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   html;
  }
}
```



## Tomacat 

```
显示时间戳，最新500行且实时追踪日志输出
docker logs -f -t -n=500 tomcat8
查询最近1小时的日志最新10行日志
docker logs --tail=10  --since 1h tomcat8
```



## ES

```cmd
docker run -d \
	--name es \
    -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" \
    -e "discovery.type=single-node" \
    -v es-data:/usr/local/research/es/data \
    -v es-plugins:/usr/local/research/es/plugins \
    --privileged \
    --network es-net \
    -p 9200:9200 \
    -p 9300:9300 \
elasticsearch:7.14.0
```



## Mysql8.3.0

```cmd
docker run \
-p 23088:3306 \
--restart=always \
--name mysql \
--privileged=true \
-v /usr/local/research/mysql/log:/var/log/mysql \
-v /usr/local/research/mysql/data:/var/lib/mysql \
-v /usr/local/research/mysql/conf/my.cnf:/etc/mysql/my.cnf \
-e MYSQL_ROOT_PASSWORD=Abc123hrzy \
-d mysql:8.3
```



## Onlyoffice

```sh
docker load -i elasticsearch.tar
```

### mac 安装

```sh
docker run -i -t -d -p 8088:80 --restart=always \
  -v /Users/beisheng/MyProjects/onlyoffice/DocumentServer/logs:/var/log/onlyoffice \
  -v /Users/beisheng/MyProjects/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data \
  -v /Users/beisheng/MyProjects/onlyoffice/DocumentServer/lib:/var/lib/onlyoffice \
  -v /Users/beisheng/MyProjects/onlyoffice/DocumentServer/db:/var/lib/postgresql \
  --name onlyoffice \
  -e JWT_ENABLED=false \
  onlyoffice/documentserver
```

### linux 安装

```sh
docker run -i -t  -d -p 8088:80 --restart=always \
  -v /usr/local/research/onlyoffice/logs:/var/log/onlyoffice \
  -v /usr/local/research/onlyoffice/data:/var/www/onlyoffice/Data \
  -v /usr/local/research/onlyoffice/lib:/var/lib/onlyoffice \
  -v /usr/local/research/onlyoffice/db:/var/lib/postgresql \
  --name myonlyoffice \
  -e JWT_ENABLED=false \
  -e USE_UNAUTHORIZED_STORAGE=true \
  -e ONLYOFFICE_HTTPS_HSTS_ENABLED=false \
  onlyoffice/documentserver:8.2.2
```

解决文件下载失败问题

编辑docker中`/etc/onlyoffice/documentserver/default.json`下的内容

```json
"request-filtering-agent" : {
        "allowPrivateIPAddress": true,
        "allowMetaIPAddress": true
},
```

```sh
docker cp onlyoffice:/etc/onlyoffice/documentserver/default.json ./
vim default.json

docker cp ./default.json onlyoffice:/etc/onlyoffice/documentserver/default.json
```







## Rabbitmq

```cmd
docker run \
-e RABBITMQ_DEFAULT_USER=root \
-e RABBITMQ_DEFAULT_PASS=1234 \
-v mq-plugins:/plugins \
--name mq \
--hostname mq \
-p 15672:15672 \
-p 5672:5672 \
-d \
 rabbitmq:3.8-management
```











