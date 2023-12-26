import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as p,a as s,d as r,w as c,b as n,e as a}from"./app-14200ad9.js";const d="/blog/assets/image-20210629114325516-55d98da4.png",o="/blog/assets/image-20210629114830642-a4fad52f.png",m="/blog/assets/image-20210629114941810-13d44338.png",u="/blog/assets/image-20210630111505799-f3b356ee.png",b="/blog/assets/image-20210630113929868-c6aeaea2.png",v="/blog/assets/image-20210630183914491-47e437ad.png",g="/blog/assets/image-20210630201258802-0e593f2f.png",k="/blog/assets/image-20210701215227018-c409376c.png",h="/blog/assets/image-20210701215534714-895e8aac.png",f="/blog/assets/image-20210701220714104-7942057d.png",x="/blog/assets/image-20210701222857997-b201237a.png",_="/blog/assets/image-20210701223025709-d7b062c0.png",y="/blog/assets/image-20210701223131264-db153330.png",z="/blog/assets/image-20210702164116027-6c4dec39.png",R="/blog/assets/image-20210702174255799-3c962190.png",I="/blog/assets/image-20210702181101969-04b19dc2.png",P="/blog/assets/image-20210702181215705-2c240f05.png",w="/blog/assets/image-20210702181922809-e5b841a4.png",O="/blog/assets/image-20210702182343979-92510d8b.png",q="/blog/assets/image-20210702182602145-c1a7a399.png",B={},N=a(`<h1 id="redis集群" tabindex="-1"><a class="header-anchor" href="#redis集群" aria-hidden="true">#</a> Redis集群</h1><p>本章是基于CentOS7下的Redis集群教程，包括：</p><ul><li>单机安装Redis</li><li>Redis主从</li><li>Redis分片集群</li></ul><h1 id="_1-单机安装redis" tabindex="-1"><a class="header-anchor" href="#_1-单机安装redis" aria-hidden="true">#</a> 1.单机安装Redis</h1><p>首先需要安装Redis所需要的依赖：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc tcl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后将课前资料提供的Redis安装包上传到虚拟机的任意目录：</p><figure><img src="`+d+'" alt="image-20210629114325516" tabindex="0" loading="lazy"><figcaption>image-20210629114325516</figcaption></figure><p>例如，我放到了/tmp目录：</p><figure><img src="'+o+`" alt="image-20210629114830642" tabindex="0" loading="lazy"><figcaption>image-20210629114830642</figcaption></figure><p>解压缩：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> redis-6.2.4.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压后：</p><figure><img src="`+m+`" alt="image-20210629114941810" tabindex="0" loading="lazy"><figcaption>image-20210629114941810</figcaption></figure><p>进入redis目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> redis-6.2.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行编译命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有出错，应该就安装成功了。</p><p>然后修改redis.conf文件中的一些配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 绑定地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问</span>
<span class="token key attr-name">bind</span> <span class="token value attr-value">0.0.0.0</span>
<span class="token comment"># 数据库数量，设置为1</span>
<span class="token key attr-name">databases</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动Redis：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-server redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止redis服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_2-redis主从集群" tabindex="-1"><a class="header-anchor" href="#_2-redis主从集群" aria-hidden="true">#</a> 2.Redis主从集群</h1><h2 id="_2-1-集群结构" tabindex="-1"><a class="header-anchor" href="#_2-1-集群结构" aria-hidden="true">#</a> 2.1.集群结构</h2><p>我们搭建的主从集群结构如图：</p><figure><img src="`+u+`" alt="image-20210630111505799" tabindex="0" loading="lazy"><figcaption>image-20210630111505799</figcaption></figure><p>共包含三个节点，一个主节点，两个从节点。</p><p>这里我们会在同一台虚拟机中开启3个redis实例，模拟主从集群，信息如下：</p><table><thead><tr><th style="text-align:center;">IP</th><th style="text-align:center;">PORT</th><th style="text-align:center;">角色</th></tr></thead><tbody><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">7001</td><td style="text-align:center;">master</td></tr><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">7002</td><td style="text-align:center;">slave</td></tr><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">7003</td><td style="text-align:center;">slave</td></tr></tbody></table><h2 id="_2-2-准备实例和配置" tabindex="-1"><a class="header-anchor" href="#_2-2-准备实例和配置" aria-hidden="true">#</a> 2.2.准备实例和配置</h2><p>要在同一台虚拟机开启3个实例，必须准备三份不同的配置文件和目录，配置文件所在目录也就是工作目录。</p><p>1）创建目录</p><p>我们创建三个文件夹，名字分别叫7001、7002、7003：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入/tmp目录</span>
<span class="token builtin class-name">cd</span> /tmp
<span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图：</p><figure><img src="`+b+`" alt="image-20210630113929868" tabindex="0" loading="lazy"><figcaption>image-20210630113929868</figcaption></figure><p>2）恢复原始配置</p><p>修改redis-6.2.4/redis.conf文件，将其中的持久化模式改为默认的RDB模式，AOF保持关闭状态。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 开启RDB</span>
<span class="token comment"># save &quot;&quot;</span>
<span class="token key attr-name">save</span> <span class="token value attr-value">3600 1</span>
<span class="token key attr-name">save</span> <span class="token value attr-value">300 100</span>
<span class="token key attr-name">save</span> <span class="token value attr-value">60 10000</span>

<span class="token comment"># 关闭AOF</span>
<span class="token key attr-name">appendonly</span> <span class="token value attr-value">no</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）拷贝配置文件到每个实例目录</p><p>然后将redis-6.2.4/redis.conf文件拷贝到三个目录中（在/tmp目录执行下列命令）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式一：逐个拷贝</span>
<span class="token function">cp</span> redis-6.2.4/redis.conf <span class="token number">7001</span>
<span class="token function">cp</span> redis-6.2.4/redis.conf <span class="token number">7002</span>
<span class="token function">cp</span> redis-6.2.4/redis.conf <span class="token number">7003</span>
<span class="token comment"># 方式二：管道组合命令，一键拷贝</span>
<span class="token builtin class-name">echo</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token function">cp</span> redis-6.2.4/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）修改每个实例的端口、工作目录</p><p>修改每个文件夹内的配置文件，将端口分别修改为7001、7002、7003，将rdb文件保存位置都修改为自己所在目录（在/tmp目录执行下列命令）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/6379/7001/g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/dir .\\//dir \\/tmp\\/7001\\//g&#39;</span> <span class="token number">7001</span>/redis.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/6379/7002/g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/dir .\\//dir \\/tmp\\/7002\\//g&#39;</span> <span class="token number">7002</span>/redis.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/6379/7003/g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/dir .\\//dir \\/tmp\\/7003\\//g&#39;</span> <span class="token number">7003</span>/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5）修改每个实例的声明IP</p><p>虚拟机本身有多个IP，为了避免将来混乱，我们需要在redis.conf文件中指定每一个实例的绑定ip信息，格式如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># redis实例的声明 IP</span>
<span class="token key attr-name">replica-announce-ip</span> <span class="token value attr-value">192.168.150.101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>每个目录都要改，我们一键完成修改（在/tmp目录执行下列命令）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 逐一执行</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;1a replica-announce-ip 192.168.150.101&#39;</span> <span class="token number">7001</span>/redis.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;1a replica-announce-ip 192.168.150.101&#39;</span> <span class="token number">7002</span>/redis.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;1a replica-announce-ip 192.168.150.101&#39;</span> <span class="token number">7003</span>/redis.conf

<span class="token comment"># 或者一键修改</span>
<span class="token builtin class-name">printf</span> <span class="token string">&#39;%s\\n&#39;</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token parameter variable">-t</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;1a replica-announce-ip 192.168.150.101&#39;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-启动" tabindex="-1"><a class="header-anchor" href="#_2-3-启动" aria-hidden="true">#</a> 2.3.启动</h2><p>为了方便查看日志，我们打开3个ssh窗口，分别启动3个redis实例，启动命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第1个</span>
redis-server <span class="token number">7001</span>/redis.conf
<span class="token comment"># 第2个</span>
redis-server <span class="token number">7002</span>/redis.conf
<span class="token comment"># 第3个</span>
redis-server <span class="token number">7003</span>/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动后：</p><figure><img src="`+v+`" alt="image-20210630183914491" tabindex="0" loading="lazy"><figcaption>image-20210630183914491</figcaption></figure><p>如果要一键停止，可以运行下面命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">printf</span> <span class="token string">&#39;%s\\n&#39;</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token parameter variable">-t</span> redis-cli <span class="token parameter variable">-p</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-4-开启主从关系" tabindex="-1"><a class="header-anchor" href="#_2-4-开启主从关系" aria-hidden="true">#</a> 2.4.开启主从关系</h2><p>现在三个实例还没有任何关系，要配置主从可以使用replicaof 或者slaveof（5.0以前）命令。</p><p>有临时和永久两种模式：</p><ul><li><p>修改配置文件（永久生效）</p><ul><li>在redis.conf中添加一行配置：<code>slaveof &lt;masterip&gt; &lt;masterport&gt;</code></li></ul></li><li><p>使用redis-cli客户端连接到redis服务，执行slaveof命令（重启后失效）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>slaveof <span class="token operator">&lt;</span>masterip<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>masterport<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,64),T=a(`<p>这里我们为了演示方便，使用方式二。</p><p>通过redis-cli命令连接7002，执行下面命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 连接 7002</span>
redis-cli <span class="token parameter variable">-p</span> <span class="token number">7002</span>
<span class="token comment"># 执行slaveof</span>
slaveof <span class="token number">192.168</span>.150.101 <span class="token number">7001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过redis-cli命令连接7003，执行下面命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 连接 7003</span>
redis-cli <span class="token parameter variable">-p</span> <span class="token number">7003</span>
<span class="token comment"># 执行slaveof</span>
slaveof <span class="token number">192.168</span>.150.101 <span class="token number">7001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后连接 7001节点，查看集群状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 连接 7001</span>
redis-cli <span class="token parameter variable">-p</span> <span class="token number">7001</span>
<span class="token comment"># 查看状态</span>
info replication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><figure><img src="`+g+'" alt="image-20210630201258802" tabindex="0" loading="lazy"><figcaption>image-20210630201258802</figcaption></figure><h2 id="_2-5-测试" tabindex="-1"><a class="header-anchor" href="#_2-5-测试" aria-hidden="true">#</a> 2.5.测试</h2><p>执行下列操作以测试：</p><ul><li><p>利用redis-cli连接7001，执行<code>set num 123</code></p></li><li><p>利用redis-cli连接7002，执行<code>get num</code>，再执行<code>set num 666</code></p></li><li><p>利用redis-cli连接7003，执行<code>get num</code>，再执行<code>set num 888</code></p></li></ul><p>可以发现，只有在7001这个master节点上可以执行写操作，7002和7003这两个slave节点只能执行读操作。</p><h1 id="_3-搭建哨兵集群" tabindex="-1"><a class="header-anchor" href="#_3-搭建哨兵集群" aria-hidden="true">#</a> 3.搭建哨兵集群</h1><h2 id="_3-1-集群结构" tabindex="-1"><a class="header-anchor" href="#_3-1-集群结构" aria-hidden="true">#</a> 3.1.集群结构</h2><p>这里我们搭建一个三节点形成的Sentinel集群，来监管之前的Redis主从集群。如图：</p><figure><img src="'+k+`" alt="image-20210701215227018" tabindex="0" loading="lazy"><figcaption>image-20210701215227018</figcaption></figure><p>三个sentinel实例信息如下：</p><table><thead><tr><th>节点</th><th style="text-align:center;">IP</th><th style="text-align:center;">PORT</th></tr></thead><tbody><tr><td>s1</td><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">27001</td></tr><tr><td>s2</td><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">27002</td></tr><tr><td>s3</td><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">27003</td></tr></tbody></table><h2 id="_3-2-准备实例和配置" tabindex="-1"><a class="header-anchor" href="#_3-2-准备实例和配置" aria-hidden="true">#</a> 3.2.准备实例和配置</h2><p>要在同一台虚拟机开启3个实例，必须准备三份不同的配置文件和目录，配置文件所在目录也就是工作目录。</p><p>我们创建三个文件夹，名字分别叫s1、s2、s3：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入/tmp目录</span>
<span class="token builtin class-name">cd</span> /tmp
<span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> s1 s2 s3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图：</p><figure><img src="`+h+`" alt="image-20210701215534714" tabindex="0" loading="lazy"><figcaption>image-20210701215534714</figcaption></figure><p>然后我们在s1目录创建一个sentinel.conf文件，添加下面的内容：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>port 27001
sentinel announce-ip 192.168.150.101
sentinel monitor mymaster 192.168.150.101 7001 2
sentinel down-after-milliseconds mymaster 5000
sentinel failover-timeout mymaster 60000
dir &quot;/tmp/s1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解读：</p><ul><li><code>port 27001</code>：是当前sentinel实例的端口</li><li><code>sentinel monitor mymaster 192.168.150.101 7001 2</code>：指定主节点信息 <ul><li><code>mymaster</code>：主节点名称，自定义，任意写</li><li><code>192.168.150.101 7001</code>：主节点的ip和端口</li><li><code>2</code>：选举master时的quorum值</li></ul></li></ul><p>然后将s1/sentinel.conf文件拷贝到s2、s3两个目录中（在/tmp目录执行下列命令）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式一：逐个拷贝</span>
<span class="token function">cp</span> s1/sentinel.conf s2
<span class="token function">cp</span> s1/sentinel.conf s3
<span class="token comment"># 方式二：管道组合命令，一键拷贝</span>
<span class="token builtin class-name">echo</span> s2 s3 <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token function">cp</span> s1/sentinel.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改s2、s3两个文件夹内的配置文件，将端口分别修改为27002、27003：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/27001/27002/g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/s1/s2/g&#39;</span> s2/sentinel.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/27001/27003/g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/s1/s3/g&#39;</span> s3/sentinel.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-启动" tabindex="-1"><a class="header-anchor" href="#_3-3-启动" aria-hidden="true">#</a> 3.3.启动</h2><p>为了方便查看日志，我们打开3个ssh窗口，分别启动3个redis实例，启动命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第1个</span>
redis-sentinel s1/sentinel.conf
<span class="token comment"># 第2个</span>
redis-sentinel s2/sentinel.conf
<span class="token comment"># 第3个</span>
redis-sentinel s3/sentinel.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动后：</p><figure><img src="`+f+'" alt="image-20210701220714104" tabindex="0" loading="lazy"><figcaption>image-20210701220714104</figcaption></figure><h2 id="_3-4-测试" tabindex="-1"><a class="header-anchor" href="#_3-4-测试" aria-hidden="true">#</a> 3.4.测试</h2><p>尝试让master节点7001宕机，查看sentinel日志：</p><figure><img src="'+x+'" alt="image-20210701222857997" tabindex="0" loading="lazy"><figcaption>image-20210701222857997</figcaption></figure><p>查看7003的日志：</p><figure><img src="'+_+'" alt="image-20210701223025709" tabindex="0" loading="lazy"><figcaption>image-20210701223025709</figcaption></figure><p>查看7002的日志：</p><figure><img src="'+y+'" alt="image-20210701223131264" tabindex="0" loading="lazy"><figcaption>image-20210701223131264</figcaption></figure><h1 id="_4-搭建分片集群" tabindex="-1"><a class="header-anchor" href="#_4-搭建分片集群" aria-hidden="true">#</a> 4.搭建分片集群</h1><h2 id="_4-1-集群结构" tabindex="-1"><a class="header-anchor" href="#_4-1-集群结构" aria-hidden="true">#</a> 4.1.集群结构</h2><p>分片集群需要的节点数量较多，这里我们搭建一个最小的分片集群，包含3个master节点，每个master包含一个slave节点，结构如下：</p><figure><img src="'+z+`" alt="image-20210702164116027" tabindex="0" loading="lazy"><figcaption>image-20210702164116027</figcaption></figure><p>这里我们会在同一台虚拟机中开启6个redis实例，模拟分片集群，信息如下：</p><table><thead><tr><th style="text-align:center;">IP</th><th style="text-align:center;">PORT</th><th style="text-align:center;">角色</th></tr></thead><tbody><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">7001</td><td style="text-align:center;">master</td></tr><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">7002</td><td style="text-align:center;">master</td></tr><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">7003</td><td style="text-align:center;">master</td></tr><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">8001</td><td style="text-align:center;">slave</td></tr><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">8002</td><td style="text-align:center;">slave</td></tr><tr><td style="text-align:center;">192.168.150.101</td><td style="text-align:center;">8003</td><td style="text-align:center;">slave</td></tr></tbody></table><h2 id="_4-2-准备实例和配置" tabindex="-1"><a class="header-anchor" href="#_4-2-准备实例和配置" aria-hidden="true">#</a> 4.2.准备实例和配置</h2><p>删除之前的7001、7002、7003这几个目录，重新创建出7001、7002、7003、8001、8002、8003目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入/tmp目录</span>
<span class="token builtin class-name">cd</span> /tmp
<span class="token comment"># 删除旧的，避免配置干扰</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span>
<span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token number">8001</span> <span class="token number">8002</span> <span class="token number">8003</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在/tmp下准备一个新的redis.conf文件，内容如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>port 6379
<span class="token comment"># 开启集群功能</span>
cluster-enabled yes
<span class="token comment"># 集群的配置文件名称，不需要我们创建，由redis自己维护</span>
cluster-config-file /tmp/6379/nodes.conf
<span class="token comment"># 节点心跳失败的超时时间</span>
cluster-node-timeout 5000
<span class="token comment"># 持久化文件存放目录</span>
dir /tmp/6379
<span class="token comment"># 绑定地址</span>
bind 0.0.0.0
<span class="token comment"># 让redis后台运行</span>
daemonize yes
<span class="token comment"># 注册的实例ip</span>
replica-announce-ip 192.168.150.101
<span class="token comment"># 保护模式</span>
protected-mode no
<span class="token comment"># 数据库数量</span>
databases 1
<span class="token comment"># 日志</span>
logfile /tmp/6379/run.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将这个文件拷贝到每个目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入/tmp目录</span>
<span class="token builtin class-name">cd</span> /tmp
<span class="token comment"># 执行拷贝</span>
<span class="token builtin class-name">echo</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token number">8001</span> <span class="token number">8002</span> <span class="token number">8003</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token function">cp</span> redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改每个目录下的redis.conf，将其中的6379修改为与所在目录一致：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入/tmp目录</span>
<span class="token builtin class-name">cd</span> /tmp
<span class="token comment"># 修改配置文件</span>
<span class="token builtin class-name">printf</span> <span class="token string">&#39;%s\\n&#39;</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token number">8001</span> <span class="token number">8002</span> <span class="token number">8003</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token parameter variable">-t</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/6379/{}/g&#39;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-启动" tabindex="-1"><a class="header-anchor" href="#_4-3-启动" aria-hidden="true">#</a> 4.3.启动</h2><p>因为已经配置了后台启动模式，所以可以直接启动服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入/tmp目录</span>
<span class="token builtin class-name">cd</span> /tmp
<span class="token comment"># 一键启动所有服务</span>
<span class="token builtin class-name">printf</span> <span class="token string">&#39;%s\\n&#39;</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token number">8001</span> <span class="token number">8002</span> <span class="token number">8003</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token parameter variable">-t</span> redis-server <span class="token punctuation">{</span><span class="token punctuation">}</span>/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过ps查看状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现服务都已经正常启动：</p><figure><img src="`+R+`" alt="image-20210702174255799" tabindex="0" loading="lazy"><figcaption>image-20210702174255799</figcaption></figure><p>如果要关闭所有进程，可以执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> redis <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者（推荐这种方式）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">printf</span> <span class="token string">&#39;%s\\n&#39;</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token number">8001</span> <span class="token number">8002</span> <span class="token number">8003</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token parameter variable">-t</span> redis-cli <span class="token parameter variable">-p</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-4-创建集群" tabindex="-1"><a class="header-anchor" href="#_4-4-创建集群" aria-hidden="true">#</a> 4.4.创建集群</h2><p>虽然服务启动了，但是目前每个服务之间都是独立的，没有任何关联。</p><p>我们需要执行命令来创建集群，在Redis5.0之前创建集群比较麻烦，5.0之后集群管理命令都集成到了redis-cli中。</p><p>1）Redis5.0之前</p><p>Redis5.0之前集群命令都是用redis安装包下的src/redis-trib.rb来实现的。因为redis-trib.rb是有ruby语言编写的所以需要安装ruby环境。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> zlib ruby rubygems
gem <span class="token function">install</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过命令来管理集群：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入redis的src目录</span>
<span class="token builtin class-name">cd</span> /tmp/redis-6.2.4/src
<span class="token comment"># 创建集群</span>
./redis-trib.rb create <span class="token parameter variable">--replicas</span> <span class="token number">1</span> <span class="token number">192.168</span>.150.101:7001 <span class="token number">192.168</span>.150.101:7002 <span class="token number">192.168</span>.150.101:7003 <span class="token number">192.168</span>.150.101:8001 <span class="token number">192.168</span>.150.101:8002 <span class="token number">192.168</span>.150.101:8003
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）Redis5.0以后</p><p>我们使用的是Redis6.2.4版本，集群管理以及集成到了redis-cli中，格式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> create --cluster-replicas <span class="token number">1</span> <span class="token number">192.168</span>.150.101:7001 <span class="token number">192.168</span>.150.101:7002 <span class="token number">192.168</span>.150.101:7003 <span class="token number">192.168</span>.150.101:8001 <span class="token number">192.168</span>.150.101:8002 <span class="token number">192.168</span>.150.101:8003
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令说明：</p><ul><li><code>redis-cli --cluster</code>或者<code>./redis-trib.rb</code>：代表集群操作命令</li><li><code>create</code>：代表是创建集群</li><li><code>--replicas 1</code>或者<code>--cluster-replicas 1</code> ：指定集群中每个master的副本个数为1，此时<code>节点总数 ÷ (replicas + 1)</code> 得到的就是master的数量。因此节点列表中的前n个就是master，其它节点都是slave节点，随机分配到不同master</li></ul><p>运行后的样子：</p><figure><img src="`+I+'" alt="image-20210702181101969" tabindex="0" loading="lazy"><figcaption>image-20210702181101969</figcaption></figure><p>这里输入yes，则集群开始创建：</p><figure><img src="'+P+`" alt="image-20210702181215705" tabindex="0" loading="lazy"><figcaption>image-20210702181215705</figcaption></figure><p>通过命令可以查看集群状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-p</span> <span class="token number">7001</span> cluster nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+w+`" alt="image-20210702181922809" tabindex="0" loading="lazy"><figcaption>image-20210702181922809</figcaption></figure><h2 id="_4-5-测试" tabindex="-1"><a class="header-anchor" href="#_4-5-测试" aria-hidden="true">#</a> 4.5.测试</h2><p>尝试连接7001节点，存储一个数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 连接</span>
redis-cli <span class="token parameter variable">-p</span> <span class="token number">7001</span>
<span class="token comment"># 存储数据</span>
<span class="token builtin class-name">set</span> num <span class="token number">123</span>
<span class="token comment"># 读取数据</span>
get num
<span class="token comment"># 再次存储</span>
<span class="token builtin class-name">set</span> a <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果悲剧了：</p><figure><img src="`+O+`" alt="image-20210702182343979" tabindex="0" loading="lazy"><figcaption>image-20210702182343979</figcaption></figure><p>集群操作时，需要给<code>redis-cli</code>加上<code>-c</code>参数才可以：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">7001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这次可以了：</p><figure><img src="`+q+'" alt="image-20210702182602145" tabindex="0" loading="lazy"><figcaption>image-20210702182602145</figcaption></figure>',100);function V(C,S){const e=t("font");return l(),p("div",null,[N,s("p",null,[s("strong",null,[r(e,{color:"red"},{default:c(()=>[n("注意")]),_:1})]),n("：在5.0以后新增命令replicaof，与salveof效果一致。")]),T])}const F=i(B,[["render",V],["__file","Redis集群.html.vue"]]);export{F as default};
