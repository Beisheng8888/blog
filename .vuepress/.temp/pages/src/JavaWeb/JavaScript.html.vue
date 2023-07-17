<template><div><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1>
<h2 id="_1-javascript简介" tabindex="-1"><a class="header-anchor" href="#_1-javascript简介" aria-hidden="true">#</a> 1，JavaScript简介</h2>
<p><mark>JavaScript 是一门跨平台、面向对象的脚本语言</mark>，而Java语言也是跨平台的、面向对象的语言，只不过Java是编译语言，是需要编译成字节码文件才能运行的；JavaScript是脚本语言，不需要编译，由浏览器直接解析并执行。</p>
<p>JavaScript 是用来控制网页行为的，它能使网页可交互；那么它可以做什么呢？如改变页面内容、修改指定元素的属性值、对表单进行校验等，下面是这些功能的效果展示：</p>
<ul>
<li>
<p><strong>改变页面内容</strong></p>
<figure><img src="@source/src/JavaWeb/assets/image-20210814173417834.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>当我点击上面左图的 <code v-pre>点击我</code> 按钮，按钮上面的文本就改为上面右图内容，这就是js 改变页面内容的功能。</p>
</li>
<li>
<p><strong>修改指定元素的属性值</strong></p>
<figure><img src="@source/src/JavaWeb/assets/image-20210814173719505.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>当我们点击上图的 <code v-pre>开灯</code> 按钮，效果就是上面右图效果；当我点击 <code v-pre>关灯</code> 按钮，效果就是上面左图效果。其他这个功能中有两张灯泡的图片（使用img标签进行展示），通过修改 img 标签的 src 属性值改变展示的图片来实现。</p>
</li>
<li>
<p><strong>对表单进行校验</strong></p>
<figure><img src="@source/src/JavaWeb/assets/image-20210814174242688.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>在上面左图的输入框输入用户名，如果输入的用户名是不满足规则的就展示右图(上) 的效果；如果输入的用户名是满足规则的就展示右图(下) 的效果。</p>
</li>
</ul>
<p>JavaScript 和 Java 是完全不同的语言，不论是概念还是设计，只是名字比较像而已。但是<mark>基础语法类似</mark>，所以我们有java的学习经验，再学习JavaScript 语言就相对比较容易些。</p>
<p>JavaScript（简称：JS） 在 1995 年由 Brendan Eich 发明，并于 1997 年成为一部 ECMA 标准。ECMA 规定了一套标准 就叫 <code v-pre>ECMAScript</code> ，所有的客户端校验语言必须遵守这个标准，当然 JavaScript 也遵守了这个标准。ECMAScript 6 (简称ES6) 是最新的 JavaScript 版本（发布于 2015 年)，我们的就是基于最新的 <code v-pre>ES6</code> 进行讲解。</p>
<p>JavaScript  =   ECMAScript   +   DOM    +    BOM</p>
<h2 id="_2-javascript引入方式" tabindex="-1"><a class="header-anchor" href="#_2-javascript引入方式" aria-hidden="true">#</a> 2，JavaScript引入方式</h2>
<p>JavaScript 引入方式就是 HTML 和 JavaScript 的结合方式。JavaScript引入方式有两种：</p>
<ul>
<li>内部脚本：将 JS代码定义在HTML页面中</li>
<li>外部脚本：将 JS代码定义在外部 JS文件中，然后引入到 HTML页面中</li>
</ul>
<h3 id="_2-1-内部脚本" tabindex="-1"><a class="header-anchor" href="#_2-1-内部脚本" aria-hidden="true">#</a> 2.1  内部脚本</h3>
<p>在 HTML 中，JavaScript 代码必须位于 <code v-pre>&lt;script&gt;</code> 与 <code v-pre>&lt;/script&gt;</code> 标签之间</p>
<p><strong>代码如下：</strong></p>
<p><code v-pre>alert(数据)</code> 是 JavaScript 的一个方法，作用是将参数数据以浏览器弹框的形式输出出来。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello js1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果如下：</strong></p>
<figure><img src="@source/src/JavaWeb/assets/image-20210814181419691.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>从结果可以看到 js 代码已经执行了。</p>
<blockquote>
<p><mark>提示：</mark></p>
<ul>
<li>
<p>在 HTML 文档中可以在任意地方，放置任意数量的script标签。如下图</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello js1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello js1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello js1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>一般把脚本置于 <code v-pre>&lt;body&gt;</code> 元素的底部，可改善显示速度</p>
<p>因为浏览器在加载页面的时候会从上往下进行加载并解析。 我们应该让用户看到页面内容，然后再展示动态的效果。</p>
</li>
</ul>
</blockquote>
<h3 id="_2-2-外部脚本" tabindex="-1"><a class="header-anchor" href="#_2-2-外部脚本" aria-hidden="true">#</a> 2.2  外部脚本</h3>
<p><strong>第一步：定义外部 js 文件。如定义名为 demo.js的文件</strong></p>
<p>项目结构如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210814182345236.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>demo.js 文件内容如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二步：在页面中引入外部的js文件</strong></p>
<p>在页面使用 <code v-pre>script</code> 标签中使用 <code v-pre>src</code> 属性指定 js 文件的 URL 路径。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/demo.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><mark>注意：</mark></p>
<ul>
<li>
<p>外部脚本不能包含 <code v-pre>&lt;script&gt;</code> 标签</p>
<p>在js文件中直接写 js 代码即可，不要在 js文件 中写 <code v-pre>script</code> 标签</p>
</li>
<li>
<p><code v-pre>&lt;script&gt;</code> 标签不能自闭合</p>
<p>在页面中引入外部js文件时，不能写成 <code v-pre>&lt;script src=&quot;../js/demo.js&quot; /&gt;</code>。</p>
</li>
</ul>
</blockquote>
<h2 id="_3-javascript基础语法" tabindex="-1"><a class="header-anchor" href="#_3-javascript基础语法" aria-hidden="true">#</a> 3，JavaScript基础语法</h2>
<h3 id="_3-1-书写语法" tabindex="-1"><a class="header-anchor" href="#_3-1-书写语法" aria-hidden="true">#</a> 3.1  书写语法</h3>
<ul>
<li>
<p>区分大小写：与 Java 一样，变量名、函数名以及其他一切东西都是区分大小写的</p>
</li>
<li>
<p>每行结尾的分号可有可无</p>
<p>如果一行上写多个语句时，必须加分号用来区分多个语句。</p>
</li>
<li>
<p>注释</p>
<ul>
<li>单行注释：// 注释内容</li>
<li>多行注释：/* 注释内容 */</li>
</ul>
<blockquote>
<p>注意：JavaScript 没有文档注释</p>
</blockquote>
</li>
<li>
<p>大括号表示代码块</p>
<p>下面语句大家肯定能看懂，和 java 一样 大括号表示代码块。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">alert</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3-2-输出语句" tabindex="-1"><a class="header-anchor" href="#_3-2-输出语句" aria-hidden="true">#</a> 3.2  输出语句</h3>
<p>js 可以通过以下方式进行内容的输出，只不过不同的语句输出到的位置不同</p>
<ul>
<li>
<p><strong>使用 window.alert() 写入警告框</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//写入警告框</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码通过浏览器打开，我们可以看到如下图弹框效果</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210814181419691.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p><strong>使用 document.write() 写入 HTML 输出</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"hello js 2~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//写入html页面</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码通过浏览器打开，我们可以在页面上看到 <code v-pre>document.write(内容)</code> 输出的内容</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210814190302845.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p><strong>使用 console.log() 写入浏览器控制台</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello js 3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//写入浏览器的控制台</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码通过浏览器打开，我们可以在不能页面上看到  <code v-pre>console.log(内容)</code> 输出的内容，它是输出在控制台了，而怎么在控制台查看输出的内容呢？在浏览器界面按 <code v-pre>F12</code> 就可以看到下图的控制台</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210814190906202.png" alt="image-20210814190906202" tabindex="0" loading="lazy"><figcaption>image-20210814190906202</figcaption></figure>
</li>
</ul>
<h3 id="_3-3-变量" tabindex="-1"><a class="header-anchor" href="#_3-3-变量" aria-hidden="true">#</a> 3.3  变量</h3>
<p>JavaScript 中用 var 关键字（variable 的缩写）来声明变量。格式 <code v-pre>var 变量名 = 数据值;</code>。而在JavaScript 是一门弱类型语言，变量<mark>可以存放不同类型的值</mark>；如下在定义变量时赋值为数字数据，还可以将变量的值改为字符串类型的数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
test <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>js 中的变量名命名也有如下规则，和java语言基本都相同</p>
<ul>
<li>组成字符可以是任何字母、数字、下划线（_）或美元符号（$）</li>
<li>数字不能开头</li>
<li>建议使用驼峰命名</li>
</ul>
<p>JavaScript 中 <code v-pre>var</code> 关键字有点特殊，有以下地方和其他语言不一样</p>
<ul>
<li>
<p>作用域：全局变量</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 在代码块中定义的age 变量，在代码块外边还可以使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>变量可以重复定义</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span><span class="token comment">//JavaScript 会用 30 将之前 age 变量的 20 替换掉</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印的结果是 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>针对如上的问题，==ECMAScript 6 新增了 <code v-pre>let </code>关键字来定义变量。==它的用法类似于 <code v-pre>var</code>，但是所声明的变量，只在 <code v-pre>let</code> 关键字所在的代码块内有效，且不允许重复声明。</p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面代码，浏览器并没有弹框输出结果，说明这段代码是有问题的。通过 <code v-pre>F12</code> 打开开发者模式可以看到如下错误信息</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815170848426.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>而如果在代码块中定义两个同名的变量，IDEA 开发工具就直接报错了</p>
<blockquote>
<figure><img src="@source/src/JavaWeb/assets/image-20210815170952829.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</blockquote>
<p><mark>ECMAScript 6 新增了 const关键字，用来声明一个只读的常量。一旦声明，常量的值就不能改变。</mark> 通过下面的代码看一下常用的特点就可以了</p>
<blockquote>
<figure><img src="@source/src/JavaWeb/assets/image-20210815171128095.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</blockquote>
<p>我们可以看到给 PI 这个常量重新赋值时报错了。</p>
<h3 id="_3-4-数据类型" tabindex="-1"><a class="header-anchor" href="#_3-4-数据类型" aria-hidden="true">#</a> 3.4  数据类型</h3>
<p>JavaScript 中提供了两类数据类型：原始类型 和 引用类型。</p>
<blockquote>
<p>使用 typeof 运算符可以获取数据类型</p>
<p><code v-pre>alert(typeof age);</code> 以弹框的形式将 age 变量的数据类型输出</p>
</blockquote>
<p>原始数据类型：</p>
<ul>
<li>
<p><strong>number</strong>：数字（整数、小数、NaN(Not a Number)）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> price <span class="token operator">=</span> <span class="token number">99.8</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 结果是 ： number</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 结果是 ： number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><mark>注意：</mark> NaN是一个特殊的number类型的值，后面用到再说</p>
</blockquote>
</li>
<li>
<p><strong>string</strong>：字符、字符串，单双引皆可</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ch <span class="token operator">=</span> <span class="token string">'a'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'张三'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> addr <span class="token operator">=</span> <span class="token string">"北京"</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是  string</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是  string</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> addr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是  string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>==注意：==在 js 中 双引号和单引号都表示字符串类型的数据</p>
</blockquote>
</li>
<li>
<p><strong>boolean</strong>：布尔。true，false</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> flag2 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是 boolean</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> flag2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是 boolean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>null</strong>：对象为空</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//结果是 object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么打印上面的 obj 变量的数据类型，结果是object；这个官方给出了解释，下面是从官方文档截的图</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815173003408.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p><strong>undefined</strong>：当声明的变量未初始化时，该变量的默认值是 undefined</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是 undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3-5-运算符" tabindex="-1"><a class="header-anchor" href="#_3-5-运算符" aria-hidden="true">#</a> 3.5  运算符</h3>
<p>JavaScript 提供了如下的运算符。大部分和 Java语言 都是一样的，不同的是 JS 关系运算符中的 <code v-pre>==</code> 和 <code v-pre>===</code>，一会我们只演示这两个的区别，其他运算符将不做演示</p>
<ul>
<li>
<p>一元运算符：++，--</p>
</li>
<li>
<p>算术运算符：+，-，*，/，%</p>
</li>
<li>
<p>赋值运算符：=，+=，-=…</p>
</li>
<li>
<p>关系运算符：&gt;，&lt;，&gt;=，&lt;=，!=，<mark>，</mark>=…</p>
</li>
<li>
<p>逻辑运算符：&amp;&amp;，||，!</p>
</li>
<li>
<p>三元运算符：条件表达式 ? true_value : false_value</p>
</li>
</ul>
<h4 id="_3-5-1-和-区别" tabindex="-1"><a class="header-anchor" href="#_3-5-1-和-区别" aria-hidden="true">#</a> 3.5.1  <mark>和</mark>=区别</h4>
<p><strong>概述:</strong></p>
<ul>
<li>
<p>==：</p>
<ol>
<li>
<p>判断类型是否一样，如果不一样，则进行类型转换</p>
</li>
<li>
<p>再去比较其值</p>
</li>
</ol>
</li>
<li>
<p>===：js 中的全等于</p>
<ol>
<li>判断类型是否一样，如果不一样，直接返回false</li>
<li>再去比较其值</li>
</ol>
</li>
</ul>
<p><strong>代码：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> age1 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> age2 <span class="token operator">=</span> <span class="token string">"20"</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>age1 <span class="token operator">==</span> age2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
<span class="token function">alert</span><span class="token punctuation">(</span>age1 <span class="token operator">===</span> age2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-2-类型转换" tabindex="-1"><a class="header-anchor" href="#_3-5-2-类型转换" aria-hidden="true">#</a> 3.5.2  类型转换</h4>
<p>上述讲解 <code v-pre>==</code> 运算符时，发现会进行类型转换，所以接下来我们来详细的讲解一下 JavaScript 中的类型转换。</p>
<ul>
<li>
<p>其他类型转为number</p>
<ul>
<li>
<p>string 转换为 number 类型：按照字符串的字面值，转为数字。如果字面值不是数字，则转为NaN</p>
<p>将 string 转换为 number 有两种方式：</p>
<ul>
<li>
<p>使用 <code v-pre>+</code> 正号运算符：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token operator">+</span><span class="token string">"20"</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 <code v-pre>parseInt()</code> 函数(方法)：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"20"</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p><mark>建议使用 <code v-pre>parseInt()</code> 函数进行转换。</mark></p>
</blockquote>
</li>
<li>
<p>boolean 转换为 number 类型：true 转为1，false转为0</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token operator">+</span><span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>其他类型转为boolean</p>
<ul>
<li>number 类型转换为 boolean 类型：0和NaN转为false，其他的数字转为true</li>
<li>string 类型转换为 boolean 类型：空字符串转为false，其他的字符串转为true</li>
<li>null类型转换为 boolean 类型是 false</li>
<li>undefined 转换为 boolean 类型是 false</li>
</ul>
<p><strong>代码如下：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// var flag = 3;</span>
<span class="token comment">// var flag = "";</span>
<span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"转为true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"转为false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>使用场景：</strong></p>
<p>在 Java 中使用字符串前，一般都会先判断字符串不是null，并且不是空字符才会做其他的一些操作，JavaScript也有类型的操作，代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>

<span class="token comment">//健壮性判断</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>str <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"转为true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"转为false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是由于 JavaScript 会自动进行类型转换，所以上述的判断可以进行简化，代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>

<span class="token comment">//健壮性判断</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"转为true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"转为false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-流程控制语句" tabindex="-1"><a class="header-anchor" href="#_3-6-流程控制语句" aria-hidden="true">#</a> 3.6  流程控制语句</h3>
<p>JavaScript 中提供了和 Java 一样的流程控制语句，如下</p>
<ul>
<li>if</li>
<li>switch</li>
<li>for</li>
<li>while</li>
<li>dowhile</li>
</ul>
<h4 id="_3-6-1-if-语句" tabindex="-1"><a class="header-anchor" href="#_3-6-1-if-语句" aria-hidden="true">#</a> 3.6.1  if 语句</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-2-switch-语句" tabindex="-1"><a class="header-anchor" href="#_3-6-2-switch-语句" aria-hidden="true">#</a> 3.6.2  switch 语句</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"星期一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"星期二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"星期三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"星期四"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"星期五"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"星期六"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"星期日"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"输入的星期有误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-3-for-循环语句" tabindex="-1"><a class="header-anchor" href="#_3-6-3-for-循环语句" aria-hidden="true">#</a> 3.6.3  for 循环语句</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//建议for循环小括号中定义的变量使用let</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-4-while-循环语句" tabindex="-1"><a class="header-anchor" href="#_3-6-4-while-循环语句" aria-hidden="true">#</a> 3.6.4  while 循环语句</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-5-dowhile-循环语句" tabindex="-1"><a class="header-anchor" href="#_3-6-5-dowhile-循环语句" aria-hidden="true">#</a> 3.6.5  dowhile 循环语句</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-函数" tabindex="-1"><a class="header-anchor" href="#_3-7-函数" aria-hidden="true">#</a> 3.7  函数</h3>
<p>函数（就是Java中的方法）是被设计为执行特定任务的代码块；JavaScript 函数通过 function 关键词进行定义。</p>
<h4 id="_3-7-1-定义格式" tabindex="-1"><a class="header-anchor" href="#_3-7-1-定义格式" aria-hidden="true">#</a> 3.7.1  定义格式</h4>
<p>函数定义格式有两种：</p>
<ul>
<li>
<p>方式1</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">函数名</span><span class="token punctuation">(</span><span class="token parameter">参数<span class="token number">1</span><span class="token punctuation">,</span>参数<span class="token number">2.</span><span class="token punctuation">.</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    要执行的代码
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>方式2</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">函数名</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">参数列表</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    要执行的代码
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p><mark>注意：</mark></p>
<ul>
<li>
<p>形式参数不需要类型。因为JavaScript是弱类型语言</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述函数的参数 a 和 b 不需要定义数据类型，因为在每个参数前加上 var 也没有任何意义。</p>
</li>
<li>
<p>返回值也不需要定义类型，可以在函数内部直接使用return返回即可</p>
</li>
</ul>
</blockquote>
<h4 id="_3-7-2-函数调用" tabindex="-1"><a class="header-anchor" href="#_3-7-2-函数调用" aria-hidden="true">#</a> 3.7.2  函数调用</h4>
<p>函数调用函数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">函数名称</span><span class="token punctuation">(</span>实际参数列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>eg：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p><mark>注意：</mark></p>
<ul>
<li>
<p>JS中，函数调用可以传递任意个数参数</p>
</li>
<li>
<p>例如  <code v-pre>let result = add(1,2,3);</code></p>
<p>它是将数据 1 传递给了变量a，将数据 2 传递给了变量 b，而数据 3 没有变量接收。</p>
</li>
</ul>
</blockquote>
<blockquote>
<p>函数本身即是一个代码块，可以通过()调用；同时它还是一个对象，可以进行引用传递。用其他变量接收。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">let</span> xxx <span class="token operator">=</span> add<span class="token punctuation">;</span><span class="token comment">// 此处没有调用函数，仅仅是把函数对象的值传递给了xxx变量</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">xxx</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用arguments数组，可以在函数体内获取所有参数。</p>
<p>js中函数没有重载，后定义会覆盖先定义的。</p>
</blockquote>
<h2 id="_4-javascript常用对象" tabindex="-1"><a class="header-anchor" href="#_4-javascript常用对象" aria-hidden="true">#</a> 4，JavaScript常用对象</h2>
<p>JavaScript 提供了很多对象供使用者来使用。这些对象总共分类三类</p>
<ul>
<li>
<p>基本对象</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815183147297.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>BOM 对象</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815183207660.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>DOM对象</p>
<p>DOM 中的对象就比较多了，下图只是截取部分</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815183225718.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
</ul>
<p>这小节我们先学习基本对象，而我们先学习 <code v-pre>Array</code> 数组对象和 <code v-pre>String</code> 字符串对象。</p>
<h3 id="_4-1-array对象" tabindex="-1"><a class="header-anchor" href="#_4-1-array对象" aria-hidden="true">#</a> 4.1  Array对象</h3>
<p>JavaScript Array对象用于定义数组</p>
<h4 id="_4-1-1-定义格式" tabindex="-1"><a class="header-anchor" href="#_4-1-1-定义格式" aria-hidden="true">#</a> 4.1.1  定义格式</h4>
<p>数组的定义格式有两种：</p>
<ul>
<li>
<p>方式1</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>元素列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1,2,3 是存储在数组中的数据（元素）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>方式2</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> <span class="token punctuation">[</span>元素列表<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//1,2,3 是存储在数组中的数据（元素）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>注意：Java中的数组静态初始化使用的是{}定义，而 JavaScript 中使用的是 [] 定义</mark></p>
</li>
</ul>
<h4 id="_4-1-2-元素访问" tabindex="-1"><a class="header-anchor" href="#_4-1-2-元素访问" aria-hidden="true">#</a> 4.1.2  元素访问</h4>
<p>访问数组中的元素和 Java 语言的一样，格式如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">[</span>索引<span class="token punctuation">]</span> <span class="token operator">=</span> 值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>代码演示：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// 方式一</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// alert(arr);</span>

<span class="token comment">// 方式二</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//alert(arr2);</span>

<span class="token comment">// 访问</span>
arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-3-特点" tabindex="-1"><a class="header-anchor" href="#_4-1-3-特点" aria-hidden="true">#</a> 4.1.3  特点</h4>
<p>JavaScript 中的数组相当于 Java 中集合。数组的长度是可以变化的，而 JavaScript 是弱类型，所以可以存储任意的类型的数据。</p>
<p>例如如下代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 变长</span>
<span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr3<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr3<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr3<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在定义数组中给了三个元素，又给索引是 10 的位置添加了数据 10，那么 <code v-pre>索引3</code> 到 <code v-pre>索引9</code> 位置的元素是什么呢？我们之前就介绍了，在 JavaScript 中没有赋值的话，默认就是 <code v-pre>undefined</code>。</p>
<p>如果给 <code v-pre>arr3</code> 数组添加字符串的数据，也是可以添加成功的</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>arr3<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr3<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-4-属性" tabindex="-1"><a class="header-anchor" href="#_4-1-4-属性" aria-hidden="true">#</a> 4.1.4  属性</h4>
<p>Array 对象提供了很多属性，如下图是官方文档截取的</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815190319166.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>而我们只讲解 <code v-pre>length</code> 属性，该数组可以动态的获取数组的长度。而有这个属性，我们就可以遍历数组了</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-5-方法" tabindex="-1"><a class="header-anchor" href="#_4-1-5-方法" aria-hidden="true">#</a> 4.1.5  方法</h4>
<p>Array 对象同样也提供了很多方法，如下图是官方文档截取的</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815190601340.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>而我们在中只演示 <code v-pre>push</code> 函数和 <code v-pre>splice</code> 函数。</p>
<ul>
<li>
<p>push 函数：给数组添加元素，也就是在数组的末尾添加元素</p>
<p>参数表示要添加的元素</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// push:添加方法</span>
<span class="token keyword">var</span> arr5 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr5<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr5<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//数组的元素是 {1,2,3,10}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>splice 函数：删除元素</p>
<p>参数1：索引。表示从哪个索引位置删除</p>
<p>参数2：个数。表示删除几个元素</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// splice:删除元素</span>
<span class="token keyword">var</span> arr5 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr5<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从 0 索引位置开始删除，删除一个元素</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {2,3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_4-2-string对象" tabindex="-1"><a class="header-anchor" href="#_4-2-string对象" aria-hidden="true">#</a> 4.2  String对象</h3>
<p>String对象的创建方式有两种</p>
<ul>
<li>
<p>方式1：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>方式2：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> <span class="token string">"数组"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p><strong>属性：</strong></p>
<p>String对象提供了很多属性，下面给大家列举了一个属性 <code v-pre>length</code> ，该属性是用于动态的获取字符串的长度</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815192504884.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>函数：</strong></p>
<p>String对象提供了很多函数（方法），下面给大家列举了两个方法。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815192544172.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>String对象还有一个函数 <code v-pre>trim()</code> ，该方法在文档中没有体现，但是所有的浏览器都支持；它是用来去掉字符串两端的空格。</p>
<p>代码演示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str4 <span class="token operator">=</span> <span class="token string">'  abc   '</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> str4 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会输出内容 <code v-pre>1  abc  1</code>，很明显可以看到 abc 字符串左右两边是有空格的。接下来使用 <code v-pre>trim()</code> 函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str4 <span class="token operator">=</span> <span class="token string">'  abc   '</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> str4<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的内容是 <code v-pre>1abc1</code> 。这就是 <code v-pre>trim()</code> 函数的作用。</p>
<p><code v-pre>trim()</code> 函数在以后开发中还是比较常用的，例如下图所示是登陆界面</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815193420418.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>用户在输入用户名和密码时，可能会习惯的输入一些空格，这样在我们后端程序中判断用户名和密码是否正确，结果肯定是失败。所以我们一般都会对用户输入的字符串数据进行去除前后空格的操作。</p>
<h3 id="_4-3-自定义对象" tabindex="-1"><a class="header-anchor" href="#_4-3-自定义对象" aria-hidden="true">#</a> 4.3  自定义对象</h3>
<p>在 JavaScript 中自定义对象特别简单，下面就是自定义对象的格式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> 对象名称 <span class="token operator">=</span> <span class="token punctuation">{</span>
    属性名称<span class="token number">1</span><span class="token operator">:</span>属性值<span class="token number">1</span><span class="token punctuation">,</span>
    属性名称<span class="token number">2</span><span class="token operator">:</span>属性值<span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token function-variable function">函数名称</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">形参列表</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用属性的格式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>对象名<span class="token punctuation">.</span>属性名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调用函数的格式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>对象名<span class="token punctuation">.</span><span class="token function">函数名</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来通过代码演示一下，让大家体验一下 JavaScript 中自定义对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
        <span class="token function-variable function">eat</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"干饭~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token function">alert</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//zhangsan</span>
<span class="token function">alert</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//23</span>

person<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//干饭~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在对象定义时，如果是函数定义，：funcion可以省略。即：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
        <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"干饭~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="_5-bom" tabindex="-1"><a class="header-anchor" href="#_5-bom" aria-hidden="true">#</a> 5，BOM</h2>
<p>BOM：Browser Object Model 浏览器对象模型。也就是 JavaScript 将浏览器的各个组成部分封装为对象。</p>
<p>我们要操作浏览器的各个组成部分就可以通过操作 BOM 中的对象来实现。比如：我现在想将浏览器地址栏的地址改为 <code v-pre>https://www.beisheng.com</code> 就可以通过使用 BOM 中定义的 <code v-pre>Location</code> 对象的 <code v-pre>href</code> 属性，代码： <code v-pre>location.href = &quot;https://beisheng.com&quot;;</code></p>
<p>BOM 中包含了如下对象：</p>
<ul>
<li>Window：浏览器窗口对象</li>
<li>Navigator：浏览器对象</li>
<li>Screen：屏幕对象</li>
<li>History：历史记录对象</li>
<li>Location：地址栏对象</li>
</ul>
<p>下图是 BOM 中的各个对象和浏览器的各个组成部分的对应关系</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815194911914.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>BOM 中的 <code v-pre>Navigator</code> 对象和 <code v-pre>Screen</code> 对象基本不会使用，所以我们的只对 <code v-pre>Window</code>、<code v-pre>History</code>、<code v-pre>Location</code> 对象进行讲解。</p>
<h3 id="_5-1-window对象" tabindex="-1"><a class="header-anchor" href="#_5-1-window对象" aria-hidden="true">#</a> 5.1  Window对象</h3>
<p>window 对象是 JavaScript 对浏览器的窗口进行封装的对象。</p>
<h4 id="_5-1-1-获取window对象" tabindex="-1"><a class="header-anchor" href="#_5-1-1-获取window对象" aria-hidden="true">#</a> 5.1.1  获取window对象</h4>
<p>该对象不需要创建直接使用 <code v-pre>window</code>，其中 <code v-pre>window. </code> 可以省略。比如我们之前使用的 <code v-pre>alert()</code> 函数，其实就是 <code v-pre>window</code> 对象的函数，在调用是可以写成如下两种</p>
<ul>
<li>
<p>显式使用 <code v-pre>window</code> 对象调用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>隐式调用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>alert("abc")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_5-1-2-window对象属性" tabindex="-1"><a class="header-anchor" href="#_5-1-2-window对象属性" aria-hidden="true">#</a> 5.1.2  window对象属性</h4>
<p><code v-pre>window</code> 对象提供了用于获取其他 BOM 组成对象的属性</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815200625592.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>也就是说，我们想使用 <code v-pre>Location</code> 对象的话，就可以使用 <code v-pre>window</code> 对象获取；写成 <code v-pre>window.location</code>，而 <code v-pre>window.</code> 可以省略，简化写成 <code v-pre>location</code> 来获取 <code v-pre>Location</code> 对象。</p>
<h4 id="_5-1-3-window对象函数" tabindex="-1"><a class="header-anchor" href="#_5-1-3-window对象函数" aria-hidden="true">#</a> 5.1.3  window对象函数</h4>
<p><code v-pre>window</code> 对象提供了很多函数供我们使用，而很多都不常用；下面给大家列举了一些比较常用的函数</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815201323329.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<blockquote>
<p><code v-pre>setTimeout(function,毫秒值)</code> : 在一定的时间间隔后执行一个function，只执行一次<br>
<code v-pre>setInterval(function,毫秒值)</code> :在一定的时间间隔后执行一个function，循环执行</p>
</blockquote>
<p><strong>confirm代码演示：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// confirm()，点击确定按钮，返回true，点击取消按钮，返回false</span>
<span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">"确认删除？"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图是 <code v-pre>confirm()</code> 函数的效果。当我们点击 <code v-pre>确定</code> 按钮，<code v-pre>flag</code> 变量值记录的就是 <code v-pre>true</code> ；当我们点击 <code v-pre>取消</code> 按钮，<code v-pre>flag</code> 变量值记录的就是 <code v-pre>false</code>。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815201600493.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>而以后我们在页面删除数据时候如下图每一条数据后都有 <code v-pre>删除</code> 按钮，有可能是用户的一些误操作，所以对于删除操作需要用户进行再次确认，此时就需要用到 <code v-pre>confirm()</code> 函数。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815202406490.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>定时器代码演示：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hehe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们打开浏览器，3秒后才会弹框输出 <code v-pre>hehe</code>，并且只会弹出一次。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hehe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们打开浏览器，每隔2秒都会弹框输出 <code v-pre>hehe</code>。</p>
<h4 id="_5-1-4-案例" tabindex="-1"><a class="header-anchor" href="#_5-1-4-案例" aria-hidden="true">#</a> 5.1.4  案例</h4>
<p><strong>需求：每隔1秒，灯泡切换一次状态</strong></p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815203345262.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>需求说明：</p>
<p>有如下页面效果，实现定时进行开灯、关灯功能</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815203623739.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>初始页面环境</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>JavaScript演示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>开灯<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myImage<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../imgs/off.gif<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>关灯<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myImage'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">'../imgs/on.gif'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myImage'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">'../imgs/off.gif'</span>
    <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码实现：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>JavaScript演示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>开灯<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myImage<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../imgs/off.gif<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>关灯<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myImage'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">'../imgs/on.gif'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myImage'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">'../imgs/off.gif'</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//定义一个变量，用来记录灯的状态，偶数是开灯状态，奇数是关灯状态</span>
    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//使用循环定时器</span>
    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//表示是偶数，开灯状态，调用 on() 函数</span>
            <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>  <span class="token comment">//表示是奇数，关灯状态，调用 off() 函数</span>
            <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        x <span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//改变变量的值</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-history对象" tabindex="-1"><a class="header-anchor" href="#_5-2-history对象" aria-hidden="true">#</a> 5.2  History对象</h3>
<p>History 对象是 JavaScript 对历史记录进行封装的对象。</p>
<ul>
<li>
<p>History 对象的获取</p>
<p>使用 window.history获取，其中window. 可以省略</p>
</li>
<li>
<p>History 对象的函数</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815224826535.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>这两个函数我们平时在访问其他的一些网站时经常使用对应的效果，如下图</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815225059114.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>当我们点击向左的箭头，就跳转到前一个访问的页面，这就是 <code v-pre>back()</code> 函数的作用；当我们点击向右的箭头，就跳转到下一个访问的页面，这就是 <code v-pre>forward()</code> 函数的作用。</p>
</li>
</ul>
<h3 id="_5-3-location对象" tabindex="-1"><a class="header-anchor" href="#_5-3-location对象" aria-hidden="true">#</a> 5.3  Location对象</h3>
<figure><img src="@source/src/JavaWeb/assets/image-20210815225243560.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>Location 对象是 JavaScript 对地址栏封装的对象。可以通过操作该对象，跳转到任意页面。</p>
<h4 id="_5-3-1-获取location对象" tabindex="-1"><a class="header-anchor" href="#_5-3-1-获取location对象" aria-hidden="true">#</a> 5.3.1  获取Location对象</h4>
<p>使用 window.location获取，其中window. 可以省略</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">方法</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
location<span class="token punctuation">.</span><span class="token function">方法</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-2-location对象属性" tabindex="-1"><a class="header-anchor" href="#_5-3-2-location对象属性" aria-hidden="true">#</a> 5.3.2  Location对象属性</h4>
<p>Location对象提供了很对属性。以后常用的只有一个属性 <code v-pre>href</code></p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815225707580.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>代码演示：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"要跳转了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"https://www.baidu.com"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器首先会弹框显示 <code v-pre>要跳转了</code>，当我们点击了 <code v-pre>确定</code> 就会跳转到 百度 的首页。</p>
<h4 id="_5-3-3-案例" tabindex="-1"><a class="header-anchor" href="#_5-3-3-案例" aria-hidden="true">#</a> 5.3.3  案例</h4>
<p><strong>需求：3秒跳转到百度首页</strong></p>
<p><strong>分析：</strong></p>
<ol>
<li>3秒跳转，由此可以确定需要使用到定时器，而只跳转一次，所以使用 <code v-pre>setTimeOut()</code></li>
<li>要进行页面跳转，所以需要用到 <code v-pre>location</code> 对象的 <code v-pre>href</code> 属性实现</li>
</ol>
<p><strong>代码实现：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"3秒跳转到首页..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"https://www.baidu.com"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-dom" tabindex="-1"><a class="header-anchor" href="#_6-dom" aria-hidden="true">#</a> 6，DOM</h2>
<h3 id="_6-1-概述" tabindex="-1"><a class="header-anchor" href="#_6-1-概述" aria-hidden="true">#</a> 6.1  概述</h3>
<p>DOM：Document Object Model 文档对象模型。也就是 JavaScript 将 HTML 文档的各个组成部分封装为对象。</p>
<p>DOM 其实我们并不陌生，之前在学习 XML 就接触过，只不过 XML 文档中的标签需要我们写代码解析，而 HTML 文档是浏览器解析。封装的对象分为</p>
<ul>
<li>Document：整个文档对象</li>
<li>Element：元素对象</li>
<li>Attribute：属性对象</li>
<li>Text：文本对象</li>
<li>Comment：注释对象</li>
</ul>
<p>如下图，左边是 HTML 文档内容，右边是 DOM 树</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815231028430.png" alt="image-20210815231028430" tabindex="0" loading="lazy"><figcaption>image-20210815231028430</figcaption></figure>
<p><strong>作用：</strong></p>
<p>JavaScript 通过 DOM， 就能够对 HTML进行操作了</p>
<ul>
<li>改变 HTML 元素的内容</li>
<li>改变 HTML 元素的样式（CSS）</li>
<li>对 HTML DOM 事件作出反应</li>
<li>添加和删除 HTML 元素</li>
</ul>
<p><strong>DOM相关概念：</strong></p>
<p>DOM 是 W3C（万维网联盟）定义了访问 HTML 和 XML 文档的标准。该标准被分为 3 个不同的部分：</p>
<ol>
<li>
<p>核心 DOM：针对任何结构化文档的标准模型。 XML 和 HTML 通用的标准</p>
<ul>
<li>
<p>Document：整个文档对象</p>
</li>
<li>
<p>Element：元素对象</p>
</li>
<li>
<p>Attribute：属性对象</p>
</li>
<li>
<p>Text：文本对象</p>
</li>
<li>
<p>Comment：注释对象</p>
</li>
</ul>
</li>
<li>
<p>XML DOM： 针对 XML 文档的标准模型</p>
</li>
<li>
<p>HTML DOM： 针对 HTML 文档的标准模型</p>
<p>该标准是在核心 DOM 基础上，对 HTML 中的每个标签都封装成了不同的对象</p>
<ul>
<li>例如：<code v-pre>&lt;img&gt;</code> 标签在浏览器加载到内存中时会被封装成 <code v-pre>Image</code> 对象，同时该对象也是 <code v-pre>Element</code> 对象。</li>
<li>例如：<code v-pre>&lt;input type='button'&gt;</code> 标签在浏览器加载到内存中时会被封装成 <code v-pre>Button</code> 对象，同时该对象也是 <code v-pre>Element</code> 对象。</li>
</ul>
</li>
</ol>
<h3 id="_6-2-获取-element对象" tabindex="-1"><a class="header-anchor" href="#_6-2-获取-element对象" aria-hidden="true">#</a> 6.2  获取 Element对象</h3>
<p>HTML 中的 Element 对象可以通过 <code v-pre>Document</code> 对象获取，而 <code v-pre>Document</code> 对象是通过 <code v-pre>window</code> 对象获取。</p>
<p><code v-pre>Document</code> 对象中提供了以下获取 <code v-pre>Element</code> 元素对象的函数</p>
<ul>
<li><code v-pre>getElementById()</code>：根据id属性值获取，返回单个Element对象</li>
<li><code v-pre>getElementsByTagName()</code>：根据标签名称获取，返回Element对象数组</li>
<li><code v-pre>getElementsByName()</code>：根据name属性值获取，返回Element对象数组</li>
<li><code v-pre>getElementsByClassName()</code>：根据class属性值获取，返回Element对象数组</li>
</ul>
<p><strong>代码演示：</strong></p>
<p>下面有提前准备好的页面：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../imgs/off.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>456<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 电影
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 旅游
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 游戏
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
		<span class="token comment">//在此处书写js代码</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p>根据 <code v-pre>id</code> 属性值获取上面的 <code v-pre>img</code> 元素对象，返回单个对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"light"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210815233232924.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>从弹框输出的内容，也可以看出是一个图片元素对象。</p>
</li>
<li>
<p>根据标签名称获取所有的 <code v-pre>div</code> 元素对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> divs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 返回一个数组，数组中存储的是 div 元素对象</span>
<span class="token comment">// alert(divs.length);  //输出 数组的长度</span>
<span class="token comment">//遍历数组</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> divs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>divs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取所有的满足 <code v-pre>name = 'hobby'</code> 条件的元素对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//3. getElementsByName：根据name属性值获取，返回Element对象数组</span>
<span class="token keyword">var</span> hobbys <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span><span class="token string">"hobby"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hobbys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>hobbys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取所有的满足 <code v-pre>class='cls'</code> 条件的元素对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//4. getElementsByClassName：根据class属性值获取，返回Element对象数组</span>
<span class="token keyword">var</span> clss <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"cls"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> clss<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>clss<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_6-3-html-element对象使用" tabindex="-1"><a class="header-anchor" href="#_6-3-html-element对象使用" aria-hidden="true">#</a> 6.3  HTML Element对象使用</h3>
<p>HTML 中的 <code v-pre>Element</code> 元素对象有很多，不可能全部记住，以后是根据具体的需求查阅文档使用。</p>
<p>下面我们通过具体的案例给大家演示文档的查询和对象的使用；下面提前给大家准备好的页面</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../imgs/off.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>456<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 电影
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 旅游
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 游戏
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">//在此处写js低吗</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>需求：</strong></p>
<ol>
<li>
<p>点亮灯泡</p>
<p>此案例由于需要改变 <code v-pre>img</code> 标签 的图片，所以我们查询文档，下图是查看文档的流程：</p>
<figure><img src="@source/src/JavaWeb/assets/查看文档.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>代码实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1，根据 id='light' 获取 img 元素对象</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"light"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2，修改 img 对象的 src 属性来改变图片</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"../imgs/on.gif"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>将所有的 <code v-pre>div</code> 标签的标签体内容替换为 <code v-pre>呵呵</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1，获取所有的 div 元素对象</span>
<span class="token keyword">var</span> divs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
        style:设置元素css样式
        innerHTML：设置元素内容
    */</span>
<span class="token comment">//2，遍历数组，获取到每一个 div 元素对象，并修改元素内容</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> divs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//divs[i].style.color = 'red';</span>
    divs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"呵呵"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使所有的复选框呈现被选中的状态</p>
<p>此案例我们需要看 复选框 元素对象有什么属性或者函数是来操作 复选框的选中状态。下图是文档的查看</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210816000520457.png" alt="image-20210816000520457" tabindex="0" loading="lazy"><figcaption>image-20210816000520457</figcaption></figure>
<p>代码实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1，获取所有的 复选框 元素对象</span>
<span class="token keyword">var</span> hobbys <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span><span class="token string">"hobby"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2，遍历数组，通过将 复选框 元素对象的 checked 属性值设置为 true 来改变复选框的选中状态</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hobbys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hobbys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_7-事件监听" tabindex="-1"><a class="header-anchor" href="#_7-事件监听" aria-hidden="true">#</a> 7，事件监听</h2>
<p>要想知道什么是事件监听，首先先聊聊什么是事件？</p>
<p>HTML 事件是发生在 HTML 元素上的“事情”。比如：页面上的 <code v-pre>按钮被点击</code>、<code v-pre>鼠标移动到元素之上</code>、<code v-pre>按下键盘按键</code> 等都是事件。</p>
<p>事件监听是JavaScript 可以在事件被侦测到时==执行一段逻辑代码。==例如下图当我们点击 <code v-pre>开灯</code> 按钮，就需要通过 js 代码实现替换图片</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210816194143246.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>再比如下图输入框，当我们输入了用户名 <code v-pre>光标离开</code> 输入框，就需要通过 js 代码对输入的内容进行校验，没通过校验就在输入框后提示 <code v-pre>用户名格式有误!</code></p>
<figure><img src="@source/src/JavaWeb/assets/image-20210816194333252.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_7-1-事件绑定" tabindex="-1"><a class="header-anchor" href="#_7-1-事件绑定" aria-hidden="true">#</a> 7.1  事件绑定</h3>
<p>JavaScript 提供了两种事件绑定方式：</p>
<ul>
<li>
<p>方式一：通过 HTML标签中的事件属性进行绑定</p>
<p>如下面代码，有一个按钮元素，我们是在该标签上定义 <code v-pre>事件属性</code>，在事件属性中绑定函数。<code v-pre>onclick</code> 就是 <code v-pre>单击事件</code> 的事件属性。<code v-pre>onclick='on（）'</code> 表示该点击事件绑定了一个名为 <code v-pre>on()</code> 的函数</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>&lt;input type="button" onclick='on()’>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是点击事件绑定的 <code v-pre>on()</code> 函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"我被点了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>方式二：通过 DOM 元素属性绑定</p>
<p>如下面代码是按钮标签，在该标签上我们并没有使用 <code v-pre>事件属性</code>，绑定事件的操作需要在 js 代码中实现</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面 js 代码是获取了 <code v-pre>id='btn'</code> 的元素对象，然后将 <code v-pre>onclick</code> 作为该对象的属性，并且绑定匿名函数。该函数是在事件触发后自动执行</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"我被点了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>代码演示：</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--方式1：在下面input标签上添加 onclick 属性，并绑定 on() 函数--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>再点我<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">function</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"我被点了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      	<span class="token comment">//方式2：获取 id="btn" 元素对象，通过调用 onclick 属性 绑定点击事件</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"我被点了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-常见事件" tabindex="-1"><a class="header-anchor" href="#_7-2-常见事件" aria-hidden="true">#</a> 7.2  常见事件</h3>
<p>上面案例中使用到了 <code v-pre>onclick</code> 事件属性，那都有哪些事件属性供我们使用呢？下面就给大家列举一些比较常用的事件属性</p>
<table>
<thead>
<tr>
<th>事件属性名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>onclick</td>
<td>鼠标单击事件</td>
</tr>
<tr>
<td>onblur</td>
<td>元素失去焦点</td>
</tr>
<tr>
<td>onfocus</td>
<td>元素获得焦点</td>
</tr>
<tr>
<td>onload</td>
<td>某个页面或图像被完成加载</td>
</tr>
<tr>
<td>onsubmit</td>
<td>当表单提交时触发该事件</td>
</tr>
<tr>
<td>onmouseover</td>
<td>鼠标被移到某元素之上</td>
</tr>
<tr>
<td>onmouseout</td>
<td>鼠标从某元素移开</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p><code v-pre>onfocus</code> 获得焦点事件。</p>
<p>如下图，当点击了输入框后，输入框就获得了焦点。而下图示例是当获取焦点后会更改输入框的背景颜色。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210816214900928.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p><code v-pre>onblur  </code> 失去焦点事件。</p>
<p>如下图，当点击了输入框后，输入框就获得了焦点；再点击页面其他位置，那输入框就失去焦点了。下图示例是将输入的文本转换为大写。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210816215235969.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p><code v-pre>onmouseout  </code> 鼠标移出事件。</p>
</li>
<li>
<p><code v-pre>onmouseover  </code>  鼠标移入事件。</p>
<p>如下图，当鼠标移入到 苹果 图片上时，苹果图片变大；当鼠标移出 苹果图片时，苹果图片变小。</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210816220149093.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p><code v-pre>onsubmit  </code> 表单提交事件</p>
<p>如下是带有表单的页面</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>register<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上代码的表单，当我们点击 <code v-pre>提交</code> 按钮后，表单就会提交，此处默认使用的是 <code v-pre>GET</code> 提交方式，会将提交的数据拼接到 URL 后。现需要通过 js 代码实现阻止表单提交的功能，js 代码实现如下：</p>
<ol>
<li>获取 <code v-pre>form</code> 表单元素对象。</li>
<li>给 <code v-pre>form</code> 表单元素对象绑定 <code v-pre>onsubmit</code> 事件，并绑定匿名函数。</li>
<li>该匿名函数如果返回的是true，提交表单；如果返回的是false，阻止表单提交。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"register"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onsubmit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//onsubmit 返回true，则表单会被提交，返回false，则表单不提交</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_8-表单验证案例" tabindex="-1"><a class="header-anchor" href="#_8-表单验证案例" aria-hidden="true">#</a> 8，表单验证案例</h2>
<h3 id="_8-1-需求" tabindex="-1"><a class="header-anchor" href="#_8-1-需求" aria-hidden="true">#</a> 8.1  需求</h3>
<figure><img src="@source/src/JavaWeb/assets/image-20210816225925955.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>有如下注册页面，对表单进行校验，如果输入的用户名、密码、手机号符合规则，则允许提交；如果不符合规则，则不允许提交。</p>
<p>完成以下需求：</p>
<ol>
<li>
<p>当输入框失去焦点时，验证输入内容是否符合要求</p>
</li>
<li>
<p>当点击注册按钮时，判断所有输入框的内容是否都符合要求，如果不合符则阻止表单提交</p>
</li>
</ol>
<h3 id="_8-2-环境准备" tabindex="-1"><a class="header-anchor" href="#_8-2-环境准备" aria-hidden="true">#</a> 8.2  环境准备</h3>
<p>下面是初始页面</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>欢迎注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../css/register.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reg-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>欢迎注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>已有帐号？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reg-form<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>用户名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username_err<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>err_msg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>用户名不太受欢迎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>密码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password_err<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>err_msg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>密码格式有误<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>手机号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel_err<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>err_msg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>手机号格式有误<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttons<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>注 册<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reg_btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-验证输入框" tabindex="-1"><a class="header-anchor" href="#_8-3-验证输入框" aria-hidden="true">#</a> 8.3  验证输入框</h3>
<p>此小节完成如下功能：</p>
<ul>
<li>校验用户名。当用户名输入框失去焦点时，判断输入的内容是否符合 <code v-pre>长度是 6-12 位</code> 规则，不符合使 <code v-pre>id='username_err'</code> 的span标签显示出来，给出用户提示。</li>
<li>校验密码。当密码输入框失去焦点时，判断输入的内容是否符合 <code v-pre>长度是 6-12 位</code> 规则，不符合使 <code v-pre>id='password_err'</code> 的span标签显示出来，给出用户提示。</li>
<li>校验手机号。当手机号输入框失去焦点时，判断输入的内容是否符合 <code v-pre>长度是 11 位</code> 规则，不符合使 <code v-pre>id='tel_err'</code> 的span标签显示出来，给出用户提示。</li>
</ul>
<p>代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1. 验证用户名是否符合规则</span>
<span class="token comment">//1.1 获取用户名的输入框</span>
<span class="token keyword">var</span> usernameInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
usernameInput<span class="token punctuation">.</span><span class="token function-variable function">onblur</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.3 获取用户输入的用户名</span>
    <span class="token keyword">var</span> username <span class="token operator">=</span> usernameInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.4 判断用户名是否符合规则：长度 6~12</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>username<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">6</span> <span class="token operator">&amp;&amp;</span> username<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//符合规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//不合符规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//1. 验证密码是否符合规则</span>
<span class="token comment">//1.1 获取密码的输入框</span>
<span class="token keyword">var</span> passwordInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
passwordInput<span class="token punctuation">.</span><span class="token function-variable function">onblur</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.3 获取用户输入的密码</span>
    <span class="token keyword">var</span> password <span class="token operator">=</span> passwordInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.4 判断密码是否符合规则：长度 6~12</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>password<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">6</span> <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//符合规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//不合符规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//1. 验证手机号是否符合规则</span>
<span class="token comment">//1.1 获取手机号的输入框</span>
<span class="token keyword">var</span> telInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
telInput<span class="token punctuation">.</span><span class="token function-variable function">onblur</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.3 获取用户输入的手机号</span>
    <span class="token keyword">var</span> tel <span class="token operator">=</span> telInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.4 判断手机号是否符合规则：长度 11</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tel<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//符合规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//不合符规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-验证表单" tabindex="-1"><a class="header-anchor" href="#_8-3-验证表单" aria-hidden="true">#</a> 8.3  验证表单</h3>
<p>当用户点击 <code v-pre>注册</code> 按钮时，需要同时对输入的 <code v-pre>用户名</code>、<code v-pre>密码</code>、<code v-pre>手机号</code> ，如果都符合规则，则提交表单；如果有一个不符合规则，则不允许提交表单。实现该功能需要获取表单元素对象，并绑定 <code v-pre>onsubmit</code> 事件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1. 获取表单对象</span>
<span class="token keyword">var</span> regForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"reg-form"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2. 绑定onsubmit 事件</span>
regForm<span class="token punctuation">.</span><span class="token function-variable function">onsubmit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>onsubmit</code> 事件绑定的函数需要对输入的 <code v-pre>用户名</code>、<code v-pre>密码</code>、<code v-pre>手机号</code> 进行校验，这些校验我们之前都已经实现过了，这里我们还需要再校验一次吗？不需要，只需要对之前校验的代码进行改造，把每个校验的代码专门抽象到有名字的函数中，方便调用；并且每个函数都要返回结果来去决定是提交表单还是阻止表单提交，代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1. 验证用户名是否符合规则</span>
<span class="token comment">//1.1 获取用户名的输入框</span>
<span class="token keyword">var</span> usernameInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
usernameInput<span class="token punctuation">.</span>onblur <span class="token operator">=</span> checkUsername<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">checkUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.3 获取用户输入的用户名</span>
    <span class="token keyword">var</span> username <span class="token operator">=</span> usernameInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.4 判断用户名是否符合规则：长度 6~12</span>
    <span class="token keyword">var</span> flag <span class="token operator">=</span> username<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">6</span> <span class="token operator">&amp;&amp;</span> username<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">12</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//符合规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//不合符规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//1. 验证密码是否符合规则</span>
<span class="token comment">//1.1 获取密码的输入框</span>
<span class="token keyword">var</span> passwordInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
passwordInput<span class="token punctuation">.</span>onblur <span class="token operator">=</span> checkPassword<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.3 获取用户输入的密码</span>
    <span class="token keyword">var</span> password <span class="token operator">=</span> passwordInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.4 判断密码是否符合规则：长度 6~12</span>
    <span class="token keyword">var</span> flag <span class="token operator">=</span> password<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">6</span> <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">12</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//符合规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//不合符规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//1. 验证手机号是否符合规则</span>
<span class="token comment">//1.1 获取手机号的输入框</span>
<span class="token keyword">var</span> telInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
telInput<span class="token punctuation">.</span>onblur <span class="token operator">=</span> checkTel<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">checkTel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.3 获取用户输入的手机号</span>
    <span class="token keyword">var</span> tel <span class="token operator">=</span> telInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.4 判断手机号是否符合规则：长度 11</span>
    <span class="token keyword">var</span> flag <span class="token operator">=</span> tel<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">11</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//符合规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//不合符规则</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 <code v-pre>onsubmit</code> 绑定的函数需要调用 <code v-pre>checkUsername()</code> 函数、<code v-pre>checkPassword()</code> 函数、<code v-pre>checkTel()</code> 函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1. 获取表单对象</span>
<span class="token keyword">var</span> regForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"reg-form"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2. 绑定onsubmit 事件</span>
regForm<span class="token punctuation">.</span><span class="token function-variable function">onsubmit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//挨个判断每一个表单项是否都符合要求，如果有一个不合符，则返回false</span>

    <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token function">checkUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">checkTel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-regexp对象" tabindex="-1"><a class="header-anchor" href="#_9-regexp对象" aria-hidden="true">#</a> 9，RegExp对象</h2>
<p>RegExp 是正则对象。正则对象是判断指定字符串是否符合规则。</p>
<p>如下图是百度贴吧中的帖子</p>
<figure><img src="@source/src/JavaWeb/assets/image-20210816235112754.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>我们可以通过爬虫技术去爬取该页面源代码，然后获取页面中所有的邮箱，后期我们可以给这些邮箱地址发送推广的邮件。那么问题来了，如何才能知道页面内容中哪些事邮箱地址呢？这里就可以使用正则表达式来匹配邮箱。</p>
<p>在 js 中对正则表达式封装的对象就是正则对象。</p>
<h3 id="_9-1-正则对象使用" tabindex="-1"><a class="header-anchor" href="#_9-1-正则对象使用" aria-hidden="true">#</a> 9.1  正则对象使用</h3>
<h4 id="_9-1-1-创建对象" tabindex="-1"><a class="header-anchor" href="#_9-1-1-创建对象" aria-hidden="true">#</a> 9.1.1  创建对象</h4>
<p>正则对象有两种创建方式：</p>
<ul>
<li>
<p>直接量方式：注意不要加引号</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">正则表达式</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>创建 RegExp 对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"正则表达式"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_9-1-2-函数" tabindex="-1"><a class="header-anchor" href="#_9-1-2-函数" aria-hidden="true">#</a> 9.1.2  函数</h4>
<p><code v-pre>test(str)</code> ：判断指定字符串是否符合规则，返回 true或 false</p>
<h3 id="_9-2-正则表达式" tabindex="-1"><a class="header-anchor" href="#_9-2-正则表达式" aria-hidden="true">#</a> 9.2  正则表达式</h3>
<p>从上面创建正则对象的格式中可以看出不管哪种方式都需要正则表达式，那么什么是正则表达式呢？</p>
<p>正则表达式定义了字符串组成的规则。也就是判断指定的字符串是否符合指定的规则，如果符合返回true，如果不符合返回false。</p>
<p>正则表达式是和语言无关的。很多语言都支持正则表达式，Java语言也支持，只不过正则表达式在不同的语言中的使用方式不同，js 中需要使用正则对象来使用正则表达式。</p>
<p>正则表达式常用的规则如下：</p>
<ul>
<li>
<p>^：表示开始</p>
</li>
<li>
<p>$：表示结束</p>
</li>
<li>
<p>[ ]：代表某个范围内的单个字符，比如： [0-9] 单个数字字符</p>
</li>
<li>
<p>.：代表任意单个字符，除了换行和行结束符</p>
</li>
<li>
<p>\w：代表单词字符：字母、数字、下划线(<em>)，相当于 [A-Za-z0-9</em>]</p>
</li>
<li>
<p>\d：代表数字字符： 相当于 [0-9]</p>
</li>
</ul>
<p>量词：</p>
<ul>
<li>
<p>+：至少一个</p>
</li>
<li>
<p>*：零个或多个</p>
</li>
<li>
<p>？：零个或一个</p>
</li>
<li>
<p>{x}：x个</p>
</li>
<li>
<p>{m,}：至少m个</p>
</li>
<li>
<p>{m,n}：至少m个，最多n个</p>
</li>
</ul>
<p><strong>代码演示：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 规则：单词字符，6~12</span>
<span class="token comment">//1,创建正则对象，对正则表达式进行封装</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\w{6,12}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"abcccc"</span><span class="token punctuation">;</span>
<span class="token comment">//2,判断 str 字符串是否符合 reg 封装的正则表达式的规则</span>
<span class="token keyword">var</span> flag <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-改进表单校验案例" tabindex="-1"><a class="header-anchor" href="#_9-3-改进表单校验案例" aria-hidden="true">#</a> 9.3  改进表单校验案例</h3>
<p>表单校验案例中的规则是我们进行一系列的判断来实现的，现在学习了正则对象后，就可以使用正则对象来改进这个案例。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>欢迎注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../css/register.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reg-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>欢迎注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>已有帐号？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reg-form<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>用户名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username_err<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>err_msg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>用户名不太受欢迎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>密码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password_err<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>err_msg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>密码格式有误<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>


            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>手机号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel_err<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>err_msg<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>手机号格式有误<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttons<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>注 册<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reg_btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

    <span class="token comment">//1. 验证用户名是否符合规则</span>
    <span class="token comment">//1.1 获取用户名的输入框</span>
    <span class="token keyword">var</span> usernameInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
    usernameInput<span class="token punctuation">.</span>onblur <span class="token operator">=</span> checkUsername<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">checkUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.3 获取用户输入的用户名</span>
        <span class="token keyword">var</span> username <span class="token operator">=</span> usernameInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//1.4 判断用户名是否符合规则：长度 6~12,单词字符组成</span>
        <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\w{6,12}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> flag <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//var flag = username.length >= 6 &amp;&amp; username.length &lt;= 12;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//符合规则</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不合符规则</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"username_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//1. 验证密码是否符合规则</span>
    <span class="token comment">//1.1 获取密码的输入框</span>
    <span class="token keyword">var</span> passwordInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
    passwordInput<span class="token punctuation">.</span>onblur <span class="token operator">=</span> checkPassword<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.3 获取用户输入的密码</span>
        <span class="token keyword">var</span> password <span class="token operator">=</span> passwordInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//1.4 判断密码是否符合规则：长度 6~12</span>
        <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\w{6,12}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> flag <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//var flag = password.length >= 6 &amp;&amp; password.length &lt;= 12;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//符合规则</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不合符规则</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//1. 验证手机号是否符合规则</span>
    <span class="token comment">//1.1 获取手机号的输入框</span>
    <span class="token keyword">var</span> telInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1.2 绑定onblur事件 失去焦点</span>
    telInput<span class="token punctuation">.</span>onblur <span class="token operator">=</span> checkTel<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">checkTel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.3 获取用户输入的手机号</span>
        <span class="token keyword">var</span> tel <span class="token operator">=</span> telInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//1.4 判断手机号是否符合规则：长度 11，数字组成，第一位是1</span>
        <span class="token comment">//var flag = tel.length == 11;</span>
        <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1]\d{10}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> flag <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//符合规则</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不合符规则</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"tel_err"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//1. 获取表单对象</span>
    <span class="token keyword">var</span> regForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"reg-form"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//2. 绑定onsubmit 事件</span>
    regForm<span class="token punctuation">.</span><span class="token function-variable function">onsubmit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//挨个判断每一个表单项是否都符合要求，</span>
        如果有一个不合符，则返回<span class="token boolean">false</span>

        <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token function">checkUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">checkTel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编写js代码的基本流程" tabindex="-1"><a class="header-anchor" href="#编写js代码的基本流程" aria-hidden="true">#</a> 编写js代码的基本流程</h4>
<ol>
<li>确定事件</li>
<li>确定元素</li>
<li>绑定事件</li>
<li>编写业务逻辑（可能包含dom操作）</li>
</ol>
</div></template>


