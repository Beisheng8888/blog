import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c303d136.js";const t={},p=e(`<h1 id="docker应用篇" tabindex="-1"><a class="header-anchor" href="#docker应用篇" aria-hidden="true">#</a> Docker应用篇</h1><p>启动docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">14066</span>:14066 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">80</span>:18080 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">9031</span>:9031 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> my-nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/ysjdata/ysjNginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/ysjdata/ysjNginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/ysjdata/ysjNginx/conf/vhost:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/h5yjNginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime:ro <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /h5:/yjmp4 <span class="token punctuation">\\</span>
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">14066</span>:14066 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">80</span>:18080 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">9031</span>:9031 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> nginx-latest <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/ysjdata/ysjNginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/ysjdata/ysjNginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/ysjdata/ysjNginx/conf/vhost:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/h5yjNginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime:ro <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /h5:/yjmp4 <span class="token punctuation">\\</span>
nginx:latest
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
  
   <span class="token comment">#nginx  代理图片配置</span>
  <span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">autoindex</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">alias</span>   C:/Users/DELL/Pictures/壁纸/</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tomacat" tabindex="-1"><a class="header-anchor" href="#tomacat" aria-hidden="true">#</a> Tomacat</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>显示时间戳，最新500行且实时追踪日志输出
docker logs -f -t -n=500 tomcat8
查询最近1小时的日志最新10行日志
docker logs --tail=10  --since 1h tomcat8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> ES</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> es <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> es-data:/usr/local/research/es/data <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> es-plugins:/usr/local/research/es/plugins <span class="token punctuation">\\</span>
    <span class="token parameter variable">--privileged</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> es-net <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
elasticsearch:7.14.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql8-3-0" tabindex="-1"><a class="header-anchor" href="#mysql8-3-0" aria-hidden="true">#</a> Mysql8.3.0</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">23088</span>:3306 <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/research/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/research/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/research/mysql/conf/my.cnf:/etc/mysql/my.cnf <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>Abc123hrzy <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:8.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onlyoffice" tabindex="-1"><a class="header-anchor" href="#onlyoffice" aria-hidden="true">#</a> Onlyoffice</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">-i</span> elasticsearch.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mac-安装" tabindex="-1"><a class="header-anchor" href="#mac-安装" aria-hidden="true">#</a> mac 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8088</span>:80 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /Users/beisheng/MyProjects/onlyoffice/DocumentServer/logs:/var/log/onlyoffice <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /Users/beisheng/MyProjects/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /Users/beisheng/MyProjects/onlyoffice/DocumentServer/lib:/var/lib/onlyoffice <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /Users/beisheng/MyProjects/onlyoffice/DocumentServer/db:/var/lib/postgresql <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> onlyoffice <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">JWT_ENABLED</span><span class="token operator">=</span>false <span class="token punctuation">\\</span>
  onlyoffice/documentserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux-安装" tabindex="-1"><a class="header-anchor" href="#linux-安装" aria-hidden="true">#</a> linux 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span>  <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8088</span>:80 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /usr/local/research/onlyoffice/logs:/var/log/onlyoffice <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /usr/local/research/onlyoffice/data:/var/www/onlyoffice/Data <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /usr/local/research/onlyoffice/lib:/var/lib/onlyoffice <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /usr/local/research/onlyoffice/db:/var/lib/postgresql <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> myonlyoffice <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">JWT_ENABLED</span><span class="token operator">=</span>false <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">USE_UNAUTHORIZED_STORAGE</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">ONLYOFFICE_HTTPS_HSTS_ENABLED</span><span class="token operator">=</span>false <span class="token punctuation">\\</span>
  onlyoffice/documentserver:8.2.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决文件下载失败问题</p><p>编辑docker中<code>/etc/onlyoffice/documentserver/default.json</code>下的内容</p><p>这里是为了处理下载失败的原因</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;request-filtering-agent&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;allowPrivateIPAddress&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;allowMetaIPAddress&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是为了解决 文件大小超出了为服务器设置的限制</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;FileConverter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;converter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;maxDownloadBytes&quot;</span><span class="token operator">:</span> <span class="token number">524288000</span><span class="token punctuation">,</span> <span class="token comment">// 这里要修改</span>
			<span class="token property">&quot;downloadTimeout&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;connectionAndInactivity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2m&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;wholeCycle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2m&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;downloadAttemptMaxCount&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token property">&quot;downloadAttemptDelay&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
			<span class="token property">&quot;maxprocesscount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;fontDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;presentationThemesDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;x2tPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;docbuilderPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;spawnOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;errorfiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;streamWriterBufferSize&quot;</span><span class="token operator">:</span> <span class="token number">8388608</span><span class="token punctuation">,</span>
			<span class="token property">&quot;maxRedeliveredCount&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
			<span class="token property">&quot;inputLimits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
				<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docx;dotx;docm;dotm&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;zip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;uncompressed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5000MB&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 修改</span>
					<span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*.xml&quot;</span>
				<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
				<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xlsx;xltx;xlsm;xltm&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;zip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;uncompressed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000MB&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 修改</span>
					<span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*.xml&quot;</span>
				<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
				<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pptx;ppsx;potx;pptm;ppsm;potm&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;zip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;uncompressed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000MB&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 修改</span>
					<span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*.xml&quot;</span>
				<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> onlyoffice:/etc/onlyoffice/documentserver/default.json ./
<span class="token function">vim</span> default.json

<span class="token function">docker</span> <span class="token function">cp</span> ./default.json onlyoffice:/etc/onlyoffice/documentserver/default.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者<br> 一、从docker 容器中下载 /etc/onlyoffice/documentserver/default.json</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span>  myonlyoffice:/etc/onlyoffice/documentserver/default.json /usr/local/default.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>二、将修改好的配置文件上传到容器中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> /usr/local/default.json myonlyoffice:/etc/onlyoffice/documentserver/default.json
<span class="token function">docker</span> restart  myonlyoffice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> Rabbitmq</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span><span class="token number">1234</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mq-plugins:/plugins <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> mq <span class="token punctuation">\\</span>
<span class="token parameter variable">--hostname</span> mq <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">15672</span>:15672 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">5672</span>:5672 <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 rabbitmq:3.8-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[p];function l(i,c){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","Docker应用.html.vue"]]);export{d as default};
