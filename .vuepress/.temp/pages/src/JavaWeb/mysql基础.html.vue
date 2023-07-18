<template><div><p>_</p>
<h1 id="mysql基础" tabindex="-1"><a class="header-anchor" href="#mysql基础" aria-hidden="true">#</a> MySQL基础</h1>
<h2 id="_1-数据库相关概念" tabindex="-1"><a class="header-anchor" href="#_1-数据库相关概念" aria-hidden="true">#</a> 1，数据库相关概念</h2>
<p>以前我们做系统，数据持久化的存储采用的是文件存储。存储到文件中可以达到系统关闭数据不会丢失的效果，当然文件存储也有它的弊端。</p>
<p>假设在文件中存储以下的数据：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>姓名	年龄	性别	住址
张三	23	男	北京西三旗
李四	24	女	北京西二旗
王五	25	男	西安软件新城
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现要修改李四这条数据的性别数据改为男，我们现学习的IO技术可以通过将所有的数据读取到内存中，然后进行修改再存到该文件中。通过这种方式操作存在很大问题，现在只有三条数据，如果文件中存储1T的数据，那么就会发现内存根本就存储不了。</p>
<p>现需要既能持久化存储数据，也要能避免上述问题的技术使用在我们的系统中。数据库就是这样的一门技术。</p>
<h3 id="_1-1-数据库" tabindex="-1"><a class="header-anchor" href="#_1-1-数据库" aria-hidden="true">#</a> 1.1  数据库</h3>
<ul>
<li>
<p><mark>存储和管理数据的仓库，数据是有组织的进行存储。</mark></p>
</li>
<li>
<p>数据库英文名是 DataBase，简称DB。</p>
</li>
</ul>
<p>数据库就是将数据存储在硬盘上，可以达到持久化存储的效果。那又是如何解决上述问题的？使用数据库管理系统。</p>
<h3 id="_1-2-数据库管理系统" tabindex="-1"><a class="header-anchor" href="#_1-2-数据库管理系统" aria-hidden="true">#</a> 1.2  数据库管理系统</h3>
<ul>
<li><mark>管理数据库的大型软件</mark></li>
<li>英文：DataBase Management System，简称 DBMS</li>
</ul>
<p>在电脑上安装了数据库管理系统后，就可以通过数据库管理系统创建数据库来存储数据，也可以通过该系统对数据库中的数据进行数据的增删改查相关的操作。我们平时说的MySQL数据库其实是MySQL数据库管理系统。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721185923635.png" alt="image-20210721185923635" tabindex="0" loading="lazy"><figcaption>image-20210721185923635</figcaption></figure>
<p>通过上面的描述，大家应该已经知道了 <code v-pre>数据库管理系统</code> 和 <code v-pre>数据库</code> 的关系。那么有有哪些常见的数据库管理系统呢？</p>
<h3 id="_1-3-常见的数据库管理系统" tabindex="-1"><a class="header-anchor" href="#_1-3-常见的数据库管理系统" aria-hidden="true">#</a> 1.3  常见的数据库管理系统</h3>
<figure><img src="@source/src/JavaWeb/assets/image-20210721184354001.png" alt="image-20210721184354001" tabindex="0" loading="lazy"><figcaption>image-20210721184354001</figcaption></figure>
<p>接下来对上面列举的数据库管理系统进行简单的介绍：</p>
<ul>
<li>Oracle：收费的大型数据库，Oracle 公司的产品</li>
<li><mark>MySQL</mark>： 开源免费的中小型数据库。后来 Sun公司收购了 MySQL，而 Sun 公司又被 Oracle 收购</li>
<li>SQL Server：MicroSoft 公司收费的中型的数据库。C#、.net 等语言常使用</li>
<li>PostgreSQL：开源免费中小型的数据库</li>
<li>DB2：IBM 公司的大型收费数据库产品</li>
<li>SQLite：嵌入式的微型数据库。如：作为 Android 内置数据库</li>
<li>MariaDB：开源免费中小型的数据库</li>
</ul>
<p>我们上学习的是MySQL数据库管理系统，PostgreSQL在一些公司也有使用，此时大家肯定会想以后在公司中如果使用我们没有学习过程的PostgreSQL数据库管理系统怎么办？这点大家大可不必担心，如下图所示：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721185303106.png" alt="image-20210721185303106" tabindex="0" loading="lazy"><figcaption>image-20210721185303106</figcaption></figure>
<p>我们可以通过数据库管理系统操作数据库，对数据库中的数据进行增删改查操作，而怎么样让用户跟数据库管理系统打交道呢？就可以通过一门编程语言（SQL）来实现。</p>
<h3 id="_1-4-sql" tabindex="-1"><a class="header-anchor" href="#_1-4-sql" aria-hidden="true">#</a> 1.4  SQL</h3>
<ul>
<li>英文：Structured Query Language，简称 SQL，结构化查询语言</li>
<li>操作关系型数据库的编程语言</li>
<li>定义操作所有关系型数据库的统一标准，可以使用SQL操作所有的关系型数据库管理系统，以后工作中如果使用到了其他的数据库管理系统，也同样的使用SQL来操作。</li>
</ul>
<h2 id="_2-mysql" tabindex="-1"><a class="header-anchor" href="#_2-mysql" aria-hidden="true">#</a> 2，MySQL</h2>
<h3 id="_2-1-mysql安装" tabindex="-1"><a class="header-anchor" href="#_2-1-mysql安装" aria-hidden="true">#</a> 2.1  MySQL安装</h3>
<blockquote>
<p><strong>安装环境:Win10 64位</strong><br>
<strong>软件版本:MySQL 5.7.24 解压版</strong></p>
</blockquote>
<h4 id="_2-1-1-下载" tabindex="-1"><a class="header-anchor" href="#_2-1-1-下载" aria-hidden="true">#</a> 2.1.1  下载</h4>
<p><a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">https://downloads.mysql.com/archives/community/<ExternalLinkIcon/></a></p>
<p>点开上面的链接就能看到如下界面：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210404200055449.png" alt="image-20210404200055449" tabindex="0" loading="lazy"><figcaption>image-20210404200055449</figcaption></figure>
<p>选择选择和自己<strong>系统位数</strong>相对应的版本点击右边的<code v-pre>Download</code>，此时会进到另一个页面，同样在接近页面底部的地方找到如下图所示的位置</p>
<p>不用理会上面的登录和注册按钮，直接点击 <code v-pre>No thanks, just start my download.</code> 就可以下载。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20201109134805641.png" alt="image-20201109134805641" tabindex="0" loading="lazy"><figcaption>image-20201109134805641</figcaption></figure>
<h4 id="_2-1-2-安装-解压" tabindex="-1"><a class="header-anchor" href="#_2-1-2-安装-解压" aria-hidden="true">#</a> 2.1.2  安装(解压)</h4>
<p>下载完成后我们得到的是一个压缩包，将其解压，我们就可以得到MySQL 5.7.24的软件本体了(就是一个文件夹)，我们可以把它放在你想安装的位置。</p>
<hr>
<figure><img src="@source/src/JavaWeb/assets/image-20201109134948046.png" alt="image-20201109134948046" tabindex="0" loading="lazy"><figcaption>image-20201109134948046</figcaption></figure>
<h3 id="_2-2-mysql卸载" tabindex="-1"><a class="header-anchor" href="#_2-2-mysql卸载" aria-hidden="true">#</a> 2.2  MySQL卸载</h3>
<p>如果你想卸载MySQL，也很简单。</p>
<p>右键开始菜单，选择<code v-pre>命令提示符(管理员)</code>，打开黑框。</p>
<ol>
<li>敲入<code v-pre>net stop mysql</code>，回车。</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>net stop mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/src/JavaWeb/assets/1556823-20181220222924783-57600848.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ol start="2">
<li>再敲入<code v-pre>mysqld -remove mysql</code>，回车。</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysqld -remove mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/src/JavaWeb/assets/1556823-20181220223025128-587235464.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ol start="3">
<li>最后删除MySQL目录及相关的环境变量。</li>
</ol>
<p><strong>至此，MySQL卸载完成！</strong></p>
<h3 id="_2-3-mysql配置" tabindex="-1"><a class="header-anchor" href="#_2-3-mysql配置" aria-hidden="true">#</a> 2.3  MySQL配置</h3>
<h4 id="_2-3-1-添加环境变量" tabindex="-1"><a class="header-anchor" href="#_2-3-1-添加环境变量" aria-hidden="true">#</a> 2.3.1  添加环境变量</h4>
<blockquote>
<p>环境变量里面有很多选项，这里我们只用到<code v-pre>Path</code>这个参数。为什么在初始化的开始要添加环境变量呢？<br>
在黑框(即CMD)中输入一个可执行程序的名字，Windows会先在环境变量中的<code v-pre>Path</code>所指的路径中寻找一遍，如果找到了就直接执行，没找到就在当前工作目录找，如果还没找到，就报错。我们添加环境变量的目的就是能够在任意一个黑框直接调用MySQL中的相关程序而不用总是修改工作目录，大大简化了操作。</p>
</blockquote>
<p>右键<code v-pre>此电脑</code>→<code v-pre>属性</code>，点击<code v-pre>高级系统设置</code></p>
<figure><img src="@source/src/JavaWeb/assets/1556823-20181220220242472-524708778.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>点击<code v-pre>环境变量</code></p>
<figure><img src="@source/src/JavaWeb/assets/1556823-20181220220359609-736422950.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>在<code v-pre>系统变量</code>中新建MYSQL_HOME</p>
<figure><img src="@source/src/JavaWeb/assets/image-20201109140222488.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>在<code v-pre>系统变量</code>中找到并<strong>双击</strong><code v-pre>Path</code><br>
<img src="@source/src/JavaWeb/assets/1556823-20181220220551145-1198958872.png" alt="img" loading="lazy"></p>
<p>点击<code v-pre>新建</code></p>
<figure><img src="@source/src/JavaWeb/assets/image-20201109135248104.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>最后点击确定。</p>
<p><strong>如何验证是否添加成功？</strong></p>
<p>右键开始菜单(就是屏幕左下角)，选择<code v-pre>命令提示符(管理员)</code>，打开黑框，敲入<code v-pre>mysql</code>，回车。<br>
如果提示<code v-pre>Can't connect to MySQL server on 'localhost'</code>则证明添加成功；<br>
如果提示<code v-pre>mysql不是内部或外部命令，也不是可运行的程序或批处理文件</code>则表示添加添加失败，请重新检查步骤并重试。</p>
<h4 id="_2-3-2-新建配置文件" tabindex="-1"><a class="header-anchor" href="#_2-3-2-新建配置文件" aria-hidden="true">#</a> 2.3.2  新建配置文件</h4>
<p>新建一个文本文件，内容如下：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code>[mysql]
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

[mysqld]
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token key attr-name">default-storage-engine</span><span class="token punctuation">=</span><span class="token value attr-value">INNODB</span>
<span class="token key attr-name">sql_mode</span><span class="token punctuation">=</span><span class="token value attr-value">STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把上面的文本文件另存为，在保存类型里选<code v-pre>所有文件 (*.*)</code>，文件名叫<code v-pre>my.ini</code>，存放的路径为MySQL的<code v-pre>根目录</code>(例如我的是<code v-pre>D:\software\mysql-5.7.24-winx64</code>,根据自己的MySQL目录位置修改)。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20201109142704951.png" alt="image-20201109142704951" tabindex="0" loading="lazy"><figcaption>image-20201109142704951</figcaption></figure>
<figure><img src="@source/src/JavaWeb/assets/image-20201109142737584.png" alt="image-20201109142737584" tabindex="0" loading="lazy"><figcaption>image-20201109142737584</figcaption></figure>
<p>上面代码意思就是配置数据库的默认编码集为utf-8和默认存储引擎为INNODB。</p>
<h4 id="_2-3-3-初始化mysql" tabindex="-1"><a class="header-anchor" href="#_2-3-3-初始化mysql" aria-hidden="true">#</a> 2.3.3  初始化MySQL</h4>
<p>在刚才的黑框中敲入<code v-pre>mysqld --initialize-insecure</code>，回车，稍微等待一会，如果出现没有出现报错信息(如下图)则证明data目录初始化没有问题，此时再查看MySQL目录下已经有data目录生成。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysqld --initialize-insecure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/src/JavaWeb/assets/image-20201109140955772.png" alt="image-20201109140955772" tabindex="0" loading="lazy"><figcaption>image-20201109140955772</figcaption></figure>
<p>tips：如果出现如下错误</p>
<figure><img src="@source/src/JavaWeb/assets/image-20201109135848054.png" alt="image-20201109135848054" tabindex="0" loading="lazy"><figcaption>image-20201109135848054</figcaption></figure>
<p>是由于权限不足导致的，去<code v-pre>C:\Windows\System32</code> 下以管理员方式运行 cmd.exe</p>
<figure><img src="@source/src/JavaWeb/assets/image-20201109140423691.png" alt="image-20201109140423691" tabindex="0" loading="lazy"><figcaption>image-20201109140423691</figcaption></figure>
<figure><img src="@source/src/JavaWeb/assets/image-20201109140001186.png" alt="image-20201109140001186" tabindex="0" loading="lazy"><figcaption>image-20201109140001186</figcaption></figure>
<h4 id="_2-3-4-注册mysql服务" tabindex="-1"><a class="header-anchor" href="#_2-3-4-注册mysql服务" aria-hidden="true">#</a> 2.3.4  注册MySQL服务</h4>
<p>在黑框里敲入<code v-pre>mysqld -install</code>，回车。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysqld -install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/src/JavaWeb/assets/image-20201109141325810.png" alt="image-20201109141325810" tabindex="0" loading="lazy"><figcaption>image-20201109141325810</figcaption></figure>
<p>现在你的计算机上已经安装好了MySQL服务了。</p>
<p>MySQL服务器</p>
<h4 id="_2-3-5-启动mysql服务" tabindex="-1"><a class="header-anchor" href="#_2-3-5-启动mysql服务" aria-hidden="true">#</a> 2.3.5  启动MySQL服务</h4>
<p>在黑框里敲入<code v-pre>net start mysql</code>，回车。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>net start mysql  <span class="token comment">// 启动mysql服务</span>

net stop mysql  <span class="token comment">// 停止mysql服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/src/JavaWeb/assets/1556823-20181221093036851-1317238155.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h4 id="_2-3-6-修改默认账户密码" tabindex="-1"><a class="header-anchor" href="#_2-3-6-修改默认账户密码" aria-hidden="true">#</a> 2.3.6  修改默认账户密码</h4>
<p>在黑框里敲入<code v-pre>mysqladmin -u root password 1234</code>，这里的<code v-pre>1234</code>就是指默认管理员(即root账户)的密码，可以自行修改成你喜欢的。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysqladmin -u root password 1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/src/JavaWeb/assets/1556823-20181221093251250-819416425.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>至此，MySQL 5.7 解压版安装完毕！</strong></p>
<h3 id="_2-4-mysql登陆和退出" tabindex="-1"><a class="header-anchor" href="#_2-4-mysql登陆和退出" aria-hidden="true">#</a> 2.4  MySQL登陆和退出</h3>
<h4 id="_2-4-1-登陆" tabindex="-1"><a class="header-anchor" href="#_2-4-1-登陆" aria-hidden="true">#</a> 2.4.1  登陆</h4>
<p>右键开始菜单，选择<code v-pre>命令提示符</code>，打开黑框。<br>
在黑框中输入，<code v-pre>mysql -uroot -p1234</code>，回车，出现下图且左下角为<code v-pre>mysql&gt;</code>，则登录成功。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysql -uroot -p1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/src/JavaWeb/assets/1556823-20181220222422178-61579658.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>到这里你就可以开始你的MySQL之旅了！</strong></p>
<p>登陆参数：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysql -u用户名 -p密码 -h要连接的mysql服务器的ip地址(默认127.0.0.1) -P端口号(默认3306)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-4-2-退出" tabindex="-1"><a class="header-anchor" href="#_2-4-2-退出" aria-hidden="true">#</a> 2.4.2  退出</h4>
<p>退出mysql：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>exit
quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-mysql数据模型" tabindex="-1"><a class="header-anchor" href="#_2-5-mysql数据模型" aria-hidden="true">#</a> 2.5  MySQL数据模型</h3>
<p><strong>关系型数据库：</strong></p>
<blockquote>
<p>关系型数据库是建立在关系模型基础上的数据库，简单说，关系型数据库是由多张能互相连接的 二维表 组成的数据库</p>
</blockquote>
<p>如下图，<code v-pre>订单信息表</code> 和 <code v-pre>客户信息表</code> 都是有行有列二维表我们将这样的称为关系型数据库。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721205130231.png" alt="image-20210721205130231" tabindex="0" loading="lazy"><figcaption>image-20210721205130231</figcaption></figure>
<p>接下来看关系型数据库的优点：</p>
<ul>
<li>都是使用表结构，格式一致，易于维护。</li>
<li>使用通用的 SQL 语言操作，使用方便，可用于复杂查询。
<ul>
<li>关系型数据库都可以通过SQL进行操作，所以使用方便。</li>
<li>复杂查询。现在需要查询001号订单数据，我们可以看到该订单是1号客户的订单，而1号订单是李聪这个客户。以后也可以在一张表中进行统计分析等操作。</li>
</ul>
</li>
<li>数据存储在磁盘中，安全。</li>
</ul>
<p><strong>数据模型：</strong></p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721212754568.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>如上图，我们通过客户端可以通过数据库管理系统创建数据库，在数据库中创建表，在表中添加数据。创建的每一个数据库对应到磁盘上都是一个文件夹。比如可以通过SQL语句创建一个数据库（数据库名称为db1），语句如下。该语句咱们后面会学习。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721213349761.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>我们可以在数据库安装目录下的data目录下看到多了一个 <code v-pre>db1</code> 的文件夹。所以，<strong>在MySQL中一个数据库对应到磁盘上的一个文件夹。</strong></p>
<p>而一个数据库下可以创建多张表，我们到MySQL中自带的mysql数据库的文件夹目录下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721214029913.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>而上图中右边的 <code v-pre>db.frm</code> 是表文件，<code v-pre>db.MYD</code> 是数据文件，通过这两个文件就可以查询到数据展示成二维表的效果。</p>
<p><strong>小结：</strong></p>
<ul>
<li>MySQL中可以创建多个数据库，每个数据库对应到磁盘上的一个文件夹</li>
<li>在每个数据库中可以创建多个表，每张都对应到磁盘上一个 frm 文件</li>
<li>每张表可以存储多条数据，数据会被存储到磁盘中  MYD 文件中</li>
</ul>
<h2 id="_3-sql概述" tabindex="-1"><a class="header-anchor" href="#_3-sql概述" aria-hidden="true">#</a> 3，SQL概述</h2>
<p>了解了数据模型后，接下来我们就学习SQL语句，通过SQL语句对数据库、表、数据进行增删改查操作。</p>
<h3 id="_3-1-sql简介" tabindex="-1"><a class="header-anchor" href="#_3-1-sql简介" aria-hidden="true">#</a> 3.1  SQL简介</h3>
<ul>
<li>英文：Structured Query Language，简称 SQL</li>
<li>结构化查询语言，一门操作关系型数据库的编程语言</li>
<li>定义操作所有关系型数据库的统一标准</li>
<li>对于同一个需求，每一种数据库操作的方式可能会存在一些不一样的地方，我们称为“方言”</li>
</ul>
<h3 id="_3-2-通用语法" tabindex="-1"><a class="header-anchor" href="#_3-2-通用语法" aria-hidden="true">#</a> 3.2  通用语法</h3>
<ul>
<li>
<p>SQL 语句可以单行或多行书写，以分号结尾。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721215223872.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>如上，以分号结尾才是一个完整的sql语句。</p>
</li>
<li>
<p>MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。</p>
<p>同样的一条sql语句写成下图的样子，一样可以运行处结果。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721215328410.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>注释</p>
<ul>
<li>
<p>单行注释: -- 注释内容 或 #注释内容(MySQL 特有)</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721215517293.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/src/JavaWeb/assets/image-20210721215556885.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<blockquote>
<p>注意：使用-- 添加单行注释时，--后面一定要加空格，而#没有要求。</p>
</blockquote>
</li>
<li>
<p>多行注释: /* 注释 */</p>
</li>
</ul>
</li>
</ul>
<h3 id="_3-3-sql分类" tabindex="-1"><a class="header-anchor" href="#_3-3-sql分类" aria-hidden="true">#</a> 3.3  SQL分类</h3>
<ul>
<li>
<p>DDL(Data Definition Language) ： 数据定义语言，用来定义数据库对象：数据库，表，列等</p>
<p>DDL简单理解就是用来操作数据库，表等</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721220032047.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>DML(Data Manipulation Language) 数据操作语言，用来对数据库中表的数据进行增删改</p>
<p>DML简单理解就对表中数据进行增删改</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721220132919.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>DQL(Data Query Language) 数据查询语言，用来查询数据库中表的记录(数据)</p>
<p>DQL简单理解就是对数据进行查询操作。从数据库表中查询到我们想要的数据。</p>
</li>
<li>
<p>DCL(Data Control Language) 数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户</p>
<p>DML简单理解就是对数据库进行权限控制。比如我让某一个数据库表只能让某一个用户进行操作等。</p>
</li>
</ul>
<blockquote>
<p>注意： 以后我们最常操作的是 <code v-pre>DML</code> 和 <code v-pre>DQL</code>  ，因为我们开发中最常操作的就是数据。</p>
</blockquote>
<h2 id="_4-ddl-操作数据库" tabindex="-1"><a class="header-anchor" href="#_4-ddl-操作数据库" aria-hidden="true">#</a> 4，DDL:操作数据库</h2>
<p>我们先来学习DDL来操作数据库。而操作数据库主要就是对数据库的增删查操作。</p>
<h3 id="_4-1-查询" tabindex="-1"><a class="header-anchor" href="#_4-1-查询" aria-hidden="true">#</a> 4.1  查询</h3>
<p>查询所有的数据库</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行上面语句效果如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721221107014.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>上述查询到的是的这些数据库是mysql安装好自带的数据库，我们以后不要操作这些数据库。</p>
<h3 id="_4-2-创建数据库" tabindex="-1"><a class="header-anchor" href="#_4-2-创建数据库" aria-hidden="true">#</a> 4.2  创建数据库</h3>
<ul>
<li><strong>创建数据库</strong>：</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721223450755.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>而在创建数据库的时候，我并不知道db1数据库有没有创建，直接再次创建名为db1的数据库就会出现错误。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721223745490.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>为了避免上面的错误，在创建数据库的时候先做判断，如果不存在再创建。</p>
<ul>
<li><strong>创建数据库(判断，如果不存在则创建)</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721224056476.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>从上面的效果可以看到虽然db1数据库已经存在，再创建db1也没有报错，而创建db2数据库则创建成功。</p>
<h3 id="_4-3-删除数据库" tabindex="-1"><a class="header-anchor" href="#_4-3-删除数据库" aria-hidden="true">#</a> 4.3  删除数据库</h3>
<ul>
<li><strong>删除数据库</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>删除数据库(判断，如果存在则删除)</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721224435251.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_4-4-使用数据库" tabindex="-1"><a class="header-anchor" href="#_4-4-使用数据库" aria-hidden="true">#</a> 4.4  使用数据库</h3>
<p>数据库创建好了，要在数据库中创建表，得先明确在哪儿个数据库中操作，此时就需要使用数据库。</p>
<ul>
<li><strong>使用数据库</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">USE</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>查看当前使用的数据库</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721224720841.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="_5-ddl-操作表" tabindex="-1"><a class="header-anchor" href="#_5-ddl-操作表" aria-hidden="true">#</a> 5，DDL:操作表</h2>
<p>操作表也就是对表进行增（Create）删（Retrieve）改（Update）查（Delete）。</p>
<h3 id="_5-1-查询表" tabindex="-1"><a class="header-anchor" href="#_5-1-查询表" aria-hidden="true">#</a> 5.1  查询表</h3>
<ul>
<li><strong>查询当前数据库下所有表名称</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们创建的数据库中没有任何表，因此我们进入mysql自带的mysql数据库，执行上述语句查看</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721230202814.png" alt="image-20210721230202814" tabindex="0" loading="lazy"><figcaption>image-20210721230202814</figcaption></figure>
<ul>
<li><strong>查询表结构</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DESC</span> 表名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看mysql数据库中func表的结构，运行语句如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721230332428.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_5-2-创建表" tabindex="-1"><a class="header-anchor" href="#_5-2-创建表" aria-hidden="true">#</a> 5.2  创建表</h3>
<ul>
<li><strong>创建表</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 <span class="token punctuation">(</span>
	字段名<span class="token number">1</span>  数据类型<span class="token number">1</span><span class="token punctuation">,</span>
	字段名<span class="token number">2</span>  数据类型<span class="token number">2</span><span class="token punctuation">,</span>
	…
	字段名n  数据类型n
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：最后一行末尾，不能加逗号</p>
</blockquote>
<p>知道了创建表的语句，那么我们创建创建如下结构的表</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721230824097.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> tb_user <span class="token punctuation">(</span>
	id <span class="token keyword">int</span><span class="token punctuation">,</span>
    username <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行语句如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721231142326.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_5-3-数据类型" tabindex="-1"><a class="header-anchor" href="#_5-3-数据类型" aria-hidden="true">#</a> 5.3  数据类型</h3>
<p>MySQL 支持多种类型，可以分为三类：</p>
<ul>
<li>
<p>数值</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">tinyint</span> : 小整数型，占一个字节
<span class="token keyword">int</span>	： 大整数类型，占四个字节
	eg ： age <span class="token keyword">int</span>
<span class="token keyword">double</span> ： 浮点类型
	使用格式： 字段名 <span class="token keyword">double</span><span class="token punctuation">(</span>总长度<span class="token punctuation">,</span>小数点后保留的位数<span class="token punctuation">)</span>
	eg ： score <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>日期</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">date</span> ： 日期值。只包含年月日
	eg ：birthday <span class="token keyword">date</span> ：
<span class="token keyword">datetime</span> ： 混合日期和时间值。包含年月日时分秒
<span class="token keyword">timestamp</span>：时间戳，有默认值，当前时间。不推荐使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>字符串</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">char</span> ： 定长字符串。
	优点：存储性能高
	缺点：浪费空间
	eg ： name <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  如果存储的数据字符个数不足<span class="token number">10</span>个，也会占<span class="token number">10</span>个的空间
<span class="token keyword">varchar</span> ： 变长字符串。
	优点：节约空间
	缺点：存储性能底
	eg ： name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> 如果存储的数据字符个数不足<span class="token number">10</span>个，那就数据字符个数是几就占几个的空间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>注意：其他类型参考资料中的《MySQL数据类型].xlsx》</p>
</blockquote>
<p><strong>案例：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>需求：设计一张学生表，请注重数据类型、长度的合理性
	1. 编号
	2. 姓名，姓名最长不超过10个汉字
	3. 性别，因为取值只有两种可能，因此最多一个汉字
	4. 生日，取值为年月日
	5. 入学成绩，小数点后保留两位
	6. 邮件地址，最大长度不超过 64
	7. 家庭联系电话，不一定是手机号码，可能会出现 - 等字符
	8. 学生状态（用数字表示，正常、休学、毕业...）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语句设计如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> student <span class="token punctuation">(</span>
	id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    gender <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    birthday <span class="token keyword">date</span><span class="token punctuation">,</span>
    score <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    email <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    tel <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">status</span> <span class="token keyword">tinyint</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-删除表" tabindex="-1"><a class="header-anchor" href="#_5-4-删除表" aria-hidden="true">#</a> 5.4  删除表</h3>
<ul>
<li><strong>删除表</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>删除表时判断表是否存在</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721235108267.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_5-5-修改表" tabindex="-1"><a class="header-anchor" href="#_5-5-修改表" aria-hidden="true">#</a> 5.5  修改表</h3>
<ul>
<li><strong>修改表名</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">RENAME</span> <span class="token keyword">TO</span> 新的表名<span class="token punctuation">;</span>

<span class="token comment">-- 将表名student修改为stu</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">rename</span> <span class="token keyword">to</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>添加一列</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ADD</span> 列名 数据类型<span class="token punctuation">;</span>

<span class="token comment">-- 给stu表添加一列address，该字段类型是varchar(50)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> stu <span class="token keyword">add</span> address <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>修改数据类型</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">MODIFY</span> 列名 新数据类型<span class="token punctuation">;</span>

<span class="token comment">-- 将stu表中的address字段的类型改为 char(50)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> stu <span class="token keyword">modify</span> address <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>修改列名和数据类型</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 CHANGE 列名 新列名 新数据类型<span class="token punctuation">;</span>

<span class="token comment">-- 将stu表中的address字段名改为 addr，类型改为varchar(50)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> stu change address addr <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>删除列</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">DROP</span> 列名<span class="token punctuation">;</span>

<span class="token comment">-- 将stu表中的addr字段 删除</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> stu <span class="token keyword">drop</span> addr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-navicat使用" tabindex="-1"><a class="header-anchor" href="#_6-navicat使用" aria-hidden="true">#</a> 6，navicat使用</h2>
<p>通过上面的学习，我们发现在命令行中写sql语句特别不方便，尤其是编写创建表的语句，我们只能在记事本上写好后直接复制到命令行进行执行。那么有没有刚好的工具提供给我们进行使用呢？ 有。</p>
<h3 id="_6-1-navicat概述" tabindex="-1"><a class="header-anchor" href="#_6-1-navicat概述" aria-hidden="true">#</a> 6.1  navicat概述</h3>
<ul>
<li>Navicat for MySQL 是管理和开发 MySQL 或 MariaDB 的理想解决方案。</li>
<li>这套全面的前端工具为数据库管理、开发和维护提供了一款直观而强大的图形界面。</li>
<li>官网： <a href="http://www.navicat.com.cn/" target="_blank" rel="noopener noreferrer">http://www.navicat.com.cn<ExternalLinkIcon/></a></li>
</ul>
<h3 id="_6-2-navicat安装" tabindex="-1"><a class="header-anchor" href="#_6-2-navicat安装" aria-hidden="true">#</a> 6.2  navicat安装</h3>
<p>参考 : 资料\navicat安装包\navicat_mysql_x86\navicat安装步骤.md</p>
<h3 id="_6-3-navicat使用" tabindex="-1"><a class="header-anchor" href="#_6-3-navicat使用" aria-hidden="true">#</a> 6.3  navicat使用</h3>
<h4 id="_6-3-1-建立和mysql服务的连接" tabindex="-1"><a class="header-anchor" href="#_6-3-1-建立和mysql服务的连接" aria-hidden="true">#</a> 6.3.1  建立和mysql服务的连接</h4>
<p>第一步： 点击连接，选择MySQL</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210721235928346.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>第二步：填写连接数据库必要的信息</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722000116080.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>以上操作没有问题就会出现如下图所示界面：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722000345349.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h4 id="_6-3-2-操作" tabindex="-1"><a class="header-anchor" href="#_6-3-2-操作" aria-hidden="true">#</a> 6.3.2  操作</h4>
<p>连接成功后就能看到如下图界面：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722000521997.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ul>
<li><strong>修改表结构</strong></li>
</ul>
<p>通过下图操作修改表结构：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722000740661.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>点击了设计表后即出现如下图所示界面，在图中红框中直接修改字段名，类型等信息：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722000929075.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ul>
<li><strong>编写SQL语句并执行</strong></li>
</ul>
<p>按照如下图所示进行操作即可书写SQL语句并执行sql语句。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722001333817.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="_7-dml" tabindex="-1"><a class="header-anchor" href="#_7-dml" aria-hidden="true">#</a> 7，DML</h2>
<p>DML主要是对数据进行增（insert）删（delete）改（update）操作。</p>
<h3 id="_7-1-添加数据" tabindex="-1"><a class="header-anchor" href="#_7-1-添加数据" aria-hidden="true">#</a> 7.1  添加数据</h3>
<ul>
<li><strong>给指定列添加数据</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> 表名<span class="token punctuation">(</span>列名<span class="token number">1</span><span class="token punctuation">,</span>列名<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>给全部列添加数据</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> 表名 <span class="token keyword">VALUES</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>批量添加数据</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> 表名<span class="token punctuation">(</span>列名<span class="token number">1</span><span class="token punctuation">,</span>列名<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span>…<span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> 表名 <span class="token keyword">VALUES</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span>…<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意事项</p>
<ol>
<li>
<p>列的列表和后面值的列表要一一对应（数据类型和顺序都要对应）</p>
</li>
<li>
<p>除了数值类型之外，其余的类型都用引号引起来。不区分单双引</p>
</li>
<li>
<p>批量添加数据会比逐个添加数据的执行效率高很多。</p>
</li>
</ol>
</blockquote>
<ul>
<li><strong>练习</strong></li>
</ul>
<p>为了演示以下的增删改操作是否操作成功，故先将查询所有数据的语句介绍给大家：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 给指定列添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token punctuation">(</span>id<span class="token punctuation">,</span> NAME<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 给所有列添加数据，列名的列表可以省略的</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token punctuation">(</span>id<span class="token punctuation">,</span>NAME<span class="token punctuation">,</span>sex<span class="token punctuation">,</span>birthday<span class="token punctuation">,</span>score<span class="token punctuation">,</span>email<span class="token punctuation">,</span>tel<span class="token punctuation">,</span><span class="token keyword">STATUS</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'1999-11-11'</span><span class="token punctuation">,</span><span class="token number">88.88</span><span class="token punctuation">,</span><span class="token string">'lisi@beisheng.cn'</span><span class="token punctuation">,</span><span class="token string">'13888888888'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'1999-11-11'</span><span class="token punctuation">,</span><span class="token number">88.88</span><span class="token punctuation">,</span><span class="token string">'lisi@beisheng.cn'</span><span class="token punctuation">,</span><span class="token string">'13888888888'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 批量添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token keyword">VALUES</span>
	<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'1999-11-11'</span><span class="token punctuation">,</span><span class="token number">88.88</span><span class="token punctuation">,</span><span class="token string">'lisi@beisheng.cn'</span><span class="token punctuation">,</span><span class="token string">'13888888888'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'1999-11-11'</span><span class="token punctuation">,</span><span class="token number">88.88</span><span class="token punctuation">,</span><span class="token string">'lisi@beisheng.cn'</span><span class="token punctuation">,</span><span class="token string">'13888888888'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'1999-11-11'</span><span class="token punctuation">,</span><span class="token number">88.88</span><span class="token punctuation">,</span><span class="token string">'lisi@beisheng.cn'</span><span class="token punctuation">,</span><span class="token string">'13888888888'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-修改数据" tabindex="-1"><a class="header-anchor" href="#_7-2-修改数据" aria-hidden="true">#</a> 7.2  修改数据</h3>
<ul>
<li><strong>修改表数据</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> 表名 <span class="token keyword">SET</span> 列名<span class="token number">1</span><span class="token operator">=</span>值<span class="token number">1</span><span class="token punctuation">,</span>列名<span class="token number">2</span><span class="token operator">=</span>值<span class="token number">2</span><span class="token punctuation">,</span>… <span class="token punctuation">[</span><span class="token keyword">WHERE</span> 条件<span class="token punctuation">]</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注意：</p>
<ol>
<li>修改语句中如果不加条件，则将所有数据都修改！</li>
<li>像上面的语句中的中括号，表示在写sql语句中可以省略这部分</li>
</ol>
</blockquote>
<ul>
<li>
<p><strong>练习</strong></p>
<ul>
<li>将张三的性别改为女</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">update</span> stu <span class="token keyword">set</span> sex <span class="token operator">=</span> <span class="token string">'女'</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'张三'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>将张三的生日改为 1999-12-12 分数改为99.99</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">update</span> stu <span class="token keyword">set</span> birthday <span class="token operator">=</span> <span class="token string">'1999-12-12'</span><span class="token punctuation">,</span> score <span class="token operator">=</span> <span class="token number">99.99</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'张三'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>注意：如果update语句没有加where条件，则会将表中所有数据全部修改！</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">update</span> stu <span class="token keyword">set</span> sex <span class="token operator">=</span> <span class="token string">'女'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语句的执行完后查询到的结果是：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722204233305.png" alt="image-20210722204233305" tabindex="0" loading="lazy"><figcaption>image-20210722204233305</figcaption></figure>
</li>
</ul>
</li>
</ul>
<h3 id="_7-3-删除数据" tabindex="-1"><a class="header-anchor" href="#_7-3-删除数据" aria-hidden="true">#</a> 7.3  删除数据</h3>
<ul>
<li><strong>删除数据</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> 表名 <span class="token punctuation">[</span><span class="token keyword">WHERE</span> 条件<span class="token punctuation">]</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>练习</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 删除张三记录</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">'张三'</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除stu表中所有的数据</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-dql" tabindex="-1"><a class="header-anchor" href="#_8-dql" aria-hidden="true">#</a> 8，DQL</h2>
<p>下面是展示试题库数据的页面</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722215838144.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>页面上展示的数据肯定是在数据库中的试题库表中进行存储，而我们需要将数据库中的数据查询出来并展示在页面给用户看。上图中的是最基本的查询效果，那么数据库其实是很多的，不可能在将所有的数据在一页进行全部展示，而页面上会有分页展示的效果，如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722220139174.png" alt="image-20210722220139174" tabindex="0" loading="lazy"><figcaption>image-20210722220139174</figcaption></figure>
<p>当然上图中的难度字段当我们点击也可以实现排序查询操作。从这个例子我们就可以看出，对于数据库的查询时灵活多变的，需要根据具体的需求来实现，而数据库查询操作也是最重要的操作，所以此部分需要大家重点掌握。</p>
<p>接下来我们先介绍查询的完整语法：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>
<span class="token keyword">DISTINCT</span>
    字段列表
<span class="token keyword">FROM</span>
    表名列表
<span class="token keyword">WHERE</span>
    条件列表
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
    分组字段
<span class="token keyword">HAVING</span>
    分组后条件
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    排序字段
<span class="token keyword">LIMIT</span>
    分页限定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了给大家演示查询的语句，我们需要先准备表及一些数据：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 删除stu表</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> stu<span class="token punctuation">;</span>


<span class="token comment">-- 创建stu表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu <span class="token punctuation">(</span>
 id <span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token comment">-- 编号</span>
 name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 姓名</span>
 age <span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token comment">-- 年龄</span>
 sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 性别</span>
 address <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 地址</span>
 math <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 数学成绩</span>
 english <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">-- 英语成绩</span>
 hire_date <span class="token keyword">date</span> <span class="token comment">-- 入学时间</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu<span class="token punctuation">(</span>id<span class="token punctuation">,</span>NAME<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">,</span>address<span class="token punctuation">,</span>math<span class="token punctuation">,</span>english<span class="token punctuation">,</span>hire_date<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'马运'</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'杭州'</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token string">'1995-09-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'马花疼'</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token string">'女'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token number">98</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token string">'1998-09-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">'马斯克'</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'香港'</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">77</span><span class="token punctuation">,</span><span class="token string">'1999-09-02'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">'柳白'</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">'女'</span><span class="token punctuation">,</span><span class="token string">'湖南'</span><span class="token punctuation">,</span><span class="token number">76</span><span class="token punctuation">,</span><span class="token number">65</span><span class="token punctuation">,</span><span class="token string">'1997-09-05'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">'柳青'</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'湖南'</span><span class="token punctuation">,</span><span class="token number">86</span><span class="token punctuation">,</span><span class="token boolean">NULL</span><span class="token punctuation">,</span><span class="token string">'1998-09-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">'刘德花'</span><span class="token punctuation">,</span><span class="token number">57</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'香港'</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token string">'1998-09-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">'张学右'</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token string">'女'</span><span class="token punctuation">,</span><span class="token string">'香港'</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token string">'1998-09-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token string">'德玛西亚'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'南京'</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">65</span><span class="token punctuation">,</span><span class="token string">'1994-09-02'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来咱们从最基本的查询语句开始学起。</p>
<h3 id="_8-1-基础查询" tabindex="-1"><a class="header-anchor" href="#_8-1-基础查询" aria-hidden="true">#</a> 8.1  基础查询</h3>
<h4 id="_8-1-1-语法" tabindex="-1"><a class="header-anchor" href="#_8-1-1-语法" aria-hidden="true">#</a> 8.1.1  语法</h4>
<ul>
<li><strong>查询多个字段</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段列表 <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span> <span class="token comment">-- 查询所有数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>去除重复记录</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> 字段列表 <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>起别名</strong></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">AS</span>: <span class="token keyword">AS</span> 也可以省略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-1-2-练习" tabindex="-1"><a class="header-anchor" href="#_8-1-2-练习" aria-hidden="true">#</a> 8.1.2  练习</h4>
<ul>
<li>
<p>查询name、age两列</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> name<span class="token punctuation">,</span>age <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询所有列的数据，列名的列表可以使用*替代</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语句中的*不建议大家使用，因为在这写*不方便我们阅读sql语句。我们写字段列表的话，可以添加注释对每一个字段进行说明</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722221534870.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>查询地址信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> address <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面语句结果如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722221756380.png" alt="image-20210722221756380" tabindex="0" loading="lazy"><figcaption>image-20210722221756380</figcaption></figure>
<p>从上面的结果我们可以看到有重复的数据，我们也可以使用 <code v-pre>distinct</code> 关键字去重重复数据。</p>
</li>
<li>
<p>去除重复记录</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">distinct</span> address <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询姓名、数学成绩、英语成绩。并通过as给math和english起别名（as关键字可以省略）</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> name<span class="token punctuation">,</span>math <span class="token keyword">as</span> 数学成绩<span class="token punctuation">,</span>english <span class="token keyword">as</span> 英文成绩 <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
<span class="token keyword">select</span> name<span class="token punctuation">,</span>math 数学成绩<span class="token punctuation">,</span>english 英文成绩 <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_8-2-条件查询" tabindex="-1"><a class="header-anchor" href="#_8-2-条件查询" aria-hidden="true">#</a> 8.2  条件查询</h3>
<h4 id="_8-2-1-语法" tabindex="-1"><a class="header-anchor" href="#_8-2-1-语法" aria-hidden="true">#</a> 8.2.1  语法</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段列表 <span class="token keyword">FROM</span> 表名 <span class="token keyword">WHERE</span> 条件列表<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>条件</strong></li>
</ul>
<p>条件列表可以使用以下运算符</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722190508272.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h4 id="_8-2-2-条件查询练习" tabindex="-1"><a class="header-anchor" href="#_8-2-2-条件查询练习" aria-hidden="true">#</a> 8.2.2  条件查询练习</h4>
<ul>
<li>
<p>查询年龄大于20岁的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">></span> <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询年龄大于等于20岁的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">>=</span> <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询年龄大于等于20岁 并且 年龄 小于等于 30岁 的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">>=</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span>  age <span class="token operator">&lt;=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">>=</span> <span class="token number">20</span> <span class="token operator">and</span>  age <span class="token operator">&lt;=</span> <span class="token number">30</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>上面语句中 &amp;&amp;  和  and  都表示并且的意思。建议使用 and 。</p>
<p>也可以使用  between ... and 来实现上面需求</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">BETWEEN</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token number">30</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询入学日期在'1998-09-01' 到 '1999-09-01'  之间的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> hire_date <span class="token operator">BETWEEN</span> <span class="token string">'1998-09-01'</span> <span class="token operator">and</span> <span class="token string">'1999-09-01'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询年龄等于18岁的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询年龄不等于18岁的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">!=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">&lt;></span> <span class="token number">18</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查询年龄等于18岁 或者 年龄等于20岁 或者 年龄等于22岁的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">=</span> <span class="token number">18</span> <span class="token operator">or</span> age <span class="token operator">=</span> <span class="token number">20</span> <span class="token operator">or</span> age <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">20</span> <span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查询英语成绩为 null的学员信息</p>
<p>null值的比较不能使用 =  或者 != 。需要使用 is  或者 is not</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> english <span class="token operator">=</span> <span class="token boolean">null</span><span class="token punctuation">;</span> <span class="token comment">-- 这个语句是不行的</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> english <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> english <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_8-2-3-模糊查询练习" tabindex="-1"><a class="header-anchor" href="#_8-2-3-模糊查询练习" aria-hidden="true">#</a> 8.2.3  模糊查询练习</h4>
<blockquote>
<p>模糊查询使用like关键字，可以使用通配符进行占位:</p>
<p>（1）_ : 代表单个任意字符</p>
<p>（2）% : 代表任意个数字符</p>
</blockquote>
<ul>
<li>
<p>查询姓'马'的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">'马%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询第二个字是'花'的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">'_花%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询名字中包含 '德' 的学员信息</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">'%德%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_8-3-排序查询" tabindex="-1"><a class="header-anchor" href="#_8-3-排序查询" aria-hidden="true">#</a> 8.3  排序查询</h3>
<h4 id="_8-3-1-语法" tabindex="-1"><a class="header-anchor" href="#_8-3-1-语法" aria-hidden="true">#</a> 8.3.1  语法</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段列表 <span class="token keyword">FROM</span> 表名 <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 排序字段名<span class="token number">1</span> <span class="token punctuation">[</span>排序方式<span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>排序字段名<span class="token number">2</span> <span class="token punctuation">[</span>排序方式<span class="token number">2</span><span class="token punctuation">]</span> …<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述语句中的排序方式有两种，分别是：</p>
<ul>
<li>ASC ： 升序排列 <strong>（默认值）</strong></li>
<li>DESC ： 降序排列</li>
</ul>
<blockquote>
<p>注意：如果有多个排序条件，当前边的条件值一样时，才会根据第二条件进行排序</p>
</blockquote>
<h4 id="_8-3-2-练习" tabindex="-1"><a class="header-anchor" href="#_8-3-2-练习" aria-hidden="true">#</a> 8.3.2  练习</h4>
<ul>
<li>
<p>查询学生信息，按照年龄升序排列</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询学生信息，按照数学成绩降序排列</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">order</span> <span class="token keyword">by</span> math <span class="token keyword">desc</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询学生信息，按照数学成绩降序排列，如果数学成绩一样，再按照英语成绩升序排列</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">order</span> <span class="token keyword">by</span> math <span class="token keyword">desc</span> <span class="token punctuation">,</span> english <span class="token keyword">asc</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_8-4-聚合函数" tabindex="-1"><a class="header-anchor" href="#_8-4-聚合函数" aria-hidden="true">#</a> 8.4  聚合函数</h3>
<h4 id="_8-4-1-概念" tabindex="-1"><a class="header-anchor" href="#_8-4-1-概念" aria-hidden="true">#</a> 8.4.1  概念</h4>
<p><mark>将一列数据作为一个整体，进行纵向计算。</mark></p>
<p>如何理解呢？假设有如下表</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722194410628.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>现有一需求让我们求表中所有数据的数学成绩的总和。这就是对math字段进行纵向求和。</p>
<h4 id="_8-4-2-聚合函数分类" tabindex="-1"><a class="header-anchor" href="#_8-4-2-聚合函数分类" aria-hidden="true">#</a> 8.4.2  聚合函数分类</h4>
<table>
<thead>
<tr>
<th>函数名</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>count(列名)</td>
<td>统计数量（一般选用不为null的列）</td>
</tr>
<tr>
<td>max(列名)</td>
<td>最大值</td>
</tr>
<tr>
<td>min(列名)</td>
<td>最小值</td>
</tr>
<tr>
<td>sum(列名)</td>
<td>求和</td>
</tr>
<tr>
<td>avg(列名)</td>
<td>平均值</td>
</tr>
</tbody>
</table>
<h4 id="_8-4-3-聚合函数语法" tabindex="-1"><a class="header-anchor" href="#_8-4-3-聚合函数语法" aria-hidden="true">#</a> 8.4.3  聚合函数语法</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 聚合函数名<span class="token punctuation">(</span>列名<span class="token punctuation">)</span> <span class="token keyword">FROM</span> 表<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注意：null 值不参与所有聚合函数运算</p>
</blockquote>
<h4 id="_8-4-4-练习" tabindex="-1"><a class="header-anchor" href="#_8-4-4-练习" aria-hidden="true">#</a> 8.4.4  练习</h4>
<ul>
<li>
<p>统计班级一共有多少个学生</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>english<span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面语句根据某个字段进行统计，如果该字段某一行的值为null的话，将不会被统计。所以可以在count(*) 来实现。* 表示所有字段数据，一行中也不可能所有的数据都为null，所以建议使用 count(*)</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询数学成绩的最高分</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询数学成绩的最低分</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询数学成绩的总分</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询数学成绩的平均分</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询英语成绩的最低分</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>english<span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_8-5-分组查询" tabindex="-1"><a class="header-anchor" href="#_8-5-分组查询" aria-hidden="true">#</a> 8.5  分组查询</h3>
<h4 id="_8-5-1-语法" tabindex="-1"><a class="header-anchor" href="#_8-5-1-语法" aria-hidden="true">#</a> 8.5.1  语法</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段列表 <span class="token keyword">FROM</span> 表名 <span class="token punctuation">[</span><span class="token keyword">WHERE</span> 分组前条件限定<span class="token punctuation">]</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> 分组字段名 <span class="token punctuation">[</span><span class="token keyword">HAVING</span> 分组后条件过滤<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注意：分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义</p>
</blockquote>
<blockquote>
<p>分组查询通常都是和聚合函数一起出现的。聚合函数和分组一起使用时，聚合指的是组内聚合。</p>
<p>分组的字段是可以有多个的</p>
</blockquote>
<h4 id="_8-5-2-练习" tabindex="-1"><a class="header-anchor" href="#_8-5-2-练习" aria-hidden="true">#</a> 8.5.2  练习</h4>
<ul>
<li>
<p>查询男同学和女同学各自的数学平均分</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注意：分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> name<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>  <span class="token comment">-- 这里查询name字段就没有任何意义</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询男同学和女同学各自的数学平均分，以及各自人数</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于70分的不参与分组</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> math <span class="token operator">></span> <span class="token number">70</span> <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于70分的不参与分组，分组之后人数大于2个的</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> math <span class="token operator">></span> <span class="token number">70</span> <span class="token keyword">group</span> <span class="token keyword">by</span> sex <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>  <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p><strong>where 和 having 区别：</strong></p>
<ul>
<li>
<p>执行时机不一样：where 是分组之前进行限定，不满足where条件，则不参与分组，而having是分组之后对结果进行过滤。</p>
</li>
<li>
<p>可判断的条件不一样：where 不能对聚合函数进行判断，having 可以。</p>
</li>
</ul>
<h3 id="_8-6-分页查询" tabindex="-1"><a class="header-anchor" href="#_8-6-分页查询" aria-hidden="true">#</a> 8.6  分页查询</h3>
<p>如下图所示，大家在很多网站都见过类似的效果，如京东、百度、淘宝等。分页查询是将数据一页一页的展示给用户看，用户也可以通过点击查看下一页的数据。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210722230330366.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>接下来我们先说分页查询的语法。</p>
<h4 id="_8-6-1-语法" tabindex="-1"><a class="header-anchor" href="#_8-6-1-语法" aria-hidden="true">#</a> 8.6.1  语法</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段列表 <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span>  起始索引 <span class="token punctuation">,</span> 查询条目数<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注意： 上述语句中的起始索引是从0开始</p>
</blockquote>
<blockquote>
<ol>
<li>limit是mysql的方言。</li>
<li>limit起始索引如果为0，则起始索引可以省略。</li>
</ol>
</blockquote>
<h4 id="_8-6-2-练习" tabindex="-1"><a class="header-anchor" href="#_8-6-2-练习" aria-hidden="true">#</a> 8.6.2  练习</h4>
<ul>
<li>
<p>从0开始查询，查询3条数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">limit</span> <span class="token number">0</span> <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>每页显示3条数据，查询第1页数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">limit</span> <span class="token number">0</span> <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>每页显示3条数据，查询第2页数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">limit</span> <span class="token number">3</span> <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>每页显示3条数据，查询第3页数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">limit</span> <span class="token number">6</span> <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>从上面的练习推导出起始索引计算公式：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>起始索引 <span class="token operator">=</span> <span class="token punctuation">(</span>当前页码 <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> 每页显示的条数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>����������������������������������������������������������������������������������������������������������������������������������������</p>
</div></template>


