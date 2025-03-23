---

category:
- 基础微服务

tag:
 - Docker



---

# Docker应用篇


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

  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   html;
  }
}
```







