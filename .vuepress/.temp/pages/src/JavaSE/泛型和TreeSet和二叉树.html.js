export const data = JSON.parse("{\"key\":\"v-7d677e30\",\"path\":\"/src/JavaSE/%E6%B3%9B%E5%9E%8B%E5%92%8CTreeSet%E5%92%8C%E4%BA%8C%E5%8F%89%E6%A0%91.html\",\"title\":\"泛型和TreeSet和二叉树\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"JavaSE\"],\"description\":\"泛型和TreeSet和二叉树 1.泛型 1.1泛型概述【理解】 泛型的介绍 ​\\t泛型是JDK5中引入的特性，它提供了编译时类型安全检测机制 泛型的好处 把运行时期的问题提前到了编译期间 避免了强制类型转换 泛型的定义格式 &lt;类型&gt;: 指定一种类型的格式.尖括号里面可以任意书写,一般只写一个字母.例如: &lt;E&gt; &lt;T&gt; &lt;类型1,类型2…&gt;: 指定多种类型的格式,多种类型之间用逗号隔开.例如: &lt;E,T&gt; &lt;K,V&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/Beisheng8888/blog/src/JavaSE/%E6%B3%9B%E5%9E%8B%E5%92%8CTreeSet%E5%92%8C%E4%BA%8C%E5%8F%89%E6%A0%91.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Jh\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"泛型和TreeSet和二叉树\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"泛型和TreeSet和二叉树 1.泛型 1.1泛型概述【理解】 泛型的介绍 ​\\t泛型是JDK5中引入的特性，它提供了编译时类型安全检测机制 泛型的好处 把运行时期的问题提前到了编译期间 避免了强制类型转换 泛型的定义格式 &lt;类型&gt;: 指定一种类型的格式.尖括号里面可以任意书写,一般只写一个字母.例如: &lt;E&gt; &lt;T&gt; &lt;类型1,类型2…&gt;: 指定多种类型的格式,多种类型之间用逗号隔开.例如: &lt;E,T&gt; &lt;K,V&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-07-18T07:08:24.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Jh\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-07-18T07:08:24.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"泛型和TreeSet和二叉树\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-07-18T07:08:24.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Jh\\\",\\\"url\\\":\\\"https://github.com/Beisheng8888\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.泛型\",\"slug\":\"_1-泛型\",\"link\":\"#_1-泛型\",\"children\":[{\"level\":3,\"title\":\"1.1泛型概述【理解】\",\"slug\":\"_1-1泛型概述【理解】\",\"link\":\"#_1-1泛型概述【理解】\",\"children\":[]},{\"level\":3,\"title\":\"1.2泛型类【应用】\",\"slug\":\"_1-2泛型类【应用】\",\"link\":\"#_1-2泛型类【应用】\",\"children\":[]},{\"level\":3,\"title\":\"1.3泛型方法【应用】\",\"slug\":\"_1-3泛型方法【应用】\",\"link\":\"#_1-3泛型方法【应用】\",\"children\":[]},{\"level\":3,\"title\":\"1.4泛型接口【应用】\",\"slug\":\"_1-4泛型接口【应用】\",\"link\":\"#_1-4泛型接口【应用】\",\"children\":[]},{\"level\":3,\"title\":\"1.5类型通配符\",\"slug\":\"_1-5类型通配符\",\"link\":\"#_1-5类型通配符\",\"children\":[]}]},{\"level\":2,\"title\":\"2.Set集合\",\"slug\":\"_2-set集合\",\"link\":\"#_2-set集合\",\"children\":[{\"level\":3,\"title\":\"2.1Set集合概述和特点【应用】\",\"slug\":\"_2-1set集合概述和特点【应用】\",\"link\":\"#_2-1set集合概述和特点【应用】\",\"children\":[]},{\"level\":3,\"title\":\"2.2Set集合的使用【应用】\",\"slug\":\"_2-2set集合的使用【应用】\",\"link\":\"#_2-2set集合的使用【应用】\",\"children\":[]}]},{\"level\":2,\"title\":\"3. TreeSet集合\",\"slug\":\"_3-treeset集合\",\"link\":\"#_3-treeset集合\",\"children\":[{\"level\":3,\"title\":\"3.1 TreeSet集合概述和特点【应用】\",\"slug\":\"_3-1-treeset集合概述和特点【应用】\",\"link\":\"#_3-1-treeset集合概述和特点【应用】\",\"children\":[]},{\"level\":3,\"title\":\"3.2 TreeSet集合基本使用【应用】\",\"slug\":\"_3-2-treeset集合基本使用【应用】\",\"link\":\"#_3-2-treeset集合基本使用【应用】\",\"children\":[]},{\"level\":3,\"title\":\"3.3自然排序Comparable的使用【应用】\",\"slug\":\"_3-3自然排序comparable的使用【应用】\",\"link\":\"#_3-3自然排序comparable的使用【应用】\",\"children\":[]},{\"level\":3,\"title\":\"3.4比较器排序Comparator的使用【应用】\",\"slug\":\"_3-4比较器排序comparator的使用【应用】\",\"link\":\"#_3-4比较器排序comparator的使用【应用】\",\"children\":[]},{\"level\":3,\"title\":\"3.5两种比较方式总结【理解】\",\"slug\":\"_3-5两种比较方式总结【理解】\",\"link\":\"#_3-5两种比较方式总结【理解】\",\"children\":[]}]},{\"level\":2,\"title\":\"4.数据结构\",\"slug\":\"_4-数据结构\",\"link\":\"#_4-数据结构\",\"children\":[{\"level\":3,\"title\":\"4.1二叉树【理解】\",\"slug\":\"_4-1二叉树【理解】\",\"link\":\"#_4-1二叉树【理解】\",\"children\":[]},{\"level\":3,\"title\":\"4.2二叉查找树【理解】\",\"slug\":\"_4-2二叉查找树【理解】\",\"link\":\"#_4-2二叉查找树【理解】\",\"children\":[]},{\"level\":3,\"title\":\"4.3平衡二叉树【理解】\",\"slug\":\"_4-3平衡二叉树【理解】\",\"link\":\"#_4-3平衡二叉树【理解】\",\"children\":[]}]}],\"git\":{\"createdTime\":1689562016000,\"updatedTime\":1689664104000,\"contributors\":[{\"name\":\"北省\",\"email\":\"jih6666@126.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":9.95,\"words\":2985},\"filePathRelative\":\"src/JavaSE/泛型和TreeSet和二叉树.md\",\"localizedDate\":\"2023年7月17日\",\"excerpt\":\"<h1> 泛型和TreeSet和二叉树</h1>\\n<h2> 1.泛型</h2>\\n<h3> 1.1泛型概述【理解】</h3>\\n<ul>\\n<li>\\n<p>泛型的介绍</p>\\n<p>​\\t泛型是JDK5中引入的特性，它提供了编译时类型安全检测机制</p>\\n</li>\\n<li>\\n<p>泛型的好处</p>\\n<ol>\\n<li>把运行时期的问题提前到了编译期间</li>\\n<li>避免了强制类型转换</li>\\n</ol>\\n</li>\\n<li>\\n<p>泛型的定义格式</p>\\n<ul>\\n<li>&lt;类型&gt;: 指定一种类型的格式.尖括号里面可以任意书写,一般只写一个字母.例如: <code>&lt;E&gt;</code> <code>&lt;T&gt;</code></li>\\n<li>&lt;类型1,类型2…&gt;: 指定多种类型的格式,多种类型之间用逗号隔开.例如: <code>&lt;E,T&gt;</code> <code>&lt;K,V&gt;</code></li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
