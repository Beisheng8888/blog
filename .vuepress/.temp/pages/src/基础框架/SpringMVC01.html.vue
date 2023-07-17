<template><div><h1 id="springmvc01" tabindex="-1"><a class="header-anchor" href="#springmvc01" aria-hidden="true">#</a> SpringMVC01</h1>
<h2 id="一、springmvc简介" tabindex="-1"><a class="header-anchor" href="#一、springmvc简介" aria-hidden="true">#</a> 一、SpringMVC简介</h2>
<h3 id="_1-springmvc概述" tabindex="-1"><a class="header-anchor" href="#_1-springmvc概述" aria-hidden="true">#</a> 1 SpringMVC概述</h3>
<h4 id="问题导入" tabindex="-1"><a class="header-anchor" href="#问题导入" aria-hidden="true">#</a> 问题导入</h4>
<p>SpringMVC框架有什么优点？</p>
<h4 id="_1-1-springmvc概述" tabindex="-1"><a class="header-anchor" href="#_1-1-springmvc概述" aria-hidden="true">#</a> 1.1 SpringMVC概述</h4>
<ol>
<li>SpringMVC是一种基于Java实现MVC模型的轻量级Web框架</li>
<li>优点
<ol>
<li>使用简单，开发便捷（相比于Servlet）</li>
<li>灵活性强</li>
</ol>
</li>
</ol>
<figure><img src="@source/src/基础框架/assets/image-20210804185234370.png" alt="image-20210804185234370" tabindex="0" loading="lazy"><figcaption>image-20210804185234370</figcaption></figure>
<h3 id="_2-入门案例【重点】" tabindex="-1"><a class="header-anchor" href="#_2-入门案例【重点】" aria-hidden="true">#</a> 2 入门案例【重点】</h3>
<h4 id="问题导入-1" tabindex="-1"><a class="header-anchor" href="#问题导入-1" aria-hidden="true">#</a> 问题导入</h4>
<p>在Controller中如何定义访问路径，如何响应数据？</p>
<h4 id="_2-1-实现步骤" tabindex="-1"><a class="header-anchor" href="#_2-1-实现步骤" aria-hidden="true">#</a> 2.1 实现步骤</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1 创建web工程（Maven结构）
2 设置tomcat服务器，加载web工程(tomcat插件）
3 导入坐标（SpringMVC+Servlet）
4 定义处理请求的功能类（UserController）
5 编写SpringMVC配置类，加载处理请求的Bean。
6 加载SpringMVC配置，并设置SpringMVC请求拦截的路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_2-2-代码实现" aria-hidden="true">#</a> 2.2 代码实现</h4>
<h5 id="【第一步】创建web工程-maven结构" tabindex="-1"><a class="header-anchor" href="#【第一步】创建web工程-maven结构" aria-hidden="true">#</a> 【第一步】创建web工程（Maven结构）</h5>
<h5 id="【第二步】设置tomcat服务器-加载web工程-tomcat插件" tabindex="-1"><a class="header-anchor" href="#【第二步】设置tomcat服务器-加载web工程-tomcat插件" aria-hidden="true">#</a> 【第二步】设置tomcat服务器，加载web工程(tomcat插件）</h5>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">></span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="【第三步】导入坐标-springmvc-servlet" tabindex="-1"><a class="header-anchor" href="#【第三步】导入坐标-springmvc-servlet" aria-hidden="true">#</a> 【第三步】导入坐标（SpringMVC+Servlet）</h5>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-webmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.10.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项：</strong></p>
<ol>
<li>版本基于Spring主版本5.2.10.RELEASE制作</li>
<li>导入spring-webmvc坐标自动依赖spring相关坐标</li>
</ol>
<h5 id="【第四步】定义处理请求的功能类-usercontroller" tabindex="-1"><a class="header-anchor" href="#【第四步】定义处理请求的功能类-usercontroller" aria-hidden="true">#</a> 【第四步】定义处理请求的功能类（UserController）</h5>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//定义表现层控制器bean</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置映射路径为/save，即外部访问路径</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span>
    <span class="token comment">//设置当前操作返回结果为指定json数据（本质上是一个字符串信息）</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'info':'springmvc'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><mark>注意事项：</mark></strong></p>
<p>对于SpringMVC而言，Controller方法返回值默认表示要跳转的页面，没有对应的页面就会报错。如果不想跳转页面而是响应数据，那么就需要在方法上使用@ResponseBody注解。</p>
<h5 id="【第五步】编写springmvc配置类-加载处理请求的bean。" tabindex="-1"><a class="header-anchor" href="#【第五步】编写springmvc配置类-加载处理请求的bean。" aria-hidden="true">#</a> 【第五步】编写SpringMVC配置类，加载处理请求的Bean。</h5>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//springmvc配置类，本质上还是一个spring配置类</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.beisheng.controller"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="【第六步】加载springmvc配置-并设置springmvc请求拦截的路径" tabindex="-1"><a class="header-anchor" href="#【第六步】加载springmvc配置-并设置springmvc请求拦截的路径" aria-hidden="true">#</a> 【第六步】加载SpringMVC配置，并设置SpringMVC请求拦截的路径</h5>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//web容器配置类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDispatcherServletInitializer</span> <span class="token punctuation">{</span>
    <span class="token comment">//加载springmvc配置类，产生springmvc容器（本质还是spring容器）</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createServletApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//初始化WebApplicationContext对象</span>
        <span class="token class-name">AnnotationConfigWebApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//加载指定配置类</span>
        ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ctx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置由springmvc控制器处理的请求映射路径</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//加载spring配置类</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createRootApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-运行结果" tabindex="-1"><a class="header-anchor" href="#_2-3-运行结果" aria-hidden="true">#</a> 2.3 运行结果</h4>
<figure><img src="@source/src/基础框架/assets/image-20210804191218260.png" alt="image-20210804191218260" tabindex="0" loading="lazy"><figcaption>image-20210804191218260</figcaption></figure>
<h4 id="_2-4-案例注解和类解析" tabindex="-1"><a class="header-anchor" href="#_2-4-案例注解和类解析" aria-hidden="true">#</a> 2.4 案例注解和类解析</h4>
<h5 id="_2-4-1-controller注解" tabindex="-1"><a class="header-anchor" href="#_2-4-1-controller注解" aria-hidden="true">#</a> 2.4.1 @Controller注解</h5>
<ul>
<li>名称：@Controller</li>
<li>类型：类注解</li>
<li>位置：SpringMVC控制器类定义上方</li>
<li>作用：设定SpringMVC的核心控制器bean</li>
<li>范例</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-4-2-requestmapping注解" tabindex="-1"><a class="header-anchor" href="#_2-4-2-requestmapping注解" aria-hidden="true">#</a> 2.4.2 @RequestMapping注解</h5>
<ul>
<li>名称：@RequestMapping</li>
<li>类型：方法注解</li>
<li>位置：SpringMVC控制器方法定义上方</li>
<li>作用：设置当前控制器方法请求访问路径</li>
<li>范例</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：其实@RequestMapping注解还可以写到类上面，笔记后面会介绍到。</p>
</blockquote>
<h5 id="_2-4-3-responsebody注解" tabindex="-1"><a class="header-anchor" href="#_2-4-3-responsebody注解" aria-hidden="true">#</a> 2.4.3 @ResponseBody注解</h5>
<ul>
<li>名称：@ResponseBody</li>
<li>类型：方法注解</li>
<li>位置：SpringMVC控制器方法定义上方</li>
<li>作用：设置当前控制器方法响应内容为当前返回值，无需解析</li>
<li>范例</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'info':'springmvc'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-4-4-abstractdispatcherservletinitializer类" tabindex="-1"><a class="header-anchor" href="#_2-4-4-abstractdispatcherservletinitializer类" aria-hidden="true">#</a> 2.4.4 AbstractDispatcherServletInitializer类</h5>
<ul>
<li>
<p>AbstractDispatcherServletInitializer类是SpringMVC提供的快速初始化Web3.0容器的抽象类</p>
</li>
<li>
<p>AbstractDispatcherServletInitializer提供三个接口方法供用户实现</p>
<ul>
<li>createServletApplicationContext()方法，创建Servlet容器时，加载SpringMVC对应的bean并放入WebApplicationContext对象范围中，而WebApplicationContext的作用范围为ServletContext范围，即整个web容器范围。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//加载springmvc配置类，产生springmvc容器（本质还是spring容器）</span>
<span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createServletApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">AnnotationConfigWebApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ctx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>getServletMappings()方法，设定SpringMVC对应的请求映射路径，设置为/表示拦截所有请求，任意请求都将转入到SpringMVC进行处理。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//设置由springmvc控制器处理的请求映射路径</span>
<span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>createRootApplicationContext()方法，如果创建Servlet容器时需要加载非SpringMVC对应的bean，使用当前方法进行，使用方式同createServletApplicationContext()</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//加载spring配置类</span>
<span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createRootApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_2-5-入门程序开发总结-1-n" tabindex="-1"><a class="header-anchor" href="#_2-5-入门程序开发总结-1-n" aria-hidden="true">#</a> 2.5 入门程序开发总结(1+N)</h4>
<ul>
<li>一次性工作
<ul>
<li>创建工程，设置服务器，加载工程</li>
<li>导入坐标</li>
<li>创建web容器启动类，加载SpringMVC配置，并设置SpringMVC请求拦截路径</li>
<li>SpringMVC核心配置类（设置配置类，扫描controller包，加载Controller控制器bean）</li>
</ul>
</li>
<li>多次工作
<ul>
<li>定义处理请求的控制器类</li>
<li>定义处理请求的控制器方法，并配置映射路径（@RequestMapping）与返回json数据（@ResponseBody）</li>
</ul>
</li>
</ul>
<h3 id="_3-入门案例工作流程分析【理解】" tabindex="-1"><a class="header-anchor" href="#_3-入门案例工作流程分析【理解】" aria-hidden="true">#</a> 3 入门案例工作流程分析【理解】</h3>
<h4 id="_3-1-启动服务器初始化过程" tabindex="-1"><a class="header-anchor" href="#_3-1-启动服务器初始化过程" aria-hidden="true">#</a> 3.1 启动服务器初始化过程</h4>
<ol>
<li>服务器启动，执行ServletContainersInitConfig类，初始化web容器</li>
<li>执行createServletApplicationContext方法，创建了WebApplicationContext对象</li>
<li>加载SpringMvcConfig配置类</li>
<li>执行@ComponentScan加载对应的bean</li>
<li>加载UserController，每个@RequestMapping的名称对应一个具体的方法</li>
<li>执行getServletMappings方法，定义所有的请求都通过SpringMVC</li>
</ol>
<figure><img src="@source/src/基础框架/assets/image-20210804193122709.png" alt="image-20210804193122709" tabindex="0" loading="lazy"><figcaption>image-20210804193122709</figcaption></figure>
<h4 id="_3-2-单次请求过程" tabindex="-1"><a class="header-anchor" href="#_3-2-单次请求过程" aria-hidden="true">#</a> 3.2 单次请求过程</h4>
<ol>
<li>发送请求localhost/save</li>
<li>web容器发现所有请求都经过SpringMVC，将请求交给SpringMVC处理</li>
<li>解析请求路径/save</li>
<li>由/save匹配执行对应的方法save(）</li>
<li>执行save()</li>
<li>检测到有@ResponseBody直接将save()方法的返回值作为响应求体返回给请求方</li>
</ol>
<figure><img src="@source/src/基础框架/assets/image-20210804193327981.png" alt="image-20210804193327981" tabindex="0" loading="lazy"><figcaption>image-20210804193327981</figcaption></figure>
<h3 id="_4-controller加载控制" tabindex="-1"><a class="header-anchor" href="#_4-controller加载控制" aria-hidden="true">#</a> 4 Controller加载控制</h3>
<h4 id="问题导入-2" tabindex="-1"><a class="header-anchor" href="#问题导入-2" aria-hidden="true">#</a> 问题导入</h4>
<p>因为功能不同，如何避免Spring错误的加载到SpringMVC的bean？</p>
<h4 id="_4-1-controller加载控制与业务bean加载控制" tabindex="-1"><a class="header-anchor" href="#_4-1-controller加载控制与业务bean加载控制" aria-hidden="true">#</a> 4.1 Controller加载控制与业务bean加载控制</h4>
<ul>
<li>
<p>SpringMVC相关bean（表现层bean）</p>
</li>
<li>
<p>Spring控制的bean</p>
<ol>
<li>
<p>业务bean（Service）</p>
</li>
<li>
<p>功能bean（DataSource等）</p>
</li>
</ol>
</li>
<li>
<p>SpringMVC相关bean加载控制</p>
<ol>
<li>SpringMVC加载的bean对应的包均在com.beisheng.controller包内</li>
</ol>
</li>
<li>
<p>Spring相关bean加载控制</p>
<ol>
<li>方式一：Spring加载的bean设定扫描范围为com.beisheng，排除掉controller包内的bean</li>
<li>方式二：Spring加载的bean设定扫描范围为精准范围，例如service包、dao包等</li>
<li>方式三：不区分Spring与SpringMVC的环境，加载到同一个环境中</li>
</ol>
</li>
</ul>
<h4 id="_4-2-方式一代码实现" tabindex="-1"><a class="header-anchor" href="#_4-2-方式一代码实现" aria-hidden="true">#</a> 4.2 方式一代码实现</h4>
<ul>
<li>名称：@ComponentScan</li>
<li>类型：类注解</li>
<li>范例</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"com.beisheng"</span><span class="token punctuation">,</span>
               excludeFilters <span class="token operator">=</span> <span class="token annotation punctuation">@ComponentScan.Filter</span><span class="token punctuation">(</span>
                   type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">ANNOTATION</span><span class="token punctuation">,</span>
                   classes <span class="token operator">=</span> <span class="token class-name">Controller</span><span class="token punctuation">.</span><span class="token keyword">class</span>
               <span class="token punctuation">)</span>
              <span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>属性
<ol>
<li>excludeFilters：排除扫描路径中加载的bean，需要指定类别（type）与具体项（classes）</li>
<li>includeFilters：加载指定的bean，需要指定类别（type）与具体项（classes）</li>
</ol>
</li>
</ul>
<h4 id="_4-3-bean的加载格式" tabindex="-1"><a class="header-anchor" href="#_4-3-bean的加载格式" aria-hidden="true">#</a> 4.3 Bean的加载格式</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDispatcherServletInitializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createServletApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigWebApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ctx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createRootApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigWebApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">SpringConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ctx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>简化格式</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAnnotationConfigDispatcherServletInitializer</span><span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRootConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-postman【掌握】" tabindex="-1"><a class="header-anchor" href="#_5-postman【掌握】" aria-hidden="true">#</a> 5 PostMan【掌握】</h3>
<h4 id="_5-1-postman介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-postman介绍" aria-hidden="true">#</a> 5.1 PostMan介绍</h4>
<ul>
<li>Postman是一款功能强大的网页调试与发送网页HTTP请求的Chrome插件。</li>
<li>作用：常用于进行接口测试</li>
<li>特征
<ul>
<li>简单</li>
<li>实用</li>
<li>美观</li>
<li>大方</li>
</ul>
</li>
</ul>
<h4 id="_5-2-postman安装" tabindex="-1"><a class="header-anchor" href="#_5-2-postman安装" aria-hidden="true">#</a> 5.2 PostMan安装</h4>
<blockquote>
<p>双击资料中的“Postman-win64-8.3.1-Setup.exe”即可自动按照，打开之后需要注册，如果底部有如下链接，可以点击跳过注册</p>
</blockquote>
<figure><img src="@source/src/基础框架/assets/image-20210804194952058.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h4 id="_5-3-postman的使用" tabindex="-1"><a class="header-anchor" href="#_5-3-postman的使用" aria-hidden="true">#</a> 5.3 PostMan的使用</h4>
<h5 id="_5-3-1-创建workspace工作空间" tabindex="-1"><a class="header-anchor" href="#_5-3-1-创建workspace工作空间" aria-hidden="true">#</a> 5.3.1 创建WorkSpace工作空间</h5>
<figure><img src="@source/src/基础框架/assets/image-20210805150044862.png" alt="image-20210805150044862" tabindex="0" loading="lazy"><figcaption>image-20210805150044862</figcaption></figure>
<h5 id="_5-3-2-发送请求获取json数据" tabindex="-1"><a class="header-anchor" href="#_5-3-2-发送请求获取json数据" aria-hidden="true">#</a> 5.3.2 发送请求获取json数据</h5>
<figure><img src="@source/src/基础框架/assets/image-20210805150206831.png" alt="image-20210805150206831" tabindex="0" loading="lazy"><figcaption>image-20210805150206831</figcaption></figure>
<h5 id="_5-3-3-保存当前请求" tabindex="-1"><a class="header-anchor" href="#_5-3-3-保存当前请求" aria-hidden="true">#</a> 5.3.3 保存当前请求</h5>
<figure><img src="@source/src/基础框架/assets/image-20210805150417692.png" alt="image-20210805150417692" tabindex="0" loading="lazy"><figcaption>image-20210805150417692</figcaption></figure>
<blockquote>
<p>注意：第一次请求需要创建一个新的目录，后面就不需要创建新目录，直接保存到已经创建好的目录即可。</p>
</blockquote>
<h2 id="二、请求与响应" tabindex="-1"><a class="header-anchor" href="#二、请求与响应" aria-hidden="true">#</a> 二、请求与响应</h2>
<h3 id="_1-请求映射路径【重点】" tabindex="-1"><a class="header-anchor" href="#_1-请求映射路径【重点】" aria-hidden="true">#</a> 1 请求映射路径【重点】</h3>
<h4 id="问题导入-3" tabindex="-1"><a class="header-anchor" href="#问题导入-3" aria-hidden="true">#</a> 问题导入</h4>
<p>@RequestMapping注解注解可以写在哪？有什么作用？</p>
<h4 id="_1-1-requestmapping注解" tabindex="-1"><a class="header-anchor" href="#_1-1-requestmapping注解" aria-hidden="true">#</a> 1.1 @RequestMapping注解</h4>
<ul>
<li>名称：@RequestMapping</li>
<li>类型：<mark>方法注解  类注解</mark></li>
<li>位置：SpringMVC控制器方法定义上方</li>
<li>作用：设置当前控制器方法请求访问路径，如果设置在类上统一设置当前控制器方法请求访问路径前缀</li>
<li>范例</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token comment">//类上方配置的请求映射与方法上面配置的请求映射连接在一起，形成完整的请求映射路径</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">//请求路径映射</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span> <span class="token comment">//此时save方法的访问路径是：/user/save</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user save'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-请求参数" tabindex="-1"><a class="header-anchor" href="#_2-请求参数" aria-hidden="true">#</a> 2 请求参数</h3>
<h4 id="_2-1-发送普通类型参数【重点】" tabindex="-1"><a class="header-anchor" href="#_2-1-发送普通类型参数【重点】" aria-hidden="true">#</a> 2.1 发送普通类型参数【重点】</h4>
<h5 id="问题导入-4" tabindex="-1"><a class="header-anchor" href="#问题导入-4" aria-hidden="true">#</a> 问题导入</h5>
<p>如何解决POST请求中文乱码问题？</p>
<h5 id="_2-1-1-请求方式" tabindex="-1"><a class="header-anchor" href="#_2-1-1-请求方式" aria-hidden="true">#</a> 2.1.1 请求方式</h5>
<ul>
<li>GET请求</li>
<li>POST请求</li>
</ul>
<h5 id="_2-1-2-get请求传递普通参数" tabindex="-1"><a class="header-anchor" href="#_2-1-2-get请求传递普通参数" aria-hidden="true">#</a> 2.1.2 GET请求传递普通参数</h5>
<ul>
<li>普通参数：url地址传参，地址参数名与形参变量名相同，定义形参即可接收参数</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805102858905.png" alt="image-20210805102858905" tabindex="0" loading="lazy"><figcaption>image-20210805102858905</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//普通参数：请求参数与形参名称对应即可完成参数传递</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/commonParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">commonParam</span><span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 name ==> "</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 age ==> "</span><span class="token operator">+</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'common param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>问题：如果你传递的参数是中文试试，你们会发现接收到的参数出现了中文乱码问题。</li>
<li>原因：tomcat 8.5版本之后GET请求就不再出现中文乱码问题，但是我们使用的是tomcat7插件，所以会出现GET请求中文乱码问题。</li>
<li>解决：在pom.xml添加tomcat7插件处配置UTF-8字符集，解决GET请求中文乱码问题。</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">></span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--tomcat端口号--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--虚拟目录--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uriEncoding</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uriEncoding</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--访问路径编解码字符集--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-1-3-post请求传递普通参数" tabindex="-1"><a class="header-anchor" href="#_2-1-3-post请求传递普通参数" aria-hidden="true">#</a> 2.1.3 POST请求传递普通参数</h5>
<ul>
<li>普通参数：form表单post请求传参，表单参数名与形参变量名相同，定义形参即可接收参数</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805103041922.png" alt="image-20210805103041922" tabindex="0" loading="lazy"><figcaption>image-20210805103041922</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//普通参数：请求参数与形参名称对应即可完成参数传递</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/commonParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">commonParam</span><span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 name ==> "</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 age ==> "</span><span class="token operator">+</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'common param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：我们发现，POST请求传递的参数如果包含中文那么就会出现中文乱码问题，说明我们之前配置的tomcat插件uri路径编解码字符集无法解决POST请求中文乱码问题。那么如何解决呢？</p>
<h5 id="_2-1-4-post请求中文乱码处理" tabindex="-1"><a class="header-anchor" href="#_2-1-4-post请求中文乱码处理" aria-hidden="true">#</a> 2.1.4 POST请求中文乱码处理</h5>
<blockquote>
<p>在加载SpringMVC配置的配置类中指定字符过滤器。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAnnotationConfigDispatcherServletInitializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRootConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//乱码处理</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CharacterEncodingFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharacterEncodingFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filter<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>filter<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-五种类型参数传递" tabindex="-1"><a class="header-anchor" href="#_2-2-五种类型参数传递" aria-hidden="true">#</a> 2.2 五种类型参数传递</h4>
<h5 id="问题导入-5" tabindex="-1"><a class="header-anchor" href="#问题导入-5" aria-hidden="true">#</a> 问题导入</h5>
<p>当请求参数名与形参变量名不同，该如何接收请求参数？</p>
<h5 id="_2-2-1-五种类型参数介绍" tabindex="-1"><a class="header-anchor" href="#_2-2-1-五种类型参数介绍" aria-hidden="true">#</a> 2.2.1 五种类型参数介绍</h5>
<ul>
<li>普通参数</li>
<li>POJO类型参数</li>
<li>嵌套POJO类型参数</li>
<li>数组类型参数</li>
<li>集合类型参数</li>
</ul>
<h5 id="_2-2-2-普通参数【重点】" tabindex="-1"><a class="header-anchor" href="#_2-2-2-普通参数【重点】" aria-hidden="true">#</a> 2.2.2 普通参数【重点】</h5>
<ul>
<li>普通参数：当请求参数名与形参变量名不同，使用@RequestParam绑定参数关系</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805104824258.png" alt="image-20210805104824258" tabindex="0" loading="lazy"><figcaption>image-20210805104824258</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//普通参数：请求参数名与形参名不同时，使用@RequestParam注解关联请求参数名称与形参名称之间的关系</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/commonParamDifferentName"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">commonParamDifferentName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> userName <span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 userName ==> "</span><span class="token operator">+</span>userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 age ==> "</span><span class="token operator">+</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'common param different name'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>名称：@RequestParam</li>
<li>类型：形参注解</li>
<li>位置：SpringMVC控制器方法形参定义前面</li>
<li>作用：绑定请求参数与处理器方法形参间的关系</li>
<li>参数：
<ul>
<li>required：是否为必传参数</li>
<li>defaultValue：参数默认值</li>
</ul>
</li>
</ul>
<h5 id="_2-2-3-pojo类型参数【重点】" tabindex="-1"><a class="header-anchor" href="#_2-2-3-pojo类型参数【重点】" aria-hidden="true">#</a> 2.2.3 POJO类型参数【重点】</h5>
<ul>
<li>POJO参数：请求参数名与形参对象属性名相同，定义POJO类型形参即可接收参数</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805105056731.png" alt="image-20210805105056731" tabindex="0" loading="lazy"><figcaption>image-20210805105056731</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token comment">//你自己添加getter/setter/toString()方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//POJO参数：请求参数与形参对象中的属性对应即可完成参数传递</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/pojoParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pojoParam</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo参数传递 user ==> "</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'pojo param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><mark>注意事项：请求参数key的名称要和POJO中属性的名称一致，否则无法封装。</mark></strong></p>
<h5 id="_2-2-4-嵌套pojo类型参数" tabindex="-1"><a class="header-anchor" href="#_2-2-4-嵌套pojo类型参数" aria-hidden="true">#</a> 2.2.4 嵌套POJO类型参数</h5>
<ul>
<li>POJO对象中包含POJO对象</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Address</span> address<span class="token punctuation">;</span>
    <span class="token comment">//你自己添加getter/setter/toString()方法</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Address</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> province<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> city<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Address</span> address<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>嵌套POJO参数：请求参数名与形参对象属性名相同，按照对象层次结构关系即可接收嵌套POJO属性参数</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805105505625.png" alt="image-20210805105505625" tabindex="0" loading="lazy"><figcaption>image-20210805105505625</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//嵌套POJO参数：嵌套属性按照层次结构设定名称即可完成参数传递</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/pojoContainPojoParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pojoContainPojoParam</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo嵌套pojo参数传递 user ==> "</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'pojo contain pojo param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><mark>注意事项：请求参数key的名称要和POJO中属性的名称一致，否则无法封装。</mark></strong></p>
<h5 id="_2-2-5-数组类型参数" tabindex="-1"><a class="header-anchor" href="#_2-2-5-数组类型参数" aria-hidden="true">#</a> 2.2.5 数组类型参数</h5>
<ul>
<li>数组参数：请求参数名与形参对象属性名相同且请求参数为多个，定义数组类型即可接收参数</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805105825688.png" alt="image-20210805105825688" tabindex="0" loading="lazy"><figcaption>image-20210805105825688</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//数组参数：同名请求参数可以直接映射到对应名称的形参数组对象中</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/arrayParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">arrayParam</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> likes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"数组参数传递 likes ==> "</span><span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>likes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'array param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-6-集合类型参数" tabindex="-1"><a class="header-anchor" href="#_2-2-6-集合类型参数" aria-hidden="true">#</a> 2.2.6 集合类型参数</h5>
<ul>
<li>集合保存普通参数：请求参数名与形参集合对象名相同且请求参数为多个，@RequestParam绑定参数关系</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805105957957.png" alt="image-20210805105957957" tabindex="0" loading="lazy"><figcaption>image-20210805105957957</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//集合参数：同名请求参数可以使用@RequestParam注解映射到对应名称的集合对象中作为数据</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listParam</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> likes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"集合参数传递 likes ==> "</span><span class="token operator">+</span> likes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'list param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-json数据参数传递" tabindex="-1"><a class="header-anchor" href="#_2-3-json数据参数传递" aria-hidden="true">#</a> 2.3 json数据参数传递</h4>
<h5 id="问题导入-6" tabindex="-1"><a class="header-anchor" href="#问题导入-6" aria-hidden="true">#</a> 问题导入</h5>
<p>问题：@EnableWebMvc注解和@ResponseBody注解有什么用？</p>
<h5 id="_2-3-1-json数据参数介绍" tabindex="-1"><a class="header-anchor" href="#_2-3-1-json数据参数介绍" aria-hidden="true">#</a> 2.3.1 json数据参数介绍</h5>
<ul>
<li>json普通数组（[&quot;&quot;,&quot;&quot;,&quot;&quot;,...]）</li>
<li>json对象（{key:value,key:value,...}）</li>
<li>json对象数组（[{key:value,...},{key:value,...}]）</li>
</ul>
<h5 id="_2-3-2-传递json普通数组" tabindex="-1"><a class="header-anchor" href="#_2-3-2-传递json普通数组" aria-hidden="true">#</a> 2.3.2 传递json普通数组</h5>
<h6 id="_2-3-2-1-代码演示" tabindex="-1"><a class="header-anchor" href="#_2-3-2-1-代码演示" aria-hidden="true">#</a> 2.3.2.1 代码演示</h6>
<ol>
<li>添加json数据转换相关坐标</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>设置发送json数据（请求body中添加json数据）</li>
</ol>
<figure><img src="@source/src/基础框架/assets/image-20210805110937684.png" alt="image-20210805110937684" tabindex="0" loading="lazy"><figcaption>image-20210805110937684</figcaption></figure>
<ol start="3">
<li>开启自动转换json数据的支持</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.beisheng.controller"</span><span class="token punctuation">)</span>
<span class="token comment">//开启json数据类型自动转换</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项：</strong></p>
<p>@EnableWebMvc注解功能强大，该注解整合了多个功能，此处仅使用其中一部分功能，即json数据进行自动类型转换</p>
<ol start="4">
<li>在Controller中编写方法接收json参数</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//集合参数：json格式</span>
<span class="token comment">//1.开启json数据格式的自动转换，在配置类中开启@EnableWebMvc</span>
<span class="token comment">//2.使用@RequestBody注解将外部传递的json数组数据映射到形参的集合对象中作为数据</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listParamForJson"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listParamForJson</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> likes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"list common(json)参数传递 list ==> "</span><span class="token operator">+</span>likes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'list common for json param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-3-2-2-enablewebmvc注解介绍" tabindex="-1"><a class="header-anchor" href="#_2-3-2-2-enablewebmvc注解介绍" aria-hidden="true">#</a> 2.3.2.2 @EnableWebMvc注解介绍</h6>
<ul>
<li>名称：@EnableWebMvc</li>
<li>类型：<mark>配置类注解</mark></li>
<li>位置：SpringMVC配置类定义上方</li>
<li>作用：开启SpringMVC多项辅助功能</li>
<li>范例：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.beisheng.controller"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-3-2-3-requestbody注解介绍" tabindex="-1"><a class="header-anchor" href="#_2-3-2-3-requestbody注解介绍" aria-hidden="true">#</a> 2.3.2.3 @RequestBody注解介绍</h6>
<ul>
<li>名称：@RequestBody</li>
<li>类型：<mark>形参注解</mark></li>
<li>位置：SpringMVC控制器方法形参定义前面</li>
<li>作用：将请求中请求体所包含的数据传递给请求参数，此注解一个处理器方法只能使用一次</li>
<li>范例：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listParamForJson"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listParamForJson</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> likes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"list common(json)参数传递 list ==> "</span><span class="token operator">+</span>likes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'list common for json param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-3-3-传递json对象" tabindex="-1"><a class="header-anchor" href="#_2-3-3-传递json对象" aria-hidden="true">#</a> 2.3.3 传递json对象</h5>
<ul>
<li>POJO参数：json数据与形参对象属性名相同，定义POJO类型形参即可接收参数</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805111544701.png" alt="image-20210805111544701" tabindex="0" loading="lazy"><figcaption>image-20210805111544701</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//POJO参数：json格式</span>
<span class="token comment">//1.开启json数据格式的自动转换，在配置类中开启@EnableWebMvc</span>
<span class="token comment">//2.使用@RequestBody注解将外部传递的json数据映射到形参的实体类对象中，要求属性名称一一对应</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/pojoParamForJson"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pojoParamForJson</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo(json)参数传递 user ==> "</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'pojo for json param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-3-4-传递json对象数组" tabindex="-1"><a class="header-anchor" href="#_2-3-4-传递json对象数组" aria-hidden="true">#</a> 2.3.4 传递json对象数组</h5>
<ul>
<li>POJO集合参数：json数组数据与集合泛型属性名相同，定义List类型形参即可接收参数</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805111626095.png" alt="image-20210805111626095" tabindex="0" loading="lazy"><figcaption>image-20210805111626095</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//集合参数：json格式</span>
<span class="token comment">//1.开启json数据格式的自动转换，在配置类中开启@EnableWebMvc</span>
<span class="token comment">//2.使用@RequestBody注解将外部传递的json数组数据映射到形参的保存实体类对象的集合对象中，要求属性名称一一对应</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listPojoParamForJson"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listPojoParamForJson</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"list pojo(json)参数传递 list ==> "</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'list pojo for json param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-3-5-requestbody与-requestparam区别" tabindex="-1"><a class="header-anchor" href="#_2-3-5-requestbody与-requestparam区别" aria-hidden="true">#</a> 2.3.5 @RequestBody与@RequestParam区别</h5>
<ul>
<li>区别<br>
@RequestParam用于接收url地址传参，表单传参【application/x-www-form-urlencoded】<br>
@RequestBody用于接收json数据【application/json】</li>
<li>应用<br>
后期开发中，发送json格式数据为主，@RequestBody应用较广<br>
如果发送非json格式数据，选用@RequestParam接收请求参数</li>
</ul>
<h3 id="_3-日期类型参数传递【重点】" tabindex="-1"><a class="header-anchor" href="#_3-日期类型参数传递【重点】" aria-hidden="true">#</a> 3 日期类型参数传递【重点】</h3>
<h4 id="问题导入-7" tabindex="-1"><a class="header-anchor" href="#问题导入-7" aria-hidden="true">#</a> 问题导入</h4>
<p>@DateTimeFormat注解的作用是什么？</p>
<h4 id="_3-1-代码演示" tabindex="-1"><a class="header-anchor" href="#_3-1-代码演示" aria-hidden="true">#</a> 3.1 代码演示</h4>
<ul>
<li>日期类型数据基于系统不同格式也不尽相同<br>
2088-08-18<br>
2088/08/18<br>
08/18/2088</li>
<li>接收形参时，根据不同的日期格式设置不同的接收方式</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805113333189.png" alt="image-20210805113333189" tabindex="0" loading="lazy"><figcaption>image-20210805113333189</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//日期参数 http://localhost:80/dataParam?date=2088/08/08&amp;date1=2088-08-18&amp;date2=2088/08/28 8:08:08</span>
<span class="token comment">//使用@DateTimeFormat注解设置日期类型数据格式，默认格式yyyy/MM/dd</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/dataParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">dataParam</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span>
                  <span class="token annotation punctuation">@DateTimeFormat</span><span class="token punctuation">(</span>pattern<span class="token operator">=</span><span class="token string">"yyyy-MM-dd"</span><span class="token punctuation">)</span> <span class="token class-name">Date</span> date1<span class="token punctuation">,</span>
                  <span class="token annotation punctuation">@DateTimeFormat</span><span class="token punctuation">(</span>pattern<span class="token operator">=</span><span class="token string">"yyyy/MM/dd HH:mm:ss"</span><span class="token punctuation">)</span> <span class="token class-name">Date</span> date2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date ==> "</span><span class="token operator">+</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date1(yyyy-MM-dd) ==> "</span><span class="token operator">+</span>date1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date2(yyyy/MM/dd HH:mm:ss) ==> "</span><span class="token operator">+</span>date2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'data param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-datetimeformat注解介绍" tabindex="-1"><a class="header-anchor" href="#_3-2-datetimeformat注解介绍" aria-hidden="true">#</a> 3.2 @DateTimeFormat注解介绍</h4>
<ul>
<li>
<p>名称：@DateTimeFormat</p>
</li>
<li>
<p>类型：<mark>形参注解</mark></p>
</li>
<li>
<p>位置：SpringMVC控制器方法形参前面</p>
</li>
<li>
<p>作用：设定日期时间型数据格式</p>
</li>
<li>
<p>属性：pattern：指定日期时间格式字符串</p>
</li>
</ul>
<h4 id="_3-3-工作原理" tabindex="-1"><a class="header-anchor" href="#_3-3-工作原理" aria-hidden="true">#</a> 3.3 工作原理</h4>
<ul>
<li>其内部依赖Converter接口</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Converter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">T</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token class-name">S</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>请求参数年龄数据（String→Integer）</li>
<li>json数据转对象（json → POJO）</li>
<li>日期格式转换（String → Date）</li>
</ul>
<h4 id="_3-4-注意事项" tabindex="-1"><a class="header-anchor" href="#_3-4-注意事项" aria-hidden="true">#</a> 3.4 注意事项</h4>
<p>传递日期类型参数必须在配置类上使用@EnableWebMvc注解。其功能之一：根据类型匹配对应的类型转换器。</p>
<h3 id="_4-响应" tabindex="-1"><a class="header-anchor" href="#_4-响应" aria-hidden="true">#</a> 4 响应</h3>
<h4 id="问题导入-8" tabindex="-1"><a class="header-anchor" href="#问题导入-8" aria-hidden="true">#</a> 问题导入</h4>
<p>如何响应json数据？</p>
<h4 id="_4-1响应页面【了解】" tabindex="-1"><a class="header-anchor" href="#_4-1响应页面【了解】" aria-hidden="true">#</a> 4.1响应页面【了解】</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token comment">//响应页面/跳转页面</span>
    <span class="token comment">//返回值为String类型，设置返回值为页面名称，即可实现页面跳转</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toJumpPage"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toJumpPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"跳转页面"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"page.jsp"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre v-pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h2&gt;Hello Spring MVC!&lt;/h2&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-文本数据【了解】" tabindex="-1"><a class="header-anchor" href="#_4-2-文本数据【了解】" aria-hidden="true">#</a> 4.2 文本数据【了解】</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//响应文本数据</span>
<span class="token comment">//返回值为String类型，设置返回值为任意字符串信息，即可实现返回指定字符串信息，需要依赖@ResponseBody注解</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toText"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"返回纯文本数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"response text"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-json数据【重点】" tabindex="-1"><a class="header-anchor" href="#_4-3-json数据【重点】" aria-hidden="true">#</a> 4.3 json数据【重点】</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//响应POJO对象</span>
<span class="token comment">//返回值为实体类对象，设置返回值为实体类类型，即可实现返回对应对象的json数据，需要依赖@ResponseBody注解和@EnableWebMvc注解</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toJsonPOJO"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">toJsonPOJO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"返回json对象数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"beisheng"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//响应POJO集合对象</span>
<span class="token comment">//返回值为集合对象，设置返回值为集合类型，即可实现返回对应集合的json数组数据，需要依赖@ResponseBody注解和@EnableWebMvc注解</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toJsonList"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">toJsonList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"返回json集合数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">User</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user2<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> userList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    userList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> userList<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><mark>注意：需要添加jackson-databind依赖以及在SpringMvcConfig配置类上添加@EnableWebMvc注解</mark></strong></p>
<h2 id="三、rest风格" tabindex="-1"><a class="header-anchor" href="#三、rest风格" aria-hidden="true">#</a> 三、REST风格</h2>
<h3 id="_1-rest简介" tabindex="-1"><a class="header-anchor" href="#_1-rest简介" aria-hidden="true">#</a> 1 REST简介</h3>
<h4 id="问题导入-9" tabindex="-1"><a class="header-anchor" href="#问题导入-9" aria-hidden="true">#</a> 问题导入</h4>
<p>Rest风格使用了几种请求方式定义访问行为？</p>
<h4 id="_1-1-rest介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-rest介绍" aria-hidden="true">#</a> 1.1 REST介绍</h4>
<ul>
<li>REST（Representational State Transfer），表现形式状态转换
<ul>
<li>传统风格资源描述形式<br>
<a href="http://localhost/user/getById?id=1" target="_blank" rel="noopener noreferrer">http://localhost/user/getById?id=1<ExternalLinkIcon/></a><br>
<a href="http://localhost/user/saveUser" target="_blank" rel="noopener noreferrer">http://localhost/user/saveUser<ExternalLinkIcon/></a></li>
<li>REST风格描述形式<br>
<a href="http://localhost/user/1" target="_blank" rel="noopener noreferrer">http://localhost/user/1<ExternalLinkIcon/></a><br>
<a href="http://localhost/user" target="_blank" rel="noopener noreferrer">http://localhost/user<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>优点：
<ul>
<li>隐藏资源的访问行为，无法通过地址得知对资源是何种操作</li>
<li>书写简化</li>
</ul>
</li>
</ul>
<h4 id="_1-2-restful介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-restful介绍" aria-hidden="true">#</a> 1.2 RESTful介绍</h4>
<ul>
<li>按照REST风格访问资源时使用<mark>行为动作</mark>区分对资源进行了何种操作<br>
<a href="http://localhost/users" target="_blank" rel="noopener noreferrer">http://localhost/users<ExternalLinkIcon/></a>		查询全部用户信息	（查询）<br>
<a href="http://localhost/users/1" target="_blank" rel="noopener noreferrer">http://localhost/users/1<ExternalLinkIcon/></a>		查询指定用户信息（查询）<br>
<a href="http://localhost/users" target="_blank" rel="noopener noreferrer">http://localhost/users<ExternalLinkIcon/></a>		添加用户信息（新增/保存）<br>
<a href="http://localhost/users" target="_blank" rel="noopener noreferrer">http://localhost/users<ExternalLinkIcon/></a>		修改用户信息（修改/更新）<br>
<a href="http://localhost/users/1" target="_blank" rel="noopener noreferrer">http://localhost/users/1<ExternalLinkIcon/></a>		删除用户信息（删除）</li>
<li>根据REST风格对资源进行访问称为RESTful</li>
</ul>
<h4 id="_1-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_1-3-注意事项" aria-hidden="true">#</a> 1.3 注意事项</h4>
<ul>
<li>上述行为是约定方式，约定不是规范，可以打破，所以称REST风格，而不是REST规范</li>
<li>描述模块的名称通常使用复数，也就是加s的格式描述，表示此类资源，而非单个资源，例如：users、books、accounts……</li>
</ul>
<h3 id="_2-restful入门案例" tabindex="-1"><a class="header-anchor" href="#_2-restful入门案例" aria-hidden="true">#</a> 2 RESTful入门案例</h3>
<h4 id="问题导入-10" tabindex="-1"><a class="header-anchor" href="#问题导入-10" aria-hidden="true">#</a> 问题导入</h4>
<p>Rest风格如何通过路径传递参数？</p>
<h4 id="_2-1-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-1-快速入门" aria-hidden="true">#</a> 2.1 快速入门</h4>
<blockquote>
<p>做法：在Controller中定义方法时设定&quot;http请求动作(请求方式)&quot;和&quot;设定请求参数（路径变量）&quot;</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token comment">//设置当前请求方法为POST，表示REST风格中的添加操作</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user save'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置当前请求方法为DELETE，表示REST风格中的删除操作</span>
    <span class="token comment">//@PathVariable注解用于设置路径变量（路径参数），要求路径上设置对应的占位符，并且占位符名称与方法形参名称相同</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users/{id}"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">DELETE</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user delete..."</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user delete'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置当前请求方法为PUT，表示REST风格中的修改操作</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">PUT</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user update..."</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user update'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置当前请求方法为GET，表示REST风格中的查询操作</span>
    <span class="token comment">//@PathVariable注解用于设置路径变量（路径参数），要求路径上设置对应的占位符，并且占位符名称与方法形参名称相同</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users/{id}"</span> <span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user getById..."</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user getById'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置当前请求方法为GET，表示REST风格中的查询操作</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user getAll..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user getAll'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-pathvariable介绍" tabindex="-1"><a class="header-anchor" href="#_2-2-pathvariable介绍" aria-hidden="true">#</a> 2.2 @PathVariable介绍</h4>
<ul>
<li>名称：@PathVariable</li>
<li>类型：形参注解</li>
<li>位置：SpringMVC控制器方法形参定义前面</li>
<li>作用：绑定路径参数与处理器方法形参间的关系，要求路径参数名与形参名一一对应</li>
</ul>
<figure><img src="@source/src/基础框架/assets/image-20210805120253164.png" alt="image-20210805120253164" tabindex="0" loading="lazy"><figcaption>image-20210805120253164</figcaption></figure>
<h4 id="_2-3-requestbody、-requestparam、-pathvariable区别和应用" tabindex="-1"><a class="header-anchor" href="#_2-3-requestbody、-requestparam、-pathvariable区别和应用" aria-hidden="true">#</a> 2.3 @RequestBody、@RequestParam、@PathVariable区别和应用</h4>
<ul>
<li>区别<br>
@RequestParam用于接收url地址传参或表单传参<br>
@RequestBody用于接收json数据<br>
@PathVariable用于接收路径参数，使用{参数名称}描述路径参数</li>
<li>应用<br>
后期开发中，发送请求参数超过1个时，以json格式为主，@RequestBody应用较广<br>
如果发送非json格式数据，选用@RequestParam接收请求参数<br>
采用RESTful进行开发，当参数数量较少时，例如1个，可以采用@PathVariable接收请求路径变量，通常用于传递id值</li>
</ul>
<h3 id="_3-rest快速开发【重点】" tabindex="-1"><a class="header-anchor" href="#_3-rest快速开发【重点】" aria-hidden="true">#</a> 3 REST快速开发【重点】</h3>
<h4 id="_3-1-代码中的问题" tabindex="-1"><a class="header-anchor" href="#_3-1-代码中的问题" aria-hidden="true">#</a> 3.1 代码中的问题</h4>
<figure><img src="@source/src/基础框架/assets/image-20210805132351738.png" alt="image-20210805132351738" tabindex="0" loading="lazy"><figcaption>image-20210805132351738</figcaption></figure>
<blockquote>
<p>以上截图中的代码和我们之前写的UserController中的方法类似，其中图中两个方法都有三处是有问题的，可以进行优化。存在的问题如下：</p>
</blockquote>
<p>问题1：每个方法的@RequestMapping注解中都定义了访问路径/books，重复性太高。</p>
<p>问题2：每个方法的@RequestMapping注解中都要使用method属性定义请求方式，重复性太高。</p>
<p>问题3：每个方法响应json都需要加上@ResponseBody注解，重复性太高。</p>
<h4 id="_3-2-rest快速开发" tabindex="-1"><a class="header-anchor" href="#_3-2-rest快速开发" aria-hidden="true">#</a> 3.2 Rest快速开发</h4>
<blockquote>
<p>解决以上三个问题</p>
</blockquote>
<p>解决问题1：在Controller类上使用@RequestMapping定义共同的访问路径。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book save..."</span> <span class="token operator">+</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book save'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/{id}"</span> <span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">DELETE</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book delete..."</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book delete'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">PUT</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book update..."</span><span class="token operator">+</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book update'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/{id}"</span> <span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book getById..."</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book getById'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book getAll..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book getAll'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决问题2：使用@GetMapping  @PostMapping  @PutMapping  @DeleteMapping代替@RequestMapping(<a href="http://method=RequestMethod.XXX" target="_blank" rel="noopener noreferrer">method=RequestMethod.XXX<ExternalLinkIcon/></a>)</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>

<span class="token comment">//    @RequestMapping( method = RequestMethod.POST)</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token comment">//使用@PostMapping简化Post请求方法对应的映射配置</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book save..."</span> <span class="token operator">+</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book save'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//    @RequestMapping(value = "/{id}" ,method = RequestMethod.DELETE)</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>  <span class="token comment">//使用@DeleteMapping简化DELETE请求方法对应的映射配置</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book delete..."</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book delete'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//    @RequestMapping(method = RequestMethod.PUT)</span>
    <span class="token annotation punctuation">@PutMapping</span>   <span class="token comment">//使用@PutMapping简化Put请求方法对应的映射配置</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book update..."</span><span class="token operator">+</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book update'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//    @RequestMapping(value = "/{id}" ,method = RequestMethod.GET)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>    <span class="token comment">//使用@GetMapping简化GET请求方法对应的映射配置</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book getById..."</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book getById'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//    @RequestMapping(method = RequestMethod.GET)</span>
    <span class="token annotation punctuation">@GetMapping</span>      <span class="token comment">//使用@GetMapping简化GET请求方法对应的映射配置</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book getAll..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book getAll'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>名称：@GetMapping  @PostMapping  @PutMapping  @DeleteMapping</li>
<li>类型：方法注解</li>
<li>位置：基于SpringMVC的RESTful开发控制器方法定义上方</li>
<li>作用：设置当前控制器方法请求访问路径与请求动作，每种对应一个请求动作，例如@GetMapping对应GET请求</li>
<li>属性：<br>
value（默认）：请求访问路径</li>
</ul>
<p>解决问题3：在Controller类上使用@RestController注解，等同于@Controller与@ResponseBody两个注解组合功能</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>     <span class="token comment">//使用@RestController注解替换@Controller与@ResponseBody注解，简化书写</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
    <span class="token comment">//方法省略了没写</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>名称：@RestController</li>
<li>类型：类注解</li>
<li>位置：基于SpringMVC的RESTful开发控制器类定义上方</li>
<li>作用：设置当前控制器类为RESTful风格，等同于@Controller与@ResponseBody两个注解组合功能</li>
</ul>
<h3 id="_4案例-基于restful页面数据交互" tabindex="-1"><a class="header-anchor" href="#_4案例-基于restful页面数据交互" aria-hidden="true">#</a> 4案例：基于RESTful页面数据交互</h3>
<h4 id="_4-1-案例效果和环境准备" tabindex="-1"><a class="header-anchor" href="#_4-1-案例效果和环境准备" aria-hidden="true">#</a> 4.1 案例效果和环境准备</h4>
<h5 id="_4-1-1-案例效果" tabindex="-1"><a class="header-anchor" href="#_4-1-1-案例效果" aria-hidden="true">#</a> 4.1.1 案例效果</h5>
<figure><img src="@source/src/基础框架/assets/image-20210805140535262.png" alt="image-20210805140535262" tabindex="0" loading="lazy"><figcaption>image-20210805140535262</figcaption></figure>
<h5 id="_4-1-2-环境准备" tabindex="-1"><a class="header-anchor" href="#_4-1-2-环境准备" aria-hidden="true">#</a> 4.1.2 环境准备</h5>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//POJO实体类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> type<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    <span class="token comment">//你自己重写getter、setter、toString()方法...</span>
<span class="token punctuation">}</span>

<span class="token comment">//SpringMVC容器初始化类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAnnotationConfigDispatcherServletInitializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRootConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//乱码处理</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CharacterEncodingFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharacterEncodingFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filter<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>filter<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//SpringMVC配置类</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"com.beisheng.controller"</span><span class="token punctuation">,</span><span class="token string">"com.beisheng.config"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_4-2-代码实现" aria-hidden="true">#</a> 4.2 代码实现</h4>
<h5 id="_4-2-1-制作springmvc控制器-并通过postman测试接口功能" tabindex="-1"><a class="header-anchor" href="#_4-2-1-制作springmvc控制器-并通过postman测试接口功能" aria-hidden="true">#</a> 4.2.1 制作SpringMVC控制器，并通过PostMan测试接口功能</h5>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book save ==> "</span><span class="token operator">+</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book save success'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">></span></span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book getAll is running ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">></span></span> bookList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Book</span> book1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book1<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">"计算机"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"SpringMVC入门教程"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book1<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">"小试牛刀"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bookList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>book1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Book</span> book2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book2<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">"计算机"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"SpringMVC实战教程"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book2<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">"一代宗师"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bookList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>book2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Book</span> book3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book3<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">"计算机丛书"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book3<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"SpringMVC实战教程进阶"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book3<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">"一代宗师呕心创作"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bookList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>book3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> bookList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/src/基础框架/assets/image-20210805140307371.png" alt="image-20210805140307371" tabindex="0" loading="lazy"><figcaption>image-20210805140307371</figcaption></figure>
<h5 id="_4-2-2-设置对静态资源的访问放行" tabindex="-1"><a class="header-anchor" href="#_4-2-2-设置对静态资源的访问放行" aria-hidden="true">#</a> 4.2.2 设置对静态资源的访问放行</h5>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcSupport</span> <span class="token keyword">extends</span> <span class="token class-name">WebMvcConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置静态资源访问过滤，当前类需要设置为配置类，并被扫描加载</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//当访问/pages/????时候，从/pages目录下查找内容</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/pages/**"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/pages/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/js/**"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/js/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/css/**"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/css/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/plugins/**"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/plugins/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-3-前端页面通过异步提交访问后台控制器" tabindex="-1"><a class="header-anchor" href="#_4-2-3-前端页面通过异步提交访问后台控制器" aria-hidden="true">#</a> 4.2.3 前端页面通过异步提交访问后台控制器</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//添加</span>
<span class="token function">saveBook</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">//主页列表查询</span>
<span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dataList <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


