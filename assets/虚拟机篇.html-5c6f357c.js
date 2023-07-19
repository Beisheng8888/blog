const t=JSON.parse('{"key":"v-7622fcce","path":"/src/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98/%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%AF%87.html","title":"虚拟机篇","lang":"zh-CN","frontmatter":{"category":["面试"],"description":"虚拟机篇 1. JVM 内存结构 结合一段 java 代码的执行理解内存划分 image-20210831165728217 执行 javac 命令编译源代码为字节码 执行 java 命令 创建 JVM，调用类加载子系统加载 class，将类的信息存入方法区 创建 main 线程，使用的内存区域是 JVM 虚拟机栈，开始执行 main 方法代码 如果遇到了未见过的类，会继续触发类加载过程，同样会存入方法区 需要创建对象，会使用堆内存来存储对象 不再使用的对象，会由垃圾回收器在内存不足时回收其内存 调用方法时，方法内的局部变量、方法参数所使用的是 JVM 虚拟机栈中的栈帧内存 调用方法时，先要到方法区获得到该方法的字节码指令，由解释器将字节码指令解释为机器码执行 调用方法时，会将要执行的指令行号读到程序计数器，这样当发生了线程切换，恢复时就可以从中断的位置继续 对于非 java 实现的方法调用，使用内存称为本地方法栈（见说明） 对于热点方法调用，或者频繁的循环代码，由 JIT 即时编译器将这些代码编译成机器码缓存，提高执行性能","head":[["meta",{"property":"og:url","content":"https://github.com/Beisheng8888/blog/src/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98/%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%AF%87.html"}],["meta",{"property":"og:site_name","content":"Mr.Jh"}],["meta",{"property":"og:title","content":"虚拟机篇"}],["meta",{"property":"og:description","content":"虚拟机篇 1. JVM 内存结构 结合一段 java 代码的执行理解内存划分 image-20210831165728217 执行 javac 命令编译源代码为字节码 执行 java 命令 创建 JVM，调用类加载子系统加载 class，将类的信息存入方法区 创建 main 线程，使用的内存区域是 JVM 虚拟机栈，开始执行 main 方法代码 如果遇到了未见过的类，会继续触发类加载过程，同样会存入方法区 需要创建对象，会使用堆内存来存储对象 不再使用的对象，会由垃圾回收器在内存不足时回收其内存 调用方法时，方法内的局部变量、方法参数所使用的是 JVM 虚拟机栈中的栈帧内存 调用方法时，先要到方法区获得到该方法的字节码指令，由解释器将字节码指令解释为机器码执行 调用方法时，会将要执行的指令行号读到程序计数器，这样当发生了线程切换，恢复时就可以从中断的位置继续 对于非 java 实现的方法调用，使用内存称为本地方法栈（见说明） 对于热点方法调用，或者频繁的循环代码，由 JIT 即时编译器将这些代码编译成机器码缓存，提高执行性能"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-19T01:48:53.000Z"}],["meta",{"property":"article:author","content":"Mr.Jh"}],["meta",{"property":"article:modified_time","content":"2023-07-19T01:48:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟机篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-19T01:48:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jh\\",\\"url\\":\\"https://github.com/Beisheng8888\\"}]}"]]},"headers":[{"level":2,"title":"1. JVM 内存结构","slug":"_1-jvm-内存结构","link":"#_1-jvm-内存结构","children":[]},{"level":2,"title":"2. JVM 内存参数","slug":"_2-jvm-内存参数","link":"#_2-jvm-内存参数","children":[]},{"level":2,"title":"3. JVM 垃圾回收","slug":"_3-jvm-垃圾回收","link":"#_3-jvm-垃圾回收","children":[]},{"level":2,"title":"4. 内存溢出","slug":"_4-内存溢出","link":"#_4-内存溢出","children":[]},{"level":2,"title":"5. 类加载","slug":"_5-类加载","link":"#_5-类加载","children":[]},{"level":2,"title":"6. 四种引用","slug":"_6-四种引用","link":"#_6-四种引用","children":[]},{"level":2,"title":"7. finalize","slug":"_7-finalize","link":"#_7-finalize","children":[]}],"git":{"createdTime":1689574668000,"updatedTime":1689731333000,"contributors":[{"name":"北省","email":"jih6666@126.com","commits":3}]},"readingTime":{"minutes":17.77,"words":5330},"filePathRelative":"src/面试专题/虚拟机篇.md","localizedDate":"2023年7月17日","excerpt":"<h1> 虚拟机篇</h1>\\n<h2> 1. JVM 内存结构</h2>\\n<p><strong>结合一段 java 代码的执行理解内存划分</strong></p>\\n<figure><figcaption>image-20210831165728217</figcaption></figure>\\n<ul>\\n<li>执行 javac 命令编译源代码为字节码</li>\\n<li>执行 java 命令\\n<ol>\\n<li>创建 JVM，调用类加载子系统加载 class，将类的信息存入<strong>方法区</strong></li>\\n<li>创建 main 线程，使用的内存区域是 <strong>JVM 虚拟机栈</strong>，开始执行 main 方法代码</li>\\n<li>如果遇到了未见过的类，会继续触发类加载过程，同样会存入<strong>方法区</strong></li>\\n<li>需要创建对象，会使用<strong>堆</strong>内存来存储对象</li>\\n<li>不再使用的对象，会由<strong>垃圾回收器</strong>在内存不足时回收其内存</li>\\n<li>调用方法时，方法内的局部变量、方法参数所使用的是  <strong>JVM 虚拟机栈</strong>中的栈帧内存</li>\\n<li>调用方法时，先要到<strong>方法区</strong>获得到该方法的字节码指令，由<strong>解释器</strong>将字节码指令解释为机器码执行</li>\\n<li>调用方法时，会将要执行的指令行号读到<strong>程序计数器</strong>，这样当发生了线程切换，恢复时就可以从中断的位置继续</li>\\n<li>对于非 java 实现的方法调用，使用内存称为<strong>本地方法栈</strong>（见说明）</li>\\n<li>对于热点方法调用，或者频繁的循环代码，由 <strong>JIT 即时编译器</strong>将这些代码编译成机器码缓存，提高执行性能</li>\\n</ol>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
