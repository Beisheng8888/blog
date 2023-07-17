import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as p,e as a,a as n,b as s}from"./app-93166430.js";const l="/blog/assets/image-20210818102205544-c2fa8d2a.png",i="/blog/assets/image-20210818102313898-b3f80c81.png",c="/blog/assets/image-20210818102506754-76041b9e.png",o="/blog/assets/image-20210818103127245-9e7981b2.png",u="/blog/assets/image-20210818103352432-84b7296e.png",d="/blog/assets/image-20210818104316457-de4f280a.png",r="/blog/assets/image-20210818105519970-4877a64b.png",v="/blog/assets/image-20210818110122438-14732ba7.png",k="/blog/assets/image-20210818111039350-f56b9761.png",m="/blog/assets/image-20210818112613589-f526b9b3.png",g="/blog/assets/image-20210818112724462-695529a0.png",b="/blog/assets/image-20210818113118802-1826b607.png",q="/blog/assets/image-20210818114008998-9fe387ba.png",h="/blog/assets/image-20210818123606231-37d53d08.png",f="/blog/assets/image-20210818123820571-8915bc59.png",y="/blog/assets/image-20210818123946272-d96ea448.png",j="/blog/assets/image-20210818125203390-f4e2f74a.png",S="/blog/assets/image-20210818145450748-2f9bf98c.png",x="/blog/assets/image-20210818150346332-dbc80ade.png",w="/blog/assets/image-20210818151232955-70dee263.png",_="/blog/assets/image-20210818152536484-65ed0687.png",B="/blog/assets/image-20210818152857407-cc278a38.png",I="/blog/assets/image-20210818153646575-2235d234.png",P="/blog/assets/image-20210818163348642-342656ab.png",J="/blog/assets/image-20210818164301154-3d538632.png",T="/blog/assets/image-20210818165439826-92bd466b.png",M="/blog/assets/image-20210818165808589-03906c8a.png",N="/blog/assets/image-20210818171702401-2fac5568.png",E="/blog/assets/image-20210818173155335-9a4e5b1e.png",L="/blog/assets/image-20210818174441917-deded2ae.png",O="/blog/assets/image-20210818174800783-e85d8352.png",$="/blog/assets/image-20210818182952394-f918e5de.png",H="/blog/assets/image-20210819190221889-5728ec1b.png",z="/blog/assets/image-20210819192049571-eb86866d.png",C="/blog/assets/image-20210819192737982-2045709d.png",R="/blog/assets/image-20210819220701121-633cfefe.png",A="/blog/assets/image-20210819220738074-100de90a.png",D="/blog/assets/image-20210819223202473-edc2bd96.png",F="/blog/assets/image-20210819223314230-18287756.png",U="/blog/assets/image-20210819223830713-8b36f7f5.png",V="/blog/assets/image-20210819224243778-a3fba0f7.png",G="/blog/assets/image-20210819225948187-0137d55e.png",Y="/blog/assets/image-20210819230242938-524126c0.png",W={},X=a(`<h1 id="jsp" tabindex="-1"><a class="header-anchor" href="#jsp" aria-hidden="true">#</a> JSP</h1><h2 id="_1-jsp-概述" tabindex="-1"><a class="header-anchor" href="#_1-jsp-概述" aria-hidden="true">#</a> 1，JSP 概述</h2><p>==JSP（全称：Java Server Pages）：Java 服务端页面。==是一种动态的网页技术，其中既可以定义 HTML、JS、CSS等静态内容，还可以定义 Java代码的动态内容，也就是 <code>JSP = HTML + Java</code>。如下就是jsp代码</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;JSP,Hello World&lt;/h1&gt;
        &lt;%
        	System.out.println(&quot;hello,jsp~&quot;);
        %&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码 <code>h1</code> 标签内容是展示在页面上，而 Java 的输出语句是输出在 idea 的控制台。</p><p>那么，JSP 能做什么呢？现在我们只用 <code>servlet</code> 实现功能，看存在什么问题。如下图所示，当我们登陆成功后，需要在页面上展示用户名</p><p>上图的用户名是动态展示，也就是谁登陆就展示谁的用户名。只用 <code>servlet</code> 如何实现呢？里已经提供好了一个 <code>LoginServlet</code> ，该 <code>servlet</code> 就是实现这个功能的，现将资料中的 <code>LoginServlet.java</code> 拷贝到 <code>request-demo</code> 项目中来演示。接下来启动服务器并访问登陆页面</p><figure><img src="`+l+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>输入了 <code>zhangsan</code> 用户的登陆信息后点击 <code>登陆</code> 按钮，就能看到如下图效果</p><figure><img src="'+i+'" alt="image-20210818102313898" tabindex="0" loading="lazy"><figcaption>image-20210818102313898</figcaption></figure><p>当然如果是 <code>lisi</code> 登陆的，在该页面展示的就是 <code>lisi,欢迎您</code>，动态的展示效果就实现了。那么 <code>LoginServlet</code> 到底是如何实现的，我们看看它里面的内容</p><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上面的代码有大量使用到 <code>writer</code> 对象向页面写标签内容，这样我们的代码就显得很麻烦；将来如果展示的效果出现了问题，排错也显得有点力不从心。而 JSP 是如何解决这个问题的呢？在资料中也提供了一个 <code>login.jsp</code> 页面，该页面也能实现该功能，现将该页面拷贝到项目的 <code>webapp</code>下，需要修改 <code>login.html</code> 中表单数据提交的路径为下图</p><figure><img src="'+o+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>重新启动服务器并进行测试，发现也可以实现同样的功能。那么 <code>login.jsp</code> 又是如何实现的呢？那我们来看看 <code>login.jsp</code> 的代码</p><figure><img src="'+u+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上面代码可以看到里面基本都是 <code>HTML</code> 标签，而动态数据使用 Java 代码进行展示；这样操作看起来要比用 <code>servlet</code> 实现要舒服很多。</p><p>JSP 作用：简化开发，避免了在Servlet中直接输出HTML标签。</p><h2 id="_2-jsp-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-jsp-快速入门" aria-hidden="true">#</a> 2，JSP 快速入门</h2><p>接下来我们做一个简单的快速入门代码。</p><h3 id="_2-1-搭建环境" tabindex="-1"><a class="header-anchor" href="#_2-1-搭建环境" aria-hidden="true">#</a> 2.1 搭建环境</h3><p>创建一个maven的 web 项目，项目结构如下：</p><figure><img src="'+d+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><code>pom.xml</code> 文件内容如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jsp-demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">&gt;</span></span>war<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-导入-jsp-依赖" tabindex="-1"><a class="header-anchor" href="#_2-2-导入-jsp-依赖" aria-hidden="true">#</a> 2.2 导入 JSP 依赖</h3><p>在 <code>dependencies</code> 标签中导入 JSP 的依赖，如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jsp-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该依赖的 <code>scope</code> 必须设置为 <code>provided</code>，因为 tomcat 中有这个jar包了，所以在打包时我们是不希望将该依赖打进到我们工程的war包中。</p><h3 id="_2-3-创建-jsp-页面" tabindex="-1"><a class="header-anchor" href="#_2-3-创建-jsp-页面" aria-hidden="true">#</a> 2.3 创建 jsp 页面</h3><p>在项目的 <code>webapp</code> 下创建jsp页面</p><figure><img src="`+r+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通过上面方式创建一个名为 <code>hello.jsp</code> 的页面。</p><h3 id="_2-4-编写代码" tabindex="-1"><a class="header-anchor" href="#_2-4-编写代码" aria-hidden="true">#</a> 2.4 编写代码</h3><p>在 <code>hello.jsp</code> 页面中书写 <code>HTML</code> 标签和 <code>Java</code> 代码，如下</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;hello jsp&lt;/h1&gt;

    &lt;%
        System.out.println(&quot;hello,jsp~&quot;);
    %&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-测试" tabindex="-1"><a class="header-anchor" href="#_2-5-测试" aria-hidden="true">#</a> 2.5 测试</h3><p>启动服务器并在浏览器地址栏输入 <code>http://localhost:8080/jsp-demo/hello.jsp</code>，我们可以在页面上看到如下内容</p><figure><img src="`+v+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>同时也可以看到在 <code>idea</code> 的控制台看到输出的 <code>hello,jsp~</code> 内容。</p><h2 id="_3-jsp-原理" tabindex="-1"><a class="header-anchor" href="#_3-jsp-原理" aria-hidden="true">#</a> 3，JSP 原理</h2><p>我们之前说 JSP 就是一个页面，那么在 JSP 中写 <code>html</code> 标签，我们能理解，但是为什么还可以写 <code>Java</code> 代码呢？</p><p>因为 ==JSP 本质上就是一个 Servlet。==接下来我们聊聊访问jsp时的流程</p><figure><img src="'+k+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>浏览器第一次访问 <code>hello.jsp</code> 页面</li><li><code>tomcat</code> 会将 <code>hello.jsp</code> 转换为名为 <code>hello_jsp.java</code> 的一个 <code>Servlet</code></li><li><code>tomcat</code> 再将转换的 <code>servlet</code> 编译成字节码文件 <code>hello_jsp.class</code></li><li><code>tomcat</code> 会执行该字节码文件，向外提供服务</li></ol><p>我们可以到项目所在磁盘目录下找 <code>target\\tomcat\\work\\Tomcat\\localhost\\jsp-demo\\org\\apache\\jsp</code> 目录，而这个目录下就能看到转换后的 <code>servlet</code></p><figure><img src="'+m+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开 <code>hello_jsp.java</code> 文件，来查看里面的代码</p><figure><img src="'+g+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>由上面的类的继承关系可以看到继承了名为 <code>HttpJspBase</code> 这个类，那我们在看该类的继承关系。到资料中的找如下目录： <code>资料\\tomcat源码\\apache-tomcat-8.5.68-src\\java\\org\\apache\\jasper\\runtime</code> ，该目录下就有 <code>HttpJspBase</code> 类，查看该类的继承关系</p><figure><img src="'+b+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以看到该类继承了 <code>HttpServlet</code> ；那么 <code>hello_jsp</code> 这个类就间接的继承了 <code>HttpServlet</code> ，也就说明 <code>hello_jsp</code> 是一个 <code>servlet</code>。</p><p>继续阅读 <code>hello_jsp</code> 类的代码，可以看到有一个名为 <code>_jspService()</code> 的方法，该方法就是每次访问 <code>jsp</code> 时自动执行的方法，和 <code>servlet</code> 中的 <code>service</code> 方法一样 。</p><p>而在 <code>_jspService()</code> 方法中可以看到往浏览器写标签的代码：</p><figure><img src="'+q+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以前我们自己写 <code>servlet</code> 时，这部分代码是由我们自己来写，现在有了 <code>jsp</code> 后，由tomcat完成这部分功能。</p><blockquote><p>jsp在第一次被访问的时候，由Tomcat翻译为一个Servlet的java文件，然后编译执行。之后如果jsp的内容不改变，则不会重新编译，仅执行。直到jsp发生改变，又会再下次访问时重新翻译及编译执行。</p></blockquote><h2 id="_4-jsp-脚本" tabindex="-1"><a class="header-anchor" href="#_4-jsp-脚本" aria-hidden="true">#</a> 4，JSP 脚本</h2><p>JSP脚本用于在 JSP页面内定义 Java代码。在之前的入门案例中我们就在 JSP 页面定义的 Java 代码就是 JSP 脚本。</p><h3 id="_4-1-jsp-脚本分类" tabindex="-1"><a class="header-anchor" href="#_4-1-jsp-脚本分类" aria-hidden="true">#</a> 4.1 JSP 脚本分类</h3><p>JSP 脚本有如下三个分类：</p><ul><li>&lt;% %&gt;：（代码块）内容会直接放到_jspService()方法之中</li><li>&lt;%= %&gt;：（表达式）内容会放到out.print()中，作为out.print()的参数</li><li>&lt;%! %&gt;：（声明）内容会放到_jspService()方法之外，被类直接包含</li></ul><p><strong>代码演示：</strong></p><p>在 <code>hello.jsp</code> 中书写</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%
    System.out.println(&quot;hello,jsp~&quot;);
    int i = 3;
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过浏览器访问 <code>hello.jsp</code> 后，查看转换的 <code>hello_jsp.java</code> 文件，i 变量定义在了 <code>_jspService()</code> 方法中</p><figure><img src="`+h+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 <code>hello.jsp</code> 中书写</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%=&quot;hello&quot;%&gt;
&lt;%=i%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过浏览器访问 <code>hello.jsp</code> 后，查看转换的 <code>hello_jsp.java</code> 文件，该脚本的内容被放在了 <code>out.print()</code> 中，作为参数</p><figure><img src="`+f+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 <code>hello.jsp</code> 中书写</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%!
    void  show(){}
	String name = &quot;zhangsan&quot;;
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过浏览器访问 <code>hello.jsp</code> 后，查看转换的 <code>hello_jsp.java</code> 文件，该脚本的内容被放在了成员位置</p><figure><img src="`+y+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_4-2-案例" tabindex="-1"><a class="header-anchor" href="#_4-2-案例" aria-hidden="true">#</a> 4.2 案例</h3><h4 id="_4-2-1-需求" tabindex="-1"><a class="header-anchor" href="#_4-2-1-需求" aria-hidden="true">#</a> 4.2.1 需求</h4><p>使用JSP脚本展示品牌数据</p><figure><img src="'+j+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>说明：</p><ul><li>在资料 <code>资料\\1. JSP案例素材</code> 中提供了 <code>brand.html</code> 静态页面</li><li>在该案例中数据不从数据库中查询，而是在 JSP 页面上写死</li></ul><h4 id="_4-2-2-实现" tabindex="-1"><a class="header-anchor" href="#_4-2-2-实现" aria-hidden="true">#</a> 4.2.2 实现</h4><ul><li><p>将资料 <code>资料\\1. JSP案例素材</code> 中的 <code>Brand.java</code> 文件放置到项目的 <code>com.beisheng.pojo</code> 包下</p></li><li><p>在项目的 <code>webapp</code> 中创建 <code>brand.jsp</code> ，并将 <code>brand.html</code>页面中的内容拷贝过来。<code>brand.jsp</code> 内容如下</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type=&quot;button&quot; value=&quot;新增&quot;&gt;&lt;br&gt;
&lt;hr&gt;
    &lt;table border=&quot;1&quot; cellspacing=&quot;0&quot; width=&quot;800&quot;&gt;
        &lt;tr&gt;
            &lt;th&gt;序号&lt;/th&gt;
            &lt;th&gt;品牌名称&lt;/th&gt;
            &lt;th&gt;企业名称&lt;/th&gt;
            &lt;th&gt;排序&lt;/th&gt;
            &lt;th&gt;品牌介绍&lt;/th&gt;
            &lt;th&gt;状态&lt;/th&gt;
            &lt;th&gt;操作&lt;/th&gt;

        &lt;/tr&gt;
        &lt;tr align=&quot;center&quot;&gt;
            &lt;td&gt;1&lt;/td&gt;
            &lt;td&gt;三只松鼠&lt;/td&gt;
            &lt;td&gt;三只松鼠&lt;/td&gt;
            &lt;td&gt;100&lt;/td&gt;
            &lt;td&gt;三只松鼠，好吃不上火&lt;/td&gt;
            &lt;td&gt;启用&lt;/td&gt;
            &lt;td&gt;&lt;a href=&quot;#&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
        &lt;/tr&gt;

        &lt;tr align=&quot;center&quot;&gt;
            &lt;td&gt;2&lt;/td&gt;
            &lt;td&gt;优衣库&lt;/td&gt;
            &lt;td&gt;优衣库&lt;/td&gt;
            &lt;td&gt;10&lt;/td&gt;
            &lt;td&gt;优衣库，服适人生&lt;/td&gt;
            &lt;td&gt;禁用&lt;/td&gt;

            &lt;td&gt;&lt;a href=&quot;#&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
        &lt;/tr&gt;

        &lt;tr align=&quot;center&quot;&gt;
            &lt;td&gt;3&lt;/td&gt;
            &lt;td&gt;小米&lt;/td&gt;
            &lt;td&gt;小米科技有限公司&lt;/td&gt;
            &lt;td&gt;1000&lt;/td&gt;
            &lt;td&gt;为发烧而生&lt;/td&gt;
            &lt;td&gt;启用&lt;/td&gt;

            &lt;td&gt;&lt;a href=&quot;#&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在页面中的数据都是假数据。</p></li><li><p>在 <code>brand.jsp</code> 中准备一些数据</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%
    // 查询数据库
    List&lt;Brand&gt; brands = new ArrayList&lt;Brand&gt;();
    brands.add(new Brand(1,&quot;三只松鼠&quot;,&quot;三只松鼠&quot;,100,&quot;三只松鼠，好吃不上火&quot;,1));
    brands.add(new Brand(2,&quot;优衣库&quot;,&quot;优衣库&quot;,200,&quot;优衣库，服适人生&quot;,0));
    brands.add(new Brand(3,&quot;小米&quot;,&quot;小米科技有限公司&quot;,1000,&quot;为发烧而生&quot;,1));
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>==注意：==这里的类是需要导包的</p></blockquote></li><li><p>将 <code>brand.jsp</code> 页面中的 <code>table</code> 标签中的数据改为动态的</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot; width=&quot;800&quot;&gt;
    &lt;tr&gt;
        &lt;th&gt;序号&lt;/th&gt;
        &lt;th&gt;品牌名称&lt;/th&gt;
        &lt;th&gt;企业名称&lt;/th&gt;
        &lt;th&gt;排序&lt;/th&gt;
        &lt;th&gt;品牌介绍&lt;/th&gt;
        &lt;th&gt;状态&lt;/th&gt;
        &lt;th&gt;操作&lt;/th&gt;

    &lt;/tr&gt;

    &lt;%
     for (int i = 0; i &lt; brands.size(); i++) {
         //获取集合中的 每一个 Brand 对象
         Brand brand = brands.get(i);
     }
    %&gt;
    &lt;tr align=&quot;center&quot;&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;三只松鼠&lt;/td&gt;
        &lt;td&gt;三只松鼠&lt;/td&gt;
        &lt;td&gt;100&lt;/td&gt;
        &lt;td&gt;三只松鼠，好吃不上火&lt;/td&gt;
        &lt;td&gt;启用&lt;/td&gt;
        &lt;td&gt;&lt;a href=&quot;#&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的for循环需要将 <code>tr</code> 标签包裹起来，这样才能实现循环的效果，代码改进为</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot; width=&quot;800&quot;&gt;
    &lt;tr&gt;
        &lt;th&gt;序号&lt;/th&gt;
        &lt;th&gt;品牌名称&lt;/th&gt;
        &lt;th&gt;企业名称&lt;/th&gt;
        &lt;th&gt;排序&lt;/th&gt;
        &lt;th&gt;品牌介绍&lt;/th&gt;
        &lt;th&gt;状态&lt;/th&gt;
        &lt;th&gt;操作&lt;/th&gt;

    &lt;/tr&gt;

    &lt;%
     for (int i = 0; i &lt; brands.size(); i++) {
         //获取集合中的 每一个 Brand 对象
         Brand brand = brands.get(i);
    %&gt;
    	 &lt;tr align=&quot;center&quot;&gt;
            &lt;td&gt;1&lt;/td&gt;
            &lt;td&gt;三只松鼠&lt;/td&gt;
            &lt;td&gt;三只松鼠&lt;/td&gt;
            &lt;td&gt;100&lt;/td&gt;
            &lt;td&gt;三只松鼠，好吃不上火&lt;/td&gt;
            &lt;td&gt;启用&lt;/td&gt;
            &lt;td&gt;&lt;a href=&quot;#&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;%
     }
    %&gt;

&lt;/table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：&lt;%%&gt; 里面写的是 Java 代码，而外边写的是 HTML 标签</p></blockquote><p>上面代码中的 <code>td</code> 标签中的数据都需要是动态的，所以还需要改进</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot; width=&quot;800&quot;&gt;
    &lt;tr&gt;
        &lt;th&gt;序号&lt;/th&gt;
        &lt;th&gt;品牌名称&lt;/th&gt;
        &lt;th&gt;企业名称&lt;/th&gt;
        &lt;th&gt;排序&lt;/th&gt;
        &lt;th&gt;品牌介绍&lt;/th&gt;
        &lt;th&gt;状态&lt;/th&gt;
        &lt;th&gt;操作&lt;/th&gt;

    &lt;/tr&gt;

    &lt;%
     for (int i = 0; i &lt; brands.size(); i++) {
         //获取集合中的 每一个 Brand 对象
         Brand brand = brands.get(i);
    %&gt;
    	 &lt;tr align=&quot;center&quot;&gt;
            &lt;td&gt;&lt;%=brand.getId()%&gt;&lt;/td&gt;
            &lt;td&gt;&lt;%=brand.getBrandName()%&gt;&lt;/td&gt;
            &lt;td&gt;&lt;%=brand.getCompanyName()%&gt;&lt;/td&gt;
            &lt;td&gt;&lt;%=brand.getOrdered()%&gt;&lt;/td&gt;
            &lt;td&gt;&lt;%=brand.getDescription()%&gt;&lt;/td&gt;
            &lt;td&gt;&lt;%=brand.getStatus() == 1 ? &quot;启用&quot;:&quot;禁用&quot;%&gt;&lt;/td&gt;
            &lt;td&gt;&lt;a href=&quot;#&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;%
     }
    %&gt;

&lt;/table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_4-2-3-成品代码" tabindex="-1"><a class="header-anchor" href="#_4-2-3-成品代码" aria-hidden="true">#</a> 4.2.3 成品代码</h4><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page import=&quot;com.beisheng.pojo.Brand&quot; %&gt;
&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;

&lt;%
    // 查询数据库
    List&lt;Brand&gt; brands = new ArrayList&lt;Brand&gt;();
    brands.add(new Brand(1,&quot;三只松鼠&quot;,&quot;三只松鼠&quot;,100,&quot;三只松鼠，好吃不上火&quot;,1));
    brands.add(new Brand(2,&quot;优衣库&quot;,&quot;优衣库&quot;,200,&quot;优衣库，服适人生&quot;,0));
    brands.add(new Brand(3,&quot;小米&quot;,&quot;小米科技有限公司&quot;,1000,&quot;为发烧而生&quot;,1));

%&gt;


&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type=&quot;button&quot; value=&quot;新增&quot;&gt;&lt;br&gt;
&lt;hr&gt;
&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot; width=&quot;800&quot;&gt;
    &lt;tr&gt;
        &lt;th&gt;序号&lt;/th&gt;
        &lt;th&gt;品牌名称&lt;/th&gt;
        &lt;th&gt;企业名称&lt;/th&gt;
        &lt;th&gt;排序&lt;/th&gt;
        &lt;th&gt;品牌介绍&lt;/th&gt;
        &lt;th&gt;状态&lt;/th&gt;
        &lt;th&gt;操作&lt;/th&gt;
    &lt;/tr&gt;
    &lt;%
        for (int i = 0; i &lt; brands.size(); i++) {
            Brand brand = brands.get(i);
    %&gt;

    &lt;tr align=&quot;center&quot;&gt;
        &lt;td&gt;&lt;%=brand.getId()%&gt;&lt;/td&gt;
        &lt;td&gt;&lt;%=brand.getBrandName()%&gt;&lt;/td&gt;
        &lt;td&gt;&lt;%=brand.getCompanyName()%&gt;&lt;/td&gt;
        &lt;td&gt;&lt;%=brand.getOrdered()%&gt;&lt;/td&gt;
        &lt;td&gt;&lt;%=brand.getDescription()%&gt;&lt;/td&gt;
		&lt;td&gt;&lt;%=brand.getStatus() == 1 ? &quot;启用&quot;:&quot;禁用&quot;%&gt;&lt;/td&gt;
        &lt;td&gt;&lt;a href=&quot;#&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
    &lt;/tr&gt;

    &lt;%
        }
    %&gt;
&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-4-测试" tabindex="-1"><a class="header-anchor" href="#_4-2-4-测试" aria-hidden="true">#</a> 4.2.4 测试</h4><p>在浏览器地址栏输入 <code>http://localhost:8080/jsp-demo/brand.jsp</code> ，页面展示效果如下</p><figure><img src="`+S+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_4-3-jsp-缺点" tabindex="-1"><a class="header-anchor" href="#_4-3-jsp-缺点" aria-hidden="true">#</a> 4.3 JSP 缺点</h3><p>通过上面的案例，我们可以看到 JSP 的很多缺点。</p><p>由于 JSP页面内，既可以定义 HTML 标签，又可以定义 Java代码，造成了以下问题：</p><ul><li><p>书写麻烦：特别是复杂的页面</p><p>既要写 HTML 标签，还要写 Java 代码</p></li><li><p>阅读麻烦</p><p>上面案例的代码，相信你后期再看这段代码时还需要花费很长的时间去梳理</p></li><li><p>复杂度高：运行需要依赖于各种环境，JRE，JSP容器，JavaEE…</p></li><li><p>占内存和磁盘：JSP会自动生成.java和.class文件占磁盘，运行的是.class文件占内存</p></li><li><p>调试困难：出错后，需要找到自动生成的.java文件进行调试</p></li><li><p>不利于团队协作：前端人员不会 Java，后端人员不精 HTML</p><p>如果页面布局发生变化，前端工程师对静态页面进行修改，然后再交给后端工程师，由后端工程师再将该页面改为 JSP 页面</p></li></ul><p>由于上述的问题， ==JSP 已逐渐退出历史舞台，==以后开发更多的是使用 <mark>HTML + Ajax</mark> 来替代。Ajax 是我们后续会重点学习的技术。有个这个技术后，前端工程师负责前端页面开发，而后端工程师只负责前端代码开发。下来对技术的发展进行简单的说明</p><figure><img src="'+x+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><p>第一阶段：使用 <code>servlet</code> 即实现逻辑代码编写，也对页面进行拼接。这种模式我们之前也接触过</p></li><li><p>第二阶段：随着技术的发展，出现了 <code>JSP</code> ，人们发现 <code>JSP</code> 使用起来比 <code>Servlet</code> 方便很多，但是还是要在 <code>JSP</code> 中嵌套 <code>Java</code> 代码，也不利于后期的维护</p></li><li><p>第三阶段：使用 <code>Servlet</code> 进行逻辑代码开发，而使用 <code>JSP</code> 进行数据展示</p><figure><img src="'+w+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><p>第四阶段：使用 <code>servlet</code> 进行后端逻辑代码开发，而使用 <code>HTML</code> 进行数据展示。而这里面就存在问题，<code>HTML</code> 是静态页面，怎么进行动态数据展示呢？这就是 <code>ajax</code> 的作用了。</p></li></ol><p>那既然 JSP 已经逐渐的退出历史舞台，那我们为什么还要学习 <code>JSP</code> 呢？原因有两点：</p><ul><li>一些公司可能有些老项目还在用 <code>JSP</code> ，所以要求我们必须动 <code>JSP</code></li><li>我们如果不经历这些复杂的过程，就不能体现后面阶段开发的简单</li></ul><p>接下来我们来学习第三阶段，使用 <code>EL表达式</code> 和 <code>JSTL</code> 标签库替换 <code>JSP</code> 中的 <code>Java</code> 代码。</p><h2 id="_5-el-表达式" tabindex="-1"><a class="header-anchor" href="#_5-el-表达式" aria-hidden="true">#</a> 5，EL 表达式</h2><h3 id="_5-1-概述" tabindex="-1"><a class="header-anchor" href="#_5-1-概述" aria-hidden="true">#</a> 5.1 概述</h3><p>EL（全称Expression Language ）表达式语言，用于简化 JSP 页面内的 Java 代码。</p><p>EL 表达式的主要作用是 <mark>获取数据</mark>。其实就是从域对象中获取数据，然后将数据展示在页面上。</p>',102),K=n("p",null,[s("而 EL 表达式的语法也比较简单，=="),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mrow",null,[n("mi",null,"e"),n("mi",null,"x"),n("mi",null,"p"),n("mi",null,"r"),n("mi",null,"e"),n("mi",null,"s"),n("mi",null,"s"),n("mi",null,"i"),n("mi",null,"o"),n("mi",null,"n")]),n("mo",null,"="),n("mo",null,"="),n("mtext",null,"。例如：")]),n("annotation",{encoding:"application/x-tex"},"{expression}== 。例如：")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal"},"x"),n("span",{class:"mord mathnormal"},"p"),n("span",{class:"mord mathnormal"},"ress"),n("span",{class:"mord mathnormal"},"i"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal"},"n")]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"=="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord cjk_fallback"},"。例如：")])])]),s("{brands} 就是获取域中存储的 key 为 brands 的数据。")],-1),Q=a(`<h3 id="_5-2-代码演示" tabindex="-1"><a class="header-anchor" href="#_5-2-代码演示" aria-hidden="true">#</a> 5.2 代码演示</h3><ul><li><p>定义servlet，在 servlet 中封装一些数据并存储到 request 域对象中并转发到 <code>el-demo.jsp</code> 页面。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/demo1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletDemo1</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. 准备数据</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">&gt;</span></span> brands <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brands<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;三只松鼠&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;三只松鼠&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token string">&quot;三只松鼠，好吃不上火&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brands<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;优衣库&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;优衣库&quot;</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;优衣库，服适人生&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brands<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;小米科技有限公司&quot;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token string">&quot;为发烧而生&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2. 存储到request域中</span>
        request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;brands&quot;</span><span class="token punctuation">,</span>brands<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3. 转发到 el-demo.jsp</span>
        request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/el-demo.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><mark>注意：</mark> 此处需要用转发，因为转发才可以使用 request 对象作为域对象进行数据共享</p></blockquote></li><li><p>在 <code>el-demo.jsp</code> 中通过 EL表达式 获取数据</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    \${brands}
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在浏览器的地址栏输入 <code>http://localhost:8080/jsp-demo/demo1</code> ，页面效果如下：</p><figure><img src="`+_+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li></ul><h3 id="_5-3-域对象" tabindex="-1"><a class="header-anchor" href="#_5-3-域对象" aria-hidden="true">#</a> 5.3 域对象</h3><p>JavaWeb中有四大域对象，分别是：</p><ul><li>page：当前页面有效</li><li>request：当前请求有效</li><li>session：当前会话有效</li><li>application：当前应用有效</li></ul><p>el 表达式获取数据，会依次从这4个域中寻找，直到找到为止。而这四个域对象的作用范围如下图所示</p><figure><img src="'+B+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>例如： \${brands}，el 表达式获取数据，会先从page域对象中获取数据，如果没有再到 requet 域对象中获取数据，如果再没有再到 session 域对象中获取，如果还没有才会到 application 中获取数据。</p><h2 id="_6-jstl标签" tabindex="-1"><a class="header-anchor" href="#_6-jstl标签" aria-hidden="true">#</a> 6，JSTL标签</h2><h3 id="_6-1-概述" tabindex="-1"><a class="header-anchor" href="#_6-1-概述" aria-hidden="true">#</a> 6.1 概述</h3><h4 id="jsp中注释的写法" tabindex="-1"><a class="header-anchor" href="#jsp中注释的写法" aria-hidden="true">#</a> jsp中注释的写法</h4><blockquote><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;!--html注释 --&gt;
&lt;%-- jsp的注释
&lt;%
  //  java的注释
    /**/
    /** */

%&gt;
--%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="jsp的指令" tabindex="-1"><a class="header-anchor" href="#jsp的指令" aria-hidden="true">#</a> jsp的指令</h4><blockquote><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--page页面相关参数设置，都在page中。其他属性保持默认即可，isELIgnored一定要手动设置为false，否则在低版本tomcat中，jsp会默认忽略EL表达式--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; isELIgnored=&quot;false&quot; %&gt;
&lt;%--taglib 标签库指令，用于引入外部标签库，目前我们只会用到jstl--%&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%-- include指令用于包含其他页面。&lt;%@include file=&quot;jstl-if.jsp&quot;%&gt;--%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>JSP标准标签库(Jsp Standarded Tag Library) ，使用标签取代JSP页面上的Java代码。如下代码就是JSTL标签</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:if test=&quot;\${flag == 1}&quot;&gt;
    男
&lt;/c:if&gt;
&lt;c:if test=&quot;\${flag == 2}&quot;&gt;
    女
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码看起来是不是比 JSP 中嵌套 Java 代码看起来舒服好了。而且前端工程师对标签是特别敏感的，他们看到这段代码是能看懂的。</p><p>JSTL 提供了很多标签，如下图</p><figure><img src="`+I+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我们只对两个最常用的标签进行讲解，<code>&lt;c:forEach&gt;</code> 标签和 <code>&lt;c:if&gt;</code> 标签。</p><p>JSTL 使用也是比较简单的，分为如下步骤：</p><ul><li><p>导入坐标</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>jstl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jstl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>taglibs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>standard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在JSP页面上引入JSTL标签库</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用标签</p></li></ul><h3 id="_6-2-if-标签" tabindex="-1"><a class="header-anchor" href="#_6-2-if-标签" aria-hidden="true">#</a> 6.2 if 标签</h3><p><code>&lt;c:if&gt;</code>：相当于 if 判断</p><ul><li>属性：test，用于定义条件表达式</li></ul><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:if test=&quot;\${flag == 1}&quot;&gt;
    男
&lt;/c:if&gt;
&lt;c:if test=&quot;\${flag == 2}&quot;&gt;
    女
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码演示：</strong></p><ul><li><p>定义一个 <code>servlet</code> ，在该 <code>servlet</code> 中向 request 域对象中添加 键是 <code>status</code> ，值为 <code>1</code> 的数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/demo2&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletDemo2</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. 存储数据到request域中</span>
        request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2. 转发到 jstl-if.jsp</span>
        数据request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/jstl-if.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义 <code>jstl-if.jsp</code> 页面，在该页面使用 <code>&lt;c:if&gt;</code> 标签</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--
        c:if：来完成逻辑判断，替换java  if else
    --%&gt;
    &lt;c:if test=&quot;\${status ==1}&quot;&gt;
        启用
    &lt;/c:if&gt;

    &lt;c:if test=&quot;\${status ==0}&quot;&gt;
        禁用
    &lt;/c:if&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><mark>注意：</mark> 在该页面已经要引入 JSTL核心标签库</p><p><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;</code></p></blockquote></li></ul><h3 id="_6-3-foreach-标签" tabindex="-1"><a class="header-anchor" href="#_6-3-foreach-标签" aria-hidden="true">#</a> 6.3 forEach 标签</h3><p><code>&lt;c:forEach&gt;</code>：相当于 for 循环。java中有增强for循环和普通for循环，JSTL 中的 <code>&lt;c:forEach&gt;</code> 也有两种用法</p><h4 id="_6-3-1-用法一" tabindex="-1"><a class="header-anchor" href="#_6-3-1-用法一" aria-hidden="true">#</a> 6.3.1 用法一</h4><p>类似于 Java 中的增强for循环。涉及到的 <code>&lt;c:forEach&gt;</code> 中的属性如下</p><ul><li><p>items：被遍历的容器</p></li><li><p>var：遍历产生的临时变量</p></li><li><p>varStatus：遍历状态对象</p></li></ul><p>如下代码，是从域对象中获取名为 brands 数据，该数据是一个集合；遍历遍历，并给该集合中的每一个元素起名为 <code>brand</code>，是 Brand对象。在循环里面使用 EL表达式获取每一个Brand对象的属性值</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:forEach items=&quot;\${brands}&quot; var=&quot;brand&quot;&gt;
    &lt;tr align=&quot;center&quot;&gt;
        &lt;td&gt;\${brand.id}&lt;/td&gt;
        &lt;td&gt;\${brand.brandName}&lt;/td&gt;
        &lt;td&gt;\${brand.companyName}&lt;/td&gt;
        &lt;td&gt;\${brand.description}&lt;/td&gt;
    &lt;/tr&gt;
&lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码演示：</strong></p><ul><li><p><code>servlet</code> 还是使用之前的名为 <code>ServletDemo1</code> 。</p></li><li><p>定义名为 <code>jstl-foreach.jsp</code> 页面，内容如下：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;

&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type=&quot;button&quot; value=&quot;新增&quot;&gt;&lt;br&gt;
&lt;hr&gt;
&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot; width=&quot;800&quot;&gt;
    &lt;tr&gt;
        &lt;th&gt;序号&lt;/th&gt;
        &lt;th&gt;品牌名称&lt;/th&gt;
        &lt;th&gt;企业名称&lt;/th&gt;
        &lt;th&gt;排序&lt;/th&gt;
        &lt;th&gt;品牌介绍&lt;/th&gt;
        &lt;th&gt;状态&lt;/th&gt;
        &lt;th&gt;操作&lt;/th&gt;
    &lt;/tr&gt;

    &lt;c:forEach items=&quot;\${brands}&quot; var=&quot;brand&quot; varStatus=&quot;status&quot;&gt;
        &lt;tr align=&quot;center&quot;&gt;
            &lt;%--&lt;td&gt;\${brand.id}&lt;/td&gt;--%&gt;
            &lt;td&gt;\${status.count}&lt;/td&gt;
            &lt;td&gt;\${brand.brandName}&lt;/td&gt;
            &lt;td&gt;\${brand.companyName}&lt;/td&gt;
            &lt;td&gt;\${brand.ordered}&lt;/td&gt;
            &lt;td&gt;\${brand.description}&lt;/td&gt;
            &lt;c:if test=&quot;\${brand.status == 1}&quot;&gt;
                &lt;td&gt;启用&lt;/td&gt;
            &lt;/c:if&gt;
            &lt;c:if test=&quot;\${brand.status != 1}&quot;&gt;
                &lt;td&gt;禁用&lt;/td&gt;
            &lt;/c:if&gt;
            &lt;td&gt;&lt;a href=&quot;#&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/c:forEach&gt;
&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_6-3-2-用法二" tabindex="-1"><a class="header-anchor" href="#_6-3-2-用法二" aria-hidden="true">#</a> 6.3.2 用法二</h4><p>类似于 Java 中的普通for循环。涉及到的 <code>&lt;c:forEach&gt;</code> 中的属性如下</p><ul><li><p>begin：开始数</p></li><li><p>end：结束数</p></li><li><p>step：步长</p></li></ul><p>实例代码：</p><p>从0循环到10，变量名是 <code>i</code> ，每次自增1</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:forEach begin=&quot;0&quot; end=&quot;10&quot; step=&quot;1&quot; var=&quot;i&quot;&gt;
    \${i}
&lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-mvc模式和三层架构" tabindex="-1"><a class="header-anchor" href="#_7-mvc模式和三层架构" aria-hidden="true">#</a> 7，MVC模式和三层架构</h2><p>MVC 模式和三层架构是一些理论的知识，将来我们使用了它们进行代码开发会让我们代码维护性和扩展性更好。</p><h3 id="_7-1-mvc模式" tabindex="-1"><a class="header-anchor" href="#_7-1-mvc模式" aria-hidden="true">#</a> 7.1 MVC模式</h3><p>MVC 是一种分层开发的模式，其中：</p><ul><li><p>M：Model，业务模型，处理业务，数据封装</p></li><li><p>V：View，视图，界面展示，用户交互</p></li><li><p>C：Controller，控制器，处理请求，调用模型和视图</p></li></ul><figure><img src="`+P+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>控制器（serlvlet）用来接收浏览器发送过来的请求，控制器调用模型（JavaBean）来获取数据，比如从数据库查询数据；控制器获取到数据后再交由视图（JSP）进行数据展示。</p><p><strong>MVC 好处：</strong></p><ul><li><p>职责单一，互不影响。每个角色做它自己的事，各司其职。</p></li><li><p>有利于分工协作。</p></li><li><p>有利于组件重用</p></li></ul><h3 id="_7-2-三层架构" tabindex="-1"><a class="header-anchor" href="#_7-2-三层架构" aria-hidden="true">#</a> 7.2 三层架构</h3><p>三层架构是将我们的项目分成了三个层面，分别是 <code>表现层</code>、<code>业务逻辑层</code>、<code>数据访问层</code>。</p><figure><img src="'+J+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>数据访问层/持久层/DAO层：对数据库的CRUD基本操作</li><li>业务逻辑层：对业务逻辑进行封装，组合数据访问层层中基本功能，形成复杂的业务逻辑功能。例如 <code>注册业务功能</code> ，我们会先调用 <code>数据访问层</code> 的 <code>selectByName()</code> 方法判断该用户名是否存在，如果不存在再调用 <code>数据访问层</code> 的 <code>insert()</code> 方法进行数据的添加操作</li><li>表现层/web层/控制层：接收请求，封装数据，调用业务逻辑层，响应数据</li></ul><p>而整个流程是，浏览器发送请求，表现层的Servlet接收请求并调用业务逻辑层的方法进行业务逻辑处理，而业务逻辑层方法调用数据访问层方法进行数据的操作，依次返回到serlvet，然后servlet将数据交由 JSP 进行展示。</p><p>三层架构的每一层都有特有的包名称：</p><ul><li>表现层： <code>com.beisheng.controller</code> 或者 <code>com.beisheng.web</code></li><li>业务逻辑层：<code>com.beisheng.service</code></li><li>数据访问层：<code>com.beisheng.dao</code> 或者 <code>com.beisheng.mapper</code></li></ul><p>后期我们还会学习一些框架，不同的框架是对不同层进行封装的</p><figure><img src="'+T+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>职责单一原则</p></blockquote><h3 id="_7-3-mvc-和-三层架构" tabindex="-1"><a class="header-anchor" href="#_7-3-mvc-和-三层架构" aria-hidden="true">#</a> 7.3 MVC 和 三层架构</h3><p>通过 MVC 和 三层架构 的学习，有些人肯定混淆了。那他们有什么区别和联系？</p><figure><img src="'+M+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如上图上半部分是 MVC 模式，上图下半部分是三层架构。 <code>MVC 模式</code> 中的 C（控制器）和 V（视图）就是 <code>三层架构</code> 中的表现层，而 <code>MVC 模式</code> 中的 M（模型）就是 <code>三层架构</code> 中的 业务逻辑层 和 数据访问层。</p><p>可以将 <code>MVC 模式</code> 理解成是一个大的概念，而 <code>三层架构</code> 是对 <code>MVC 模式</code> 实现架构的思想。 那么我们以后按照要求将不同层的代码写在不同的包下，每一层里功能职责做到单一，将来如果将表现层的技术换掉，而业务逻辑层和数据访问层的代码不需要发生变化。</p><h2 id="_8-案例" tabindex="-1"><a class="header-anchor" href="#_8-案例" aria-hidden="true">#</a> 8，案例</h2><p><strong>需求：完成品牌数据的增删改查操作</strong></p><figure><img src="'+N+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这个功能我们之前一直在做，而这个案例是将学习的所有的内容（包含 MVC模式 和 三层架构）进行应用，并将整个流程贯穿起来。</p><h3 id="_8-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_8-1-环境准备" aria-hidden="true">#</a> 8.1 环境准备</h3><p>环境准备工作，我们分以下步骤实现：</p><ul><li><p>创建新的模块 brand_demo，引入坐标</p></li><li><p>创建三层架构的包结构</p></li><li><p>数据库表 tb_brand</p></li><li><p>实体类 Brand</p></li><li><p>MyBatis 基础环境</p><ul><li><p>Mybatis-config.xml</p></li><li><p>BrandMapper.xml</p></li><li><p>BrandMapper接口</p></li></ul></li></ul><h4 id="_8-1-1-创建工程" tabindex="-1"><a class="header-anchor" href="#_8-1-1-创建工程" aria-hidden="true">#</a> 8.1.1 创建工程</h4><p>创建新的模块 brand_demo，引入坐标。我们只要分析出要用到哪儿些技术，那么需要哪儿些坐标也就明确了</p><ul><li>需要操作数据库。mysql的驱动包</li><li>要使用mybatis框架。mybaits的依赖包</li><li>web项目需要用到servlet和jsp。servlet和jsp的依赖包</li><li>需要使用 jstl 进行数据展示。jstl的依赖包</li></ul><p><code>pom.xml</code> 内容如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>brand-demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">&gt;</span></span>war<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- mybatis --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--mysql--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.34<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--servlet--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--jsp--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jsp-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--jstl--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>jstl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jstl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>taglibs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>standard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-2-创建包" tabindex="-1"><a class="header-anchor" href="#_8-1-2-创建包" aria-hidden="true">#</a> 8.1.2 创建包</h4><p>创建不同的包结构，用来存储不同的类。包结构如下</p><figure><img src="`+E+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="_8-1-3-创建表" tabindex="-1"><a class="header-anchor" href="#_8-1-3-创建表" aria-hidden="true">#</a> 8.1.3 创建表</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除tb_brand表</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> tb_brand<span class="token punctuation">;</span>
<span class="token comment">-- 创建tb_brand表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> tb_brand
<span class="token punctuation">(</span>
    <span class="token comment">-- id 主键</span>
    id           <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
    <span class="token comment">-- 品牌名称</span>
    brand_name   <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">-- 企业名称</span>
    company_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">-- 排序字段</span>
    ordered      <span class="token keyword">int</span><span class="token punctuation">,</span>
    <span class="token comment">-- 描述信息</span>
    description  <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">-- 状态：0：禁用  1：启用</span>
    <span class="token keyword">status</span>       <span class="token keyword">int</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 添加数据</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> tb_brand <span class="token punctuation">(</span>brand_name<span class="token punctuation">,</span> company_name<span class="token punctuation">,</span> ordered<span class="token punctuation">,</span> description<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">)</span>
<span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;三只松鼠&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三只松鼠股份有限公司&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;好吃不上火&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token string">&#39;华为&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;华为技术有限公司&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&#39;华为致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token string">&#39;小米&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小米科技有限公司&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">&#39;are you ok&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-4-创建实体类" tabindex="-1"><a class="header-anchor" href="#_8-1-4-创建实体类" aria-hidden="true">#</a> 8.1.4 创建实体类</h4><p>在 <code>pojo</code> 包下创建名为 <code>Brand</code> 的类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Brand</span> <span class="token punctuation">{</span>
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


    <span class="token keyword">public</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> brandName<span class="token punctuation">,</span> <span class="token class-name">String</span> companyName<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brandName <span class="token operator">=</span> brandName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>companyName <span class="token operator">=</span> companyName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> brandName<span class="token punctuation">,</span> <span class="token class-name">String</span> companyName<span class="token punctuation">,</span> <span class="token class-name">Integer</span> ordered<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">,</span> <span class="token class-name">Integer</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brandName <span class="token operator">=</span> brandName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>companyName <span class="token operator">=</span> companyName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ordered <span class="token operator">=</span> ordered<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

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
        <span class="token keyword">return</span> <span class="token string">&quot;Brand{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span>
                <span class="token string">&quot;, brandName=&#39;&quot;</span> <span class="token operator">+</span> brandName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, companyName=&#39;&quot;</span> <span class="token operator">+</span> companyName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, ordered=&quot;</span> <span class="token operator">+</span> ordered <span class="token operator">+</span>
                <span class="token string">&quot;, description=&#39;&quot;</span> <span class="token operator">+</span> description <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, status=&quot;</span> <span class="token operator">+</span> status <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-5-准备mybatis环境" tabindex="-1"><a class="header-anchor" href="#_8-1-5-准备mybatis环境" aria-hidden="true">#</a> 8.1.5 准备mybatis环境</h4><p>定义核心配置文件 <code>Mybatis-config.xml</code> ，并将该文件放置在 <code>resources</code> 下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--起别名--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.beisheng.pojo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>JDBC<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POOLED<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>driver<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.mysql.jdbc.Driver<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbc:mysql:///db1?useSSL=false<span class="token entity named-entity" title="&amp;">&amp;amp;</span>useServerPrepStmts=true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1234<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--扫描mapper--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.beisheng.mapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>resources</code> 下创建放置映射配置文件的目录结构 <code>com/beisheng/mapper</code>，并在该目录下创建映射配置文件 <code>BrandMapper.xml</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.beisheng.mapper.BrandMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-查询所有" tabindex="-1"><a class="header-anchor" href="#_8-2-查询所有" aria-hidden="true">#</a> 8.2 查询所有</h3><figure><img src="`+L+'" alt="image-20210818174441917" tabindex="0" loading="lazy"><figcaption>image-20210818174441917</figcaption></figure><p>当我们点击 <code>index.html</code> 页面中的 <code>查询所有</code> 这个超链接时，就能查询到上图右半部分的数据。</p><p>对于上述的功能，点击 <code>查询所有</code> 超链接是需要先请后端的 <code>servlet</code> ，由 <code>servlet</code> 跳转到对应的页面进行数据的动态展示。而整个流程如下图：</p><figure><img src="'+O+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="_8-2-1-编写brandmapper" tabindex="-1"><a class="header-anchor" href="#_8-2-1-编写brandmapper" aria-hidden="true">#</a> 8.2.1 编写BrandMapper</h4><p>在 <code>mapper</code> 包下创建创建 <code>BrandMapper</code> 接口，在接口中定义 <code>selectAll()</code> 方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 查询所有
  * <span class="token keyword">@return</span>
  */</span>
<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from tb_brand&quot;</span><span class="token punctuation">)</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-2-编写工具类" tabindex="-1"><a class="header-anchor" href="#_8-2-2-编写工具类" aria-hidden="true">#</a> 8.2.2 编写工具类</h4><p>在 <code>com.beisheng</code> 包下创建 <code>utils</code> 包，并在该包下创建名为 <code>SqlSessionFactoryUtils</code> 工具类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SqlSessionFactoryUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SqlSessionFactory</span> sqlSessionFactory<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">//静态代码块会随着类的加载而自动执行，且只执行一次</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> resource <span class="token operator">=</span> <span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sqlSessionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SqlSessionFactory</span> <span class="token function">getSqlSessionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> sqlSessionFactory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-3-编写brandservice" tabindex="-1"><a class="header-anchor" href="#_8-2-3-编写brandservice" aria-hidden="true">#</a> 8.2.3 编写BrandService</h4><p>在 <code>service</code> 包下创建 <code>BrandService</code> 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BrandService</span> <span class="token punctuation">{</span>
    <span class="token class-name">SqlSessionFactory</span> factory <span class="token operator">=</span> <span class="token class-name">SqlSessionFactoryUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSessionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 查询所有
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//调用BrandMapper.selectAll()</span>

        <span class="token comment">//2. 获取SqlSession</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 获取BrandMapper</span>
        <span class="token class-name">BrandMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">BrandMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4. 调用方法</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">&gt;</span></span> brands <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> brands<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-4-编写servlet" tabindex="-1"><a class="header-anchor" href="#_8-2-4-编写servlet" aria-hidden="true">#</a> 8.2.4 编写Servlet</h4><p>在 <code>web</code> 包下创建名为 <code>SelectAllServlet</code> 的 <code>servlet</code>，该 <code>servlet</code> 的逻辑如下：</p><ul><li>调用 <code>BrandService</code> 的 <code>selectAll()</code> 方法进行业务逻辑处理，并接收返回的结果</li><li>将上一步返回的结果存储到 <code>request</code> 域对象中</li><li>跳转到 <code>brand.jsp</code> 页面进行数据的展示</li></ul><p>具体的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/selectAllServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SelectAllServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span>  <span class="token class-name">BrandService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrandService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">//1. 调用BrandService完成查询</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">&gt;</span></span> brands <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2. 存入request域中</span>
        request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;brands&quot;</span><span class="token punctuation">,</span>brands<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 转发到brand.jsp</span>
        request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/brand.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-5-编写brand-jsp页面" tabindex="-1"><a class="header-anchor" href="#_8-2-5-编写brand-jsp页面" aria-hidden="true">#</a> 8.2.5 编写brand.jsp页面</h4><p>将资料 <code>资料\\2. 品牌增删改查案例\\静态页面</code> 下的 <code>brand.html</code> 页面拷贝到项目的 <code>webapp</code> 目录下，并将该页面改成 <code>brand.jsp</code> 页面，而 <code>brand.jsp</code> 页面在表格中使用 <code>JSTL</code> 和 <code>EL表达式</code> 从request域对象中获取名为 <code>brands</code> 的集合数据并展示出来。页面内容如下：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;

&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;hr&gt;
&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot; width=&quot;80%&quot;&gt;
    &lt;tr&gt;
        &lt;th&gt;序号&lt;/th&gt;
        &lt;th&gt;品牌名称&lt;/th&gt;
        &lt;th&gt;企业名称&lt;/th&gt;
        &lt;th&gt;排序&lt;/th&gt;
        &lt;th&gt;品牌介绍&lt;/th&gt;
        &lt;th&gt;状态&lt;/th&gt;
        &lt;th&gt;操作&lt;/th&gt;
    &lt;/tr&gt;

    &lt;c:forEach items=&quot;\${brands}&quot; var=&quot;brand&quot; varStatus=&quot;status&quot;&gt;
        &lt;tr align=&quot;center&quot;&gt;
            &lt;%--&lt;td&gt;\${brand.id}&lt;/td&gt;--%&gt;
            &lt;td&gt;\${status.count}&lt;/td&gt;
            &lt;td&gt;\${brand.brandName}&lt;/td&gt;
            &lt;td&gt;\${brand.companyName}&lt;/td&gt;
            &lt;td&gt;\${brand.ordered}&lt;/td&gt;
            &lt;td&gt;\${brand.description}&lt;/td&gt;
            &lt;c:if test=&quot;\${brand.status == 1}&quot;&gt;
                &lt;td&gt;启用&lt;/td&gt;
            &lt;/c:if&gt;
            &lt;c:if test=&quot;\${brand.status != 1}&quot;&gt;
                &lt;td&gt;禁用&lt;/td&gt;
            &lt;/c:if&gt;
            &lt;td&gt;&lt;a href=&quot;/brand-demo/selectByIdServlet?id=\${brand.id}&quot;&gt;修改&lt;/a&gt; &lt;a href=&quot;#&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/c:forEach&gt;
&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-6-测试" tabindex="-1"><a class="header-anchor" href="#_8-2-6-测试" aria-hidden="true">#</a> 8.2.6 测试</h4><p>启动服务器，并在浏览器输入 <code>http://localhost:8080/brand-demo/index.html</code>，看到如下 <code>查询所有</code> 的超链接，点击该链接就可以查询出所有的品牌数据</p><figure><img src="`+$+`" alt="image-20210818182952394" tabindex="0" loading="lazy"><figcaption>image-20210818182952394</figcaption></figure><p>为什么出现这个问题呢？是因为查询到的字段名和实体类对象的属性名没有一一对应。相比看到这大家一定会解决了，就是在映射配置文件中使用 <code>resultMap</code> 标签定义映射关系。映射配置文件内容如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.beisheng.mapper.BrandMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brandResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brand<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brand_name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brandName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>company_name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>companyName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且在 <code>BrandMapper</code> 接口中的 <code>selectAll()</code> 上使用 <code>@ResuleMap</code> 注解指定使用该映射</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 查询所有
  * <span class="token keyword">@return</span>
  */</span>
<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from tb_brand&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResultMap</span><span class="token punctuation">(</span><span class="token string">&quot;brandResultMap&quot;</span><span class="token punctuation">)</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Brand</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启服务器，再次访问就能看到我们想要的数据了</p><figure><img src="`+H+'" alt="image-20210819190221889" tabindex="0" loading="lazy"><figcaption>image-20210819190221889</figcaption></figure><h3 id="_8-3-添加" tabindex="-1"><a class="header-anchor" href="#_8-3-添加" aria-hidden="true">#</a> 8.3 添加</h3><figure><img src="'+z+'" alt="image-20210819192049571" tabindex="0" loading="lazy"><figcaption>image-20210819192049571</figcaption></figure><p>上图是做 添加 功能流程。点击 <code>新增</code> 按钮后，会先跳转到 <code>addBrand.jsp</code> 新增页面，在该页面输入要添加的数据，输入完毕后点击 <code>提交</code> 按钮，需要将数据提交到后端，而后端进行数据添加操作，并重新将所有的数据查询出来。整个流程如下：</p><figure><img src="'+C+`" alt="image-20210819192737982" tabindex="0" loading="lazy"><figcaption>image-20210819192737982</figcaption></figure><p>接下来我们根据流程来实现功能：</p><h4 id="_8-3-1-编写brandmapper方法" tabindex="-1"><a class="header-anchor" href="#_8-3-1-编写brandmapper方法" aria-hidden="true">#</a> 8.3.1 编写BrandMapper方法</h4><p>在 <code>BrandMapper</code> 接口，在接口中定义 <code>add(Brand brand)</code> 方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Insert</span><span class="token punctuation">(</span><span class="token string">&quot;insert into tb_brand values(null,#{brandName},#{companyName},#{ordered},#{description},#{status})&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-2-编写brandservice方法" tabindex="-1"><a class="header-anchor" href="#_8-3-2-编写brandservice方法" aria-hidden="true">#</a> 8.3.2 编写BrandService方法</h4><p>在 <code>BrandService</code> 类中定义添加品牌数据方法 <code>add(Brand brand)</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 	<span class="token doc-comment comment">/**
     * 添加
     * <span class="token keyword">@param</span> <span class="token parameter">brand</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//2. 获取SqlSession</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 获取BrandMapper</span>
        <span class="token class-name">BrandMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">BrandMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4. 调用方法</span>
        mapper<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//提交事务</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//释放资源</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-3-改进brand-jsp页面" tabindex="-1"><a class="header-anchor" href="#_8-3-3-改进brand-jsp页面" aria-hidden="true">#</a> 8.3.3 改进brand.jsp页面</h4><p>我们需要在该页面表格的上面添加 <code>新增</code> 按钮</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>新增<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并给该按钮绑定单击事件，当点击了该按钮需要跳转到 <code>brand.jsp</code> 添加品牌数据的页面</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;/brand-demo/addBrand.jsp&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>==注意：==该 <code>script</code> 标签建议放在 <code>body</code> 结束标签前面。</p></blockquote><h4 id="_8-3-4-编写addbrand-jsp页面" tabindex="-1"><a class="header-anchor" href="#_8-3-4-编写addbrand-jsp页面" aria-hidden="true">#</a> 8.3.4 编写addBrand.jsp页面</h4><p>从资料 <code>资料\\2. 品牌增删改查案例\\静态页面</code> 中将 <code>addBrand.html</code> 页面拷贝到项目的 <code>webapp</code> 下，并改成 <code>addBrand.jsp</code> 动态页面</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;添加品牌&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h3&gt;添加品牌&lt;/h3&gt;
&lt;form action=&quot;/brand-demo/addServlet&quot; method=&quot;post&quot;&gt;
    品牌名称：&lt;input name=&quot;brandName&quot;&gt;&lt;br&gt;
    企业名称：&lt;input name=&quot;companyName&quot;&gt;&lt;br&gt;
    排序：&lt;input name=&quot;ordered&quot;&gt;&lt;br&gt;
    描述信息：&lt;textarea rows=&quot;5&quot; cols=&quot;20&quot; name=&quot;description&quot;&gt;&lt;/textarea&gt;&lt;br&gt;
    状态：
    &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;0&quot;&gt;禁用
    &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;1&quot;&gt;启用&lt;br&gt;

    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-5-编写servlet" tabindex="-1"><a class="header-anchor" href="#_8-3-5-编写servlet" aria-hidden="true">#</a> 8.3.5 编写servlet</h4><p>在 <code>web</code> 包下创建 <code>AddServlet</code> 的 <code>servlet</code>，该 <code>servlet</code> 的逻辑如下:</p><ul><li>设置处理post请求乱码的字符集</li><li>接收客户端提交的数据</li><li>将接收到的数据封装到 <code>Brand</code> 对象中</li><li>调用 <code>BrandService</code> 的<code>add()</code> 方法进行添加的业务逻辑处理</li><li>跳转到 <code>selectAllServlet</code> 资源重新查询数据</li></ul><p>具体的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/addServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">BrandService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrandService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">//处理POST请求的乱码问题</span>
        request<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//1. 接收表单提交的数据，封装为一个Brand对象</span>
        <span class="token class-name">String</span> brandName <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;brandName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> companyName <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;companyName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> ordered <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;ordered&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> description <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> status <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//封装为一个Brand对象</span>
        <span class="token class-name">Brand</span> brand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setBrandName</span><span class="token punctuation">(</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setCompanyName</span><span class="token punctuation">(</span>companyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setOrdered</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>ordered<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2. 调用service 完成添加</span>
        service<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3. 转发到查询所有Servlet</span>
        request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/selectAllServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-6-测试" tabindex="-1"><a class="header-anchor" href="#_8-3-6-测试" aria-hidden="true">#</a> 8.3.6 测试</h4><p>点击 <code>brand.jsp</code> 页面的 <code>新增</code> 按钮，会跳转到 <code>addBrand.jsp</code>页面</p><figure><img src="`+R+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>点击 <code>提交</code> 按钮，就能看到如下页面，里面就包含我们刚添加的数据</p><figure><img src="'+A+'" alt="image-20210819220738074" tabindex="0" loading="lazy"><figcaption>image-20210819220738074</figcaption></figure><h3 id="_8-4-修改" tabindex="-1"><a class="header-anchor" href="#_8-4-修改" aria-hidden="true">#</a> 8.4 修改</h3><figure><img src="'+D+'" alt="image-20210819223202473" tabindex="0" loading="lazy"><figcaption>image-20210819223202473</figcaption></figure><p>点击每条数据后面的 <code>编辑</code> 按钮会跳转到修改页面，如下图：</p><figure><img src="'+F+'" alt="image-20210819223314230" tabindex="0" loading="lazy"><figcaption>image-20210819223314230</figcaption></figure><p>在该修改页面我们可以看到将 <code>编辑</code> 按钮所在行的数据 <mark>回显</mark> 到表单，然后需要修改那个数据在表单中进行修改，然后点击 <code>提交</code> 的按钮将数据提交到后端，后端再将数据存储到数据库中。</p><p>从上面的例子我们知道 <code>修改</code> 功能需要从两方面进行实现，数据回显和修改操作。</p><h4 id="_8-4-1-回显数据" tabindex="-1"><a class="header-anchor" href="#_8-4-1-回显数据" aria-hidden="true">#</a> 8.4.1 回显数据</h4><figure><img src="'+U+'" alt="image-20210819223830713" tabindex="0" loading="lazy"><figcaption>image-20210819223830713</figcaption></figure><p>上图就是回显数据的效果。要实现这个效果，那当点击 <code>修改</code> 按钮时不能直接跳转到 <code>update.jsp</code> 页面，而是需要先带着当前行数据的 <code>id</code> 请求后端程序，后端程序根据 <code>id</code> 查询数据，将数据存储到域对象中跳转到 <code>update.jsp</code> 页面进行数据展示。整体流程如下</p><figure><img src="'+V+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="_8-4-1-1-编写brandmapper方法" tabindex="-1"><a class="header-anchor" href="#_8-4-1-1-编写brandmapper方法" aria-hidden="true">#</a> 8.4.1.1 编写BrandMapper方法</h5><p>在 <code>BrandMapper</code> 接口，在接口中定义 <code>selectById(int id)</code> 方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token doc-comment comment">/**
     * 根据id查询
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from tb_brand where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResultMap</span><span class="token punctuation">(</span><span class="token string">&quot;brandResultMap&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">Brand</span> <span class="token function">selectById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-4-1-2-编写brandservice方法" tabindex="-1"><a class="header-anchor" href="#_8-4-1-2-编写brandservice方法" aria-hidden="true">#</a> 8.4.1.2 编写BrandService方法</h5><p>在 <code>BrandService</code> 类中定义根据id查询数据方法 <code>selectById(int id)</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 根据id查询
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Brand</span> <span class="token function">selectById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//调用BrandMapper.selectAll()</span>
        <span class="token comment">//2. 获取SqlSession</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 获取BrandMapper</span>
        <span class="token class-name">BrandMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">BrandMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 调用方法</span>
        <span class="token class-name">Brand</span> brand <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> brand<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-4-1-3-编写servlet" tabindex="-1"><a class="header-anchor" href="#_8-4-1-3-编写servlet" aria-hidden="true">#</a> 8.4.1.3 编写servlet</h5><p>在 <code>web</code> 包下创建 <code>SelectByIdServlet</code> 的 <code>servlet</code>，该 <code>servlet</code> 的逻辑如下:</p><ul><li>获取请求数据 <code>id</code></li><li>调用 <code>BrandService</code> 的 <code>selectById()</code> 方法进行数据查询的业务逻辑</li><li>将查询到的数据存储到 request 域对象中</li><li>跳转到 <code>update.jsp</code> 页面进行数据真实</li></ul><p>具体代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/selectByIdServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SelectByIdServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span>  <span class="token class-name">BrandService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrandService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. 接收id</span>
        <span class="token class-name">String</span> id <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2. 调用service查询</span>
        <span class="token class-name">Brand</span> brand <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 存储到request中</span>
        request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;brand&quot;</span><span class="token punctuation">,</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 转发到update.jsp</span>
        request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/update.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-4-1-4-编写update-jsp页面" tabindex="-1"><a class="header-anchor" href="#_8-4-1-4-编写update-jsp页面" aria-hidden="true">#</a> 8.4.1.4 编写update.jsp页面</h5><p>拷贝 <code>addBrand.jsp</code> 页面，改名为 <code>update.jsp</code> 并做出以下修改：</p><ul><li><p><code>title</code> 标签内容改为 <code>修改品牌</code></p></li><li><p><code>form</code> 标签的 <code>action</code> 属性值改为 <code>/brand-demo/updateServlet</code></p></li><li><p><code>input</code> 标签要进行数据回显，需要设置 <code>value</code> 属性</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>品牌名称：&lt;input name=&quot;brandName&quot; value=&quot;\${brand.brandName}&quot;&gt;&lt;br&gt;
企业名称：&lt;input name=&quot;companyName&quot; value=&quot;\${brand.companyName}&quot;&gt;&lt;br&gt;
排序：&lt;input name=&quot;ordered&quot; value=&quot;\${brand.ordered}&quot;&gt;&lt;br&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>textarea</code> 标签要进行数据回显，需要在标签体中使用 <code>EL表达式</code></p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>描述信息：&lt;textarea rows=&quot;5&quot; cols=&quot;20&quot; name=&quot;description&quot;&gt;\${brand.description} &lt;/textarea&gt;&lt;br&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>单选框使用 <code>if</code> 标签需要判断 <code>brand.status</code> 的值是 1 还是 0 在指定的单选框上使用 <code>checked</code> 属性，表示被选中状态</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>状态：
&lt;c:if test=&quot;\${brand.status == 0}&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;0&quot; checked&gt;禁用
    &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;1&quot;&gt;启用&lt;br&gt;
&lt;/c:if&gt;

&lt;c:if test=&quot;\${brand.status == 1}&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;0&quot; &gt;禁用
    &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;1&quot; checked&gt;启用&lt;br&gt;
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>综上，<code>update.jsp</code> 代码如下：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;修改品牌&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h3&gt;修改品牌&lt;/h3&gt;
&lt;form action=&quot;/brand-demo/updateServlet&quot; method=&quot;post&quot;&gt;

    品牌名称：&lt;input name=&quot;brandName&quot; value=&quot;\${brand.brandName}&quot;&gt;&lt;br&gt;
    企业名称：&lt;input name=&quot;companyName&quot; value=&quot;\${brand.companyName}&quot;&gt;&lt;br&gt;
    排序：&lt;input name=&quot;ordered&quot; value=&quot;\${brand.ordered}&quot;&gt;&lt;br&gt;
    描述信息：&lt;textarea rows=&quot;5&quot; cols=&quot;20&quot; name=&quot;description&quot;&gt;\${brand.description} &lt;/textarea&gt;&lt;br&gt;
    状态：
    &lt;c:if test=&quot;\${brand.status == 0}&quot;&gt;
        &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;0&quot; checked&gt;禁用
        &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;1&quot;&gt;启用&lt;br&gt;
    &lt;/c:if&gt;

    &lt;c:if test=&quot;\${brand.status == 1}&quot;&gt;
        &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;0&quot; &gt;禁用
        &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;1&quot; checked&gt;启用&lt;br&gt;
    &lt;/c:if&gt;

    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-4-2-修改数据" tabindex="-1"><a class="header-anchor" href="#_8-4-2-修改数据" aria-hidden="true">#</a> 8.4.2 修改数据</h4><p>做完回显数据后，接下来我们要做修改数据了，而下图是修改数据的效果：</p><figure><img src="`+G+'" alt="image-20210819225948187" tabindex="0" loading="lazy"><figcaption>image-20210819225948187</figcaption></figure><p>在修改页面进行数据修改，点击 <code>提交</code> 按钮，会将数据提交到后端程序，后端程序会对表中的数据进行修改操作，然后重新进行数据的查询操作。整体流程如下：</p><figure><img src="'+Y+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="_8-4-2-1-编写brandmapper方法" tabindex="-1"><a class="header-anchor" href="#_8-4-2-1-编写brandmapper方法" aria-hidden="true">#</a> 8.4.2.1 编写BrandMapper方法</h5><p>在 <code>BrandMapper</code> 接口，在接口中定义 <code>update(Brand brand)</code> 方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * 修改
  * <span class="token keyword">@param</span> <span class="token parameter">brand</span>
  */</span>
<span class="token annotation punctuation">@Update</span><span class="token punctuation">(</span><span class="token string">&quot;update tb_brand set brand_name = #{brandName},company_name = #{companyName},ordered = #{ordered},description = #{description},status = #{status} where id = #{id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-4-2-2-编写brandservice方法" tabindex="-1"><a class="header-anchor" href="#_8-4-2-2-编写brandservice方法" aria-hidden="true">#</a> 8.4.2.2 编写BrandService方法</h5><p>在 <code>BrandService</code> 类中定义根据id查询数据方法 <code>update(Brand brand)</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token doc-comment comment">/**
     * 修改
     * <span class="token keyword">@param</span> <span class="token parameter">brand</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//2. 获取SqlSession</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 获取BrandMapper</span>
        <span class="token class-name">BrandMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">BrandMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 调用方法</span>
        mapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//提交事务</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//释放资源</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-4-2-3-编写servlet" tabindex="-1"><a class="header-anchor" href="#_8-4-2-3-编写servlet" aria-hidden="true">#</a> 8.4.2.3 编写servlet</h5><p>在 <code>web</code> 包下创建 <code>AddServlet</code> 的 <code>servlet</code>，该 <code>servlet</code> 的逻辑如下:</p><ul><li>设置处理post请求乱码的字符集</li><li>接收客户端提交的数据</li><li>将接收到的数据封装到 <code>Brand</code> 对象中</li><li>调用 <code>BrandService</code> 的<code>update()</code> 方法进行添加的业务逻辑处理</li><li>跳转到 <code>selectAllServlet</code> 资源重新查询数据</li></ul><p>具体的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/updateServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UpdateServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">BrandService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrandService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">//处理POST请求的乱码问题</span>
        request<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//1. 接收表单提交的数据，封装为一个Brand对象</span>
        <span class="token class-name">String</span> id <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> brandName <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;brandName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> companyName <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;companyName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> ordered <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;ordered&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> description <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> status <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//封装为一个Brand对象</span>
        <span class="token class-name">Brand</span> brand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Brand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setBrandName</span><span class="token punctuation">(</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setCompanyName</span><span class="token punctuation">(</span>companyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setOrdered</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>ordered<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
        brand<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2. 调用service 完成修改</span>
        service<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3. 转发到查询所有Servlet</span>
        request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/selectAllServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>存在问题：update.jsp 页面提交数据时是没有携带主键数据的，而后台修改数据需要根据主键进行修改。</mark></p><p>针对这个问题，我们不希望页面将主键id展示给用户看，但是又希望在提交数据时能将主键id提交到后端。此时我们就想到了在学习 HTML 时学习的隐藏域，在 <code>update.jsp</code> 页面的表单中添加如下代码：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--隐藏域，提交id--%&gt;
&lt;input type=&quot;hidden&quot; name=&quot;id&quot; value=&quot;\${brand.id}&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>update.jsp</code> 页面的最终代码如下：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;修改品牌&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h3&gt;修改品牌&lt;/h3&gt;
&lt;form action=&quot;/brand-demo/updateServlet&quot; method=&quot;post&quot;&gt;

    &lt;%--隐藏域，提交id--%&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;id&quot; value=&quot;\${brand.id}&quot;&gt;

    品牌名称：&lt;input name=&quot;brandName&quot; value=&quot;\${brand.brandName}&quot;&gt;&lt;br&gt;
    企业名称：&lt;input name=&quot;companyName&quot; value=&quot;\${brand.companyName}&quot;&gt;&lt;br&gt;
    排序：&lt;input name=&quot;ordered&quot; value=&quot;\${brand.ordered}&quot;&gt;&lt;br&gt;
    描述信息：&lt;textarea rows=&quot;5&quot; cols=&quot;20&quot; name=&quot;description&quot;&gt;\${brand.description} &lt;/textarea&gt;&lt;br&gt;
    状态：
    &lt;c:if test=&quot;\${brand.status == 0}&quot;&gt;
        &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;0&quot; checked&gt;禁用
        &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;1&quot;&gt;启用&lt;br&gt;
    &lt;/c:if&gt;

    &lt;c:if test=&quot;\${brand.status == 1}&quot;&gt;
        &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;0&quot; &gt;禁用
        &lt;input type=&quot;radio&quot; name=&quot;status&quot; value=&quot;1&quot; checked&gt;启用&lt;br&gt;
    &lt;/c:if&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,200),Z=[X,K,Q];function nn(sn,an){return e(),p("div",null,Z)}const pn=t(W,[["render",nn],["__file","JSP.html.vue"]]);export{pn as default};
