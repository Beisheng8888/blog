const n=JSON.parse('{"key":"v-a0fb4714","path":"/src/JavaSE/%E7%BB%A7%E6%89%BF.html","title":"继承","lang":"zh-CN","frontmatter":{"category":["JavaSE"],"description":"继承 1. 继承 1.1 继承的实现（掌握） 继承的概念 继承是面向对象三大特征之一，可以使得子类具有父类的属性和方法，还可以在子类中重新定义，以及追加属性和方法 实现继承的格式 继承通过extends实现 格式：class 子类 extends 父类 举例：class Dog extends Animal 继承带来的好处 继承可以让类与类之间产生关系，子父类关系，产生子父类后，子类则可以使用父类中非私有的成员。 示例代码 public class Fu { public void show() { System.out.println(\\"show方法被调用\\"); } } public class Zi extends Fu { public void method() { System.out.println(\\"method方法被调用\\"); } } public class Demo { public static void main(String[] args) { //创建对象，调用方法 Fu f = new Fu(); f.show(); Zi z = new Zi(); z.method(); z.show(); } }","head":[["meta",{"property":"og:url","content":"https://github.com/Beisheng8888/blog/src/JavaSE/%E7%BB%A7%E6%89%BF.html"}],["meta",{"property":"og:site_name","content":"Mr.Jh"}],["meta",{"property":"og:title","content":"继承"}],["meta",{"property":"og:description","content":"继承 1. 继承 1.1 继承的实现（掌握） 继承的概念 继承是面向对象三大特征之一，可以使得子类具有父类的属性和方法，还可以在子类中重新定义，以及追加属性和方法 实现继承的格式 继承通过extends实现 格式：class 子类 extends 父类 举例：class Dog extends Animal 继承带来的好处 继承可以让类与类之间产生关系，子父类关系，产生子父类后，子类则可以使用父类中非私有的成员。 示例代码 public class Fu { public void show() { System.out.println(\\"show方法被调用\\"); } } public class Zi extends Fu { public void method() { System.out.println(\\"method方法被调用\\"); } } public class Demo { public static void main(String[] args) { //创建对象，调用方法 Fu f = new Fu(); f.show(); Zi z = new Zi(); z.method(); z.show(); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-18T07:08:24.000Z"}],["meta",{"property":"article:author","content":"Mr.Jh"}],["meta",{"property":"article:modified_time","content":"2023-07-18T07:08:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"继承\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-18T07:08:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jh\\",\\"url\\":\\"https://github.com/Beisheng8888\\"}]}"]]},"headers":[{"level":2,"title":"1. 继承","slug":"_1-继承","link":"#_1-继承","children":[{"level":3,"title":"1.1 继承的实现（掌握）","slug":"_1-1-继承的实现-掌握","link":"#_1-1-继承的实现-掌握","children":[]},{"level":3,"title":"1.2 继承的好处和弊端（理解）","slug":"_1-2-继承的好处和弊端-理解","link":"#_1-2-继承的好处和弊端-理解","children":[]},{"level":3,"title":"1.3. Java中继承的特点（掌握）","slug":"_1-3-java中继承的特点-掌握","link":"#_1-3-java中继承的特点-掌握","children":[]}]},{"level":2,"title":"2. 继承中的成员访问特点","slug":"_2-继承中的成员访问特点","link":"#_2-继承中的成员访问特点","children":[{"level":3,"title":"2.1 继承中变量的访问特点（掌握）","slug":"_2-1-继承中变量的访问特点-掌握","link":"#_2-1-继承中变量的访问特点-掌握","children":[]},{"level":3,"title":"2.2 super（掌握）","slug":"_2-2-super-掌握","link":"#_2-2-super-掌握","children":[]},{"level":3,"title":"2.3 继承中构造方法的访问特点（理解）","slug":"_2-3-继承中构造方法的访问特点-理解","link":"#_2-3-继承中构造方法的访问特点-理解","children":[]},{"level":3,"title":"2.4 继承中成员方法的访问特点（掌握）","slug":"_2-4-继承中成员方法的访问特点-掌握","link":"#_2-4-继承中成员方法的访问特点-掌握","children":[]},{"level":3,"title":"2.5 super内存图（理解）","slug":"_2-5-super内存图-理解","link":"#_2-5-super内存图-理解","children":[]},{"level":3,"title":"2.6 方法重写（掌握）","slug":"_2-6-方法重写-掌握","link":"#_2-6-方法重写-掌握","children":[]},{"level":3,"title":"2.7 方法重写的注意事项（掌握）","slug":"_2-7-方法重写的注意事项-掌握","link":"#_2-7-方法重写的注意事项-掌握","children":[]},{"level":3,"title":"2.8 权限修饰符 (理解)","slug":"_2-8-权限修饰符-理解","link":"#_2-8-权限修饰符-理解","children":[]}]},{"level":2,"title":"3.抽象类","slug":"_3-抽象类","link":"#_3-抽象类","children":[{"level":3,"title":"3.1抽象类的概述（理解）","slug":"_3-1抽象类的概述-理解","link":"#_3-1抽象类的概述-理解","children":[]},{"level":3,"title":"3.2抽象类的特点（记忆）","slug":"_3-2抽象类的特点-记忆","link":"#_3-2抽象类的特点-记忆","children":[]},{"level":3,"title":"3.3抽象类的案例（应用）","slug":"_3-3抽象类的案例-应用","link":"#_3-3抽象类的案例-应用","children":[]},{"level":3,"title":"3.4模板设计模式","slug":"_3-4模板设计模式","link":"#_3-4模板设计模式","children":[]},{"level":3,"title":"3.5final（应用）","slug":"_3-5final-应用","link":"#_3-5final-应用","children":[]}]},{"level":2,"title":"4.代码块","slug":"_4-代码块","link":"#_4-代码块","children":[{"level":3,"title":"4.1代码块概述 (理解)","slug":"_4-1代码块概述-理解","link":"#_4-1代码块概述-理解","children":[]},{"level":3,"title":"4.2代码块分类 (理解)","slug":"_4-2代码块分类-理解","link":"#_4-2代码块分类-理解","children":[]}]}],"git":{"createdTime":1689562016000,"updatedTime":1689664104000,"contributors":[{"name":"北省","email":"jih6666@126.com","commits":2}]},"readingTime":{"minutes":10.17,"words":3052},"filePathRelative":"src/JavaSE/继承.md","localizedDate":"2023年7月17日","excerpt":"<h1> 继承</h1>\\n<h2> 1. 继承</h2>\\n<h3> 1.1 继承的实现（掌握）</h3>\\n<ul>\\n<li>\\n<p>继承的概念</p>\\n<ul>\\n<li>继承是面向对象三大特征之一，可以使得子类具有父类的属性和方法，还可以在子类中重新定义，以及追加属性和方法</li>\\n</ul>\\n</li>\\n<li>\\n<p>实现继承的格式</p>\\n<ul>\\n<li>继承通过extends实现</li>\\n<li>格式：class 子类 extends 父类\\n<ul>\\n<li>举例：class Dog extends Animal</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>继承带来的好处</p>\\n<ul>\\n<li>继承可以让类与类之间产生关系，子父类关系，产生子父类后，子类则可以使用父类中非私有的成员。</li>\\n</ul>\\n</li>\\n<li>\\n<p>示例代码</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Fu</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">show</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"show方法被调用\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Zi</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Fu</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">method</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"method方法被调用\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Demo</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//创建对象，调用方法</span>\\n        <span class=\\"token class-name\\">Fu</span> f <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Fu</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        f<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">show</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token class-name\\">Zi</span> z <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Zi</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        z<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">method</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        z<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">show</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{n as data};
