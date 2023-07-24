<template><div><h1 id="nacos安装指南" tabindex="-1"><a class="header-anchor" href="#nacos安装指南" aria-hidden="true">#</a> Nacos安装指南</h1>
<h1 id="_1-windows安装" tabindex="-1"><a class="header-anchor" href="#_1-windows安装" aria-hidden="true">#</a> 1.Windows安装</h1>
<p>开发阶段采用单机安装即可。</p>
<h2 id="_1-1-下载安装包" tabindex="-1"><a class="header-anchor" href="#_1-1-下载安装包" aria-hidden="true">#</a> 1.1.下载安装包</h2>
<p>在Nacos的GitHub页面，提供有下载链接，可以下载编译好的Nacos服务端或者源代码：</p>
<p>GitHub主页：<a href="https://github.com/alibaba/nacos" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/nacos<ExternalLinkIcon/></a></p>
<p>GitHub的Release下载页：<a href="https://github.com/alibaba/nacos/releases" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/nacos/releases<ExternalLinkIcon/></a></p>
<p>如图：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402161102887.png" alt="image-20210402161102887" tabindex="0" loading="lazy"><figcaption>image-20210402161102887</figcaption></figure>
<p>本采用1.4.1.版本的Nacos，资料已经准备了安装包：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402161130261.png" alt="image-20210402161130261" tabindex="0" loading="lazy"><figcaption>image-20210402161130261</figcaption></figure>
<p>windows版本使用<code v-pre>nacos-server-1.4.1.zip</code>包即可。</p>
<h2 id="_1-2-解压" tabindex="-1"><a class="header-anchor" href="#_1-2-解压" aria-hidden="true">#</a> 1.2.解压</h2>
<p>将这个包解压到任意非中文目录下，如图：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402161843337.png" alt="image-20210402161843337" tabindex="0" loading="lazy"><figcaption>image-20210402161843337</figcaption></figure>
<p>目录说明：</p>
<ul>
<li>bin：启动脚本</li>
<li>conf：配置文件</li>
</ul>
<h2 id="_1-3-端口配置" tabindex="-1"><a class="header-anchor" href="#_1-3-端口配置" aria-hidden="true">#</a> 1.3.端口配置</h2>
<p>Nacos的默认端口是8848，如果你电脑上的其它进程占用了8848端口，请先尝试关闭该进程。</p>
<p><strong>如果无法关闭占用8848端口的进程</strong>，也可以进入nacos的conf目录，修改配置文件中的端口：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402162008280.png" alt="image-20210402162008280" tabindex="0" loading="lazy"><figcaption>image-20210402162008280</figcaption></figure>
<p>修改其中的内容：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402162251093.png" alt="image-20210402162251093" tabindex="0" loading="lazy"><figcaption>image-20210402162251093</figcaption></figure>
<h2 id="_1-4-启动" tabindex="-1"><a class="header-anchor" href="#_1-4-启动" aria-hidden="true">#</a> 1.4.启动</h2>
<p>启动非常简单，进入bin目录，结构如下：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402162350977.png" alt="image-20210402162350977" tabindex="0" loading="lazy"><figcaption>image-20210402162350977</figcaption></figure>
<p>然后执行命令即可：</p>
<ul>
<li>
<p>windows命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>startup.cmd -m standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>执行后的效果如图：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402162526774.png" alt="image-20210402162526774" tabindex="0" loading="lazy"><figcaption>image-20210402162526774</figcaption></figure>
<h2 id="_1-5-访问" tabindex="-1"><a class="header-anchor" href="#_1-5-访问" aria-hidden="true">#</a> 1.5.访问</h2>
<p>在浏览器输入地址：<a href="http://127.0.0.1:8848/nacos%E5%8D%B3%E5%8F%AF%EF%BC%9A" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8848/nacos即可：<ExternalLinkIcon/></a></p>
<figure><img src="@source/src/必会工具/assets/image-20210402162630427.png" alt="image-20210402162630427" tabindex="0" loading="lazy"><figcaption>image-20210402162630427</figcaption></figure>
<p>默认的账号和密码都是nacos，进入后：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402162709515.png" alt="image-20210402162709515" tabindex="0" loading="lazy"><figcaption>image-20210402162709515</figcaption></figure>
<h1 id="_2-linux安装" tabindex="-1"><a class="header-anchor" href="#_2-linux安装" aria-hidden="true">#</a> 2.Linux安装</h1>
<p>Linux或者Mac安装方式与Windows类似。</p>
<h2 id="_2-1-安装jdk" tabindex="-1"><a class="header-anchor" href="#_2-1-安装jdk" aria-hidden="true">#</a> 2.1.安装JDK</h2>
<p>Nacos依赖于JDK运行，索引Linux上也需要安装JDK才行。</p>
<p>上传jdk安装包：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402172334810.png" alt="image-20210402172334810" tabindex="0" loading="lazy"><figcaption>image-20210402172334810</figcaption></figure>
<p>上传到某个目录，例如：<code v-pre>/usr/local/</code></p>
<p>然后解压缩：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> jdk-8u144-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后重命名为java</p>
<p>配置环境变量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置环境变量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-2-上传安装包" tabindex="-1"><a class="header-anchor" href="#_2-2-上传安装包" aria-hidden="true">#</a> 2.2.上传安装包</h2>
<p>如图：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402161102887.png" alt="image-20210402161102887" tabindex="0" loading="lazy"><figcaption>image-20210402161102887</figcaption></figure>
<p>也可以直接使用资料中的tar.gz：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402161130261.png" alt="image-20210402161130261" tabindex="0" loading="lazy"><figcaption>image-20210402161130261</figcaption></figure>
<p>上传到Linux服务器的某个目录，例如<code v-pre>/usr/local/src</code>目录下：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402163715580.png" alt="image-20210402163715580" tabindex="0" loading="lazy"><figcaption>image-20210402163715580</figcaption></figure>
<h2 id="_2-3-解压" tabindex="-1"><a class="header-anchor" href="#_2-3-解压" aria-hidden="true">#</a> 2.3.解压</h2>
<p>命令解压缩安装包：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> nacos-server-1.4.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后删除安装包：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> nacos-server-1.4.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目录中最终样式：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402163858429.png" alt="image-20210402163858429" tabindex="0" loading="lazy"><figcaption>image-20210402163858429</figcaption></figure>
<p>目录内部：</p>
<figure><img src="@source/src/必会工具/assets/image-20210402164414827.png" alt="image-20210402164414827" tabindex="0" loading="lazy"><figcaption>image-20210402164414827</figcaption></figure>
<h2 id="_2-4-端口配置" tabindex="-1"><a class="header-anchor" href="#_2-4-端口配置" aria-hidden="true">#</a> 2.4.端口配置</h2>
<p>与windows中类似</p>
<h2 id="_2-5-启动" tabindex="-1"><a class="header-anchor" href="#_2-5-启动" aria-hidden="true">#</a> 2.5.启动</h2>
<p>在nacos/bin目录中，输入命令启动Nacos：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> startup.sh <span class="token parameter variable">-m</span> standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_3-nacos的依赖" tabindex="-1"><a class="header-anchor" href="#_3-nacos的依赖" aria-hidden="true">#</a> 3.Nacos的依赖</h1>
<p>父工程：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-alibaba-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2.5.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- nacos客户端依赖包 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


