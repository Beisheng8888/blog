import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,e as a,a as n,b as s}from"./app-82c407db.js";const l={},c=a(`<h1 id="内部类和lambda表达式" tabindex="-1"><a class="header-anchor" href="#内部类和lambda表达式" aria-hidden="true">#</a> 内部类和Lambda表达式</h1><h2 id="_1-内部类" tabindex="-1"><a class="header-anchor" href="#_1-内部类" aria-hidden="true">#</a> 1.内部类</h2><h3 id="_1-1-内部类的基本使用-理解" tabindex="-1"><a class="header-anchor" href="#_1-1-内部类的基本使用-理解" aria-hidden="true">#</a> 1.1 内部类的基本使用（理解）</h3><ul><li><p>内部类概念</p><ul><li>在一个类中定义一个类。举例：在一个类A的内部定义一个类B，类B就被称为内部类</li></ul></li><li><p>内部类定义格式</p><ul><li><p>格式&amp;举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
	格式：
    class 外部类名{
    	修饰符 class 内部类名{
    	
    	}
    }
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>内部类的访问特点</p><ul><li>内部类可以直接访问外部类的成员，包括私有</li><li>外部类要访问内部类的成员，必须创建对象</li></ul></li><li><p>示例代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
    内部类访问特点：
        内部类可以直接访问外部类的成员，包括私有
        外部类要访问内部类的成员，必须创建对象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Inner</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-2-成员内部类-理解" tabindex="-1"><a class="header-anchor" href="#_1-2-成员内部类-理解" aria-hidden="true">#</a> 1.2 成员内部类（理解）</h3><ul><li><p>成员内部类的定义位置</p><ul><li>在类中方法，跟成员变量是一个位置</li></ul></li><li><p>外界创建成员内部类格式</p><ul><li>格式：外部类名.内部类名 对象名 = 外部类对象.内部类对象;</li><li>举例：Outer.Inner oi = new Outer().new Inner();</li></ul></li><li><p>私有成员内部类</p><ul><li><p>将一个类，设计为内部类的目的，大多数都是不想让外界去访问，所以内部类的定义应该私有化，私有化之后，再提供一个可以让外界调用的方法，方法内部创建内部类对象并调用。</p></li><li><p>示例代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Inner</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//Outer.Inner oi = new Outer().new Inner();</span>
		<span class="token comment">//oi.show();</span>
        <span class="token class-name">Outer</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        o<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>静态成员内部类</p><ul><li><p>静态成员内部类访问格式：外部类名.内部类名 对象名 = new 外部类名.内部类名();</p></li><li><p>静态成员内部类中的静态方法：外部类名.内部类名.方法名();</p></li><li><p>示例代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;inner..show&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;inner..method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test3Innerclass</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
        静态成员内部类演示
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 外部类名.内部类名 对象名 = new 外部类名.内部类名();</span>
        <span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span> oi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oi<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span><span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_1-3-局部内部类-理解" tabindex="-1"><a class="header-anchor" href="#_1-3-局部内部类-理解" aria-hidden="true">#</a> 1.3 局部内部类（理解）</h3><ul><li><p>局部内部类定义位置</p><ul><li>局部内部类是在方法中定义的类</li></ul></li><li><p>局部内部类方式方式</p><ul><li>局部内部类，外界是无法直接使用，需要在方法内部创建对象并使用</li><li>该类可以直接访问外部类的成员，也可以访问方法内的局部变量</li></ul></li><li><p>示例代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Inner</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OuterDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Outer</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        o<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-4-匿名内部类-应用" tabindex="-1"><a class="header-anchor" href="#_1-4-匿名内部类-应用" aria-hidden="true">#</a> 1.4 匿名内部类（应用）</h3>`,9),i=n("ul",null,[n("li",null,[n("p",null,"匿名内部类的前提"),n("ul",null,[n("li",null,"存在一个类或者接口，这里的类可以是具体类也可以是抽象类")])]),n("li",null,[n("p",null,"匿名内部类的格式"),n("ul",null,[n("li",{重写方法:""},[n("p",null,"格式：new 类名 ( ) { 重写方法 } new 接口名 ( )")]),n("li",null,[n("p",null,"举例："),n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Inter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"匿名内部类的本质"),n("ul",null,[n("li",null,"本质：是一个继承了该类或者实现了该接口的子类匿名对象")])]),n("li",null,[n("p",null,"匿名内部类的细节"),n("ul",null,[n("li",null,[n("p",null,"匿名内部类可以通过多态的形式接受"),n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"Inter"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Inter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"匿名内部类直接调用方法"),n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"Inter"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Test"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Inter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
            `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"我是匿名内部类"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("	"),n("span",{class:"token comment"},"// 直接调用方法"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])],-1),o=a(`<h3 id="_1-5-匿名内部类在开发中的使用-应用" tabindex="-1"><a class="header-anchor" href="#_1-5-匿名内部类在开发中的使用-应用" aria-hidden="true">#</a> 1.5 匿名内部类在开发中的使用（应用）</h3><ul><li><p>匿名内部类在开发中的使用</p><ul><li>当发现某个方法需要，接口或抽象类的子类对象，我们就可以传递一个匿名内部类过去，来简化传统的代码</li></ul></li><li><p>示例代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
    游泳接口
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Swimming</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSwimming</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">goSwimming</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;铁汁, 我们去游泳吧&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用接口的方法
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">goSwimming</span><span class="token punctuation">(</span><span class="token class-name">Swimming</span> swimming<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">/*
            Swimming swim = new Swimming() {
                @Override
                public void swim() {
                    System.out.println(&quot;铁汁, 我们去游泳吧&quot;);
                }
            }
         */</span>
        swimming<span class="token punctuation">.</span><span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-lambda表达式" tabindex="-1"><a class="header-anchor" href="#_2-lambda表达式" aria-hidden="true">#</a> 2.Lambda表达式</h2><h3 id="_2-1体验lambda表达式【理解】" tabindex="-1"><a class="header-anchor" href="#_2-1体验lambda表达式【理解】" aria-hidden="true">#</a> 2.1体验Lambda表达式【理解】</h3><ul><li><p>代码演示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
    游泳接口
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Swimming</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSwimming</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过匿名内部类实现</span>
        <span class="token function">goSwimming</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;铁汁, 我们去游泳吧&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*  通过Lambda表达式实现
            理解: 对于Lambda表达式, 对匿名内部类进行了优化
         */</span>
        <span class="token function">goSwimming</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;铁汁, 我们去游泳吧&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用接口的方法
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">goSwimming</span><span class="token punctuation">(</span><span class="token class-name">Swimming</span> swimming<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        swimming<span class="token punctuation">.</span><span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>函数式编程思想概述</p><p>在数学中，函数就是有输入量、输出量的一套计算方案，也就是“拿数据做操作”</p><p>面向对象思想强调“必须通过对象的形式来做事情”</p><p>函数式思想则尽量忽略面向对象的复杂语法：“强调做什么，而不是以什么形式去做”</p><p>而我们要学习的Lambda表达式就是函数式思想的体现</p></li></ul><h3 id="_2-2lambda表达式的标准格式【理解】" tabindex="-1"><a class="header-anchor" href="#_2-2lambda表达式的标准格式【理解】" aria-hidden="true">#</a> 2.2Lambda表达式的标准格式【理解】</h3>`,6),u=n("ul",null,[n("li",null,[n("p",null,"格式："),n("p",{代码块:""},"​ (形式参数) ->"),n("ul",null,[n("li",null,"形式参数：如果有多个参数，参数之间用逗号隔开；如果没有参数，留空即可"),n("li",null,"->：由英文中画线和大于符号组成，固定写法。代表指向动作"),n("li",null,"代码块：是我们具体要做的事情，也就是以前我们写的方法体内容")])]),n("li",null,[n("p",null,"组成Lambda表达式的三要素："),n("ul",null,[n("li",null,"形式参数，箭头，代码块")])])],-1),d=a(`<h3 id="_2-3lambda表达式练习1【应用】" tabindex="-1"><a class="header-anchor" href="#_2-3lambda表达式练习1【应用】" aria-hidden="true">#</a> 2.3Lambda表达式练习1【应用】</h3><ul><li><p>Lambda表达式的使用前提</p><ul><li>有一个接口</li><li>接口中有且仅有一个抽象方法</li></ul></li><li><p>练习描述</p><p>​ 无参无返回值抽象方法的练习</p></li><li><p>操作步骤</p><ul><li>定义一个接口(Eatable)，里面定义一个抽象方法：void eat();</li><li>定义一个测试类(EatableDemo)，在测试类中提供两个方法 <ul><li>一个方法是：useEatable(Eatable e)</li><li>一个方法是主方法，在主方法中调用useEatable方法</li></ul></li></ul></li><li><p>示例代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Eatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//实现类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EatableImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Eatable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一天一苹果，医生远离我&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//测试类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EatableDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//在主方法中调用useEatable方法</span>
        <span class="token class-name">Eatable</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EatableImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">useEatable</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//匿名内部类</span>
        <span class="token function">useEatable</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Eatable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一天一苹果，医生远离我&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//Lambda表达式</span>
        <span class="token function">useEatable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一天一苹果，医生远离我&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">useEatable</span><span class="token punctuation">(</span><span class="token class-name">Eatable</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-4lambda表达式练习2【应用】" tabindex="-1"><a class="header-anchor" href="#_2-4lambda表达式练习2【应用】" aria-hidden="true">#</a> 2.4Lambda表达式练习2【应用】</h3><ul><li><p>练习描述</p><p>有参无返回值抽象方法的练习</p></li><li><p>操作步骤</p><ul><li>定义一个接口(Flyable)，里面定义一个抽象方法：void fly(String s);</li><li>定义一个测试类(FlyableDemo)，在测试类中提供两个方法 <ul><li>一个方法是：useFlyable(Flyable f)</li><li>一个方法是主方法，在主方法中调用useFlyable方法</li></ul></li></ul></li><li><p>示例代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlyableDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//在主方法中调用useFlyable方法</span>
        <span class="token comment">//匿名内部类</span>
        <span class="token function">useFlyable</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Flyable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;飞机自驾游&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//Lambda</span>
        <span class="token function">useFlyable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;飞机自驾游&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">useFlyable</span><span class="token punctuation">(</span><span class="token class-name">Flyable</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        f<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token string">&quot;风和日丽，晴空万里&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-5lambda表达式练习3【应用】" tabindex="-1"><a class="header-anchor" href="#_2-5lambda表达式练习3【应用】" aria-hidden="true">#</a> 2.5Lambda表达式练习3【应用】</h3><ul><li><p>练习描述</p><p>有参有返回值抽象方法的练习</p></li><li><p>操作步骤</p><ul><li>定义一个接口(Addable)，里面定义一个抽象方法：int add(int x,int y);</li><li>定义一个测试类(AddableDemo)，在测试类中提供两个方法 <ul><li>一个方法是：useAddable(Addable a)</li><li>一个方法是主方法，在主方法中调用useAddable方法</li></ul></li></ul></li><li><p>示例代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Addable</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddableDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//在主方法中调用useAddable方法</span>
        <span class="token function">useAddable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">useAddable</span><span class="token punctuation">(</span><span class="token class-name">Addable</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-6lambda表达式的省略模式【应用】" tabindex="-1"><a class="header-anchor" href="#_2-6lambda表达式的省略模式【应用】" aria-hidden="true">#</a> 2.6Lambda表达式的省略模式【应用】</h3><ul><li><p>省略的规则</p><ul><li>参数类型可以省略。但是有多个参数的情况下，不能只省略一个</li><li>如果参数有且仅有一个，那么小括号可以省略</li><li>如果代码块的语句只有一条，可以省略大括号和分号，和return关键字</li></ul></li><li><p>代码演示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Addable</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LambdaDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        useAddable((int x,int y) -&gt; {</span>
<span class="token comment">//            return x + y;</span>
<span class="token comment">//        });</span>
        <span class="token comment">//参数的类型可以省略</span>
        <span class="token function">useAddable</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        useFlyable((String s) -&gt; {</span>
<span class="token comment">//            System.out.println(s);</span>
<span class="token comment">//        });</span>
        <span class="token comment">//如果参数有且仅有一个，那么小括号可以省略</span>
<span class="token comment">//        useFlyable(s -&gt; {</span>
<span class="token comment">//            System.out.println(s);</span>
<span class="token comment">//        });</span>

        <span class="token comment">//如果代码块的语句只有一条，可以省略大括号和分号</span>
        <span class="token function">useFlyable</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//如果代码块的语句只有一条，可以省略大括号和分号，如果有return，return也要省略掉</span>
        <span class="token function">useAddable</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">useFlyable</span><span class="token punctuation">(</span><span class="token class-name">Flyable</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        f<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token string">&quot;风和日丽，晴空万里&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">useAddable</span><span class="token punctuation">(</span><span class="token class-name">Addable</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-7lambda表达式的使用前提【理解】" tabindex="-1"><a class="header-anchor" href="#_2-7lambda表达式的使用前提【理解】" aria-hidden="true">#</a> 2.7Lambda表达式的使用前提【理解】</h3><ul><li>使用Lambda必须要有接口</li><li>并且要求接口中有且仅有一个抽象方法</li></ul><h3 id="_2-8lambda表达式和匿名内部类的区别【理解】" tabindex="-1"><a class="header-anchor" href="#_2-8lambda表达式和匿名内部类的区别【理解】" aria-hidden="true">#</a> 2.8Lambda表达式和匿名内部类的区别【理解】</h3><ul><li>所需类型不同 <ul><li>匿名内部类：可以是接口，也可以是抽象类，还可以是具体类</li><li>Lambda表达式：只能是接口</li></ul></li><li>使用限制不同 <ul><li>如果接口中有且仅有一个抽象方法，可以使用Lambda表达式，也可以使用匿名内部类</li><li>如果接口中多于一个抽象方法，只能使用匿名内部类，而不能使用Lambda表达式</li></ul></li><li>实现原理不同 <ul><li>匿名内部类：编译之后，产生一个单独的.class字节码文件</li><li>Lambda表达式：编译之后，没有一个单独的.class字节码文件。对应的字节码会在运行的时候动态生成</li></ul></li></ul>`,12),k=[c,i,o,u,d];function r(v,m){return t(),e("div",null,k)}const y=p(l,[["render",r],["__file","内部类和Lambda表达式.html.vue"]]);export{y as default};
