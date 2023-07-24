<template><div><h1 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h1>
<h2 id="_1-jdbc概述" tabindex="-1"><a class="header-anchor" href="#_1-jdbc概述" aria-hidden="true">#</a> 1，JDBC概述</h2>
<p>在开发中我们使用的是java语言，那么势必要通过java语言操作数据库中的数据。这就是接下来要学习的JDBC。</p>
<h3 id="_1-1-jdbc概念" tabindex="-1"><a class="header-anchor" href="#_1-1-jdbc概念" aria-hidden="true">#</a> 1.1  JDBC概念</h3>
<blockquote>
<p>JDBC   就是使用Java语言操作关系型数据库的一套API</p>
<p>全称：( Java DataBase Connectivity ) Java 数据库连接</p>
</blockquote>
<p><img src="@source/JavaWeb/assets/image-20210725130537815.png" alt="img"></p>
<p>我们开发的同一套Java代码是无法操作不同的关系型数据库，因为每一个关系型数据库的底层实现细节都不一样。如果这样，问题就很大了，在公司中可以在开发阶段使用的是MySQL数据库，而上线时公司最终选用oracle数据库，我们就需要对代码进行大批量修改，这显然并不是我们想看到的。我们要做到的是同一套Java代码操作不同的关系型数据库，而此时sun公司就指定了一套标准接口（JDBC），JDBC中定义了所有操作关系型数据库的规则。众所周知接口是无法直接使用的，我们需要使用接口的实现类，而这套实现类（称之为：驱动）就由各自的数据库厂商给出。</p>
<h3 id="_1-2-jdbc本质" tabindex="-1"><a class="header-anchor" href="#_1-2-jdbc本质" aria-hidden="true">#</a> 1.2  JDBC本质</h3>
<ul>
<li>官方（sun公司）定义的一套操作所有关系型数据库的规则，即接口</li>
<li>各个数据库厂商去实现这套接口，提供数据库驱动jar包</li>
<li>我们可以使用这套接口（JDBC）编程，真正执行的代码是驱动jar包中的实现类</li>
</ul>
<h3 id="_1-3-jdbc好处" tabindex="-1"><a class="header-anchor" href="#_1-3-jdbc好处" aria-hidden="true">#</a> 1.3  JDBC好处</h3>
<ul>
<li>各数据库厂商使用相同的接口，Java代码不需要针对不同数据库分别开发</li>
<li>可随时替换底层数据库，访问数据库的Java代码基本不变</li>
</ul>
<p>以后编写操作数据库的代码只需要面向JDBC（接口），操作哪儿个关系型数据库就需要导入该数据库的驱动包，如需要操作MySQL数据库，就需要再项目中导入MySQL数据库的驱动包。如下图就是MySQL驱动包</p>
<p><img src="@source/JavaWeb/assets/image-20210725133015535.png" alt="img"></p>
<h2 id="_2-jdbc快速入门" tabindex="-1"><a class="header-anchor" href="#_2-jdbc快速入门" aria-hidden="true">#</a> 2，JDBC快速入门</h2>
<p>先来看看通过Java操作数据库的流程</p>
<p><img src="@source/JavaWeb/assets/image-20210725163745153.png" alt="img"></p>
<p>第一步：编写Java代码</p>
<p>第二步：Java代码将SQL发送到MySQL服务端</p>
<p>第三步：MySQL服务端接收到SQL语句并执行该SQL语句</p>
<p>第四步：将SQL语句执行的结果返回给Java代码</p>
<h3 id="_2-1-编写代码步骤" tabindex="-1"><a class="header-anchor" href="#_2-1-编写代码步骤" aria-hidden="true">#</a> 2.1  编写代码步骤</h3>
<ul>
<li>
<p>创建工程，导入驱动jar包</p>
<p><img src="@source/JavaWeb/assets/image-20210725133015535.png" alt="img"></p>
</li>
<li>
<p>注册驱动</p>
</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>Class<span class="token punctuation">.</span>forName<span class="token punctuation">(</span><span class="token string">"com.mysql.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>获取连接</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>Connection conn <span class="token operator">=</span> DriverManager<span class="token punctuation">.</span>getConnection<span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Java代码需要发送SQL给MySQL服务端，就需要先建立连接</p>
</li>
<li>
<p>定义SQL语句</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>String <span class="token keyword">sql</span> <span class="token operator">=</span>  “<span class="token keyword">update</span>…” <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>获取执行SQL对象</p>
<p>执行SQL语句需要SQL执行对象，而这个执行对象就是Statement对象</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>Statement stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span>createStatement<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>执行SQL</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>stmt<span class="token punctuation">.</span>executeUpdate<span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>处理返回结果</p>
</li>
<li>
<p>释放资源</p>
</li>
</ul>
<h3 id="_2-2-具体操作" tabindex="-1"><a class="header-anchor" href="#_2-2-具体操作" aria-hidden="true">#</a> 2.2  具体操作</h3>
<ul>
<li>创建新的空的项目</li>
</ul>
<p><img src="@source/JavaWeb/assets/image-20210725165156501.png" alt="img"></p>
<ul>
<li>定义项目的名称，并指定位置</li>
</ul>
<p><img src="@source/JavaWeb/assets/image-20210725165220829.png" alt="img"></p>
<ul>
<li>对项目进行设置，JDK版本、编译版本</li>
</ul>
<p><img src="@source/JavaWeb/assets/image-20210725165349564.png" alt="img"></p>
<ul>
<li>创建模块，指定模块的名称及位置</li>
</ul>
<p><img src="@source/JavaWeb/assets/image-20210725165536898.png" alt="img"></p>
<ul>
<li>
<p>导入驱动包</p>
<p>将mysql的驱动包放在模块下的lib目录（随意命名）下，并将该jar包添加为库文件</p>
</li>
</ul>
<p><img src="@source/JavaWeb/assets/image-20210725165657556.png" alt="img"></p>
<ul>
<li>在添加为库文件的时候，有如下三个选项
<ul>
<li>Global Library  ： 全局有效</li>
<li>Project Library :   项目有效</li>
<li>Module Library ： 模块有效</li>
</ul>
</li>
</ul>
<p><img src="@source/JavaWeb/assets/image-20210725165751273.png" alt="img"></p>
<ul>
<li>在src下创建类</li>
</ul>
<p><img src="@source/JavaWeb/assets/image-20210725170004319.png" alt="img"></p>
<ul>
<li>编写代码如下</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * JDBC快速入门
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. 注册驱动</span>
        <span class="token comment">//Class.forName("com.mysql.jdbc.Driver");</span>
        <span class="token comment">//2. 获取连接</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://127.0.0.1:3306/db1"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 定义sql</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"update account set money = 2000 where id = 1"</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 获取执行sql的对象 Statement</span>
        <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//5. 执行sql</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//受影响的行数</span>
        <span class="token comment">//6. 处理结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//7. 释放资源</span>
        stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-jdbc-api详解" tabindex="-1"><a class="header-anchor" href="#_3-jdbc-api详解" aria-hidden="true">#</a> 3，JDBC API详解</h2>
<h3 id="_3-1-drivermanager" tabindex="-1"><a class="header-anchor" href="#_3-1-drivermanager" aria-hidden="true">#</a> 3.1  DriverManager</h3>
<p>DriverManager（驱动管理类）作用：</p>
<ul>
<li>
<p>注册驱动</p>
<p><img src="@source/JavaWeb/assets/image-20210725171339346.png" alt="image-20210725171339346"></p>
<p>registerDriver方法是用于注册驱动的，但是我们之前做的入门案例并不是这样写的。而是如下实现</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>Class<span class="token punctuation">.</span>forName<span class="token punctuation">(</span><span class="token string">"com.mysql.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们查询MySQL提供的Driver类，看它是如何实现的，源码如下：</p>
<p><img src="@source/JavaWeb/assets/image-20210725171635432.png" alt="img"></p>
<p>在该类中的静态代码块中已经执行了 <code v-pre>DriverManager</code> 对象的 <code v-pre>registerDriver()</code> 方法进行驱动的注册了，那么我们只需要加载 <code v-pre>Driver</code> 类，该静态代码块就会执行。而 <code v-pre>Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</code> 就可以加载 <code v-pre>Driver</code> 类。</p>
<blockquote>
<p>==提示：==</p>
<ul>
<li>MySQL 5之后的驱动包，可以省略注册驱动的步骤</li>
<li>自动加载jar包中META-INF/services/java.sql.Driver文件中的驱动类</li>
</ul>
</blockquote>
</li>
<li>
<p>获取数据库连接</p>
<p><img src="@source/JavaWeb/assets/image-20210725171355278.png" alt="image-20210725171355278"></p>
<p>参数说明：</p>
<ul>
<li>
<p>url ： 连接路径</p>
<blockquote>
<p>语法：jdbc:mysql://ip地址(域名):端口号/数据库名称?参数键值对1&amp;参数键值对2…</p>
<p>示例：jdbc:mysql://127.0.0.1:3306/db1</p>
<p>==细节：==</p>
<ul>
<li>
<p>如果连接的是本机mysql服务器，并且mysql服务默认端口是3306，则url可以简写为：jdbc:mysql:///数据库名称?参数键值对</p>
</li>
<li>
<p>配置 useSSL=false 参数，禁用安全连接方式，解决警告提示</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>user ：用户名</p>
</li>
<li>
<p>poassword ：密码</p>
</li>
</ul>
</li>
</ul>
<h3 id="_3-2-connection" tabindex="-1"><a class="header-anchor" href="#_3-2-connection" aria-hidden="true">#</a> 3.2  Connection</h3>
<p>Connection（数据库连接对象）作用：</p>
<ul>
<li>获取执行 SQL 的对象</li>
<li>管理事务</li>
</ul>
<h4 id="_3-2-1-获取执行对象" tabindex="-1"><a class="header-anchor" href="#_3-2-1-获取执行对象" aria-hidden="true">#</a> 3.2.1  获取执行对象</h4>
<ul>
<li>
<p>普通执行SQL对象</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>Statement createStatement<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>入门案例中就是通过该方法获取的执行对象。</p>
</li>
<li>
<p>预编译SQL的执行SQL对象：防止SQL注入</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>PreparedStatement  prepareStatement<span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过这种方式获取的 <code v-pre>PreparedStatement</code> SQL语句执行对象是我们一会重点要进行讲解的，它可以防止SQL注入。</p>
</li>
<li>
<p>执行存储过程的对象</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>CallableStatement prepareCall<span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过这种方式获取的 <code v-pre>CallableStatement</code> 执行对象是用来执行存储过程的，而存储过程在MySQL中不常用，所以这个我们将不进行讲解。</p>
</li>
</ul>
<h4 id="_3-2-2-事务管理" tabindex="-1"><a class="header-anchor" href="#_3-2-2-事务管理" aria-hidden="true">#</a> 3.2.2  事务管理</h4>
<p>先回顾一下MySQL事务管理的操作：</p>
<ul>
<li>开启事务 ： BEGIN; 或者 START TRANSACTION;</li>
<li>提交事务 ： COMMIT;</li>
<li>回滚事务 ： ROLLBACK;</li>
</ul>
<blockquote>
<p>MySQL默认是自动提交事务</p>
<p>如果要管理事务，必须使用同一个连接对象，才能在同一个事务中。</p>
</blockquote>
<p>接下来学习JDBC事务管理的方法。</p>
<p>Connection几口中定义了3个对应的方法：</p>
<ul>
<li>
<p>开启事务</p>
<p><img src="@source/JavaWeb/assets/image-20210725173444628.png" alt="image-20210725173444628"></p>
<p>参与autoCommit 表示是否自动提交事务，true表示自动提交事务，false表示手动提交事务。而开启事务需要将该参数设为为false。</p>
</li>
<li>
<p>提交事务</p>
<p><img src="@source/JavaWeb/assets/image-20210725173618636.png" alt="image-20210725173618636"></p>
</li>
<li>
<p>回滚事务</p>
<p><img src="@source/JavaWeb/assets/image-20210725173648674.png" alt="image-20210725173648674"></p>
</li>
</ul>
<p>具体代码实现如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">/**
 * JDBC API 详解：Connection
 */</span>
<span class="token keyword">public</span> class JDBCDemo3_Connection {

    <span class="token keyword">public</span> static void main<span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws Exception {
        <span class="token comment">//1. 注册驱动</span>
        <span class="token comment">//Class.forName("com.mysql.jdbc.Driver");</span>
        <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
        String url <span class="token operator">=</span> <span class="token string">"jdbc:mysql:///db1?useSSL=false"</span><span class="token punctuation">;</span>
        String username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
        String password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
        Connection conn <span class="token operator">=</span> DriverManager<span class="token punctuation">.</span>getConnection<span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 定义sql</span>
        String sql1 <span class="token operator">=</span> <span class="token string">"update account set money = 3000 where id = 1"</span><span class="token punctuation">;</span>
        String sql2 <span class="token operator">=</span> <span class="token string">"update account set money = 3000 where id = 2"</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 获取执行sql的对象 Statement</span>
        Statement stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span>createStatement<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        try {
            <span class="token comment">// ============开启事务==========</span>
            conn<span class="token punctuation">.</span>setAutoCommit<span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//5. 执行sql</span>
            <span class="token keyword">int</span> count1 <span class="token operator">=</span> stmt<span class="token punctuation">.</span>executeUpdate<span class="token punctuation">(</span>sql1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//受影响的行数</span>
            <span class="token comment">//6. 处理结果</span>
            System<span class="token punctuation">.</span><span class="token keyword">out</span><span class="token punctuation">.</span>println<span class="token punctuation">(</span>count1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token comment">//5. 执行sql</span>
            <span class="token keyword">int</span> count2 <span class="token operator">=</span> stmt<span class="token punctuation">.</span>executeUpdate<span class="token punctuation">(</span>sql2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//受影响的行数</span>
            <span class="token comment">//6. 处理结果</span>
            System<span class="token punctuation">.</span><span class="token keyword">out</span><span class="token punctuation">.</span>println<span class="token punctuation">(</span>count2<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// ============提交事务==========</span>
            <span class="token comment">//程序运行到此处，说明没有出现任何问题，则需求提交事务</span>
            conn<span class="token punctuation">.</span><span class="token keyword">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        } catch <span class="token punctuation">(</span>Exception e<span class="token punctuation">)</span> {
            <span class="token comment">// ============回滚事务==========</span>
            <span class="token comment">//程序在出现异常时会执行到这个地方，此时就需要回滚事务</span>
            conn<span class="token punctuation">.</span><span class="token keyword">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span>printStackTrace<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        }

        <span class="token comment">//7. 释放资源</span>
        stmt<span class="token punctuation">.</span><span class="token keyword">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token keyword">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-statement" tabindex="-1"><a class="header-anchor" href="#_3-3-statement" aria-hidden="true">#</a> 3.3  Statement</h3>
<h4 id="_3-3-1-概述" tabindex="-1"><a class="header-anchor" href="#_3-3-1-概述" aria-hidden="true">#</a> 3.3.1  概述</h4>
<p>Statement对象的作用就是用来执行SQL语句。而针对不同类型的SQL语句使用的方法也不一样。</p>
<ul>
<li>
<p>执行DDL、DML语句</p>
<p><img src="@source/JavaWeb/assets/image-20210725175151272.png" alt="image-20210725175151272"></p>
</li>
<li>
<p>执行DQL语句</p>
<p><img src="@source/JavaWeb/assets/image-20210725175131533.png" alt="img"></p>
<p>该方法涉及到了 <code v-pre>ResultSet</code> 对象，而这个对象我们还没有学习，一会再重点讲解。</p>
</li>
</ul>
<h4 id="_3-3-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_3-3-2-代码实现" aria-hidden="true">#</a> 3.3.2  代码实现</h4>
<ul>
<li>
<p>执行DML语句</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
  * 执行DML语句
  * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDML</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 注册驱动</span>
    <span class="token comment">//Class.forName("com.mysql.jdbc.Driver");</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql:///db1?useSSL=false"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"update account set money = 3000 where id = 1"</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取执行sql的对象 Statement</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 执行sql</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//执行完DML语句，受影响的行数</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token comment">//System.out.println(count);</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"修改成功~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"修改失败~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//7. 释放资源</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>执行DDL语句</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
  * 执行DDL语句
  * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDDL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 注册驱动</span>
    <span class="token comment">//Class.forName("com.mysql.jdbc.Driver");</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql:///db1?useSSL=false"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"drop database db2"</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取执行sql的对象 Statement</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 执行sql</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//执行完DDL语句，可能是0</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：</p>
<ul>
<li>以后开发很少使用java代码操作DDL语句</li>
</ul>
</blockquote>
</li>
</ul>
<h3 id="_3-4-resultset" tabindex="-1"><a class="header-anchor" href="#_3-4-resultset" aria-hidden="true">#</a> 3.4  ResultSet</h3>
<h4 id="_3-4-1-概述" tabindex="-1"><a class="header-anchor" href="#_3-4-1-概述" aria-hidden="true">#</a> 3.4.1  概述</h4>
<p>ResultSet（结果集对象）作用：</p>
<ul>
<li>==封装了SQL查询语句的结果。==</li>
</ul>
<p>而执行了DQL语句后就会返回该对象，对应执行DQL语句的方法如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>ResultSet  executeQuery<span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">)</span>：执行DQL 语句，返回 ResultSet 对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么我们就需要从 <code v-pre>ResultSet</code> 对象中获取我们想要的数据。<code v-pre>ResultSet</code> 对象提供了操作查询结果数据的方法，如下：</p>
<blockquote>
<p>boolean  next()</p>
<ul>
<li>将光标从当前位置向前移动一行</li>
<li>判断当前行是否为有效行</li>
</ul>
<p>方法返回值说明：</p>
<ul>
<li>true  ： 有效航，当前行有数据</li>
<li>false ： 无效行，当前行没有数据</li>
</ul>
</blockquote>
<blockquote>
<p>xxx  getXxx(参数)：获取数据</p>
<ul>
<li>xxx : 数据类型；如： int getInt(参数) ；String getString(参数)</li>
<li>参数
<ul>
<li>int类型的参数：列的编号，从1开始</li>
<li>String类型的参数： 列的名称</li>
</ul>
</li>
</ul>
</blockquote>
<blockquote>
<p>结果集中的所有操作都是和结果强绑定的，列的编号仅和结果中的顺序相关，和表结构中的顺序无关。</p>
<p>列的名称仅和结果中的列名相关，也就是如果使用了别名，以别名为准。</p>
</blockquote>
<p>如下图为执行SQL语句后的结果</p>
<p><img src="@source/JavaWeb/assets/image-20210725181320813.png" alt="img"></p>
<p>一开始光标指定于第一行前，如图所示红色箭头指向于表头行。当我们调用了 <code v-pre>next()</code> 方法后，光标就下移到第一行数据，并且方法返回true，此时就可以通过 <code v-pre>getInt(&quot;id&quot;)</code> 获取当前行id字段的值，也可以通过 <code v-pre>getString(&quot;name&quot;)</code> 获取当前行name字段的值。如果想获取下一行的数据，继续调用 <code v-pre>next()</code>  方法，以此类推。</p>
<h4 id="_3-4-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_3-4-2-代码实现" aria-hidden="true">#</a> 3.4.2  代码实现</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
  * 执行DQL
  * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 注册驱动</span>
    <span class="token comment">//Class.forName("com.mysql.jdbc.Driver");</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql:///db1?useSSL=false"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from account"</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取statement对象</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 执行sql</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//6. 处理结果， 遍历rs中的所有数据</span>
    <span class="token comment">/* // 6.1 光标向下移动一行，并且判断当前行是否有数据
        while (rs.next()){
            //6.2 获取数据  getXxx()
            int id = rs.getInt(1);
            String name = rs.getString(2);
            double money = rs.getDouble(3);

            System.out.println(id);
            System.out.println(name);
            System.out.println(money);

            System.out.println("--------------");

        }*/</span>
    <span class="token comment">// 6.1 光标向下移动一行，并且判断当前行是否有数据</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//6.2 获取数据  getXxx()</span>
        <span class="token keyword">int</span> id <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> money <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getDouble</span><span class="token punctuation">(</span><span class="token string">"money"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-案例" tabindex="-1"><a class="header-anchor" href="#_3-5-案例" aria-hidden="true">#</a> 3.5  案例</h3>
<ul>
<li>
<p>需求：查询account账户表数据，封装为Account对象中，并且存储到ArrayList集合中</p>
<p><img src="@source/JavaWeb/assets/image-20210725182352433.png" alt="img"></p>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
  * 查询account账户表数据，封装为Account对象中，并且存储到ArrayList集合中
  * 1. 定义实体类Account
  * 2. 查询数据，封装到Account对象中
  * 3. 将Account对象存入ArrayList集合中
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testResultSet2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 注册驱动</span>
    <span class="token comment">//Class.forName("com.mysql.jdbc.Driver");</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql:///db1?useSSL=false"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//3. 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from account"</span><span class="token punctuation">;</span>

    <span class="token comment">//4. 获取statement对象</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//5. 执行sql</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建集合</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Account</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 6.1 光标向下移动一行，并且判断当前行是否有数据</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Account</span> account <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//6.2 获取数据  getXxx()</span>
        <span class="token keyword">int</span> id <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> money <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getDouble</span><span class="token punctuation">(</span><span class="token string">"money"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//赋值</span>
        account<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        account<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        account<span class="token punctuation">.</span><span class="token function">setMoney</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 存入集合</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// pojo  plain old java object     domain 域     bean     entity</span>
<span class="token comment">// 普通老式java对象</span>
<span class="token comment">// JavaBean：</span>
<span class="token comment">//          public修饰的类，必须有无参构造。</span>
<span class="token comment">//          所有成员变量必须私有。</span>
<span class="token comment">//          所有成员变量必须有getter/setter方法。</span>
<span class="token comment">//          所有的变量类型统一使用包装类型</span>
<span class="token comment">//          JavaBean统一实现序列化接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-preparedstatement" tabindex="-1"><a class="header-anchor" href="#_3-6-preparedstatement" aria-hidden="true">#</a> 3.6  PreparedStatement</h3>
<blockquote>
<p>PreparedStatement作用：</p>
<ul>
<li>预编译SQL语句并执行：预防SQL注入问题</li>
</ul>
</blockquote>
<p>对上面的作用中SQL注入问题大家肯定不理解。那我们先对SQL注入进行说明.</p>
<h4 id="_3-6-1-sql注入" tabindex="-1"><a class="header-anchor" href="#_3-6-1-sql注入" aria-hidden="true">#</a> 3.6.1  SQL注入</h4>
<blockquote>
<p>SQL注入是通过操作输入来修改事先定义好的SQL语句，用以达到执行代码对服务器进行攻击的方法。</p>
</blockquote>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在MySQL中创建名为 <code v-pre>test</code> 的数据库</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/JavaWeb/assets/image-20210725184701026.png" alt="img"></p>
<p>此时我们就能在数据库中看到user表</p>
<p><img src="@source/JavaWeb/assets/image-20210725184817731.png" alt="img"></p>
<p>接下来在浏览器的地址栏输入 <code v-pre>localhost:8080/login.html</code> 就能看到如下页面</p>
<p>我们就可以在如上图中输入用户名和密码进行登陆。用户名和密码输入正确就登陆成功，跳转到首页。用户名和密码输入错误则给出错误提示，如下图</p>
<p>但是我可以通过输入一些特殊的字符登陆到首页。</p>
<p>用户名随意写，密码写成 <code v-pre>' or '1' ='1</code></p>
<p>这就是SQL注入漏洞，也是很危险的。当然现在市面上的系统都不会存在这种问题了，所以大家也不要尝试用这种方式去试其他的系统。</p>
<p>那么该如何解决呢？这里就可以将SQL执行对象 <code v-pre>Statement</code> 换成 <code v-pre>PreparedStatement</code> 对象。</p>
<h4 id="_3-6-2-代码模拟sql注入问题" tabindex="-1"><a class="header-anchor" href="#_3-6-2-代码模拟sql注入问题" aria-hidden="true">#</a> 3.6.2  代码模拟SQL注入问题</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql:///db1?useSSL=false"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 接收用户输入 用户名和密码</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"sjdljfld"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> pwd <span class="token operator">=</span> <span class="token string">"' or '1' = '1"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from tb_user where username = '"</span><span class="token operator">+</span>name<span class="token operator">+</span><span class="token string">"' and password = '"</span><span class="token operator">+</span>pwd<span class="token operator">+</span><span class="token string">"'"</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取stmt对象</span>
    <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行sql</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断登录是否成功</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"登录成功~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"登录失败~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码是将用户名和密码拼接到sql语句中，拼接后的sql语句如下</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb_user <span class="token keyword">where</span> username <span class="token operator">=</span> <span class="token string">'sjdljfld'</span> <span class="token operator">and</span> password <span class="token operator">=</span> <span class="token string">''</span><span class="token operator">or</span> <span class="token string">'1'</span> <span class="token operator">=</span> <span class="token string">'1'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从上面语句可以看出条件 <code v-pre>username = 'sjdljfld' and password = ''</code> 不管是否满足，而 <code v-pre>or</code> 后面的 <code v-pre>'1' = '1'</code> 是始终满足的，最终条件是成立的，就可以正常的进行登陆了。</p>
<p>接下来我们来学习PreparedStatement对象.</p>
<h4 id="_3-6-3-preparedstatement概述" tabindex="-1"><a class="header-anchor" href="#_3-6-3-preparedstatement概述" aria-hidden="true">#</a> 3.6.3  PreparedStatement概述</h4>
<blockquote>
<p>PreparedStatement作用：</p>
<ul>
<li>预编译SQL语句并执行：预防SQL注入问题</li>
</ul>
</blockquote>
<ul>
<li>
<p>获取 PreparedStatement 对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// SQL语句中的参数值，使用？占位符替代</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from user where username = ? and password = ?"</span><span class="token punctuation">;</span>
<span class="token comment">// 通过Connection对象获取，并传入对应的sql语句</span>
<span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置参数值</p>
<p>上面的sql语句中参数使用 ? 进行占位，在之前之前肯定要设置这些 ?  的值。</p>
<blockquote>
<p>PreparedStatement对象：setXxx(参数1，参数2)：给 ? 赋值</p>
<ul>
<li>
<p>Xxx：数据类型 ； 如 setInt (参数1，参数2)</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>
<p>参数1： ？的位置编号，从1 开始</p>
</li>
<li>
<p>参数2： ？的值</p>
</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>执行SQL语句</p>
<blockquote>
<p>executeUpdate();  执行DDL语句和DML语句</p>
<p>executeQuery();  执行DQL语句</p>
<p>==注意：==</p>
<ul>
<li>调用这两个方法时不需要传递SQL语句，因为获取SQL语句执行对象时已经对SQL语句进行预编译了。</li>
</ul>
</blockquote>
</li>
</ul>
<h4 id="_3-6-4-使用preparedstatement改进" tabindex="-1"><a class="header-anchor" href="#_3-6-4-使用preparedstatement改进" aria-hidden="true">#</a> 3.6.4  使用PreparedStatement改进</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPreparedStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql:///db1?useSSL=false"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 接收用户输入 用户名和密码</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"zhangsan"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> pwd <span class="token operator">=</span> <span class="token string">"' or '1' = '1"</span><span class="token punctuation">;</span>

    <span class="token comment">// 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from tb_user where username = ? and password = ?"</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置？的值</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>pwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行sql</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断登录是否成功</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"登录成功~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"登录失败~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面语句就可以发现不会出现SQL注入漏洞问题了。那么PreparedStatement又是如何解决的呢？它是将特殊字符进行了转义，转义的SQL如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb_user <span class="token keyword">where</span> username <span class="token operator">=</span> <span class="token string">'sjdljfld'</span> <span class="token operator">and</span> password <span class="token operator">=</span> <span class="token string">'\'or \'1\' = \'1'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-6-5-preparedstatement原理" tabindex="-1"><a class="header-anchor" href="#_3-6-5-preparedstatement原理" aria-hidden="true">#</a> 3.6.5  PreparedStatement原理</h4>
<blockquote>
<p>PreparedStatement 好处：</p>
<ul>
<li>预编译SQL，性能更高</li>
<li>防止SQL注入：==将敏感字符进行转义==</li>
</ul>
</blockquote>
<p><img src="@source/JavaWeb/assets/image-20210725195756848.png" alt="img"></p>
<p>Java代码操作数据库流程如图所示：</p>
<ul>
<li>
<p>将sql语句发送到MySQL服务器端</p>
</li>
<li>
<p>MySQL服务端会对sql语句进行如下操作</p>
<ul>
<li>
<p>检查SQL语句</p>
<p>检查SQL语句的语法是否正确。</p>
</li>
<li>
<p>编译SQL语句。将SQL语句编译成可执行的函数。</p>
<p>检查SQL和编译SQL花费的时间比执行SQL的时间还要长。如果我们只是重新设置参数，那么检查SQL语句和编译SQL语句将不需要重复执行。这样就提高了性能。</p>
</li>
<li>
<p>执行SQL语句</p>
</li>
</ul>
</li>
</ul>
<p>接下来我们通过查询日志来看一下原理。</p>
<ul>
<li>
<p>开启预编译功能</p>
<p>在代码中编写url时需要加上以下参数。而我们之前根本就没有开启预编译功能，只是解决了SQL注入漏洞。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>useServerPrepStmts<span class="token operator">=</span><span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>配置MySQL执行日志（重启mysql服务后生效）</p>
<p>在mysql配置文件（my.ini）中添加如下配置</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>log-output=FILE
general-log=1
general_log_file="D:\mysql.log"
slow-query-log=1
slow_query_log_file="D:\mysql_slow.log"
long_query_time=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>java测试代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
   * PreparedStatement原理
   * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
   */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPreparedStatement2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

    <span class="token comment">//2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写</span>
    <span class="token comment">// useServerPrepStmts=true 参数开启预编译功能</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql:///db1?useSSL=false&amp;useServerPrepStmts=true"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"1234"</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 接收用户输入 用户名和密码</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"zhangsan"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> pwd <span class="token operator">=</span> <span class="token string">"' or '1' = '1"</span><span class="token punctuation">;</span>

    <span class="token comment">// 定义sql</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from tb_user where username = ? and password = ?"</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置？的值</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>pwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行sql</span>
    rs <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置？的值</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">"bbb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行sql</span>
    rs <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断登录是否成功</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"登录成功~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"登录失败~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>执行SQL语句，查看 <code v-pre>D:\mysql.log</code> 日志如下:</p>
<p><img src="@source/JavaWeb/assets/image-20210725202829738.png" alt="image-20210725202829738"></p>
<p>上图中第三行中的 <code v-pre>Prepare</code> 是对SQL语句进行预编译。第四行和第五行是执行了两次SQL语句，而第二次执行前并没有对SQL进行预编译。</p>
</li>
</ul>
<blockquote>
<p>==小结：==</p>
<ul>
<li>在获取PreparedStatement对象时，将sql语句发送给mysql服务器进行检查，编译（这些步骤很耗时）</li>
<li>执行时就不用再进行这些步骤了，速度更快</li>
<li>如果sql模板一样，则只需要进行一次检查、编译</li>
</ul>
</blockquote>
<h2 id="_4-数据库连接池" tabindex="-1"><a class="header-anchor" href="#_4-数据库连接池" aria-hidden="true">#</a> 4，数据库连接池</h2>
<h3 id="_4-1-数据库连接池简介" tabindex="-1"><a class="header-anchor" href="#_4-1-数据库连接池简介" aria-hidden="true">#</a> 4.1  数据库连接池简介</h3>
<blockquote>
<ul>
<li>
<p>数据库连接池是个容器，负责分配、管理数据库连接(Connection)</p>
</li>
<li>
<p>它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个；</p>
</li>
<li>
<p>释放空闲时间超过最大空闲时间的数据库连接来避免因为没有释放数据库连接而引起的数据库连接遗漏</p>
</li>
<li>
<p>好处</p>
<ul>
<li>资源重用</li>
<li>提升系统响应速度</li>
<li>避免数据库连接遗漏</li>
</ul>
</li>
</ul>
</blockquote>
<p>之前我们代码中使用连接是没有使用都创建一个Connection对象，使用完毕就会将其销毁。这样重复创建销毁的过程是特别耗费计算机的性能的及消耗时间的。</p>
<p>而数据库使用了数据库连接池后，就能达到Connection对象的复用，如下图</p>
<p><img src="@source/JavaWeb/assets/image-20210725210432985.png" alt="img"></p>
<p>连接池是在一开始就创建好了一些连接（Connection）对象存储起来。用户需要连接数据库时，不需要自己创建连接，而只需要从连接池中获取一个连接进行使用，使用完毕后再将连接对象归还给连接池；这样就可以起到资源重用，也节省了频繁创建连接销毁连接所花费的时间，从而提升了系统响应的速度。</p>
<h3 id="_4-2-数据库连接池实现" tabindex="-1"><a class="header-anchor" href="#_4-2-数据库连接池实现" aria-hidden="true">#</a> 4.2  数据库连接池实现</h3>
<ul>
<li>
<p>标准接口：==DataSource==</p>
<p>官方(SUN) 提供的数据库连接池标准接口，由第三方组织实现此接口。该接口提供了获取连接的功能：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么以后就不需要通过 <code v-pre>DriverManager</code> 对象获取 <code v-pre>Connection</code> 对象，而是通过连接池（DataSource）获取 <code v-pre>Connection</code> 对象。</p>
</li>
<li>
<p>常见的数据库连接池</p>
<ul>
<li>DBCP</li>
<li>C3P0</li>
<li>Druid</li>
</ul>
<p>我们现在使用更多的是Druid，它的性能比其他两个会好一些。</p>
</li>
<li>
<p>Druid（德鲁伊）</p>
<ul>
<li>
<p>Druid连接池是阿里巴巴开源的数据库连接池项目</p>
</li>
<li>
<p>功能强大，性能优秀，是Java语言最好的数据库连接池之一</p>
</li>
</ul>
</li>
</ul>
<h3 id="_4-3-driud使用" tabindex="-1"><a class="header-anchor" href="#_4-3-driud使用" aria-hidden="true">#</a> 4.3  Driud使用</h3>
<blockquote>
<ul>
<li>导入jar包 druid-1.1.12.jar</li>
<li>定义配置文件</li>
<li>加载配置文件</li>
<li>获取数据库连接池对象</li>
<li>获取连接</li>
</ul>
</blockquote>
<p>现在通过代码实现，首先需要先将druid的jar包放到项目下的lib下并添加为库文件</p>
<p><img src="@source/JavaWeb/assets/image-20210725212911980.png" alt="img"></p>
<p>项目结构如下：</p>
<p><img src="@source/JavaWeb/assets/image-20210725213210091.png" alt="img"></p>
<p>编写配置文件如下：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql:///db1?useSSL=false&amp;useServerPrepStmts=true</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">1234</span>
<span class="token comment"># 初始化连接数量</span>
<span class="token key attr-name">initialSize</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token comment"># 最大连接数</span>
<span class="token key attr-name">maxActive</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token comment"># 最大等待时间</span>
<span class="token key attr-name">maxWait</span><span class="token punctuation">=</span><span class="token value attr-value">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用druid的代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Druid数据库连接池演示
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.导入jar包</span>
        <span class="token comment">//2.定义配置文件</span>
        <span class="token comment">//3. 加载配置文件</span>
        <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"jdbc-demo/src/druid.properties"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 获取连接池对象</span>
        <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//5. 获取数据库连接 Connection</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取到了连接后就可以继续做其他操作了</span>

        <span class="token comment">//System.out.println(System.getProperty("user.dir"));</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>从连接池中获取的连接都会改写其close方法，让它的功能改为归还自身到连接池中，而不是释放资源。释放资源的操作统一由连接池关闭时操作。</p>
</blockquote>
<h2 id="_5-jdbc练习" tabindex="-1"><a class="header-anchor" href="#_5-jdbc练习" aria-hidden="true">#</a> 5，JDBC练习</h2>
<h3 id="_5-1-需求" tabindex="-1"><a class="header-anchor" href="#_5-1-需求" aria-hidden="true">#</a> 5.1  需求</h3>
<p>完成商品品牌数据的增删改查操作</p>
<ul>
<li>查询：查询所有数据</li>
<li>添加：添加品牌</li>
<li>修改：根据id修改</li>
<li>删除：根据id删除</li>
</ul>
<h3 id="_5-2-案例实现" tabindex="-1"><a class="header-anchor" href="#_5-2-案例实现" aria-hidden="true">#</a> 5.2  案例实现</h3>
<h4 id="_5-2-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_5-2-1-环境准备" aria-hidden="true">#</a> 5.2.1  环境准备</h4>
<ul>
<li>
<p>数据库表 <code v-pre>tb_brand</code></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 删除tb_brand表</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> tb_brand<span class="token punctuation">;</span>
<span class="token comment">-- 创建tb_brand表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> tb_brand <span class="token punctuation">(</span>
    <span class="token comment">-- id 主键</span>
    id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
    <span class="token comment">-- 品牌名称</span>
    brand_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">-- 企业名称</span>
    company_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">-- 排序字段</span>
    ordered <span class="token keyword">int</span><span class="token punctuation">,</span>
    <span class="token comment">-- 描述信息</span>
    description <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">-- 状态：0：禁用  1：启用</span>
    <span class="token keyword">status</span> <span class="token keyword">int</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 添加数据</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> tb_brand <span class="token punctuation">(</span>brand_name<span class="token punctuation">,</span> company_name<span class="token punctuation">,</span> ordered<span class="token punctuation">,</span> description<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">)</span>
<span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'三只松鼠'</span><span class="token punctuation">,</span> <span class="token string">'三只松鼠股份有限公司'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'好吃不上火'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token string">'华为'</span><span class="token punctuation">,</span> <span class="token string">'华为技术有限公司'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">'华为致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token string">'小米'</span><span class="token punctuation">,</span> <span class="token string">'小米科技有限公司'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">'are you ok'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在pojo包下实体类 Brand</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 品牌
 * alt + 鼠标左键：整列编辑
 * 在实体类中，基本数据类型建议使用其对应的包装类型
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Brand</span> <span class="token punctuation">{</span>
    <span class="token comment">// id 主键</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token comment">// 品牌名称</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> brandName<span class="token punctuation">;</span>
    <span class="token comment">// 企业名称</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> companyName<span class="token punctuation">;</span>
    <span class="token comment">// 排序字段</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> ordered<span class="token punctuation">;</span>
    <span class="token comment">// 描述信息</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    <span class="token comment">// 状态：0：禁用  1：启用</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> status<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBrandName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> brandName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBrandName</span><span class="token punctuation">(</span><span class="token class-name">String</span> brandName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brandName <span class="token operator">=</span> brandName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCompanyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> companyName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCompanyName</span><span class="token punctuation">(</span><span class="token class-name">String</span> companyName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>companyName <span class="token operator">=</span> companyName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getOrdered</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ordered<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOrdered</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> ordered<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ordered <span class="token operator">=</span> ordered<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Brand{"</span> <span class="token operator">+</span>
                <span class="token string">"id="</span> <span class="token operator">+</span> id <span class="token operator">+</span>
                <span class="token string">", brandName='"</span> <span class="token operator">+</span> brandName <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", companyName='"</span> <span class="token operator">+</span> companyName <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", ordered="</span> <span class="token operator">+</span> ordered <span class="token operator">+</span>
                <span class="token string">", description='"</span> <span class="token operator">+</span> description <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", status="</span> <span class="token operator">+</span> status <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_5-2-2-查询所有" tabindex="-1"><a class="header-anchor" href="#_5-2-2-查询所有" aria-hidden="true">#</a> 5.2.2  查询所有</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
   * 查询所有
   * 1. SQL：select * from tb_brand;
   * 2. 参数：不需要
   * 3. 结果：List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Brand</span><span class="token punctuation">></span></span>
   */</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 获取Connection</span>
    <span class="token comment">//3. 加载配置文件</span>
    <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"jdbc-demo/src/druid.properties"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取连接池对象</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//5. 获取数据库连接 Connection</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 定义SQL</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from tb_brand;"</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 设置参数</span>
    <span class="token comment">//5. 执行SQL</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//6. 处理结果 List&lt;Brand> 封装Brand对象，装载List集合</span>
    <span class="token class-name">Brand</span> brand <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">></span></span> brands <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取数据</span>
        <span class="token keyword">int</span> id <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> brandName <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"brand_name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> companyName <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"company_name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ordered <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">"ordered"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> description <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"description"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> status <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">"status"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//封装Brand对象</span>
        brand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setBrandName</span><span class="token punctuation">(</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setCompanyName</span><span class="token punctuation">(</span>companyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setOrdered</span><span class="token punctuation">(</span>ordered<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//装载集合</span>
        brands<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>brands<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//7. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-3-添加数据" tabindex="-1"><a class="header-anchor" href="#_5-2-3-添加数据" aria-hidden="true">#</a> 5.2.3  添加数据</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
  * 添加
  * 1. SQL：insert into tb_brand(brand_name, company_name, ordered, description, status) values(?,?,?,?,?);
  * 2. 参数：需要，除了id之外的所有参数信息
  * 3. 结果：boolean
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收页面提交的参数</span>
    <span class="token class-name">String</span> brandName <span class="token operator">=</span> <span class="token string">"香飘飘"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> companyName <span class="token operator">=</span> <span class="token string">"香飘飘"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ordered <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token string">"绕地球一圈"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> status <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">//1. 获取Connection</span>
    <span class="token comment">//3. 加载配置文件</span>
    <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"jdbc-demo/src/druid.properties"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取连接池对象</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 获取数据库连接 Connection</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 定义SQL</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"insert into tb_brand(brand_name, company_name, ordered, description, status) values(?,?,?,?,?);"</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 设置参数</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>companyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span>ordered<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//5. 执行SQL</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 影响的行数</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-4-修改数据" tabindex="-1"><a class="header-anchor" href="#_5-2-4-修改数据" aria-hidden="true">#</a> 5.2.4  修改数据</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
  * 修改
  * 1. SQL：

     update tb_brand
         set brand_name  = ?,
         company_name= ?,
         ordered     = ?,
         description = ?,
         status      = ?
     where id = ?

   * 2. 参数：需要，所有数据
   * 3. 结果：boolean
   */</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收页面提交的参数</span>
    <span class="token class-name">String</span> brandName <span class="token operator">=</span> <span class="token string">"香飘飘"</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> companyName <span class="token operator">=</span> <span class="token string">"香飘飘"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ordered <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token string">"绕地球三圈"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> status <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token comment">//1. 获取Connection</span>
    <span class="token comment">//3. 加载配置文件</span>
    <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"jdbc-demo/src/druid.properties"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取连接池对象</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 获取数据库连接 Connection</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 定义SQL</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">" update tb_brand\n"</span> <span class="token operator">+</span>
        <span class="token string">"         set brand_name  = ?,\n"</span> <span class="token operator">+</span>
        <span class="token string">"         company_name= ?,\n"</span> <span class="token operator">+</span>
        <span class="token string">"         ordered     = ?,\n"</span> <span class="token operator">+</span>
        <span class="token string">"         description = ?,\n"</span> <span class="token operator">+</span>
        <span class="token string">"         status      = ?\n"</span> <span class="token operator">+</span>
        <span class="token string">"     where id = ?"</span><span class="token punctuation">;</span>

    <span class="token comment">//3. 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//4. 设置参数</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>companyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span>ordered<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//5. 执行SQL</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 影响的行数</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-5-删除数据" tabindex="-1"><a class="header-anchor" href="#_5-2-5-删除数据" aria-hidden="true">#</a> 5.2.5  删除数据</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
  * 删除
  * 1. SQL：
            delete from tb_brand where id = ?
  * 2. 参数：需要，id
  * 3. 结果：boolean
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收页面提交的参数</span>
    <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token comment">//1. 获取Connection</span>
    <span class="token comment">//3. 加载配置文件</span>
    <span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"jdbc-demo/src/druid.properties"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 获取连接池对象</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 获取数据库连接 Connection</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 定义SQL</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">" delete from tb_brand where id = ?"</span><span class="token punctuation">;</span>
    <span class="token comment">//3. 获取pstmt对象</span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4. 设置参数</span>
    pstmt<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5. 执行SQL</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 影响的行数</span>
    <span class="token comment">//6. 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//7. 释放资源</span>
    pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


