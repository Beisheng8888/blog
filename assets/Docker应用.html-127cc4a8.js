import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-75f435b3.js";const i={},t=e(`<h1 id="docker应用篇" tabindex="-1"><a class="header-anchor" href="#docker应用篇" aria-hidden="true">#</a> Docker应用篇</h1><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker run -d \\
-p 14066:14066 \\
-p 80:18080 \\
-p 9031:9031 \\
--name my-nginx \\
--restart=always \\
-v /usr/ysjdata/ysjNginx/html:/usr/share/nginx/html \\
-v /usr/ysjdata/ysjNginx/conf/nginx.conf:/etc/nginx/nginx.conf \\
-v /usr/ysjdata/ysjNginx/conf/vhost:/etc/nginx/conf.d \\
-v /usr/local/h5yjNginx/logs:/var/log/nginx \\
-v /etc/localtime:/etc/localtime:ro \\
-v /h5:/yjmp4 \\
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker 部署nginx 开放宿主机的端口号 到容器内部</p><p>在nginx.conf</p><p>例如下面这个 宿主机 80端口号 代理到内部18080</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 成果项目前端</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">18080</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>  /usr/share/nginx/html/dist</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> /prod-api/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 后端超时时间设置</span>
    <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">600s</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">600s</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">600s</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">proxy_pass</span> http://172.18.12.34:18087/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># onlyoffice  服务代理</span>
  <span class="token directive"><span class="token keyword">location</span> /onlyoffice/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 后端超时时间设置</span>
    <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">600s</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">600s</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">600s</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">proxy_pass</span> http://172.18.12.34:8088/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[t];function c(l,o){return s(),a("div",null,p)}const v=n(i,[["render",c],["__file","Docker应用.html.vue"]]);export{v as default};
