<template><div><h1 id="常用api01" tabindex="-1"><a class="header-anchor" href="#常用api01" aria-hidden="true">#</a> 常用API01</h1>
<h2 id="_1-api" tabindex="-1"><a class="header-anchor" href="#_1-api" aria-hidden="true">#</a> 1.API</h2>
<h3 id="_1-1-api概述" tabindex="-1"><a class="header-anchor" href="#_1-1-api概述" aria-hidden="true">#</a> 1.1 API概述</h3>
<ul>
<li>
<p>什么是API</p>
<p>​	API (Application Programming Interface) ：应用程序编程接口</p>
</li>
<li>
<p>java中的API</p>
<p>​	指的就是 JDK 中提供的各种功能的 Java类，这些类将底层的实现封装了起来，我们不需要关心这些类是如何实现的，只需要学习这些类如何使用即可，我们可以通过帮助文档来学习这些API如何使用。</p>
</li>
</ul>
<h3 id="_1-2-如何使用api帮助文档【应用】" tabindex="-1"><a class="header-anchor" href="#_1-2-如何使用api帮助文档【应用】" aria-hidden="true">#</a> 1.2 如何使用API帮助文档【应用】</h3>
<ul>
<li>打开帮助文档</li>
</ul>
<p><img src="@source/JavaSE/img/01.png" alt="01"></p>
<ul>
<li>找到索引选项卡中的输入框</li>
</ul>
<p><img src="@source/JavaSE/img/02.png" alt="02"></p>
<ul>
<li>在输入框中输入Random</li>
</ul>
<p><img src="@source/JavaSE/img/03.png" alt="03"></p>
<ul>
<li>看类在哪个包下</li>
</ul>
<p><img src="@source/JavaSE/img/04.png" alt="04"></p>
<ul>
<li>看类的描述</li>
</ul>
<p><img src="@source/JavaSE/img/05.png" alt="05"></p>
<ul>
<li>看构造方法</li>
</ul>
<p><img src="@source/JavaSE/img/06.png" alt="06"></p>
<ul>
<li>看成员方法</li>
</ul>
<p><img src="@source/JavaSE/img/07.png" alt="07"></p>
<h2 id="_2-常用api" tabindex="-1"><a class="header-anchor" href="#_2-常用api" aria-hidden="true">#</a> 2.常用API</h2>
<h3 id="_2-1-math-应用" tabindex="-1"><a class="header-anchor" href="#_2-1-math-应用" aria-hidden="true">#</a> 2.1 Math（应用）</h3>
<ul>
<li>
<p>1、Math类概述</p>
<ul>
<li>Math 包含执行基本数字运算的方法</li>
</ul>
</li>
<li>
<p>2、Math中方法的调用方式</p>
<ul>
<li>Math类中无构造方法，但内部的方法都是静态的，则可以通过   <strong>类名.进行调用</strong></li>
</ul>
</li>
<li>
<p>3、Math类的常用方法</p>
<table>
<thead>
<tr>
<th>方法名    方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>public static int   abs(int a)</td>
<td>返回参数的绝对值</td>
</tr>
<tr>
<td>public static double ceil(double a)</td>
<td>返回大于或等于参数的最小double值，等于一个整数</td>
</tr>
<tr>
<td>public static double floor(double a)</td>
<td>返回小于或等于参数的最大double值，等于一个整数</td>
</tr>
<tr>
<td>public   static int round(float a)</td>
<td>按照四舍五入返回最接近参数的int</td>
</tr>
<tr>
<td>public static int   max(int a,int b)</td>
<td>返回两个int值中的较大值</td>
</tr>
<tr>
<td>public   static int min(int a,int b)</td>
<td>返回两个int值中的较小值</td>
</tr>
<tr>
<td>public   static double pow (double a,double b)</td>
<td>返回a的b次幂的值</td>
</tr>
<tr>
<td>public   static double random()</td>
<td>返回值为double的正值，[0.0,1.0)</td>
</tr>
</tbody>
</table>
</li>
</ul>
<h3 id="_2-2-system-应用" tabindex="-1"><a class="header-anchor" href="#_2-2-system-应用" aria-hidden="true">#</a> 2.2 System（应用）</h3>
<ul>
<li>
<p>System类的常用方法</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>public   static void exit(int status)</td>
<td>终止当前运行的   Java   虚拟机，非零表示异常终止</td>
</tr>
<tr>
<td>public   static long currentTimeMillis()</td>
<td>返回当前时间(以毫秒为单位)</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>示例代码</p>
<ul>
<li>需求：在控制台输出1-10000，计算这段代码执行了多少毫秒</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SystemDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取开始的时间节点</span>
        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 获取代码运行结束后的时间节点</span>
        <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"共耗时："</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"毫秒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-3-object类的tostring方法-应用" tabindex="-1"><a class="header-anchor" href="#_2-3-object类的tostring方法-应用" aria-hidden="true">#</a> 2.3 Object类的toString方法（应用）</h3>
<ul>
<li>
<p>Object类概述</p>
<ul>
<li>Object 是类层次结构的根，每个类都可以将 Object 作为超类。所有类都直接或者间接的继承自该类，换句话说，该类所具备的方法，所有类都会有一份</li>
</ul>
</li>
<li>
<p>查看方法源码的方式</p>
<ul>
<li>选中方法，按下Ctrl + B</li>
</ul>
</li>
<li>
<p>重写toString方法的方式</p>
<ul>
<li>
<ol>
<li>Alt + Insert 选择toString</li>
</ol>
</li>
<li>
<ol>
<li>在类的空白区域，右键 -&gt; Generate -&gt; 选择toString</li>
</ol>
</li>
</ul>
</li>
<li>
<p>toString方法的作用：</p>
<ul>
<li>以良好的格式，更方便的展示对象中的属性值</li>
</ul>
</li>
<li>
<p>示例代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Object</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
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
                <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"林青霞"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>运行结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Student</span><span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token char">'林青霞'</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token char">'林青霞'</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-4-object类的equals方法-应用" tabindex="-1"><a class="header-anchor" href="#_2-4-object类的equals方法-应用" aria-hidden="true">#</a> 2.4 Object类的equals方法（应用）</h3>
<ul>
<li>
<p>equals方法的作用</p>
<ul>
<li>用于对象之间的比较，返回true和false的结果</li>
<li>举例：s1.equals(s2);    s1和s2是两个对象</li>
</ul>
</li>
<li>
<p>重写equals方法的场景</p>
<ul>
<li>不希望比较对象的地址值，想要结合对象属性进行比较的时候。</li>
</ul>
</li>
<li>
<p>重写equals方法的方式</p>
<ul>
<li>
<ol>
<li>alt + insert  选择equals() and hashCode()，IntelliJ Default，一路next，finish即可</li>
</ol>
</li>
<li>
<ol>
<li>在类的空白区域，右键 -&gt; Generate -&gt; 选择equals() and hashCode()，后面的同上。</li>
</ol>
</li>
</ul>
</li>
<li>
<p>示例代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
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
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//this -- s1</span>
        <span class="token comment">//o -- s2</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> o<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> o<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span> <span class="token comment">//student -- s2</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">!=</span> student<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> name <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">:</span> student<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"林青霞"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"林青霞"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s2<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//需求：比较两个对象的内容是否相同</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>面试题</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 看程序,分析结果</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> “abc”<span class="token punctuation">;</span>
<span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>“abc”<span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span> 
sb<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterviewTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//1.此时调用的是String类中的equals方法.</span>
        <span class="token comment">//保证参数也是字符串,否则不会比较属性值而直接返回false</span>
        <span class="token comment">//System.out.println(s1.equals(sb)); // false</span>

        <span class="token comment">//StringBuilder类中是没有重写equals方法,用的就是Object类中的.</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-5-objects-应用" tabindex="-1"><a class="header-anchor" href="#_2-5-objects-应用" aria-hidden="true">#</a> 2.5 Objects (应用)</h3>
<ul>
<li>
<p>常用方法</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>public static String toString(对象)</td>
<td>返回参数中对象的字符串表示形式。</td>
</tr>
<tr>
<td>public static String toString(对象, 默认字符串)</td>
<td>返回对象的字符串表示形式。</td>
</tr>
<tr>
<td>public static Boolean isNull(对象)</td>
<td>判断对象是否为空</td>
</tr>
<tr>
<td>public static Boolean nonNull(对象)</td>
<td>判断对象是否不为空</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>示例代码</p>
<p>学生类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
      <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
      <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

      <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
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
                  <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                  <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                  <span class="token char">'}'</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyObjectsDemo</span> <span class="token punctuation">{</span>
          <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//        public static String toString(对象): 返回参数中对象的字符串表示形式。</span>
      <span class="token comment">//        Student s = new Student("小罗同学",50);</span>
      <span class="token comment">//        String result = Objects.toString(s);</span>
      <span class="token comment">//        System.out.println(result);</span>
      <span class="token comment">//        System.out.println(s);</span>

      <span class="token comment">//        public static String toString(对象, 默认字符串): 返回对象的字符串表示形式。如果对象为空,那么返回第二个参数.</span>
              <span class="token comment">//Student s = new Student("小花同学",23);</span>
      <span class="token comment">//        Student s = null;</span>
      <span class="token comment">//        String result = Objects.toString(s, "随便写一个");</span>
      <span class="token comment">//        System.out.println(result);</span>
      
      <span class="token comment">//        public static Boolean isNull(对象): 判断对象是否为空</span>
              <span class="token comment">//Student s = null;</span>
      <span class="token comment">//        Student s = new Student();</span>
      <span class="token comment">//        boolean result = Objects.isNull(s);</span>
      <span class="token comment">//        System.out.println(result);</span>

      <span class="token comment">//        public static Boolean nonNull(对象): 判断对象是否不为空</span>
              <span class="token comment">//Student s = new Student();</span>
              <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
              <span class="token keyword">boolean</span> result <span class="token operator">=</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">nonNull</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-6-bigdecimal-应用" tabindex="-1"><a class="header-anchor" href="#_2-6-bigdecimal-应用" aria-hidden="true">#</a> 2.6 BigDecimal (应用)</h3>
<ul>
<li>
<p>作用</p>
<p>可以用来进行精确计算</p>
</li>
<li>
<p>构造方法</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>BigDecimal(double val)</td>
<td>参数为double</td>
</tr>
<tr>
<td>BigDecimal(String val)</td>
<td>参数为String</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>常用方法</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>public BigDecimal add(另一个BigDecimal对象)</td>
<td>加法</td>
</tr>
<tr>
<td>public BigDecimal subtract (另一个BigDecimal对象)</td>
<td>减法</td>
</tr>
<tr>
<td>public BigDecimal multiply (另一个BigDecimal对象)</td>
<td>乘法</td>
</tr>
<tr>
<td>public BigDecimal divide (另一个BigDecimal对象)</td>
<td>除法</td>
</tr>
<tr>
<td>public BigDecimal divide (另一个BigDecimal对象，精确几位，舍入模式)</td>
<td>除法</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>总结</p>
<ol>
<li>BigDecimal是用来进行精确计算的</li>
<li>创建BigDecimal的对象，构造方法使用参数类型为字符串的。</li>
<li>四则运算中的除法，如果除不尽请使用divide的三个参数的方法。</li>
</ol>
<p>代码示例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">BigDecimal</span> divide <span class="token operator">=</span> bd1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>参与运算的对象<span class="token punctuation">,</span>小数点后精确到多少位<span class="token punctuation">,</span>舍入模式<span class="token punctuation">)</span><span class="token punctuation">;</span>
参数<span class="token number">1</span> ，表示参与运算的<span class="token class-name">BigDecimal</span> 对象。
参数<span class="token number">2</span> ，表示小数点后面精确到多少位
参数<span class="token number">3</span> ，舍入模式  
  <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_UP</span>  进一法
  <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_FLOOR</span> 去尾法
  <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_HALF_UP</span> 四舍五入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-包装类" tabindex="-1"><a class="header-anchor" href="#_3-包装类" aria-hidden="true">#</a> 3.包装类</h2>
<h3 id="_3-1-基本类型包装类-记忆" tabindex="-1"><a class="header-anchor" href="#_3-1-基本类型包装类-记忆" aria-hidden="true">#</a> 3.1 基本类型包装类（记忆）</h3>
<ul>
<li>
<p>基本类型包装类的作用</p>
<p>将基本数据类型封装成对象的好处在于可以在对象中定义更多的功能方法操作该数据</p>
<p>常用的操作之一：用于基本数据类型与字符串之间的转换</p>
</li>
<li>
<p>基本类型对应的包装类</p>
<table>
<thead>
<tr>
<th>基本数据类型</th>
<th>包装类</th>
</tr>
</thead>
<tbody>
<tr>
<td>byte</td>
<td>Byte</td>
</tr>
<tr>
<td>short</td>
<td>Short</td>
</tr>
<tr>
<td>int</td>
<td>Integer</td>
</tr>
<tr>
<td>long</td>
<td>Long</td>
</tr>
<tr>
<td>float</td>
<td>Float</td>
</tr>
<tr>
<td>double</td>
<td>Double</td>
</tr>
<tr>
<td>char</td>
<td>Character</td>
</tr>
<tr>
<td>boolean</td>
<td>Boolean</td>
</tr>
</tbody>
</table>
</li>
</ul>
<h3 id="_3-2-integer类-应用" tabindex="-1"><a class="header-anchor" href="#_3-2-integer类-应用" aria-hidden="true">#</a> 3.2 Integer类（应用）</h3>
<ul>
<li>
<p>Integer类概述</p>
<p>包装一个对象中的原始类型 int 的值</p>
</li>
<li>
<p>Integer类构造方法</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>public Integer(int   value)</td>
<td>根据 int 值创建 Integer 对象(过时)</td>
</tr>
<tr>
<td>public Integer(String s)</td>
<td>根据 String 值创建 Integer 对象(过时)</td>
</tr>
<tr>
<td>public static Integer valueOf(int i)</td>
<td>返回表示指定的 int 值的 Integer   实例</td>
</tr>
<tr>
<td>public static Integer valueOf(String s)</td>
<td>返回一个保存指定值的 Integer 对象 String</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IntegerDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//public Integer(int value)：根据 int 值创建 Integer 对象(过时)</span>
        <span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//public Integer(String s)：根据 String 值创建 Integer 对象(过时)</span>
        <span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token string">"100"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        Integer i2 = new Integer("abc"); //NumberFormatException</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//public static Integer valueOf(int i)：返回表示指定的 int 值的 Integer 实例</span>
        <span class="token class-name">Integer</span> i3 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//public static Integer valueOf(String s)：返回一个保存指定值的Integer对象 String</span>
        <span class="token class-name">Integer</span> i4 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">"100"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3-3-自动拆箱和自动装箱-理解" tabindex="-1"><a class="header-anchor" href="#_3-3-自动拆箱和自动装箱-理解" aria-hidden="true">#</a> 3.3 自动拆箱和自动装箱（理解）</h3>
<ul>
<li>
<p>自动装箱</p>
<p>​	把基本数据类型转换为对应的包装类类型</p>
</li>
<li>
<p>自动拆箱</p>
<p>​	把包装类类型转换为对应的基本数据类型</p>
</li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>  <span class="token comment">// 自动装箱</span>
i <span class="token operator">+=</span> <span class="token number">200</span><span class="token punctuation">;</span>         <span class="token comment">// i = i + 200;  i + 200 自动拆箱；i = i + 200; 是自动装箱</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3-4-int和string类型的相互转换-记忆" tabindex="-1"><a class="header-anchor" href="#_3-4-int和string类型的相互转换-记忆" aria-hidden="true">#</a> 3.4 int和String类型的相互转换（记忆）</h3>
<ul>
<li>
<p>int转换为String</p>
<ul>
<li>
<p>转换方式</p>
<ul>
<li>方式一：直接在数字后加一个空字符串</li>
<li>方式二：通过String类静态方法valueOf()</li>
</ul>
</li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IntegerDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//int --- String</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token comment">//方式1</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//方式2</span>
        <span class="token comment">//public static String valueOf(int i)</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>String转换为int</p>
<ul>
<li>
<p>转换方式</p>
<ul>
<li>方式一：先将字符串数字转成Integer，再调用valueOf()方法</li>
<li>方式二：通过Integer静态方法parseInt()进行转换</li>
</ul>
</li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IntegerDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//String --- int</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"100"</span><span class="token punctuation">;</span>
        <span class="token comment">//方式1：String --- Integer --- int</span>
        <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//public int intValue()</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//方式2</span>
        <span class="token comment">//public static int parseInt(String s)</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="_3-5-字符串数据排序案例-应用" tabindex="-1"><a class="header-anchor" href="#_3-5-字符串数据排序案例-应用" aria-hidden="true">#</a> 3.5 字符串数据排序案例（应用）</h3>
<ul>
<li>
<p>案例需求</p>
<p>​	有一个字符串：“91 27 46 38 50”，请写程序实现最终输出结果是：27 38 46 50 91</p>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IntegerTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//定义一个字符串</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"91 27 46 38 50"</span><span class="token punctuation">;</span>

        <span class="token comment">//把字符串中的数字数据存储到一个int类型的数组中</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strArray <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        for(int i=0; i&lt;strArray.length; i++) {</span>
<span class="token comment">//            System.out.println(strArray[i]);</span>
<span class="token comment">//        }</span>

        <span class="token comment">//定义一个int数组，把 String[] 数组中的每一个元素存储到 int 数组中</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>strArray<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>strArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//对 int 数组进行排序</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

      	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_4-递归" tabindex="-1"><a class="header-anchor" href="#_4-递归" aria-hidden="true">#</a> 4.递归</h2>
<h3 id="_4-1-递归" tabindex="-1"><a class="header-anchor" href="#_4-1-递归" aria-hidden="true">#</a> 4.1 递归</h3>
<ul>
<li>
<p>递归的介绍</p>
<ul>
<li>以编程的角度来看，递归指的是方法定义中调用方法本身的现象</li>
<li>把一个复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解</li>
<li>递归策略只需少量的程序就可描述出解题过程所需要的多次重复计算</li>
</ul>
</li>
<li>
<p>递归的基本使用</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFactorialDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1- 100之间的和</span>
            <span class="token comment">//100 + (1-99之间的和)</span>
                    <span class="token comment">// 99 + (1- 98之间的和)</span>
                        <span class="token comment">//....</span>
                            <span class="token comment">//1</span>
        <span class="token comment">//方法的作用: 求 1- i 之间和</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token function">getSum</span><span class="token punctuation">(</span>i <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>递归的注意事项</p>
<ul>
<li>递归一定要有出口。否则内存溢出</li>
<li>递归虽然有出口，但是递归的次数也不宜过多。否则内存溢出</li>
</ul>
</li>
</ul>
<h3 id="_4-2-递归求阶乘" tabindex="-1"><a class="header-anchor" href="#_4-2-递归求阶乘" aria-hidden="true">#</a> 4.2 递归求阶乘</h3>
<ul>
<li>
<p>案例需求</p>
<p>​	用递归求5的阶乘，并把结果在控制台输出</p>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DiGuiDemo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用方法</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">jc</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"5的阶乘是："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//定义一个方法，用于递归求阶乘，参数为一个int类型的变量</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">jc</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//在方法内部判断该变量的值是否是1</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//是：返回1</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不是：返回n*(n-1)!</span>
            <span class="token keyword">return</span> n<span class="token operator">*</span><span class="token function">jc</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>内存图</p>
<p><img src="@source/JavaSE/img/08_递归内存图.png" alt="08_递归内存图"></p>
</li>
</ul>
<h2 id="_5-数组的高级操作" tabindex="-1"><a class="header-anchor" href="#_5-数组的高级操作" aria-hidden="true">#</a> 5.数组的高级操作</h2>
<h3 id="_5-1-二分查找" tabindex="-1"><a class="header-anchor" href="#_5-1-二分查找" aria-hidden="true">#</a> 5.1 二分查找</h3>
<ul>
<li>
<p>二分查找概述</p>
<p>查找指定元素在数组中的位置时,以前的方式是通过遍历,逐个获取每个元素,看是否是要查找的元素,这种方式当数组元素较多时,查找的效率很低</p>
<p>二分查找也叫折半查找,每次可以去掉一半的查找范围,从而提高查找的效率</p>
</li>
<li>
<p>需求</p>
<p>在数组{1,2,3,4,5,6,7,8,9,10}中,查找某个元素的位置</p>
</li>
<li>
<p>实现步骤</p>
<ol>
<li>定义两个变量，表示要查找的范围。默认min = 0 ，max = 最大索引</li>
<li>循环查找，但是min &lt;= max</li>
<li>计算出mid的值</li>
<li>判断mid位置的元素是否为要查找的元素，如果是直接返回对应索引</li>
<li>如果要查找的值在mid的左半边，那么min值不变，max = mid -1.继续下次循环查找</li>
<li>如果要查找的值在mid的右半边，那么max值不变，min = mid + 1.继续下次循环查找</li>
<li>当min &gt; max 时，表示要查找的元素在数组中不存在，返回-1.</li>
</ol>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBinarySearchDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>

        <span class="token comment">//1,我现在要干嘛? --- 二分查找</span>
        <span class="token comment">//2.我干这件事情需要什么? --- 数组 元素</span>
        <span class="token comment">//3,我干完了,要不要把结果返回调用者 --- 把索引返回给调用者</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">binarySearchForIndex</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">binarySearchForIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1,定义查找的范围</span>
        <span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//2.循环查找 min &lt;= max</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>min <span class="token operator">&lt;=</span> max<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//3.计算出中间位置 mid</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>min <span class="token operator">+</span> max<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token comment">//mid指向的元素 > number</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//表示要查找的元素在左边.</span>
                max <span class="token operator">=</span> mid <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//mid指向的元素 &lt; number</span>
                <span class="token comment">//表示要查找的元素在右边.</span>
                min <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">//mid指向的元素 == number</span>
                <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//如果min大于了max就表示元素不存在,返回-1.</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意事项</p>
<p>有一个前提条件，数组内的元素一定要按照大小顺序排列，如果没有大小顺序，是不能使用二分查找法的</p>
</li>
</ul>
<h3 id="_5-2-冒泡排序" tabindex="-1"><a class="header-anchor" href="#_5-2-冒泡排序" aria-hidden="true">#</a> 5.2 冒泡排序</h3>
<ul>
<li>
<p>冒泡排序概述</p>
<p>一种排序的方式，对要进行排序的数据中相邻的数据进行两两比较，将较大的数据放在后面，依次对所有的数据进行操作，直至所有数据按要求完成排序</p>
<p>如果有n个数据进行排序，总共需要比较n-1次</p>
<p>每一次比较完毕，下一次的比较就会少一个数据参与</p>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBubbleSortDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//1 2 3 4 5</span>
        <span class="token function">bubbleSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//外层循环控制的是次数 比数组的长度少一次.</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//内存循环就是实际循环比较的</span>
            <span class="token comment">//-1 是为了让数组不要越界</span>
            <span class="token comment">//-i 每一轮结束之后,我们就会少比一个数字.</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token function">printArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_5-3-快速排序" tabindex="-1"><a class="header-anchor" href="#_5-3-快速排序" aria-hidden="true">#</a> 5.3 快速排序</h3>
<ul>
<li>
<p>快速排序概述</p>
<p>冒泡排序算法中,一次循环结束,就相当于确定了当前的最大值,也能确定最大值在数组中应存入的位置</p>
<p>快速排序算法中,每一次递归时以第一个数为基准数,找到数组中所有比基准数小的.再找到所有比基准数大的.小的全部放左边,大的全部放右边,确定基准数的正确位置</p>
</li>
<li>
<p>核心步骤</p>
<ol>
<li>从右开始找比基准数小的</li>
<li>从左开始找比基准数大的</li>
<li>交换两个值的位置</li>
<li>红色继续往左找，蓝色继续往右找，直到两个箭头指向同一个索引为止</li>
<li>基准数归位</li>
</ol>
</li>
<li>
<p>代码实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyQuiteSortDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        1，从右开始找比基准数小的</span>
<span class="token comment">//        2，从左开始找比基准数大的</span>
<span class="token comment">//        3，交换两个值的位置</span>
<span class="token comment">//        4，红色继续往左找，蓝色继续往右找，直到两个箭头指向同一个索引为止</span>
<span class="token comment">//        5，基准数归位</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token function">quiteSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">quiteSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     	<span class="token comment">// 递归结束的条件</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>right <span class="token operator">&lt;</span> left<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> left0 <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">int</span> right0 <span class="token operator">=</span> right<span class="token punctuation">;</span>

        <span class="token comment">//计算出基准数</span>
        <span class="token keyword">int</span> baseNumber <span class="token operator">=</span> arr<span class="token punctuation">[</span>left0<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">!=</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//        1，从右开始找比基准数小的</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">>=</span> baseNumber <span class="token operator">&amp;&amp;</span> right <span class="token operator">></span> left<span class="token punctuation">)</span><span class="token punctuation">{</span>
                right<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
<span class="token comment">//        2，从左开始找比基准数大的</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> baseNumber <span class="token operator">&amp;&amp;</span> right <span class="token operator">></span> left<span class="token punctuation">)</span><span class="token punctuation">{</span>
                left<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
<span class="token comment">//        3，交换两个值的位置</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//基准数归位</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>left0<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>left0<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
      
		<span class="token comment">// 递归调用自己,将左半部分排好序</span>
        <span class="token function">quiteSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>left0<span class="token punctuation">,</span>left<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token comment">// 递归调用自己,将右半部分排好序</span>
        <span class="token function">quiteSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>left <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>right0<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_5-4-arrays" tabindex="-1"><a class="header-anchor" href="#_5-4-arrays" aria-hidden="true">#</a> 5.4 Arrays</h3>
<ul>
<li>
<p>Arrays的常用方法</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>public static String toString(int[] a)</td>
<td>返回指定数组的内容的字符串表示形式</td>
</tr>
<tr>
<td>public static void sort(int[] a)</td>
<td>按照数字顺序排列指定的数组</td>
</tr>
<tr>
<td>public static int binarySearch(int[] a, int key)</td>
<td>利用二分查找返回指定元素的索引</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>示例代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyArraysDemo</span> <span class="token punctuation">{</span>
      <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//        public static String toString(int[] a)    返回指定数组的内容的字符串表示形式</span>
  <span class="token comment">//        int [] arr = {3,2,4,6,7};</span>
  <span class="token comment">//        System.out.println(Arrays.toString(arr));</span>

  <span class="token comment">//        public static void sort(int[] a)	  按照数字顺序排列指定的数组</span>
  <span class="token comment">//        int [] arr = {3,2,4,6,7};</span>
  <span class="token comment">//        Arrays.sort(arr);</span>
  <span class="token comment">//        System.out.println(Arrays.toString(arr));</span>

  <span class="token comment">//        public static int binarySearch(int[] a, int key) 利用二分查找返回指定元素的索引</span>
          <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">//1,数组必须有序</span>
          <span class="token comment">//2.如果要查找的元素存在,那么返回的是这个元素实际的索引</span>
          <span class="token comment">//3.如果要查找的元素不存在,那么返回的是 (-插入点-1)</span>
              <span class="token comment">//插入点:如果这个元素在数组中,他应该在哪个索引上.</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>工具类设计思想</p>
<ol>
<li>构造方法用 private 修饰</li>
<li>成员用 public static 修饰</li>
</ol>
</li>
</ul>
</div></template>


