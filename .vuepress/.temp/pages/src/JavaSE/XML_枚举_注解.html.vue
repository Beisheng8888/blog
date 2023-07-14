<template><div><h1 id="xml枚举注解" tabindex="-1"><a class="header-anchor" href="#xml枚举注解" aria-hidden="true">#</a> XML枚举注解</h1>
<h2 id="_1-xml" tabindex="-1"><a class="header-anchor" href="#_1-xml" aria-hidden="true">#</a> 1.xml</h2>
<h3 id="_1-1概述【理解】" tabindex="-1"><a class="header-anchor" href="#_1-1概述【理解】" aria-hidden="true">#</a> 1.1概述【理解】</h3>
<ul>
<li>
<p>万维网联盟(W3C)</p>
<p>万维网联盟(W3C)创建于1994年，又称W3C理事会。1994年10月在麻省理工学院计算机科学实验室成立。<br>
建立者： Tim Berners-Lee (蒂姆·伯纳斯·李)。<br>
是Web技术领域最具权威和影响力的国际中立性技术标准机构。<br>
到目前为止，W3C已发布了200多项影响深远的Web技术标准及实施指南，</p>
<ul>
<li>
<p>如广为业界采用的超文本标记语言HTML（标准通用标记语言下的一个应用）、</p>
</li>
<li>
<p>可扩展标记语言XML（标准通用标记语言下的一个子集）</p>
</li>
<li>
<p>以及帮助残障人士有效获得Web信息的无障碍指南（WCAG）等</p>
<figure><img src="@source/src/JavaSE/img/01_w3c概述.png" alt="01_w3c概述" tabindex="0" loading="lazy"><figcaption>01_w3c概述</figcaption></figure>
</li>
</ul>
</li>
<li>
<p>xml概述</p>
<p>XML的全称为(EXtensible Markup Language)，是一种可扩展的标记语言<br>
标记语言: 通过标签来描述数据的一门语言(标签有时我们也将其称之为元素)<br>
可扩展：标签的名字是可以自定义的,XML文件是由很多标签组成的,而标签名是可以自定义的</p>
</li>
<li>
<p>作用</p>
<ul>
<li>用于进行存储数据和传输数据</li>
<li>作为软件的配置文件</li>
</ul>
</li>
<li>
<p>作为配置文件的优势</p>
<ul>
<li>可读性好</li>
<li>可维护性高</li>
</ul>
</li>
</ul>
<h3 id="_1-2标签的规则【应用】" tabindex="-1"><a class="header-anchor" href="#_1-2标签的规则【应用】" aria-hidden="true">#</a> 1.2标签的规则【应用】</h3>
<ul>
<li>
<p>标签由一对尖括号和合法标识符组成</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>student<span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>标签必须成对出现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>student<span class="token punctuation">></span></span> <span class="token operator">&lt;</span><span class="token operator">/</span>student<span class="token operator">></span>
前边的是开始标签，后边的是结束标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>特殊的标签可以不成对,但是必须有结束标记</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span>address<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>标签中可以定义属性,属性和标签名空格隔开,属性值必须用引号引起来</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span>student id<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">/</span>student<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>标签需要正确的嵌套</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>这是正确的<span class="token operator">:</span> <span class="token operator">&lt;</span>student id<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span> <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">></span></span>张三<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">/</span>student<span class="token operator">></span>
这是错误的<span class="token operator">:</span> <span class="token operator">&lt;</span>student id<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span><span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">></span></span>张三<span class="token operator">&lt;</span><span class="token operator">/</span>student<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_1-3语法规则【应用】" tabindex="-1"><a class="header-anchor" href="#_1-3语法规则【应用】" aria-hidden="true">#</a> 1.3语法规则【应用】</h3>
<ul>
<li>
<p>语法规则</p>
<ul>
<li>
<p>XML文件的后缀名为：xml</p>
</li>
<li>
<p>文档声明必须是第一行第一列</p>
<p><code v-pre>&lt;</code>?xml version=“1.0” encoding=“UTF-8” standalone=“yes”?<code v-pre>&gt;</code><br>
version：该属性是必须存在的<br>
encoding：该属性不是必须的</p>
<p>​	打开当前xml文件的时候应该是使用什么字符编码表(一般取值都是UTF-8)</p>
<p>standalone: 该属性不是必须的，描述XML文件是否依赖其他的xml文件，取值为yes/no</p>
</li>
<li>
<p>必须存在一个根标签，有且只能有一个</p>
</li>
<li>
<p>XML文件中可以定义注释信息</p>
</li>
<li>
<p>XML文件中可以存在以下特殊字符</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token operator">&lt;</span> 小于
<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token operator">></span> 大于
<span class="token operator">&amp;</span>amp<span class="token punctuation">;</span> <span class="token operator">&amp;</span> 和号
<span class="token operator">&amp;</span>apos<span class="token punctuation">;</span> ' 单引号
<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span> " 引号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>XML文件中可以存在CDATA区</p>
</li>
</ul>
</li>
<li>
<p>示例代码</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token comment">&lt;!--注释的内容--></span>
<span class="token comment">&lt;!--本xml文件用来描述多个学生信息--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>students</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--第一个学生信息--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">></span></span>23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>info</span><span class="token punctuation">></span></span>学生<span class="token entity named-entity" title="&lt;">&amp;lt;</span> <span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span>的信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>info</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message</span><span class="token punctuation">></span></span> <span class="token cdata">&lt;![CDATA[内容 &lt;&lt;&lt;&lt;&lt;&lt; >>>>>> ]]]></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>message</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--第二个学生信息--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>李四<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">></span></span>24<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>students</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_1-4xml解析【应用】" tabindex="-1"><a class="header-anchor" href="#_1-4xml解析【应用】" aria-hidden="true">#</a> 1.4xml解析【应用】</h3>
<ul>
<li>
<p>概述</p>
<p>xml解析就是从xml中获取到数据</p>
</li>
<li>
<p>常见的解析思想</p>
<p>DOM(Document Object Model)文档对象模型:就是把文档的各个组成部分看做成对应的对象。<br>
会把xml文件全部加载到内存,在内存中形成一个树形结构,再获取对应的值</p>
<figure><img src="@source/src/JavaSE/img/02_dom解析概述.png" alt="02_dom解析概述" tabindex="0" loading="lazy"><figcaption>02_dom解析概述</figcaption></figure>
</li>
<li>
<p>常见的解析工具</p>
<ul>
<li>JAXP: SUN公司提供的一套XML的解析的API</li>
<li>JDOM: 开源组织提供了一套XML的解析的API-jdom</li>
<li>DOM4J: 开源组织提供了一套XML的解析的API-dom4j,全称：Dom For Java</li>
<li>pull: 主要应用在Android手机端解析XML</li>
</ul>
</li>
<li>
<p>解析的准备工作</p>
<ol>
<li>
<p>我们可以通过网站：<a href="https://dom4j.github.io/" target="_blank" rel="noopener noreferrer">https://dom4j.github.io/<ExternalLinkIcon/></a> 去下载dom4j</p>
</li>
<li>
<p>将提供好的dom4j-1.6.1.zip解压,找到里面的dom4j-1.6.1.jar</p>
</li>
<li>
<p>在idea中当前模块下新建一个libs文件夹,将jar包复制到文件夹中</p>
</li>
<li>
<p>选中jar包 -&gt; 右键 -&gt; 选择add as library即可</p>
</li>
</ol>
</li>
<li>
<p>需求</p>
<ul>
<li>解析提供好的xml文件</li>
<li>将解析到的数据封装到学生对象中</li>
<li>并将学生对象存储到ArrayList集合中</li>
<li>遍历集合</li>
</ul>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">"1.0"</span> encoding<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">?</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>注释的内容<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>本xml文件用来描述多个学生信息<span class="token operator">--</span><span class="token operator">></span>
<span class="token generics"><span class="token punctuation">&lt;</span>students<span class="token punctuation">></span></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>第一个学生信息<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>student id<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">></span></span>张三<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>age<span class="token punctuation">></span></span><span class="token number">23</span><span class="token operator">&lt;</span><span class="token operator">/</span>age<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>student<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>第二个学生信息<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>student id<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">></span></span>李四<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>age<span class="token punctuation">></span></span><span class="token number">24</span><span class="token operator">&lt;</span><span class="token operator">/</span>age<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>student<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>students<span class="token operator">></span>

<span class="token comment">// 上边是已经准备好的student.xml文件</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Student{"</span> <span class="token operator">+</span>
                <span class="token string">"id='"</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 利用dom4j解析xml文件
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XmlParse</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">DocumentException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.获取一个解析器对象</span>
        <span class="token class-name">SAXReader</span> saxReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SAXReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.利用解析器把xml文件加载到内存中,并返回一个文档对象</span>
        <span class="token class-name">Document</span> document <span class="token operator">=</span> saxReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"myxml\\xml\\student.xml"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.获取到根标签</span>
        <span class="token class-name">Element</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getRootElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//4.通过根标签来获取student标签</span>
        <span class="token comment">//elements():可以获取调用者所有的子标签.会把这些子标签放到一个集合中返回.</span>
        <span class="token comment">//elements("标签名"):可以获取调用者所有的指定的子标签,会把这些子标签放到一个集合中并返回</span>
        <span class="token comment">//List list = rootElement.elements();</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Element</span><span class="token punctuation">></span></span> studentElements <span class="token operator">=</span> rootElement<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token string">"student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//System.out.println(list.size());</span>

        <span class="token comment">//用来装学生对象</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//5.遍历集合,得到每一个student标签</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Element</span> element <span class="token operator">:</span> studentElements<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//element依次表示每一个student标签</span>

            <span class="token comment">//获取id这个属性</span>
            <span class="token class-name">Attribute</span> attribute <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">attribute</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取id的属性值</span>
            <span class="token class-name">String</span> id <span class="token operator">=</span> attribute<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//获取name标签</span>
            <span class="token comment">//element("标签名"):获取调用者指定的子标签</span>
            <span class="token class-name">Element</span> nameElement <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">element</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取这个标签的标签体内容</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> nameElement<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//获取age标签</span>
            <span class="token class-name">Element</span> ageElement <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">element</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取age标签的标签体内容</span>
            <span class="token class-name">String</span> age <span class="token operator">=</span> ageElement<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//            System.out.println(id);</span>
<span class="token comment">//            System.out.println(name);</span>
<span class="token comment">//            System.out.println(age);</span>

            <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//遍历操作</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Student</span> student <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_1-5dtd约束【理解】" tabindex="-1"><a class="header-anchor" href="#_1-5dtd约束【理解】" aria-hidden="true">#</a> 1.5DTD约束【理解】</h3>
<ul>
<li>
<p>什么是约束</p>
<p>用来限定xml文件中可使用的标签以及属性</p>
</li>
<li>
<p>约束的分类</p>
<ul>
<li>DTD</li>
<li>schema</li>
</ul>
</li>
<li>
<p>编写DTD约束</p>
<ul>
<li>
<p>步骤</p>
<ol>
<li>
<p>创建一个文件，这个文件的后缀名为.dtd</p>
</li>
<li>
<p>看xml文件中使用了哪些元素</p>
<p>可以定义元素</p>
</li>
<li>
<p>判断元素是简单元素还是复杂元素</p>
<p>简单元素：没有子元素。<br>
复杂元素：有子元素的元素；</p>
</li>
</ol>
</li>
<li>
<p>代码实现</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">persons</span> <span class="token attr-name">(person)</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">person</span> <span class="token attr-name">(name,age)</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">name</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">age</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>引入DTD约束</p>
<ul>
<li>
<p>引入DTD约束的三种方法</p>
<ul>
<li>引入本地dtd<!DOCTYPE 根元素名称 SYSTEM ‘DTD文件的路径'>
</li>
<li>在xml文件内部引入<!DOCTYPE 根元素名称 [ dtd文件内容 ]>
</li>
<li>引入网络dtd<!DOCTYPE 根元素的名称 PUBLIC "DTD文件名称" "DTD文档的URL">
</li>
</ul>
</li>
<li>
<p>代码实现</p>
<ul>
<li>
<p>引入本地DTD约束</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>// 这是persondtd.dtd文件中的内容,已经提前写好
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">persons</span> <span class="token attr-name">(person)</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">person</span> <span class="token attr-name">(name,age)</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">name</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">age</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">></span></span>

// 在person1.xml文件中引入persondtd.dtd约束
<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">persons</span> <span class="token name">SYSTEM</span> <span class="token string">'persondtd.dtd'</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>persons</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>person</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">></span></span>23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>person</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>persons</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在xml文件内部引入</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">persons</span> <span class="token punctuation">[</span><span class="token internal-subset">
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">persons</span> <span class="token attr-name">(person)</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">person</span> <span class="token attr-name">(name,age)</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">name</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">age</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">></span></span>
        </span><span class="token punctuation">]</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>persons</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>person</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">></span></span>23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>person</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>persons</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>引入网络dtd</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">persons</span> <span class="token name">PUBLIC</span> <span class="token string">"dtd文件的名称"</span> <span class="token string">"dtd文档的URL"</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>persons</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>person</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">></span></span>23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>person</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>persons</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>DTD语法</p>
<ul>
<li>
<p>定义元素</p>
<p>定义一个元素的格式为：<br>
简单元素：</p>
<p>​	EMPTY: 表示标签体为空</p>
<p>​	ANY: 表示标签体可以为空也可以不为空</p>
<p>​	PCDATA: 表示该元素的内容部分为字符串</p>
<p>复杂元素：<br>
​	直接写子元素名称. 多个子元素可以使用&quot;,&quot;或者&quot;|&quot;隔开；<br>
​	&quot;,&quot;表示定义子元素的顺序 ; &quot;|&quot;: 表示子元素只能出现任意一个<br>
​	&quot;?&quot;零次或一次, &quot;+&quot;一次或多次, &quot;*&quot;零次或多次;如果不写则表示出现一次</p>
<figure><img src="@source/src/JavaSE/img/03_DTD语法定义元素.png" alt="03_DTD语法定义元素" tabindex="0" loading="lazy"><figcaption>03_DTD语法定义元素</figcaption></figure>
</li>
<li>
<p>定义属性</p>
<p>格式</p>
<p>定义一个属性的格式为：<br>
属性的类型：<br>
​	CDATA类型：普通的字符串</p>
<p>属性的约束:</p>
<p>​	// #REQUIRED： 必须的<br>
​	// #IMPLIED： 属性不是必需的<br>
​	// #FIXED value：属性值是固定的</p>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token class-name">ELEMENT</span> persons <span class="token punctuation">(</span>person<span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token class-name">ELEMENT</span> person <span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token class-name">ELEMENT</span> name <span class="token punctuation">(</span>#<span class="token constant">PCDATA</span><span class="token punctuation">)</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token class-name">ELEMENT</span> age <span class="token punctuation">(</span>#<span class="token constant">PCDATA</span><span class="token punctuation">)</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">ATTLIST</span> person id <span class="token constant">CDATA</span> #<span class="token constant">REQUIRED</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">"1.0"</span> encoding<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">?</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> persons <span class="token constant">SYSTEM</span> 'persondtd<span class="token punctuation">.</span>dtd'<span class="token operator">></span>

<span class="token generics"><span class="token punctuation">&lt;</span>persons<span class="token punctuation">></span></span>
    <span class="token operator">&lt;</span>person id<span class="token operator">=</span><span class="token string">"001"</span><span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">></span></span>张三<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>age<span class="token punctuation">></span></span><span class="token number">23</span><span class="token operator">&lt;</span><span class="token operator">/</span>age<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>person<span class="token operator">></span>

    <span class="token operator">&lt;</span>person id <span class="token operator">=</span> <span class="token string">"002"</span><span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">></span></span>张三<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>age<span class="token punctuation">></span></span><span class="token number">23</span><span class="token operator">&lt;</span><span class="token operator">/</span>age<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>person<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>persons<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="_1-6schema约束【理解】" tabindex="-1"><a class="header-anchor" href="#_1-6schema约束【理解】" aria-hidden="true">#</a> 1.6schema约束【理解】</h3>
<ul>
<li>
<p>schema和dtd的区别</p>
<ol>
<li>schema约束文件也是一个xml文件，符合xml的语法，这个文件的后缀名.xsd</li>
<li>一个xml中可以引用多个schema约束文件，多个schema使用名称空间区分（名称空间类似于java包名）</li>
<li>dtd里面元素类型的取值比较单一常见的是PCDATA类型，但是在schema里面可以支持很多个数据类型</li>
<li>schema 语法更加的复杂</li>
</ol>
<figure><img src="@source/src/JavaSE/img/04_schema约束介绍.png" alt="04_schema约束介绍" tabindex="0" loading="lazy"><figcaption>04_schema约束介绍</figcaption></figure>
</li>
<li>
<p>编写schema约束</p>
<ul>
<li>
<p>步骤</p>
<p>1，创建一个文件，这个文件的后缀名为.xsd。<br>
2，定义文档声明<br>
3，schema文件的根标签为： <code v-pre>&lt;schema&gt;</code><br>
4，在<code v-pre>&lt;schema&gt;</code>中定义属性：<br>
xmlns=<a href="http://www.w3.org/2001/XMLSchema" target="_blank" rel="noopener noreferrer">http://www.w3.org/2001/XMLSchema<ExternalLinkIcon/></a><br>
5，在<code v-pre>&lt;schema&gt;</code>中定义属性 ：<br>
targetNamespace =唯一的url地址，指定当前这个schema文件的名称空间。<br>
6，在<code v-pre>&lt;schema&gt;</code>中定义属性 ：<br>
elementFormDefault=&quot;qualified“，表示当前schema文件是一个质量良好的文件。<br>
7，通过element定义元素<br>
8，判断当前元素是简单元素还是复杂元素</p>
<figure><img src="@source/src/JavaSE/img/05_schema约束编写.png" alt="05_schema约束编写" tabindex="0" loading="lazy"><figcaption>05_schema约束编写</figcaption></figure>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">"1.0"</span> encoding<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">?</span><span class="token operator">></span>
<span class="token operator">&lt;</span>schema
    xmlns<span class="token operator">=</span><span class="token string">"http://www.w3.org/2001/XMLSchema"</span>
    targetNamespace<span class="token operator">=</span><span class="token string">"http://www.beisheng.cn/javase"</span>
    elementFormDefault<span class="token operator">=</span><span class="token string">"qualified"</span>
<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>定义persons复杂元素<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>element name<span class="token operator">=</span><span class="token string">"persons"</span><span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>complexType<span class="token punctuation">></span></span>
            <span class="token generics"><span class="token punctuation">&lt;</span>sequence<span class="token punctuation">></span></span>
                <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>定义person复杂元素<span class="token operator">--</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>element name <span class="token operator">=</span> <span class="token string">"person"</span><span class="token operator">></span>
                    <span class="token generics"><span class="token punctuation">&lt;</span>complexType<span class="token punctuation">></span></span>
                        <span class="token generics"><span class="token punctuation">&lt;</span>sequence<span class="token punctuation">></span></span>
                            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>定义name和age简单元素<span class="token operator">--</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>element name <span class="token operator">=</span> <span class="token string">"name"</span> type <span class="token operator">=</span> <span class="token string">"string"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>element<span class="token operator">></span>
                            <span class="token operator">&lt;</span>element name <span class="token operator">=</span> <span class="token string">"age"</span> type <span class="token operator">=</span> <span class="token string">"string"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>element<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>sequence<span class="token operator">></span>

                    <span class="token operator">&lt;</span><span class="token operator">/</span>complexType<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>element<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>sequence<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>complexType<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>element<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>schema<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>引入schema约束</p>
<ul>
<li>
<p>步骤</p>
<p>1，在根标签上定义属性xmlns=&quot;<a href="http://www.w3.org/2001/XMLSchema-instance" target="_blank" rel="noopener noreferrer">http://www.w3.org/2001/XMLSchema-instance<ExternalLinkIcon/></a>&quot;<br>
2，通过xmlns引入约束文件的名称空间<br>
3，给某一个xmlns属性添加一个标识，用于区分不同的名称空间<br>
​	格式为: xmlns:标识=“名称空间地址” ,标识可以是任意的，但是一般取值都是xsi<br>
4，通过xsi:schemaLocation指定名称空间所对应的约束文件路径<br>
​	格式为：xsi:schemaLocation = &quot;名称空间url 文件路径“</p>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">"1.0"</span> encoding<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">?</span><span class="token operator">></span>

<span class="token operator">&lt;</span>persons
    xmlns<span class="token operator">:</span>xsi<span class="token operator">=</span><span class="token string">"http://www.w3.org/2001/XMLSchema-instance"</span>
    xmlns<span class="token operator">=</span><span class="token string">"http://www.beisheng.cn/javase"</span>
    xsi<span class="token operator">:</span>schemaLocation<span class="token operator">=</span><span class="token string">"http://www.beisheng.cn/javase person.xsd"</span>
<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>person<span class="token punctuation">></span></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">></span></span>张三<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>age<span class="token punctuation">></span></span><span class="token number">23</span><span class="token operator">&lt;</span><span class="token operator">/</span>age<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>person<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>persons<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>schema约束定义属性</p>
<ul>
<li>
<p>代码示例</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">"1.0"</span> encoding<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">?</span><span class="token operator">></span>
<span class="token operator">&lt;</span>schema
    xmlns<span class="token operator">=</span><span class="token string">"http://www.w3.org/2001/XMLSchema"</span>
    targetNamespace<span class="token operator">=</span><span class="token string">"http://www.beisheng.cn/javase"</span>
    elementFormDefault<span class="token operator">=</span><span class="token string">"qualified"</span>
<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>定义persons复杂元素<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>element name<span class="token operator">=</span><span class="token string">"persons"</span><span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>complexType<span class="token punctuation">></span></span>
            <span class="token generics"><span class="token punctuation">&lt;</span>sequence<span class="token punctuation">></span></span>
                <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>定义person复杂元素<span class="token operator">--</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>element name <span class="token operator">=</span> <span class="token string">"person"</span><span class="token operator">></span>
                    <span class="token generics"><span class="token punctuation">&lt;</span>complexType<span class="token punctuation">></span></span>
                        <span class="token generics"><span class="token punctuation">&lt;</span>sequence<span class="token punctuation">></span></span>
                            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>定义name和age简单元素<span class="token operator">--</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>element name <span class="token operator">=</span> <span class="token string">"name"</span> type <span class="token operator">=</span> <span class="token string">"string"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>element<span class="token operator">></span>
                            <span class="token operator">&lt;</span>element name <span class="token operator">=</span> <span class="token string">"age"</span> type <span class="token operator">=</span> <span class="token string">"string"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>element<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>sequence<span class="token operator">></span>

                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>定义属性，<span class="token function">required</span><span class="token punctuation">(</span> 必须的<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">optional</span><span class="token punctuation">(</span> 可选的<span class="token punctuation">)</span><span class="token operator">--</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>attribute name<span class="token operator">=</span><span class="token string">"id"</span> type<span class="token operator">=</span><span class="token string">"string"</span> use<span class="token operator">=</span><span class="token string">"required"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>attribute<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>complexType<span class="token operator">></span>

                <span class="token operator">&lt;</span><span class="token operator">/</span>element<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>sequence<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>complexType<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>element<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>schema<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">"1.0"</span> encoding<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">?</span><span class="token operator">></span>
<span class="token operator">&lt;</span>persons
    xmlns<span class="token operator">:</span>xsi<span class="token operator">=</span><span class="token string">"http://www.w3.org/2001/XMLSchema-instance"</span>
    xmlns<span class="token operator">=</span><span class="token string">"http://www.beisheng.cn/javase"</span>
    xsi<span class="token operator">:</span>schemaLocation<span class="token operator">=</span><span class="token string">"http://www.beisheng.cn/javase person.xsd"</span>
<span class="token operator">></span>
    <span class="token operator">&lt;</span>person id<span class="token operator">=</span><span class="token string">"001"</span><span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">></span></span>张三<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>age<span class="token punctuation">></span></span><span class="token number">23</span><span class="token operator">&lt;</span><span class="token operator">/</span>age<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>person<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>persons<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h2 id="_2-枚举" tabindex="-1"><a class="header-anchor" href="#_2-枚举" aria-hidden="true">#</a> 2.枚举</h2>
<h3 id="_2-1概述【理解】" tabindex="-1"><a class="header-anchor" href="#_2-1概述【理解】" aria-hidden="true">#</a> 2.1概述【理解】</h3>
<p>为了间接的表示一些固定的值，Java就给我们提供了枚举<br>
是指将变量的值一一列出来,变量的值只限于列举出来的值的范围内</p>
<h3 id="_2-2定义格式【应用】" tabindex="-1"><a class="header-anchor" href="#_2-2定义格式【应用】" aria-hidden="true">#</a> 2.2定义格式【应用】</h3>
<ul>
<li>
<p>格式</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> s <span class="token punctuation">{</span>
	枚举项<span class="token number">1</span><span class="token punctuation">,</span>枚举项<span class="token number">2</span><span class="token punctuation">,</span>枚举项<span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
注意<span class="token operator">:</span> 定义枚举类要用关键字<span class="token keyword">enum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 定义一个枚举类，用来表示春，夏，秋，冬这四个固定值</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    <span class="token constant">SPRING</span><span class="token punctuation">,</span><span class="token constant">SUMMER</span><span class="token punctuation">,</span><span class="token constant">AUTUMN</span><span class="token punctuation">,</span><span class="token constant">WINTER</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-3枚举的特点【理解】" tabindex="-1"><a class="header-anchor" href="#_2-3枚举的特点【理解】" aria-hidden="true">#</a> 2.3枚举的特点【理解】</h3>
<ul>
<li>
<p>特点</p>
<ul>
<li>
<p>所有枚举类都是Enum的子类</p>
</li>
<li>
<p>我们可以通过&quot;枚举类名.枚举项名称&quot;去访问指定的枚举项</p>
</li>
<li>
<p>每一个枚举项其实就是该枚举的一个对象</p>
</li>
<li>
<p>枚举也是一个类，也可以去定义成员变量</p>
</li>
<li>
<p>枚举类的第一行上必须是枚举项，最后一个枚举项后的分号是可以省略的，但是如果枚举类有其他的东西，这个分号就不能省略。建议不要省略</p>
</li>
<li>
<p>枚举类可以有构造器，但必须是private的，它默认的也是private的。</p>
<p>枚举项的用法比较特殊：枚举(&quot;&quot;);</p>
</li>
<li>
<p>枚举类也可以有抽象方法，但是枚举项必须重写该方法</p>
</li>
</ul>
</li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>

    <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token string">"春"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//如果枚举类中有抽象方法</span>
        <span class="token comment">//那么在枚举项中必须要全部重写</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token string">"夏"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token string">"秋"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token string">"冬"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">//空参构造</span>
    <span class="token comment">//private Season(){}</span>

    <span class="token comment">//有参构造</span>
    <span class="token keyword">private</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//抽象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnumDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
        1.所有枚举类都是Enum的子类
        2.我们可以通过"枚举类名.枚举项名称"去访问指定的枚举项
        3.每一个枚举项其实就是该枚举的一个对象
        4.枚举也是一个类，也可以去定义成员变量
        5.枚举类的第一行上必须是枚举项，最后一个枚举项后的分号是可以省略的，
          但是如果枚举类有其他的东西，这个分号就不能省略。建议不要省略
        6.枚举类可以有构造器，但必须是private的，它默认的也是private的。
          枚举项的用法比较特殊：枚举("");
        7.枚举类也可以有抽象方法，但是枚举项必须重写该方法
    */</span>

        <span class="token comment">//第二个特点的演示</span>
        <span class="token comment">//我们可以通过"枚举类名.枚举项名称"去访问指定的枚举项</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SUMMER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">AUTUMN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">WINTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//第三个特点的演示</span>
        <span class="token comment">//每一个枚举项其实就是该枚举的一个对象</span>
        <span class="token class-name">Season</span> spring <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-4枚举的方法【应用】" tabindex="-1"><a class="header-anchor" href="#_2-4枚举的方法【应用】" aria-hidden="true">#</a> 2.4枚举的方法【应用】</h3>
<ul>
<li>
<p>方法介绍</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>String name()</td>
<td>获取枚举项的名称</td>
</tr>
<tr>
<td>int ordinal()</td>
<td>返回枚举项在枚举类中的索引值</td>
</tr>
<tr>
<td>int compareTo(E  o)</td>
<td>比较两个枚举项，返回的是索引值的差值</td>
</tr>
<tr>
<td>String toString()</td>
<td>返回枚举常量的名称</td>
</tr>
<tr>
<td>static <code v-pre>&lt;T&gt;</code> T  valueOf(Class<code v-pre>&lt;T&gt;</code> type,String  name)</td>
<td>获取指定枚举类中的指定名称的枚举值</td>
</tr>
<tr>
<td>values()</td>
<td>获得所有的枚举项</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    <span class="token constant">SPRING</span><span class="token punctuation">,</span><span class="token constant">SUMMER</span><span class="token punctuation">,</span><span class="token constant">AUTUMN</span><span class="token punctuation">,</span><span class="token constant">WINTER</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnumDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        String name() 获取枚举项的名称</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        int ordinal() 返回枚举项在枚举类中的索引值</span>
        <span class="token keyword">int</span> index1 <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">.</span><span class="token function">ordinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index2 <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SUMMER</span><span class="token punctuation">.</span><span class="token function">ordinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index3 <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">AUTUMN</span><span class="token punctuation">.</span><span class="token function">ordinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index4 <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">WINTER</span><span class="token punctuation">.</span><span class="token function">ordinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index4<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        int compareTo(E o) 比较两个枚举项，返回的是索引值的差值</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">WINTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//-3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        String toString()   返回枚举常量的名称</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        static &lt;T> T valueOf(Class&lt;T> type,String name)</span>
<span class="token comment">//        获取指定枚举类中的指定名称的枚举值</span>
        <span class="token class-name">Season</span> spring <span class="token operator">=</span> <span class="token class-name">Enum</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">"SPRING"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>spring<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span> <span class="token operator">==</span> spring<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        values()       获得所有的枚举项</span>
        <span class="token class-name">Season</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Season</span> value <span class="token operator">:</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-注解" tabindex="-1"><a class="header-anchor" href="#_3-注解" aria-hidden="true">#</a> 3.注解</h2>
<h3 id="_3-1概述【理解】" tabindex="-1"><a class="header-anchor" href="#_3-1概述【理解】" aria-hidden="true">#</a> 3.1概述【理解】</h3>
<ul>
<li>
<p>概述</p>
<p>对我们的程序进行标注和解释</p>
</li>
<li>
<p>注解和注释的区别</p>
<ul>
<li>注释: 给程序员看的</li>
<li>注解: 给编译器看的</li>
</ul>
</li>
<li>
<p>使用注解进行配置配置的优势</p>
<p>代码更加简洁,方便</p>
</li>
</ul>
<h3 id="_3-2自定义注解【理解】" tabindex="-1"><a class="header-anchor" href="#_3-2自定义注解【理解】" aria-hidden="true">#</a> 3.2自定义注解【理解】</h3>
<ul>
<li>
<p>格式</p>
<p>public @interface 注解名称 {</p>
<p>​	public 属性类型 属性名() default 默认值 ;</p>
<p>}</p>
</li>
<li>
<p>属性类型</p>
<ul>
<li>基本数据类型</li>
<li>String</li>
<li>Class</li>
<li>注解</li>
<li>枚举</li>
<li>以上类型的一维数组</li>
</ul>
</li>
<li>
<p>代码演示</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Anno2</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    <span class="token constant">SPRING</span><span class="token punctuation">,</span><span class="token constant">SUMMER</span><span class="token punctuation">,</span><span class="token constant">AUTUMN</span><span class="token punctuation">,</span><span class="token constant">WINTER</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Anno1</span> <span class="token punctuation">{</span>

    <span class="token comment">//定义一个基本类型的属性</span>
    <span class="token keyword">int</span> a <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">23</span><span class="token punctuation">;</span>

    <span class="token comment">//定义一个String类型的属性</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"beisheng"</span><span class="token punctuation">;</span>

    <span class="token comment">//定义一个Class类型的属性</span>
    <span class="token keyword">public</span> <span class="token class-name">Class</span> <span class="token function">clazz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Anno2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

    <span class="token comment">//定义一个注解类型的属性</span>
    <span class="token keyword">public</span> <span class="token class-name">Anno2</span> <span class="token function">anno</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token annotation punctuation">@Anno2</span><span class="token punctuation">;</span>

    <span class="token comment">//定义一个枚举类型的属性</span>
    <span class="token keyword">public</span> <span class="token class-name">Season</span> <span class="token function">season</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">;</span>

    <span class="token comment">//以上类型的一维数组</span>
    <span class="token comment">//int数组</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">arr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">//枚举数组</span>
    <span class="token keyword">public</span> <span class="token class-name">Season</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">seasons</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">,</span><span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SUMMER</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">//value。后期我们在使用注解的时候，如果我们只需要给注解的value属性赋值。</span>
    <span class="token comment">//那么value就可以省略</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">//在使用注解的时候如果注解里面的属性没有指定默认值。</span>
<span class="token comment">//那么我们就需要手动给出注解属性的设置值。</span>
<span class="token comment">//@Anno1(name = "beisheng")</span>
<span class="token annotation punctuation">@Anno1</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnoDemo</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意</p>
<p>如果只有一个属性需要赋值，并且属性的名称是value，则value可以省略，直接定义值即可</p>
</li>
<li>
<p>自定义注解案例</p>
<ul>
<li>
<p>需求</p>
<p>自定义一个注解@Test,用于指定类的方法上,如果某一个类的方法上使用了该注解,就执行该方法</p>
</li>
<li>
<p>实现步骤</p>
<ol>
<li>自定义一个注解Test,并在类中的某几个方法上加上注解</li>
<li>在测试类中,获取注解所在的类的Class对象</li>
<li>获取类中所有的方法对象</li>
<li>遍历每一个方法对象,判断是否有对应的注解</li>
</ol>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//表示Test这个注解的存活时间</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UseTest</span> <span class="token punctuation">{</span>

    <span class="token comment">//没有使用Test注解</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"UseTest....show...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//使用Test注解</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"UseTest....method...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//没有使用Test注解</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"UseTest....function...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnoDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span><span class="token punctuation">,</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">InvocationTargetException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.通过反射获取UseTest类的字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.beisheng.myanno3.UseTest"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//创建对象</span>
        <span class="token class-name">UseTest</span> useTest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UseTest</span><span class="token punctuation">)</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.通过反射获取这个类里面所有的方法对象</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3.遍历数组，得到每一个方法对象</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//method依次表示每一个方法对象。</span>
            <span class="token comment">//isAnnotationPresent(Class&lt;? extends Annotation> annotationClass)</span>
            <span class="token comment">//判断当前方法上是否有指定的注解。</span>
            <span class="token comment">//参数：注解的字节码文件对象</span>
            <span class="token comment">//返回值：布尔结果。  true 存在  false 不存在</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>useTest<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="_3-3元注解【理解】" tabindex="-1"><a class="header-anchor" href="#_3-3元注解【理解】" aria-hidden="true">#</a> 3.3元注解【理解】</h3>
<ul>
<li>
<p>概述</p>
<p>元注解就是描述注解的注解</p>
</li>
<li>
<p>元注解介绍</p>
<table>
<thead>
<tr>
<th>元注解名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Target</td>
<td>指定了注解能在哪里使用</td>
</tr>
<tr>
<td>@Retention</td>
<td>可以理解为保留时间(生命周期)</td>
</tr>
<tr>
<td>@Inherited</td>
<td>表示修饰的自定义注解可以被子类继承</td>
</tr>
<tr>
<td>@Documented</td>
<td>表示该自定义注解，会出现在API文档里面。</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">//指定注解使用的位置（成员变量，类，方法）</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span> <span class="token comment">//指定该注解的存活时间</span>
<span class="token comment">//@Inherited //指定该注解可以被继承</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Anno</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Anno</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"student.......show.........."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取到Student类的字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.beisheng.myanno4.Student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取注解。</span>
        <span class="token keyword">boolean</span> result <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">Anno</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


