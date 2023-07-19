const n=JSON.parse('{"key":"v-5277e224","path":"/src/JavaSE/%E5%86%85%E9%83%A8%E7%B1%BB%E5%92%8CLambda%E8%A1%A8%E8%BE%BE%E5%BC%8F.html","title":"内部类和Lambda表达式","lang":"zh-CN","frontmatter":{"title":"内部类和Lambda表达式","category":["JavaSE"],"description":"内部类和Lambda表达式 1.内部类 1.1 内部类的基本使用（理解） 内部类概念 在一个类中定义一个类。举例：在一个类A的内部定义一个类B，类B就被称为内部类 内部类定义格式 格式&amp;举例： /* \\t格式： class 外部类名{ \\t修饰符 class 内部类名{ \\t \\t} } */ class Outer { public class Inner { } } 内部类的访问特点 内部类可以直接访问外部类的成员，包括私有 外部类要访问内部类的成员，必须创建对象 示例代码： /* 内部类访问特点： 内部类可以直接访问外部类的成员，包括私有 外部类要访问内部类的成员，必须创建对象 */ public class Outer { private int num = 10; public class Inner { public void show() { System.out.println(num); } } public void method() { Inner i = new Inner(); i.show(); } }","head":[["meta",{"property":"og:url","content":"https://github.com/Beisheng8888/blog/src/JavaSE/%E5%86%85%E9%83%A8%E7%B1%BB%E5%92%8CLambda%E8%A1%A8%E8%BE%BE%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Mr.Jh"}],["meta",{"property":"og:title","content":"内部类和Lambda表达式"}],["meta",{"property":"og:description","content":"内部类和Lambda表达式 1.内部类 1.1 内部类的基本使用（理解） 内部类概念 在一个类中定义一个类。举例：在一个类A的内部定义一个类B，类B就被称为内部类 内部类定义格式 格式&amp;举例： /* \\t格式： class 外部类名{ \\t修饰符 class 内部类名{ \\t \\t} } */ class Outer { public class Inner { } } 内部类的访问特点 内部类可以直接访问外部类的成员，包括私有 外部类要访问内部类的成员，必须创建对象 示例代码： /* 内部类访问特点： 内部类可以直接访问外部类的成员，包括私有 外部类要访问内部类的成员，必须创建对象 */ public class Outer { private int num = 10; public class Inner { public void show() { System.out.println(num); } } public void method() { Inner i = new Inner(); i.show(); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-19T07:12:36.000Z"}],["meta",{"property":"article:author","content":"Mr.Jh"}],["meta",{"property":"article:modified_time","content":"2023-07-19T07:12:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内部类和Lambda表达式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-19T07:12:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jh\\",\\"url\\":\\"https://github.com/Beisheng8888\\"}]}"]]},"headers":[{"level":2,"title":"1.内部类","slug":"_1-内部类","link":"#_1-内部类","children":[{"level":3,"title":"1.1 内部类的基本使用（理解）","slug":"_1-1-内部类的基本使用-理解","link":"#_1-1-内部类的基本使用-理解","children":[]},{"level":3,"title":"1.2 成员内部类（理解）","slug":"_1-2-成员内部类-理解","link":"#_1-2-成员内部类-理解","children":[]},{"level":3,"title":"1.3 局部内部类（理解）","slug":"_1-3-局部内部类-理解","link":"#_1-3-局部内部类-理解","children":[]},{"level":3,"title":"1.4 匿名内部类（应用）","slug":"_1-4-匿名内部类-应用","link":"#_1-4-匿名内部类-应用","children":[]},{"level":3,"title":"1.5 匿名内部类在开发中的使用（应用）","slug":"_1-5-匿名内部类在开发中的使用-应用","link":"#_1-5-匿名内部类在开发中的使用-应用","children":[]}]},{"level":2,"title":"2.Lambda表达式","slug":"_2-lambda表达式","link":"#_2-lambda表达式","children":[{"level":3,"title":"2.1体验Lambda表达式【理解】","slug":"_2-1体验lambda表达式【理解】","link":"#_2-1体验lambda表达式【理解】","children":[]},{"level":3,"title":"2.2Lambda表达式的标准格式【理解】","slug":"_2-2lambda表达式的标准格式【理解】","link":"#_2-2lambda表达式的标准格式【理解】","children":[]},{"level":3,"title":"2.3Lambda表达式练习1【应用】","slug":"_2-3lambda表达式练习1【应用】","link":"#_2-3lambda表达式练习1【应用】","children":[]},{"level":3,"title":"2.4Lambda表达式练习2【应用】","slug":"_2-4lambda表达式练习2【应用】","link":"#_2-4lambda表达式练习2【应用】","children":[]},{"level":3,"title":"2.5Lambda表达式练习3【应用】","slug":"_2-5lambda表达式练习3【应用】","link":"#_2-5lambda表达式练习3【应用】","children":[]},{"level":3,"title":"2.6Lambda表达式的省略模式【应用】","slug":"_2-6lambda表达式的省略模式【应用】","link":"#_2-6lambda表达式的省略模式【应用】","children":[]},{"level":3,"title":"2.7Lambda表达式的使用前提【理解】","slug":"_2-7lambda表达式的使用前提【理解】","link":"#_2-7lambda表达式的使用前提【理解】","children":[]},{"level":3,"title":"2.8Lambda表达式和匿名内部类的区别【理解】","slug":"_2-8lambda表达式和匿名内部类的区别【理解】","link":"#_2-8lambda表达式和匿名内部类的区别【理解】","children":[]}]}],"git":{"createdTime":1689321383000,"updatedTime":1689750756000,"contributors":[{"name":"北省","email":"jih6666@126.com","commits":4}]},"readingTime":{"minutes":8.21,"words":2462},"filePathRelative":"src/JavaSE/内部类和Lambda表达式.md","localizedDate":"2023年7月14日","excerpt":"<h1> 内部类和Lambda表达式</h1>\\n<h2> 1.内部类</h2>\\n<h3> 1.1 内部类的基本使用（理解）</h3>\\n<ul>\\n<li>\\n<p>内部类概念</p>\\n<ul>\\n<li>在一个类中定义一个类。举例：在一个类A的内部定义一个类B，类B就被称为内部类</li>\\n</ul>\\n</li>\\n<li>\\n<p>内部类定义格式</p>\\n<ul>\\n<li>\\n<p>格式&amp;举例：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">/*\\n\\t格式：\\n    class 外部类名{\\n    \\t修饰符 class 内部类名{\\n    \\t\\n    \\t}\\n    }\\n*/</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Outer</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Inner</span> <span class=\\"token punctuation\\">{</span>\\n        \\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>内部类的访问特点</p>\\n<ul>\\n<li>内部类可以直接访问外部类的成员，包括私有</li>\\n<li>外部类要访问内部类的成员，必须创建对象</li>\\n</ul>\\n</li>\\n<li>\\n<p>示例代码：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">/*\\n    内部类访问特点：\\n        内部类可以直接访问外部类的成员，包括私有\\n        外部类要访问内部类的成员，必须创建对象\\n */</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Outer</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> num <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Inner</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">show</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">method</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">Inner</span> i <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Inner</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        i<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">show</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{n as data};
