export const data = JSON.parse("{\"key\":\"v-5bc1edc1\",\"path\":\"/src/JavaSE/%E5%8F%AF%E5%8F%98%E5%8F%82%E6%95%B0.html\",\"title\":\"可变参数\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"JavaSE\"],\"description\":\"可变参数 1.可变参数 1.1可变参数【应用】 可变参数介绍 可变参数又称参数个数可变，用作方法的形参出现，那么方法参数个数就是可变的了 方法的参数类型已经确定,个数不确定,我们可以使用可变参数 可变参数定义格式 修饰符 返回值类型 方法名(数据类型… 变量名) { } 可变参数的注意事项 这里的变量其实是一个数组 如果一个方法有多个参数，包含可变参数，可变参数要放在最后 可变参数的基本使用 public class ArgsDemo01 { public static void main(String[] args) { System.out.println(sum(10, 20)); System.out.println(sum(10, 20, 30)); System.out.println(sum(10, 20, 30, 40)); System.out.println(sum(10,20,30,40,50)); System.out.println(sum(10,20,30,40,50,60)); System.out.println(sum(10,20,30,40,50,60,70)); System.out.println(sum(10,20,30,40,50,60,70,80,90,100)); } // public static int sum(int b,int... a) { // return 0; // } public static int sum(int... a) { int sum = 0; for(int i : a) { sum += i; } return sum; } }\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/Beisheng8888/blog/src/JavaSE/%E5%8F%AF%E5%8F%98%E5%8F%82%E6%95%B0.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"冀辉的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"可变参数\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"可变参数 1.可变参数 1.1可变参数【应用】 可变参数介绍 可变参数又称参数个数可变，用作方法的形参出现，那么方法参数个数就是可变的了 方法的参数类型已经确定,个数不确定,我们可以使用可变参数 可变参数定义格式 修饰符 返回值类型 方法名(数据类型… 变量名) { } 可变参数的注意事项 这里的变量其实是一个数组 如果一个方法有多个参数，包含可变参数，可变参数要放在最后 可变参数的基本使用 public class ArgsDemo01 { public static void main(String[] args) { System.out.println(sum(10, 20)); System.out.println(sum(10, 20, 30)); System.out.println(sum(10, 20, 30, 40)); System.out.println(sum(10,20,30,40,50)); System.out.println(sum(10,20,30,40,50,60)); System.out.println(sum(10,20,30,40,50,60,70)); System.out.println(sum(10,20,30,40,50,60,70,80,90,100)); } // public static int sum(int b,int... a) { // return 0; // } public static int sum(int... a) { int sum = 0; for(int i : a) { sum += i; } return sum; } }\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.JH\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-01T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"可变参数\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.JH\\\",\\\"url\\\":\\\"https://github.com/Beisheng8888\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.可变参数\",\"slug\":\"_1-可变参数\",\"link\":\"#_1-可变参数\",\"children\":[{\"level\":3,\"title\":\"1.1可变参数【应用】\",\"slug\":\"_1-1可变参数【应用】\",\"link\":\"#_1-1可变参数【应用】\",\"children\":[]},{\"level\":3,\"title\":\"1.2创建不可变集合【理解】\",\"slug\":\"_1-2创建不可变集合【理解】\",\"link\":\"#_1-2创建不可变集合【理解】\",\"children\":[]}]},{\"level\":2,\"title\":\"2.Stream流\",\"slug\":\"_2-stream流\",\"link\":\"#_2-stream流\",\"children\":[{\"level\":3,\"title\":\"2.1体验Stream流【理解】\",\"slug\":\"_2-1体验stream流【理解】\",\"link\":\"#_2-1体验stream流【理解】\",\"children\":[]},{\"level\":3,\"title\":\"2.2Stream流的常见生成方式【应用】\",\"slug\":\"_2-2stream流的常见生成方式【应用】\",\"link\":\"#_2-2stream流的常见生成方式【应用】\",\"children\":[]},{\"level\":3,\"title\":\"2.3Stream流中间操作方法【应用】\",\"slug\":\"_2-3stream流中间操作方法【应用】\",\"link\":\"#_2-3stream流中间操作方法【应用】\",\"children\":[]},{\"level\":3,\"title\":\"2.4Stream流终结操作方法【应用】\",\"slug\":\"_2-4stream流终结操作方法【应用】\",\"link\":\"#_2-4stream流终结操作方法【应用】\",\"children\":[]},{\"level\":3,\"title\":\"2.5Stream流的收集操作【应用】\",\"slug\":\"_2-5stream流的收集操作【应用】\",\"link\":\"#_2-5stream流的收集操作【应用】\",\"children\":[]},{\"level\":3,\"title\":\"5.6Stream流综合练习【应用】\",\"slug\":\"_5-6stream流综合练习【应用】\",\"link\":\"#_5-6stream流综合练习【应用】\",\"children\":[]}]}],\"readingTime\":{\"minutes\":11.4,\"words\":3420},\"filePathRelative\":\"src/JavaSE/可变参数.md\",\"localizedDate\":\"2022年1月1日\",\"excerpt\":\"<h1> 可变参数</h1>\\n<h2> 1.可变参数</h2>\\n<h3> 1.1可变参数【应用】</h3>\\n<ul>\\n<li>\\n<p>可变参数介绍</p>\\n<ul>\\n<li>可变参数又称参数个数可变，用作方法的形参出现，那么方法参数个数就是可变的了</li>\\n<li>方法的参数类型已经确定,个数不确定,我们可以使用可变参数</li>\\n</ul>\\n</li>\\n<li>\\n<p>可变参数定义格式</p>\\n<div class=\\\"language-java line-numbers-mode\\\" data-ext=\\\"java\\\"><pre class=\\\"language-java\\\"><code>修饰符 返回值类型 方法名<span class=\\\"token punctuation\\\">(</span>数据类型… 变量名<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>  <span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>可变参数的注意事项</p>\\n<ul>\\n<li>这里的变量其实是一个数组</li>\\n<li>如果一个方法有多个参数，包含可变参数，可变参数要放在最后</li>\\n</ul>\\n</li>\\n<li>\\n<p>可变参数的基本使用</p>\\n<div class=\\\"language-java line-numbers-mode\\\" data-ext=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">ArgsDemo01</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">static</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">main</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">String</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span> args<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">sum</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">sum</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">30</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">sum</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">30</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">40</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">sum</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">30</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">40</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">50</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">sum</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">30</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">40</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">50</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">60</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">sum</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">30</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">40</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">50</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">60</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">70</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">sum</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">30</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">40</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">50</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">60</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">70</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">80</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">90</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">100</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token comment\\\">//    public static int sum(int b,int... a) {</span>\\n<span class=\\\"token comment\\\">//        return 0;</span>\\n<span class=\\\"token comment\\\">//    }</span>\\n\\n    <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">static</span> <span class=\\\"token keyword\\\">int</span> <span class=\\\"token function\\\">sum</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">int</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">.</span> a<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token keyword\\\">int</span> sum <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token keyword\\\">for</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">int</span> i <span class=\\\"token operator\\\">:</span> a<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n            sum <span class=\\\"token operator\\\">+=</span> i<span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token keyword\\\">return</span> sum<span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n</ul>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
