<template><div><h1 id="虚拟机篇" tabindex="-1"><a class="header-anchor" href="#虚拟机篇" aria-hidden="true">#</a> 虚拟机篇</h1>
<h2 id="_1-jvm-内存结构" tabindex="-1"><a class="header-anchor" href="#_1-jvm-内存结构" aria-hidden="true">#</a> 1. JVM 内存结构</h2>
<p><strong>结合一段 java 代码的执行理解内存划分</strong></p>
<p><img src="@source/面试专题/img/image-20210831165728217.png" alt="image-20210831165728217"></p>
<ul>
<li>执行 javac 命令编译源代码为字节码</li>
<li>执行 java 命令
<ol>
<li>创建 JVM，调用类加载子系统加载 class，将类的信息存入<strong>方法区</strong></li>
<li>创建 main 线程，使用的内存区域是 <strong>JVM 虚拟机栈</strong>，开始执行 main 方法代码</li>
<li>如果遇到了未见过的类，会继续触发类加载过程，同样会存入<strong>方法区</strong></li>
<li>需要创建对象，会使用<strong>堆</strong>内存来存储对象</li>
<li>不再使用的对象，会由<strong>垃圾回收器</strong>在内存不足时回收其内存</li>
<li>调用方法时，方法内的局部变量、方法参数所使用的是  <strong>JVM 虚拟机栈</strong>中的栈帧内存</li>
<li>调用方法时，先要到<strong>方法区</strong>获得到该方法的字节码指令，由<strong>解释器</strong>将字节码指令解释为机器码执行</li>
<li>调用方法时，会将要执行的指令行号读到<strong>程序计数器</strong>，这样当发生了线程切换，恢复时就可以从中断的位置继续</li>
<li>对于非 java 实现的方法调用，使用内存称为<strong>本地方法栈</strong>（见说明）</li>
<li>对于热点方法调用，或者频繁的循环代码，由 <strong>JIT 即时编译器</strong>将这些代码编译成机器码缓存，提高执行性能</li>
</ol>
</li>
</ul>
<p>说明</p>
<ul>
<li>加粗字体代表了 JVM 虚拟机组件</li>
<li>对于 Oracle 的 Hotspot 虚拟机实现，不区分虚拟机栈和本地方法栈</li>
</ul>
<p><strong>会发生内存溢出的区域</strong></p>
<ul>
<li>不会出现内存溢出的区域 – 程序计数器</li>
<li>出现 OutOfMemoryError 的情况
<ul>
<li>堆内存耗尽 – 对象越来越多，又一直在使用，不能被垃圾回收</li>
<li>方法区内存耗尽 – 加载的类越来越多，很多框架都会在运行期间动态产生新的类</li>
<li>虚拟机栈累积 – 每个线程最多会占用 1 M 内存，线程个数越来越多，而又长时间运行不销毁时</li>
</ul>
</li>
<li>出现 StackOverflowError 的区域
<ul>
<li>JVM 虚拟机栈，原因有方法递归调用未正确结束、反序列化 json 时循环引用</li>
</ul>
</li>
</ul>
<p><strong>方法区、永久代、元空间</strong></p>
<ul>
<li><strong>方法区</strong>是 JVM 规范中定义的一块内存区域，用来存储类元数据、方法字节码、即时编译器需要的信息等</li>
<li><strong>永久代</strong>是 Hotspot 虚拟机对 JVM 规范的实现（1.8 之前）</li>
<li><strong>元空间</strong>是 Hotspot 虚拟机对 JVM 规范的另一种实现（1.8 以后），使用本地内存作为这些信息的存储空间</li>
</ul>
<p><img src="@source/面试专题/img/image-20210831170457337.png" alt="image-20210831170457337"></p>
<p>从这张图学到三点</p>
<ul>
<li>当第一次用到某个类是，由类加载器将 class 文件的类元信息读入，并存储于元空间</li>
<li>X，Y 的类元信息是存储于元空间中，无法直接访问</li>
<li>可以用 X.class，Y.class 间接访问类元信息，它们俩属于 java 对象，我们的代码中可以使用</li>
</ul>
<p><img src="@source/面试专题/img/image-20210831170512418.png" alt="image-20210831170512418"></p>
<p>从这张图可以学到</p>
<ul>
<li>堆内存中：当一个<strong>类加载器对象</strong>，这个类加载器对象加载的所有<strong>类对象</strong>，这些类对象对应的所有<strong>实例对象</strong>都没人引用时，GC 时就会对它们占用的对内存进行释放</li>
<li>元空间中：内存释放<strong>以类加载器为单位</strong>，当堆中类加载器内存释放时，对应的元空间中的类元信息也会释放</li>
</ul>
<h2 id="_2-jvm-内存参数" tabindex="-1"><a class="header-anchor" href="#_2-jvm-内存参数" aria-hidden="true">#</a> 2. JVM 内存参数</h2>
<p><strong>堆内存，按大小设置</strong></p>
<p><img src="@source/面试专题/img/image-20210831173130717.png" alt="image-20210831173130717"></p>
<p>解释：</p>
<ul>
<li>-Xms 最小堆内存（包括新生代和老年代）</li>
<li>-Xmx 最大对内存（包括新生代和老年代）</li>
<li>通常建议将 -Xms 与 -Xmx 设置为大小相等，即不需要保留内存，不需要从小到大增长，这样性能较好</li>
<li>-XX:NewSize 与 -XX:MaxNewSize 设置新生代的最小与最大值，但一般不建议设置，由 JVM 自己控制</li>
<li>-Xmn 设置新生代大小，相当于同时设置了 -XX:NewSize 与 -XX:MaxNewSize 并且取值相等</li>
<li>保留是指，一开始不会占用那么多内存，随着使用内存越来越多，会逐步使用这部分保留内存。下同</li>
</ul>
<p><strong>堆内存，按比例设置</strong></p>
<p><img src="@source/面试专题/img/image-20210831173045700.png" alt="image-20210831173045700"></p>
<p>解释：</p>
<ul>
<li>-XX:NewRatio=2:1 表示老年代占两份，新生代占一份</li>
<li>-XX:SurvivorRatio=4:1 表示新生代分成六份，伊甸园占四份，from 和 to 各占一份</li>
</ul>
<p><strong>元空间内存设置</strong></p>
<p><img src="@source/面试专题/img/image-20210831173118634.png" alt="image-20210831173118634"></p>
<p>解释：</p>
<ul>
<li>class space 存储类的基本信息，最大值受 -XX:CompressedClassSpaceSize 控制</li>
<li>non-class space 存储除类的基本信息以外的其它信息（如方法字节码、注解等）</li>
<li>class space 和 non-class space 总大小受 -XX:MaxMetaspaceSize 控制</li>
</ul>
<p>注意：</p>
<ul>
<li>这里 -XX:CompressedClassSpaceSize 这段空间还与是否开启了指针压缩有关，这里暂不深入展开，可以简单认为指针压缩默认开启</li>
</ul>
<p><strong>代码缓存内存设置</strong></p>
<p><img src="@source/面试专题/img/image-20210831173148816.png" alt="image-20210831173148816"></p>
<p>解释：</p>
<ul>
<li>如果 -XX:ReservedCodeCacheSize &lt; 240m，所有优化机器代码不加区分存在一起</li>
<li>否则，分成三个区域（图中笔误 mthod 拼写错误，少一个 e）
<ul>
<li>non-nmethods - JVM 自己用的代码</li>
<li>profiled nmethods - 部分优化的机器码</li>
<li>non-profiled nmethods - 完全优化的机器码</li>
</ul>
</li>
</ul>
<p><strong>线程内存设置</strong></p>
<p><img src="@source/面试专题/img/image-20210831173155481.png" alt="image-20210831173155481"></p>
<blockquote>
<p><em><strong>官方参考文档</strong></em></p>
<ul>
<li>https://docs.oracle.com/en/java/javase/11/tools/java.html#GUID-3B1CE181-CD30-4178-9602-230B800D4FAE</li>
</ul>
</blockquote>
<h2 id="_3-jvm-垃圾回收" tabindex="-1"><a class="header-anchor" href="#_3-jvm-垃圾回收" aria-hidden="true">#</a> 3. JVM 垃圾回收</h2>
<p><strong>三种垃圾回收算法</strong></p>
<p>标记清除法</p>
<p><img src="@source/面试专题/img/image-20210831211008162.png" alt="image-20210831211008162"></p>
<p>解释：</p>
<ol>
<li>找到 GC Root 对象，即那些一定不会被回收的对象，如正执行方法内局部变量引用的对象、静态变量引用的对象</li>
<li>标记阶段：沿着 GC Root 对象的引用链找，直接或间接引用到的对象加上标记</li>
<li>清除阶段：释放未加标记的对象占用的内存</li>
</ol>
<p>要点：</p>
<ul>
<li>标记速度与存活对象线性关系</li>
<li>清除速度与内存大小线性关系</li>
<li>缺点是会产生内存碎片</li>
</ul>
<p>标记整理法</p>
<p><img src="@source/面试专题/img/image-20210831211641241.png" alt="image-20210831211641241"></p>
<p>解释：</p>
<ol>
<li>前面的标记阶段、清理阶段与标记清除法类似</li>
<li>多了一步整理的动作，将存活对象向一端移动，可以避免内存碎片产生</li>
</ol>
<p>特点：</p>
<ul>
<li>
<p>标记速度与存活对象线性关系</p>
</li>
<li>
<p>清除与整理速度与内存大小成线性关系</p>
</li>
<li>
<p>缺点是性能上较慢</p>
</li>
</ul>
<p>标记复制法</p>
<p><img src="@source/面试专题/img/image-20210831212125813.png" alt="image-20210831212125813"></p>
<p>解释：</p>
<ol>
<li>将整个内存分成两个大小相等的区域，from 和 to，其中 to 总是处于空闲，from 存储新创建的对象</li>
<li>标记阶段与前面的算法类似</li>
<li>在找出存活对象后，会将它们从 from 复制到 to 区域，复制的过程中自然完成了碎片整理</li>
<li>复制完成后，交换 from 和 to 的位置即可</li>
</ol>
<p>特点：</p>
<ul>
<li>标记与复制速度与存活对象成线性关系</li>
<li>缺点是会占用成倍的空间</li>
</ul>
<p><strong>GC 与分代回收算法</strong></p>
<p>GC 的目的在于实现无用对象内存自动释放，减少内存碎片、加快分配速度</p>
<p>GC 要点：</p>
<ul>
<li>回收区域是<strong>堆内存</strong>，不包括虚拟机栈</li>
<li>判断无用对象，使用<strong>可达性分析算法</strong>，<strong>三色标记法</strong>标记存活对象，回收未标记对象</li>
<li>GC 具体的实现称为<strong>垃圾回收器</strong></li>
<li>GC 大都采用了<strong>分代回收思想</strong>
<ul>
<li>理论依据是大部分对象朝生夕灭，用完立刻就可以回收，另有少部分对象会长时间存活，每次很难回收</li>
<li>根据这两类对象的特性将回收区域分为<strong>新生代</strong>和<strong>老年代</strong>，新生代采用标记复制法、老年代一般采用标记整理法</li>
</ul>
</li>
<li>根据 GC 的规模可以分成 <strong>Minor GC</strong>，<strong>Mixed GC</strong>，<strong>Full GC</strong></li>
</ul>
<p><strong>分代回收</strong></p>
<ol>
<li>伊甸园 eden，最初对象都分配到这里，与幸存区 survivor（分成 from 和 to）合称新生代，</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213622704.png" alt="image-20210831213622704"></p>
<ol start="2">
<li>当伊甸园内存不足，标记伊甸园与 from（现阶段没有）的存活对象</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213640110.png" alt="image-20210831213640110"></p>
<ol start="3">
<li>将存活对象采用复制算法复制到 to 中，复制完毕后，伊甸园和 from 内存都得到释放</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213657861.png" alt="image-20210831213657861"></p>
<ol start="4">
<li>将 from 和 to 交换位置</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213708776.png" alt="image-20210831213708776"></p>
<ol start="5">
<li>经过一段时间后伊甸园的内存又出现不足</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213724858.png" alt="image-20210831213724858"></p>
<ol start="6">
<li>标记伊甸园与 from（现阶段没有）的存活对象</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213737669.png" alt="image-20210831213737669"></p>
<ol start="7">
<li>将存活对象采用复制算法复制到 to 中</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213804315.png" alt="image-20210831213804315"></p>
<ol start="8">
<li>复制完毕后，伊甸园和 from 内存都得到释放</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213815371.png" alt="image-20210831213815371"></p>
<ol start="9">
<li>将 from 和 to 交换位置</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831213826017.png" alt="image-20210831213826017"></p>
<ol start="10">
<li>老年代 old，当幸存区对象熬过几次回收（最多15次），晋升到老年代（幸存区内存不足或大对象会导致提前晋升）</li>
</ol>
<p><strong>GC 规模</strong></p>
<ul>
<li>
<p>Minor GC 发生在新生代的垃圾回收，暂停时间短</p>
</li>
<li>
<p>Mixed GC 新生代 + 老年代部分区域的垃圾回收，G1 收集器特有</p>
</li>
<li>
<p>Full GC 新生代 + 老年代完整垃圾回收，暂停时间长，<strong>应尽力避免</strong></p>
</li>
</ul>
<p><strong>三色标记</strong></p>
<p>即用三种颜色记录对象的标记状态</p>
<ul>
<li>黑色 – 已标记</li>
<li>灰色 – 标记中</li>
<li>白色 – 还未标记</li>
</ul>
<ol>
<li>起始的三个对象还未处理完成，用灰色表示</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831215016566.png" alt="img"></p>
<ol start="2">
<li>该对象的引用已经处理完成，用黑色表示，黑色引用的对象变为灰色</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831215033510.png" alt="img"></p>
<ol start="3">
<li>依次类推</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831215105280.png" alt="img"></p>
<ol start="4">
<li>沿着引用链都标记了一遍</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831215146276.png" alt="img"></p>
<ol start="5">
<li>最后为标记的白色对象，即为垃圾</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831215158311.png" alt="img"></p>
<p><strong>并发漏标问题</strong></p>
<p>比较先进的垃圾回收器都支持<strong>并发标记</strong>，即在标记过程中，用户线程仍然能工作。但这样带来一个新的问题，如果用户线程修改了对象引用，那么就存在漏标问题。例如：</p>
<ol>
<li>如图所示标记工作尚未完成</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831215846876.png" alt="img"></p>
<ol start="2">
<li>用户线程同时在工作，断开了第一层 3、4 两个对象之间的引用，这时对于正在处理 3 号对象的垃圾回收线程来讲，它会将 4 号对象当做是白色垃圾</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831215904073.png" alt="img"></p>
<ol start="3">
<li>但如果其他用户线程又建立了 2、4 两个对象的引用，这时因为 2 号对象是黑色已处理对象了，因此垃圾回收线程不会察觉到这个引用关系的变化，从而产生了漏标</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831215919493.png" alt="img"></p>
<ol start="4">
<li>如果用户线程让黑色对象引用了一个新增对象，一样会存在漏标问题</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831220004062.png" alt="img"></p>
<p>因此对于<strong>并发标记</strong>而言，必须解决漏标问题，也就是要记录标记过程中的变化。有两种解决方法：</p>
<ol>
<li>Incremental Update 增量更新法，CMS 垃圾回收器采用
<ul>
<li>思路是拦截每次赋值动作，只要赋值发生，被赋值的对象就会被记录下来，在重新标记阶段再确认一遍</li>
</ul>
</li>
<li>Snapshot At The Beginning，SATB 原始快照法，G1 垃圾回收器采用
<ul>
<li>思路也是拦截每次赋值动作，不过记录的对象不同，也需要在重新标记阶段对这些对象二次处理</li>
<li>新加对象会被记录</li>
<li>被删除引用关系的对象也被记录</li>
</ul>
</li>
</ol>
<p><strong>垃圾回收器 - Parallel GC</strong></p>
<ul>
<li>
<p>eden 内存不足发生 Minor GC，采用标记复制算法，需要暂停用户线程</p>
</li>
<li>
<p>old 内存不足发生 Full GC，采用标记整理算法，需要暂停用户线程</p>
</li>
<li>
<p><strong>注重吞吐量</strong></p>
</li>
</ul>
<p><strong>垃圾回收器 - ConcurrentMarkSweep GC</strong></p>
<ul>
<li>
<p>它是工作在 old 老年代，支持<strong>并发标记</strong>的一款回收器，采用<strong>并发清除</strong>算法</p>
<ul>
<li>并发标记时不需暂停用户线程</li>
<li>重新标记时仍需暂停用户线程</li>
</ul>
</li>
<li>
<p>如果并发失败（即回收速度赶不上创建新对象速度），会触发 Full GC</p>
</li>
<li>
<p><strong>注重响应时间</strong></p>
</li>
</ul>
<p><strong>垃圾回收器 - G1 GC</strong></p>
<ul>
<li><strong>响应时间与吞吐量兼顾</strong></li>
<li>划分成多个区域，每个区域都可以充当 eden，survivor，old， humongous，其中 humongous 专为大对象准备</li>
<li>分成三个阶段：新生代回收、并发标记、混合收集</li>
<li>如果并发失败（即回收速度赶不上创建新对象速度），会触发 Full GC</li>
</ul>
<p><strong>G1 回收阶段 - 新生代回收</strong></p>
<ol>
<li>初始时，所有区域都处于空闲状态</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222639754.png" alt="img"></p>
<ol start="2">
<li>创建了一些对象，挑出一些空闲区域作为伊甸园区存储这些对象</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222653802.png" alt="img"></p>
<ol start="3">
<li>当伊甸园需要垃圾回收时，挑出一个空闲区域作为幸存区，用复制算法复制存活对象，需要暂停用户线程</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222705814.png" alt="img"></p>
<ol start="4">
<li>复制完成，将之前的伊甸园内存释放</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222724999.png" alt="img"></p>
<ol start="5">
<li>随着时间流逝，伊甸园的内存又有不足</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222737928.png" alt="img"></p>
<ol start="6">
<li>将伊甸园以及之前幸存区中的存活对象，采用复制算法，复制到新的幸存区，其中较老对象晋升至老年代</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222752787.png" alt="img"></p>
<ol start="7">
<li>释放伊甸园以及之前幸存区的内存</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222803281.png" alt="img"></p>
<p><strong>G1 回收阶段 - 并发标记与混合收集</strong></p>
<ol>
<li>当老年代占用内存超过阈值后，触发并发标记，这时无需暂停用户线程</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222813959.png" alt="img"></p>
<ol start="2">
<li>并发标记之后，会有重新标记阶段解决漏标问题，此时需要暂停用户线程。这些都完成后就知道了老年代有哪些存活对象，随后进入混合收集阶段。此时不会对所有老年代区域进行回收，而是根据<strong>暂停时间目标</strong>优先回收价值高（存活对象少）的区域（这也是 Gabage First 名称的由来）。</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222828104.png" alt="img"></p>
<ol start="3">
<li>混合收集阶段中，参与复制的有 eden、survivor、old，下图显示了伊甸园和幸存区的存活对象复制</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222841096.png" alt="img"></p>
<ol start="4">
<li>下图显示了老年代和幸存区晋升的存活对象的复制</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222859760.png" alt="img"></p>
<ol start="5">
<li>复制完成，内存得到释放。进入下一轮的新生代回收、并发标记、混合收集</li>
</ol>
<p><img src="@source/面试专题/img/image-20210831222919182.png" alt="img"></p>
<h2 id="_4-内存溢出" tabindex="-1"><a class="header-anchor" href="#_4-内存溢出" aria-hidden="true">#</a> 4. 内存溢出</h2>
<h2 id="_5-类加载" tabindex="-1"><a class="header-anchor" href="#_5-类加载" aria-hidden="true">#</a> 5. 类加载</h2>
<p><strong>类加载过程的三个阶段</strong></p>
<ol>
<li>
<p>加载</p>
<ol>
<li>
<p>将类的字节码载入方法区，并创建类.class 对象</p>
</li>
<li>
<p>如果此类的父类没有加载，先加载父类</p>
</li>
<li>
<p>加载是懒惰执行</p>
</li>
</ol>
</li>
<li>
<p>链接</p>
<ol>
<li>验证 – 验证类是否符合 Class 规范，合法性、安全性检查</li>
<li>准备 – 为 static 变量分配空间，设置默认值</li>
<li>解析 – 将常量池的符号引用解析为直接引用</li>
</ol>
</li>
<li>
<p>初始化</p>
<ol>
<li>静态代码块、static 修饰的变量赋值、static final 修饰的引用类型变量赋值，会被合并成一个 <code v-pre>&lt;cinit&gt;</code> 方法，在初始化时被调用</li>
<li>static final 修饰的基本类型变量赋值，在链接阶段就已完成</li>
<li>初始化是懒惰执行</li>
</ol>
</li>
</ol>
<blockquote>
<p><em><strong>验证手段</strong></em></p>
<ul>
<li>使用 jps 查看进程号</li>
<li>使用 jhsdb 调试，执行命令 <code v-pre>jhsdb.exe hsdb</code> 打开它的图形界面
<ul>
<li>Class Browser 可以查看当前 jvm 中加载了哪些类</li>
<li>控制台的 universe 命令查看堆内存范围</li>
<li>控制台的 g1regiondetails 命令查看 region 详情</li>
<li><code v-pre>scanoops 起始地址 结束地址 对象类型</code> 可以根据类型查找某个区间内的对象地址</li>
<li>控制台的 <code v-pre>inspect 地址</code> 指令能够查看这个地址对应的对象详情</li>
</ul>
</li>
<li>使用 javap 命令可以查看 class 字节码</li>
</ul>
</blockquote>
<p><strong>jdk 8 的类加载器</strong></p>
<table>
<thead>
<tr>
<th><strong>名称</strong></th>
<th><strong>加载哪的类</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Bootstrap ClassLoader</td>
<td>JAVA_HOME/jre/lib</td>
<td>无法直接访问</td>
</tr>
<tr>
<td>Extension ClassLoader</td>
<td>JAVA_HOME/jre/lib/ext</td>
<td>上级为 Bootstrap，显示为  null</td>
</tr>
<tr>
<td>Application ClassLoader</td>
<td>classpath</td>
<td>上级为 Extension</td>
</tr>
<tr>
<td>自定义类加载器</td>
<td>自定义</td>
<td>上级为 Application</td>
</tr>
</tbody>
</table>
<p><strong>双亲委派机制</strong></p>
<p>所谓的双亲委派，就是指优先委派上级类加载器进行加载，如果上级类加载器</p>
<ul>
<li>能找到这个类，由上级加载，加载后该类也对下级加载器可见</li>
<li>找不到这个类，则下级类加载器才有资格执行加载</li>
</ul>
<p>双亲委派的目的有两点</p>
<ol>
<li>
<p>让上级类加载器中的类对下级共享（反之不行），即能让你的类能依赖到 jdk 提供的核心类</p>
</li>
<li>
<p>让类的加载有优先次序，保证核心类优先加载</p>
</li>
</ol>
<p><strong>对双亲委派的误解</strong></p>
<p>下面面试题的回答是错误的</p>
<p><img src="@source/面试专题/img/image-20210901110910016.png" alt="image-20210901110910016"></p>
<p>错在哪了？</p>
<ul>
<li>
<p>自己编写类加载器就能加载一个假冒的 java.lang.System 吗? 答案是不行。</p>
</li>
<li>
<p>假设你自己的类加载器用双亲委派，那么优先由启动类加载器加载真正的 java.lang.System，自然不会加载假冒的</p>
</li>
<li>
<p>假设你自己的类加载器不用双亲委派，那么你的类加载器加载假冒的 java.lang.System 时，它需要先加载父类 java.lang.Object，而你没有用委派，找不到 java.lang.Object 所以加载会失败</p>
</li>
<li>
<p><strong>以上也仅仅是假设</strong>。事实上操作你就会发现，自定义类加载器加载以 java. 打头的类时，会抛安全异常，在 jdk9 以上版本这些特殊包名都与模块进行了绑定，更连编译都过不了</p>
</li>
</ul>
<h2 id="_6-四种引用" tabindex="-1"><a class="header-anchor" href="#_6-四种引用" aria-hidden="true">#</a> 6. 四种引用</h2>
<p><strong>强引用</strong></p>
<ol>
<li>
<p>普通变量赋值即为强引用，如 A a = new A();</p>
</li>
<li>
<p>通过 GC Root 的引用链，如果强引用不到该对象，该对象才能被回收</p>
</li>
</ol>
<p><img src="@source/面试专题/img/image-20210901111903574.png" alt="img"></p>
<p><strong>软引用（SoftReference）</strong></p>
<ol>
<li>
<p>例如：SoftReference a = new SoftReference(new A());</p>
</li>
<li>
<p>如果仅有软引用该对象时，首次垃圾回收不会回收该对象，如果内存仍不足，再次回收时才会释放对象</p>
</li>
<li>
<p>软引用自身需要配合引用队列来释放</p>
</li>
<li>
<p>典型例子是反射数据</p>
</li>
</ol>
<p><img src="@source/面试专题/img/image-20210901111957328.png" alt="img"></p>
<p><strong>弱引用（WeakReference）</strong></p>
<ol>
<li>
<p>例如：WeakReference a = new WeakReference(new A());</p>
</li>
<li>
<p>如果仅有弱引用引用该对象时，只要发生垃圾回收，就会释放该对象</p>
</li>
<li>
<p>弱引用自身需要配合引用队列来释放</p>
</li>
<li>
<p>典型例子是 ThreadLocalMap 中的 Entry 对象</p>
</li>
</ol>
<p><img src="@source/面试专题/img/image-20210901112107707.png" alt="img"></p>
<p><strong>虚引用（PhantomReference）</strong></p>
<ol>
<li>
<p>例如： PhantomReference a = new PhantomReference(new A(), referenceQueue);</p>
</li>
<li>
<p>必须配合引用队列一起使用，当虚引用所引用的对象被回收时，由 Reference Handler 线程将虚引用对象入队，这样就可以知道哪些对象被回收，从而对它们关联的资源做进一步处理</p>
</li>
<li>
<p>典型例子是 Cleaner 释放 DirectByteBuffer 关联的直接内存</p>
</li>
</ol>
<p><img src="@source/面试专题/img/image-20210901112157901.png" alt="img"></p>
<h2 id="_7-finalize" tabindex="-1"><a class="header-anchor" href="#_7-finalize" aria-hidden="true">#</a> 7. finalize</h2>
<p><strong>finalize</strong></p>
<ul>
<li>它是 Object 中的一个方法，如果子类重写它，垃圾回收时此方法会被调用，可以在其中进行资源释放和清理工作</li>
<li>将资源释放和清理放在 finalize 方法中非常不好，非常影响性能，严重时甚至会引起 OOM，从 Java9 开始就被标注为 @Deprecated，不建议被使用了</li>
</ul>
<p><strong>finalize 原理</strong></p>
<ol>
<li>对 finalize 方法进行处理的核心逻辑位于 java.lang.ref.Finalizer 类中，它包含了名为 unfinalized 的静态变量（双向链表结构），Finalizer 也可被视为另一种引用对象（地位与软、弱、虚相当，只是不对外，无法直接使用）</li>
<li>当重写了 finalize 方法的对象，在构造方法调用之时，JVM 都会将其包装成一个 Finalizer 对象，并加入 unfinalized 链表中</li>
</ol>
<p><img src="@source/面试专题/img/image-20210901121032813.png" alt="image-20210901121032813"></p>
<ol start="3">
<li>Finalizer 类中还有另一个重要的静态变量，即 ReferenceQueue 引用队列，刚开始它是空的。当狗对象可以被当作垃圾回收时，就会把这些狗对象对应的 Finalizer 对象加入此引用队列</li>
<li>但此时 Dog 对象还没法被立刻回收，因为 unfinalized -&gt; Finalizer 这一引用链还在引用它嘛，为的是【先别着急回收啊，等我调完 finalize 方法，再回收】</li>
<li>FinalizerThread 线程会从 ReferenceQueue 中逐一取出每个 Finalizer 对象，把它们从链表断开并真正调用 finallize 方法</li>
</ol>
<p><img src="@source/面试专题/img/image-20210901122228916.png" alt="image-20210901122228916"></p>
<ol start="6">
<li>由于整个 Finalizer 对象已经从 unfinalized 链表中断开，这样没谁能引用到它和狗对象，所以下次 gc 时就被回收了</li>
</ol>
<p><strong>finalize 缺点</strong></p>
<ul>
<li>无法保证资源释放：FinalizerThread 是守护线程，代码很有可能没来得及执行完，线程就结束了</li>
<li>无法判断是否发生错误：执行 finalize 方法时，会吞掉任意异常（Throwable）</li>
<li>内存释放不及时：重写了 finalize 方法的对象在第一次被 gc 时，并不能及时释放它占用的内存，因为要等着 FinalizerThread 调用完 finalize，把它从 unfinalized 队列移除后，第二次 gc 时才能真正释放内存</li>
<li>有的文章提到【Finalizer 线程会和我们的主线程进行竞争，不过由于它的优先级较低，获取到的CPU时间较少，因此它永远也赶不上主线程的步伐】这个显然是错误的，FinalizerThread 的优先级较普通线程更高，原因应该是 finalize 串行执行慢等原因综合导致</li>
</ul>
</div></template>


