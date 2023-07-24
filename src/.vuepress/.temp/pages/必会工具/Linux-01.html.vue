<template><div><h1 id="linux-01" tabindex="-1"><a class="header-anchor" href="#linux-01" aria-hidden="true">#</a> Linux-01</h1>
<ul>
<li>Linux简介</li>
<li>Linux安装</li>
<li>Linux常用命令</li>
</ul>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2>
<h3 id="_1-1-什么是linux" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是linux" aria-hidden="true">#</a> 1.1 什么是Linux</h3>
<p><img src="@source/必会工具/assets/image-20210808232140228.png" alt="image-20210808232140228"></p>
<p>Linux是一套免费使用和自由传播的操作系统。说到操作系统，大家比较熟知的应该就是Windows和MacOS操作系统，所学习的Linux也是一款操作系统。</p>
<h3 id="_1-2-学完linux能干什么" tabindex="-1"><a class="header-anchor" href="#_1-2-学完linux能干什么" aria-hidden="true">#</a> 1.2 学完Linux能干什么</h3>
<p>学习完Linux操作系统之后，我们可以做以下几个方面的事情：</p>
<p><img src="@source/必会工具/assets/image-20210808234042174.png" alt="img"></p>
<p><strong>1). 环境搭建</strong></p>
<p>系统安装 : 一般我们不会直接将Linux系统安装在本机电脑上，而会安装在公司的一台专门的服务器上。</p>
<p>远程连接 : 那么我们要想使用服务器，一般都是通过远程连接工具连接Linux系统进行操作。</p>
<p><strong>2). 常用命令</strong></p>
<p>连接上服务器之后，我们可以通过所学习的相关指令， 来操作Linux服务器，在Linux服务器中可以执行如下操作：</p>
<p>A. 文件、目录的基本操作(查看,删除,创建等)</p>
<p>B. 文件及文件夹的拷贝、移动、重命名</p>
<p>C. 文件的打包、压缩、解压缩操作</p>
<p>D. 文本的编辑</p>
<p><strong>3). 安装软件</strong></p>
<p>基本的常用指令学会操作之后，我们可以在Linux服务器中安装我们开发常用的软件，比如： JDK、Tomcat、MySQL的安装及配置。</p>
<p><strong>4). 项目部署</strong></p>
<p>把基础的软件及环境安装配置好之后，我们就可以将我们开发的项目部署在服务器中进行运行并测试。</p>
<p>对于我们学习Linux操作系统时，Linux命令是基础，也是学习Linux系统的重点内容，虽然Linux的指令有很多，但是我们常用的指令并不多，大家在学习的时候，主要掌握这部分常用的指令就可以了，对于其他的指令，以后我们用到的时候，知道怎么查询即可。</p>
<p><strong>对于Linux的常用指令的学习，最好的学习方法就是：<font color='red' size=7>多敲</font></strong></p>
<h2 id="_2-linux简介" tabindex="-1"><a class="header-anchor" href="#_2-linux简介" aria-hidden="true">#</a> 2. Linux简介</h2>
<h3 id="_2-1-主流操作系统" tabindex="-1"><a class="header-anchor" href="#_2-1-主流操作系统" aria-hidden="true">#</a> 2.1 主流操作系统</h3>
<p>不同领域的主流操作系统，主要分为以下这么几类： 桌面操作系统、服务器操作系统、移动设备操作系统、嵌入式操作系统。接下来，这几个领域中，代表性的操作系统是那些?</p>
<p>1). 桌面操作系统</p>
<table>
<thead>
<tr>
<th>操作系统</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Windows</td>
<td>用户数量最多</td>
</tr>
<tr>
<td>MacOS</td>
<td>操作体验好，办公人士首选</td>
</tr>
<tr>
<td>Linux</td>
<td>用户数量少(桌面操作系统,Linux使用较少)</td>
</tr>
</tbody>
</table>
<p>2). 服务器操作系统</p>
<table>
<thead>
<tr>
<th>操作系统</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Unix</td>
<td>安全、稳定、付费</td>
</tr>
<tr>
<td>Linux</td>
<td>安全、稳定、免费、占有率高</td>
</tr>
<tr>
<td>Windows Server</td>
<td>付费、占有率低</td>
</tr>
</tbody>
</table>
<p>3). 移动设备操作系统</p>
<table>
<thead>
<tr>
<th>操作系统</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android</td>
<td>基于 Linux 、开源，主要用于智能手机、平板电脑和智能电视</td>
</tr>
<tr>
<td>IOS</td>
<td>苹果公司开发、不开源，用于苹果公司的产品，例如：iPhone、 iPad</td>
</tr>
</tbody>
</table>
<p>4). 嵌入式操作系统</p>
<table>
<thead>
<tr>
<th>操作系统</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Linux</td>
<td>机顶盒、路由器、交换机</td>
</tr>
</tbody>
</table>
<h3 id="_2-2-linux发展历史" tabindex="-1"><a class="header-anchor" href="#_2-2-linux发展历史" aria-hidden="true">#</a> 2.2 Linux发展历史</h3>
<p><img src="@source/必会工具/assets/image-20210809000920156.png" alt="image-20210809000920156"></p>
<p>时间：1991年</p>
<p>地点：芬兰赫尔辛基大学</p>
<p>人物：Linus Torvalds（21岁）</p>
<p>语言：C语言、汇编语言</p>
<p>logo：企鹅</p>
<p>特点：免费、开源(源代码开放)、多用户(同时允许多个用户操作同一个Linux系统)、多任务(同时允许多个任务执行)</p>
<h3 id="_2-3-linux系统版本" tabindex="-1"><a class="header-anchor" href="#_2-3-linux系统版本" aria-hidden="true">#</a> 2.3 Linux系统版本</h3>
<p>Linux系统的版本分为两种，分别是： 内核版 和 发行版。</p>
<p><strong>1). 内核版</strong></p>
<ul>
<li>
<p>由Linus Torvalds及其团队开发、维护</p>
</li>
<li>
<p>免费、开源</p>
</li>
<li>
<p>负责控制硬件</p>
</li>
</ul>
<p><strong>2). 发行版</strong></p>
<ul>
<li>
<p>基于Linux内核版进行扩展</p>
</li>
<li>
<p>由各个Linux厂商开发、维护</p>
</li>
<li>
<p>有收费版本和免费版本</p>
</li>
</ul>
<p>我们使用Linux操作系统，实际上选择的是Linux的发行版本。在linux系统中，有各种各样的发行版本，具体如下：</p>
<table>
<thead>
<tr>
<th>发行版本</th>
<th>Logo</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ubuntu</td>
<td><img src="@source/必会工具/assets/image-20210809001838861.png" alt="img"></td>
<td>以桌面应用为主</td>
</tr>
<tr>
<td>RedHat</td>
<td><img src="@source/必会工具/assets/image-20210809001731378.png" alt="img"></td>
<td>应用最广泛、收费</td>
</tr>
<tr>
<td>CentOS</td>
<td><img src="@source/必会工具/assets/image-20210809001741238.png" alt="img"></td>
<td>RedHat的社区版、免费</td>
</tr>
<tr>
<td>openSUSE</td>
<td><img src="@source/必会工具/assets/image-20210809001750999.png" alt="img"></td>
<td>对个人完全免费、图形界面华丽</td>
</tr>
<tr>
<td>Fedora</td>
<td><img src="@source/必会工具/assets/image-20210809001800676.png" alt="img"></td>
<td>功能完备、快速更新、免费</td>
</tr>
<tr>
<td>红旗Linux</td>
<td><img src="@source/必会工具/assets/image-20210809001814942.png" alt="img"></td>
<td>北京中科红旗软件技术有限公司开发</td>
</tr>
</tbody>
</table>
<p>除了上述罗列出来的发行版，还有很多Linux发行版，这里，我们就不再一一列举了。</p>
<h2 id="_3-linux安装" tabindex="-1"><a class="header-anchor" href="#_3-linux安装" aria-hidden="true">#</a> 3. Linux安装</h2>
<h3 id="_3-1-安装方式介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-安装方式介绍" aria-hidden="true">#</a> 3.1 安装方式介绍</h3>
<p>Linux系统的安装方式，主要包含以下两种：</p>
<p><img src="@source/必会工具/assets/image-20210809184915617.png" alt="image-20210809184915617"></p>
<table>
<thead>
<tr>
<th>方式</th>
<th>概述</th>
<th>场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>物理机安装</td>
<td>直接将操作系统安装到服务器硬件上</td>
<td>企业开发中，我们使用的服务器基本都是采用这种方式</td>
</tr>
<tr>
<td>虚拟机安装</td>
<td>通过虚拟机软件安装</td>
<td>我们在学习阶段，没有自己服务器，而我们又需要学Linux，就可以安装在虚拟机上</td>
</tr>
</tbody>
</table>
<p><strong>虚拟机</strong>（Virtual Machine）指通过<strong>软件</strong>模拟的具有完整硬件系统功能、运行在完全隔离环境中的完整计算机系统。常用虚拟机软件：</p>
<ul>
<li>
<p>VMWare</p>
</li>
<li>
<p>VirtualBox</p>
</li>
<li>
<p>VMLite WorkStation</p>
</li>
<li>
<p>Qemu</p>
</li>
<li>
<p>HopeddotVOS</p>
</li>
</ul>
<p>那么我们就可以在中将Linux操作系统安装在虚拟机中，我们选择的虚拟机软件是VMware。</p>
<h3 id="_3-2-安装vmware" tabindex="-1"><a class="header-anchor" href="#_3-2-安装vmware" aria-hidden="true">#</a> 3.2 安装VMware</h3>
<p><img src="@source/必会工具/assets/image-20210809223354144.png" alt="image-20210809223354144"></p>
<p>在我们的资料中提供了VMware的安装程序。直接双击运行VMware安装程序，根据提示完成安装即可。</p>
<p><img src="@source/必会工具/assets/image-20210809223932893.png" alt="image-20210809223932893"></p>
<p><img src="@source/必会工具/assets/image-20210809223953820.png" alt="image-20210809223953820"></p>
<p>以上就是VMware在安装时的每一步操作，基本上就是点击 &quot;下一步&quot; 一直进行安装。</p>
<h3 id="_3-3-安装linux" tabindex="-1"><a class="header-anchor" href="#_3-3-安装linux" aria-hidden="true">#</a> 3.3 安装Linux</h3>
<p>VMware虚拟机安装完毕之后，我们就可以打开VMware，并在上面来安装Linux操作系统。具体步骤如下：</p>
<p><strong>1). 选择创建新的虚拟机</strong></p>
<p><img src="@source/必会工具/assets/image-20210809224601436.png" alt="img"></p>
<p><strong>2). 选择&quot;典型&quot;配置</strong></p>
<p><img src="@source/必会工具/assets/image-20210809224640245.png" alt="img"></p>
<p><strong>3). 选择&quot;稍后安装操作系统(S)&quot;</strong></p>
<p><img src="@source/必会工具/assets/image-20210809224740271.png" alt="image-20210809224740271"></p>
<p><strong>4). 选择&quot;Linux&quot;操作系统,&quot;CentOS7 64位&quot;版本</strong></p>
<p><img src="@source/必会工具/assets/image-20210809224851755.png" alt="image-20210809224851755"></p>
<p><strong>5). 设置虚拟机的名称及系统文件存放路径</strong></p>
<p><img src="@source/必会工具/assets/image-20210809225106268.png" alt="image-20210809225106268"></p>
<p><strong>6). 设置磁盘容量</strong></p>
<p><img src="@source/必会工具/assets/image-20210809225243488.png" alt="image-20210809225243488"></p>
<p><strong>7). 自定义硬件信息</strong></p>
<p><img src="@source/必会工具/assets/image-20210809225706412.png" alt="image-20210809225706412"></p>
<p><strong>8). 启动上述创建的新虚拟机</strong></p>
<p><img src="@source/必会工具/assets/image-20210809230230390.png" alt="img"></p>
<p><strong>9). 选择&quot;Install CentOS7&quot;</strong></p>
<p><img src="@source/必会工具/assets/image-20210809230720673.png" alt="img"></p>
<blockquote>
<p>进入到Linux系统里面, 我们发现光标无法移动到windows操作系统中了, 这个时候, 我们可以通过快捷键 &quot;Ctrl+Alt&quot; 切换光标到windows系统中。</p>
</blockquote>
<p><strong>10). 选择语言为 &quot;简体中文&quot;</strong></p>
<p><img src="@source/必会工具/assets/image-20210809231002444.png" alt="img"></p>
<p><strong>11). 选择&quot;自动配置分区&quot;</strong></p>
<p><img src="@source/必会工具/assets/image-20210809231704202.png" alt="image-20210809231704202"></p>
<p>12). 选择&quot;最小安装&quot;</p>
<p><img src="@source/必会工具/assets/image-20210809232041661.png" alt="image-20210809232041661"></p>
<p><strong>13). 设置&quot;root&quot;用户密码</strong></p>
<p><img src="@source/必会工具/assets/image-20210809232438579.png" alt="image-20210809232438579"></p>
<p>安装完毕后，点击窗口中的蓝色的 &quot;重启&quot; 按钮，重启Linux系统。</p>
<p><strong>14). 登录系统</strong></p>
<p><img src="@source/必会工具/assets/image-20210809232913715.png" alt="image-20210809232913715"></p>
<blockquote>
<font color='red'>注意 : 在Linux系统中，在命令行中输入密码信息，为了保证安全性，密码是不显示的(看似没有输入，实际已经输入了)；</font></blockquote>
<h3 id="_3-4-网卡设置" tabindex="-1"><a class="header-anchor" href="#_3-4-网卡设置" aria-hidden="true">#</a> 3.4 网卡设置</h3>
<p>服务器重启完成之后，我们可以通过linux的指令 <code v-pre>ip addr</code> 来查询Linux系统的IP地址，具体信息如下:</p>
<p><img src="@source/必会工具/assets/image-20210809233341574.png" alt="img"></p>
<p>从图中我们可以看到，并没有获取到linux系统的IP地址，这是为什么呢？这是由于启动服务器时未加载网卡，导致IP地址初始化失败而造成的。那么接下来我们就需要来修改网络初始化配置，设定网卡在系统启动时初始化。</p>
<p><strong>具体操作步骤如下：</strong></p>
<p>1). 修改网卡的配置项</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>cd <span class="token operator">/</span>				进入根目录
cd etc				进入etc目录
cd sysconfig		进入sysconfig目录
cd network<span class="token operator">-</span>scripts	进入network<span class="token operator">-</span>scripts
vi ifcfg<span class="token operator">-</span>ens33		编辑ifcfg<span class="token operator">-</span>ens33文件


进入文件后执行如下操作<span class="token operator">:</span>
①<span class="token punctuation">.</span> 按 i 键 		 进入编辑状态
②<span class="token punctuation">.</span> 按↑↓键来移动光标<span class="token punctuation">,</span> 删除no<span class="token punctuation">,</span>输入yes
③<span class="token punctuation">.</span> 按 <span class="token constant">ESC</span> 键
④<span class="token punctuation">.</span> 输入 <span class="token operator">:</span>wq
⑤<span class="token punctuation">.</span> 按 <span class="token constant">ENTER</span>	保存退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/必会工具/assets/image-20210809234131816.png" alt="image-20210809234131816"></p>
<blockquote>
<font color='red'>备注: 在上述的操作中用到了Linux中的相关指令, 目前大家不用深究, 后面会详细讲解, 目前大家只需要把这个文件的配置项ONBOOT的值有no改为yes即可。</font></blockquote>
<p>2). 重新启动虚拟机</p>
<p><img src="@source/必会工具/assets/image-20210809234617798.png" alt="img"></p>
<p>重启之后, 再次输入root的用户名密码，登录到Linux系统之后，可以通过指令 <code v-pre>ip addr</code> 来查看IP地址。</p>
<p><img src="@source/必会工具/assets/image-20210809235056773.png" alt="img"></p>
<h3 id="_3-5-安装ssh连接工具" tabindex="-1"><a class="header-anchor" href="#_3-5-安装ssh连接工具" aria-hidden="true">#</a> 3.5 安装SSH连接工具</h3>
<h4 id="_3-5-1-ssh连接工具介绍" tabindex="-1"><a class="header-anchor" href="#_3-5-1-ssh连接工具介绍" aria-hidden="true">#</a> 3.5.1 SSH连接工具介绍</h4>
<p>Linux已经安装并且配置好了，接下来我们要来学习Linux的基本操作指令。而在学习之前，我们还需要做一件事情，由于我们企业开发时，Linux服务器一般都是在远程的机房部署的，我们要操作服务器，不会每次都跑到远程的机房里面操作，而是会直接通过SSH连接工具进行连接操作。</p>
<p><img src="@source/必会工具/assets/image-20210810000224690.png" alt="image-20210810000224690"></p>
<p>SSH（Secure Shell），建立在应用层基础上的安全协议。常用的SSH连接工具:</p>
<table>
<thead>
<tr>
<th>SSH工具</th>
<th>Logo</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>putty</td>
<td><img src="@source/必会工具/assets/image-20210809235613688.png" alt="img"></td>
<td>免费, 界面简单, 功能单一</td>
</tr>
<tr>
<td>secureCRT</td>
<td><img src="@source/必会工具/assets/image-20210809235723109.png" alt="img"></td>
<td>收费, 功能强大</td>
</tr>
<tr>
<td>xshell</td>
<td><img src="@source/必会工具/assets/image-20210809235802640.png" alt="img"></td>
<td>收费版/免费版</td>
</tr>
<tr>
<td>finalshell</td>
<td><img src="@source/必会工具/assets/image-20210809235841384.png" alt="img"></td>
<td>免费, 功能强大, 界面效果好 (中采用)</td>
</tr>
</tbody>
</table>
<h4 id="_3-5-2-finalshell安装" tabindex="-1"><a class="header-anchor" href="#_3-5-2-finalshell安装" aria-hidden="true">#</a> 3.5.2 FinalShell安装</h4>
<p>在资料中，提供了finalShell的安装包</p>
<p><img src="@source/必会工具/assets/image-20210810000309123.png" alt="image-20210810000309123"></p>
<p>双击.exe文件，然后进行正常的安装即可。</p>
<p><img src="@source/必会工具/assets/image-20210810000318212.png" alt="image-20210810000318212"></p>
<h4 id="_3-5-3-连接linux" tabindex="-1"><a class="header-anchor" href="#_3-5-3-连接linux" aria-hidden="true">#</a> 3.5.3 连接Linux</h4>
<p><strong>1). 打开finalShell</strong></p>
<p><img src="@source/必会工具/assets/image-20210810173004153.png" alt="img"></p>
<p><strong>2). 建立连接</strong></p>
<p><img src="@source/必会工具/assets/image-20210810173138650.png" alt="img"></p>
<p><img src="@source/必会工具/assets/image-20210810173900140.png" alt="image-20210810173900140"></p>
<h3 id="_3-6-linux目录结构" tabindex="-1"><a class="header-anchor" href="#_3-6-linux目录结构" aria-hidden="true">#</a> 3.6 Linux目录结构</h3>
<p>登录到Linux系统之后，我们需要先来熟悉一下Linux的目录结构。在Linux系统中，也是存在目录的概念的，但是Linux的目录结构和Windows的目录结构是存在比较多的差异的 在Windows目录下，是一个一个的盘符(C盘、D盘、E盘)，目录是归属于某一个盘符的。Linux系统中的目录有以下特点：</p>
<p><strong>A. / 是所有目录的顶点</strong></p>
<p><strong>B. 目录结构像一颗倒挂的树</strong></p>
<p><strong>Linux 和 Windows的目录结构对比:</strong></p>
<p><img src="@source/必会工具/assets/image-20210810174831655.png" alt="img"></p>
<p>Linux的目录结构，如下：</p>
<p><img src="@source/必会工具/assets/image-20210810174954476.png" alt="image-20210810174954476"></p>
<p>根目录/ 下各个目录的作用及含义说明:</p>
<table>
<thead>
<tr>
<th>编号</th>
<th>目录</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>/bin</td>
<td>存放二进制可执行文件</td>
</tr>
<tr>
<td>2</td>
<td>/boot</td>
<td>存放系统引导时使用的各种文件</td>
</tr>
<tr>
<td>3</td>
<td>/dev</td>
<td>存放设备文件</td>
</tr>
<tr>
<td>4</td>
<td>/etc</td>
<td>存放系统配置文件</td>
</tr>
<tr>
<td>5</td>
<td>/home</td>
<td>存放系统用户的文件</td>
</tr>
<tr>
<td>6</td>
<td>/lib</td>
<td>存放程序运行所需的共享库和内核模块</td>
</tr>
<tr>
<td>7</td>
<td>/opt</td>
<td>额外安装的可选应用程序包所放置的位置</td>
</tr>
<tr>
<td>8</td>
<td>/root</td>
<td>超级用户目录</td>
</tr>
<tr>
<td>9</td>
<td>/sbin</td>
<td>存放二进制可执行文件，只有root用户才能访问</td>
</tr>
<tr>
<td>10</td>
<td>/tmp</td>
<td>存放临时文件</td>
</tr>
<tr>
<td>11</td>
<td>/usr</td>
<td>存放系统应用程序</td>
</tr>
<tr>
<td>12</td>
<td>/var</td>
<td>存放运行时需要改变数据的文件，例如日志文件</td>
</tr>
</tbody>
</table>
<h2 id="_4-linux常用命令" tabindex="-1"><a class="header-anchor" href="#_4-linux常用命令" aria-hidden="true">#</a> 4. Linux常用命令</h2>
<h3 id="_4-1-linux命令初体验" tabindex="-1"><a class="header-anchor" href="#_4-1-linux命令初体验" aria-hidden="true">#</a> 4.1 Linux命令初体验</h3>
<h4 id="_4-1-1-常用命令演示" tabindex="-1"><a class="header-anchor" href="#_4-1-1-常用命令演示" aria-hidden="true">#</a> 4.1.1 常用命令演示</h4>
<p>在这一部分中，我们主要介绍几个常用的命令，让大家快速感受以下Linux指令的操作方式。主要包含以下几个指令：</p>
<table>
<thead>
<tr>
<th>序号</th>
<th>命令</th>
<th>对应英文</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>ls [目录名]</td>
<td>list</td>
<td>查看当前目录下的内容</td>
</tr>
<tr>
<td>2</td>
<td>pwd</td>
<td>print work directory</td>
<td>查看当前所在目录</td>
</tr>
<tr>
<td>3</td>
<td>cd [目录名]</td>
<td>change directory</td>
<td>切换目录</td>
</tr>
<tr>
<td>4</td>
<td>touch [文件名]</td>
<td>touch</td>
<td>如果文件不存在,创建文件</td>
</tr>
<tr>
<td>5</td>
<td>mkdir [目录名]</td>
<td>make directory</td>
<td>创建目录</td>
</tr>
<tr>
<td>6</td>
<td>rm [文件名]</td>
<td>remove</td>
<td>删除指定文件</td>
</tr>
</tbody>
</table>
<p>接下来，我们快速的来演示一下这些常用的指令。</p>
<p><strong>1). ls</strong></p>
<p><img src="@source/必会工具/assets/image-20210810182042076.png" alt="image-20210810182042076"></p>
<blockquote>
<p>指令解读:</p>
<p>​	ls 	查看当前目录下的内容(文件及目录)</p>
<p>​	ls /   查看指定目录(/)下的内容</p>
</blockquote>
<p><strong>2). pwd</strong></p>
<p><img src="@source/必会工具/assets/image-20210810182335470.png" alt="image-20210810182335470"></p>
<blockquote>
<p>指令解读:</p>
<p>​	pwd	查看当前所在目录</p>
</blockquote>
<p><strong>3). cd</strong></p>
<p><img src="@source/必会工具/assets/image-20210810182607821.png" alt="image-20210810182607821"></p>
<blockquote>
<p>指令解读:</p>
<p>​	cd  /		切换到根目录</p>
<p>​	cd  /root	切换到/root目录</p>
</blockquote>
<p><strong>4). touch</strong></p>
<p><img src="@source/必会工具/assets/image-20210810182917750.png" alt="image-20210810182917750"></p>
<blockquote>
<p>指令解读:</p>
<p>​	touch  1.txt    创建文件1.txt</p>
<p>​	touch  2.txt 3.txt 4.txt   一次性创建文件2.txt,3.txt,3.txt</p>
</blockquote>
<p><strong>5). mkdir</strong></p>
<p><img src="@source/必会工具/assets/image-20210810183154023.png" alt="image-20210810183154023"></p>
<blockquote>
<p>指令解读:</p>
<p>​	mkdir 01 	创建文件夹01</p>
</blockquote>
<p><strong>6). rm</strong></p>
<p><img src="@source/必会工具/assets/image-20210810183522849.png" alt="image-20210810183522849"></p>
<blockquote>
<p>指令解读:</p>
<p>​	rm  4.txt	删除文件 (删除文件时,需要确认,输入y, 代表确定)</p>
</blockquote>
<p>==注意:==</p>
<p>​	<img src="@source/必会工具/assets/image-20210810184600425.png" alt="image-20210810184600425"></p>
<p>​	==在执行Linux命令时，提示信息如果显示为乱码，如上图所示。这是由于编码问题导致，只需要修改Linux的编码即可，命令如下：==</p>
<p>​	echo 'LANG=&quot;en_US.UTF-8&quot;' &gt;&gt; /etc/profile</p>
<p>​	source /etc/profile</p>
<h4 id="_4-1-2-linux命令使用技巧" tabindex="-1"><a class="header-anchor" href="#_4-1-2-linux命令使用技巧" aria-hidden="true">#</a> 4.1.2 Linux命令使用技巧</h4>
<p>在我们使用Linux系统命令时，可以使用以下几个技巧：</p>
<p>1). Tab键自动补全</p>
<p>2). 连续两次Tab键，给出操作提示</p>
<p>3). 使用上下箭头快速调出曾经使用过的命令</p>
<p>4). 使用clear命令或者Ctrl+l快捷键实现清屏</p>
<p><strong>操作示例:</strong></p>
<p>A. 执行指令的时候，对于操作的文件/目录，按一下Tab会自动补全:</p>
<p><img src="@source/必会工具/assets/image-20210810185641027.png" alt="image-20210810185641027"></p>
<p>B. 如果上述以 &quot;1.&quot; 开头的文件有多个，可以按两下Tab键，给出操作提示:</p>
<p><img src="@source/必会工具/assets/image-20210810190101671.png" alt="image-20210810190101671"></p>
<p>C. 使用clear命令或者Ctrl+l快捷键实现清屏:</p>
<p><img src="@source/必会工具/assets/image-20210810190458929.png" alt="image-20210810190458929"></p>
<p>清屏之后，界面就变得干净了:</p>
<p><img src="@source/必会工具/assets/image-20210810190546209.png" alt="image-20210810190546209"></p>
<h4 id="_4-1-3-linux命令格式" tabindex="-1"><a class="header-anchor" href="#_4-1-3-linux命令格式" aria-hidden="true">#</a> 4.1.3 Linux命令格式</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>command [-options] [parameter]

说明:
	command: 	 命令名
	[-options]:  选项，可用来对命令进行控制，也可以省略
	[parameter]: 传给命令的参数，可以是零个、一个或者多个

注意:
	[] 	 代表可选
	命令名、选项、参数之间有空格进行分隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p>
<p><img src="@source/必会工具/assets/image-20210810192202455.png" alt="image-20210810192202455"></p>
<h3 id="_4-2-文件目录操作命令" tabindex="-1"><a class="header-anchor" href="#_4-2-文件目录操作命令" aria-hidden="true">#</a> 4.2 文件目录操作命令</h3>
<h4 id="_4-2-1-ls" tabindex="-1"><a class="header-anchor" href="#_4-2-1-ls" aria-hidden="true">#</a> 4.2.1 ls</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 显示指定目录下的内容
语法: ls [-al] [dir]
说明:
	-a 显示所有文件及目录 (. 开头的隐藏文件也会列出)
	-l 除文件名称外，同时将文件型态(d表示目录，-表示文件)、权限、拥有者、文件大小等信息详细列出

注意:
	由于我们使用ls命令时经常需要加入-l选项，所以Linux为ls -l命令提供了一种简写方式，即ll

常见用法:
	ls -al 	查看当前目录的所有文件及目录详细信息
	ls -al /etc   查看/etc目录下所有文件及目录详细信息
	ll  	查看当前目录文件及目录的详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p>
<p><img src="@source/必会工具/assets/image-20210810193149925.png" alt="image-20210810193149925"></p>
<p><img src="@source/必会工具/assets/image-20210810193302047.png" alt="image-20210810193302047"></p>
<p><img src="@source/必会工具/assets/image-20210810193605487.png" alt="image-20210810193605487"></p>
<p><img src="@source/必会工具/assets/image-20210810194129919.png" alt="image-20210810194129919"></p>
<h4 id="_4-2-2-cd" tabindex="-1"><a class="header-anchor" href="#_4-2-2-cd" aria-hidden="true">#</a> 4.2.2 cd</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 用于切换当前工作目录，即进入指定目录
语法: cd [dirName]

特殊说明:
	~	表示用户的home目录
	. 	表示目前所在的目录
	.. 	表示目前目录位置的上级目录

举例:
	cd 	..		切换到当前目录的上级目录
	cd 	~		切换到用户的home目录
	cd 	/usr/local	切换到/usr/local目录
	cd -  切换到上一个历史记录的目录中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>备注:</p>
<p>​	用户的home目录</p>
<p>​	root用户	/root</p>
<p>​	其他用户	/home/xxx</p>
</blockquote>
<p>操作示例:</p>
<p><img src="@source/必会工具/assets/image-20210810230949775.png" alt="image-20210810230949775"></p>
<p><img src="@source/必会工具/assets/image-20210810231024129.png" alt="image-20210810231024129"></p>
<p>cd .. 切换到当前目录位置的上级目录; 可以通过 cd ../.. 来切换到上级目录的上级目录。</p>
<h4 id="_4-2-3-cat" tabindex="-1"><a class="header-anchor" href="#_4-2-3-cat" aria-hidden="true">#</a> 4.2.3 cat</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 用于显示文件内容
语法: cat [-n] fileName

说明:
	-n: 由1开始对所有输出的行数编号

举例:
	cat /etc/profile		查看/etc目录下的profile文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作演示:</strong></p>
<p><img src="@source/必会工具/assets/image-20210810231651338.png" alt="image-20210810231651338"></p>
<p>cat 指令会一次性查看文件的所有内容，如果文件内容比较多，这个时候查看起来就不是很方便了，这个时候我们可以通过一个新的指令more。</p>
<h4 id="_4-2-4-more" tabindex="-1"><a class="header-anchor" href="#_4-2-4-more" aria-hidden="true">#</a> 4.2.4 more</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 以分页的形式显示文件内容
语法: more fileName

操作说明:
    回车键 	向下滚动一行
    空格键 	向下滚动一屏
    b 		返回上一屏
    q或者Ctrl+C	退出more

举例：
	more /etc/profile		以分页方式显示/etc目录下的profile文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例：</strong></p>
<p><img src="@source/必会工具/assets/image-20210810232212430.png" alt="img"></p>
<p>当我们在查看一些比较大的文件时，我们可能需要经常查询文件尾部的数据信息，那这个时候如果文件很大，我们要一直向下翻页，直到最后一页，去看最新添加的数据，这种方式就比较繁琐了，此时，我们可以借助于tail指令。</p>
<h4 id="_4-2-5-tail" tabindex="-1"><a class="header-anchor" href="#_4-2-5-tail" aria-hidden="true">#</a> 4.2.5 tail</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 查看文件末尾的内容
语法: tail [-f] fileName

说明:
	-f : 动态读取文件末尾内容并显示，通常用于日志文件的内容输出

举例:
tail /etc/profile		显示/etc目录下的profile文件末尾10行的内容
tail -20 /etc/profile	显示/etc目录下的profile文件末尾20行的内容
tail -f /beisheng/my.log	动态读取/beisheng目录下的my.log文件末尾内容并显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例：</strong></p>
<p>A. 默认查询文件尾部10行记录</p>
<p><img src="@source/必会工具/assets/image-20210810232758510.png" alt="image-20210810232758510"></p>
<p>B. 可以通过指定参数设置查询尾部指定行数的数据</p>
<p><img src="@source/必会工具/assets/image-20210810232947018.png" alt="image-20210810232947018"></p>
<p>C. 动态读取文件尾部的数据</p>
<p><img src="@source/必会工具/assets/image-20210810233514284.png" alt="image-20210810233514284"></p>
<p>在窗口1中执行指令 <code v-pre>tail -f 1.txt</code> 动态查看文件尾部的数据。然后在顶部的标签中右键选择 &quot;复制标签&quot;，打开新的窗口2 , 此时再新打开的窗口2中执行指令 <code v-pre>echo 1 &gt;&gt; 1.txt</code> , 往1.txt文件尾部追加内容，然后我们就可以在窗口1中看到最新的文件尾部的数据。</p>
<p>如果我们不想查看文件尾部的数据了，可以直接使用快捷键 Ctrl+C ， 结束当前进程。</p>
<h4 id="_4-2-6-mkdir" tabindex="-1"><a class="header-anchor" href="#_4-2-6-mkdir" aria-hidden="true">#</a> 4.2.6 mkdir</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 创建目录
语法: mkdir [-p] dirName

说明:
	-p: 确保目录名称存在，不存在的就创建一个。通过此选项，可以实现多层目录同时创建

举例:
    mkdir beisheng  在当前目录下，建立一个名为beisheng的子目录
    mkdir -p beisheng/test   在工作目录下的beisheng目录中建立一个名为test的子目录，若beisheng目录不存在，则建立一个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作演示:</strong></p>
<p><img src="@source/必会工具/assets/image-20210810234541073.png" alt="image-20210810234541073"></p>
<h4 id="_4-2-7-rmdir" tabindex="-1"><a class="header-anchor" href="#_4-2-7-rmdir" aria-hidden="true">#</a> 4.2.7 rmdir</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 删除空目录
语法: rmdir [-p] dirName

说明:
	-p: 当子目录被删除后使父目录为空目录的话，则一并删除

举例:
    rmdir beisheng   删除名为beisheng的空目录
    rmdir -p beisheng/test   删除beisheng目录中名为test的子目录，若test目录删除后beisheng目录变为空目录，则也被删除
    rmdir beisheng*   删除名称以beisheng开始的空目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作演示:</strong></p>
<p>A. 删除空目录</p>
<p><img src="@source/必会工具/assets/image-20210810235044921.png" alt="image-20210810235044921"></p>
<p>B. 删除非空目录</p>
<p><img src="@source/必会工具/assets/image-20210810235221722.png" alt="image-20210810235221722"></p>
<p>C. 使用*通配符删除目录</p>
<p><img src="@source/必会工具/assets/image-20210810235305140.png" alt="image-20210810235305140"></p>
<blockquote>
<p>*: 是一个通配符，代表任意字符；</p>
<p>rmdir  beisheng* : 删除以beisheng开头的目录</p>
<p>rmdir  *beisheng : 删除以beisheng结尾的目录</p>
</blockquote>
<h4 id="_4-2-8-rm" tabindex="-1"><a class="header-anchor" href="#_4-2-8-rm" aria-hidden="true">#</a> 4.2.8 rm</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 删除文件或者目录
语法: rm [-rf] name

说明:
    -r: 将目录及目录中所有文件（目录）逐一删除，即递归删除
    -f: 无需确认，直接删除

举例:
    rm -r beisheng/     删除名为beisheng的目录和目录中所有文件，删除前需确认
    rm -rf beisheng/    无需确认，直接删除名为beisheng的目录和目录中所有文件
    rm -f hello.txt   无需确认，直接删除hello.txt文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p>
<p><img src="@source/必会工具/assets/image-20210810235809473.png" alt="image-20210810235809473"></p>
<p>==注意: 对于 rm -rf xxx 这样的指令，在执行的时候，一定要慎重，确认无误后再进行删除，避免误删。==</p>
<h3 id="_4-3-拷贝移动命令" tabindex="-1"><a class="header-anchor" href="#_4-3-拷贝移动命令" aria-hidden="true">#</a> 4.3 拷贝移动命令</h3>
<h4 id="_4-3-1-cp" tabindex="-1"><a class="header-anchor" href="#_4-3-1-cp" aria-hidden="true">#</a> 4.3.1 cp</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 用于复制文件或目录
语法: cp [-r] source dest

说明:
	-r: 如果复制的是目录需要使用此选项，此时将复制该目录下所有的子目录和文件

举例:
    cp hello.txt beisheng/            将hello.txt复制到beisheng目录中
    cp hello.txt ./hi.txt           将hello.txt复制到当前目录，并改名为hi.txt
    cp -r beisheng/ ./beisheng/    	将beisheng目录和目录下所有文件复制到beisheng目录下
    cp -r beisheng/* ./beisheng/ 	 	将beisheng目录下所有文件复制到beisheng目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p>
<p><img src="@source/必会工具/assets/image-20210811180508369.png" alt="image-20210811180508369"></p>
<p><img src="@source/必会工具/assets/image-20210811180638556.png" alt="image-20210811180638556"></p>
<p><img src="@source/必会工具/assets/image-20210811180914417.png" alt="image-20210811180914417"></p>
<p>如果拷贝的内容是目录，需要加上参数 -r</p>
<h4 id="_4-3-2-mv" tabindex="-1"><a class="header-anchor" href="#_4-3-2-mv" aria-hidden="true">#</a> 4.3.2 mv</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 为文件或目录改名、或将文件或目录移动到其它位置
语法: mv source dest

举例:
    mv hello.txt hi.txt                 将hello.txt改名为hi.txt
    mv hi.txt beisheng/                  将文件hi.txt移动到beisheng目录中
    mv hi.txt beisheng/hello.txt   		将hi.txt移动到beisheng目录中，并改名为hello.txt
    mv beisheng/ beisheng/                 如果beisheng目录不存在，将beisheng目录改名为beisheng
    mv beisheng/ beisheng/                 如果beisheng目录存在，将beisheng目录移动到beisheng目录中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p>
<p>mv 命令既能够改名，又可以移动，具体是改名还是移动,系统会根据我们输入的参数进行判定(如果第二个参数dest是一个已存在的目录,将执行移动操作,其他情况都是改名)</p>
<p><img src="@source/必会工具/assets/image-20210811184240003.png" alt="image-20210811184240003"></p>
<h3 id="_4-4-打包压缩命令" tabindex="-1"><a class="header-anchor" href="#_4-4-打包压缩命令" aria-hidden="true">#</a> 4.4 打包压缩命令</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 对文件进行打包、解包、压缩、解压
语法: tar  [-zcxvf]  fileName  [files]
    包文件后缀为.tar表示只是完成了打包，并没有压缩
    包文件后缀为.tar.gz表示打包的同时还进行了压缩

说明:
    -z: z代表的是gzip，通过gzip命令处理文件，gzip可以对文件压缩或者解压
    -c: c代表的是create，即创建新的包文件
    -x: x代表的是extract，实现从包文件中还原文件
    -v: v代表的是verbose，显示命令的执行过程
    -f: f代表的是file，用于指定包文件的名称

举例：
    打包
        tar -cvf hello.tar ./*		  		将当前目录下所有文件打包，打包后的文件名为hello.tar
        tar -zcvf hello.tar.gz ./*		  	将当前目录下所有文件打包并压缩，打包后的文件名为hello.tar.gz

    解包
        tar -xvf hello.tar		  			将hello.tar文件进行解包，并将解包后的文件放在当前目录
        tar -zxvf hello.tar.gz		  		将hello.tar.gz文件进行解压，并将解压后的文件放在当前目录
        tar -zxvf hello.tar.gz -C /usr/local     将hello.tar.gz文件进行解压，并将解压后的文件放在/usr/local目录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p>
<p>A. 打包</p>
<p><img src="@source/必会工具/assets/image-20210811185728541.png" alt="image-20210811185728541"></p>
<p>B. 打包并压缩</p>
<p><img src="@source/必会工具/assets/image-20210811190035256.png" alt="image-20210811190035256"></p>
<p>C. 解包</p>
<p><img src="@source/必会工具/assets/image-20210811190307630.png" alt="image-20210811190307630"></p>
<p>D. 解压</p>
<p><img src="@source/必会工具/assets/image-20210811190450820.png" alt="image-20210811190450820"></p>
<p>解压到指定目录,需要加上参数 -C</p>
<p><img src="@source/必会工具/assets/image-20210811190626414.png" alt="image-20210811190626414"></p>
<h3 id="_4-5-文本编辑命令" tabindex="-1"><a class="header-anchor" href="#_4-5-文本编辑命令" aria-hidden="true">#</a> 4.5 文本编辑命令</h3>
<p>文本编辑的命令，主要包含两个: vi 和 vim，两个命令的用法类似，我们中主要讲解vim的使用。</p>
<h4 id="_4-5-1-vi-vim介绍" tabindex="-1"><a class="header-anchor" href="#_4-5-1-vi-vim介绍" aria-hidden="true">#</a> 4.5.1 vi&amp;vim介绍</h4>
<p>作用: vi命令是Linux系统提供的一个文本编辑工具，可以对文件内容进行编辑，类似于Windows中的记事本</p>
<p>语法: vi fileName</p>
<p>说明:
1). vim是从vi发展来的一个功能更加强大的文本编辑工具，编辑文件时可以对文本内容进行着色，方便我们对文件进行编辑处理，所以实际工作中vim更加常用。
2). 要使用vim命令，需要我们自己完成安装。可以使用下面的命令来完成安装：<code v-pre>yum install vim</code></p>
<h4 id="_4-5-2-vim安装" tabindex="-1"><a class="header-anchor" href="#_4-5-2-vim安装" aria-hidden="true">#</a> 4.5.2 vim安装</h4>
<p>命令： yum install vim</p>
<p><img src="@source/必会工具/assets/image-20210811192217715.png" alt="image-20210811192217715"></p>
<p>安装过程中，会有确认提示，此时输入 y，然后回车，继续安装：</p>
<p><img src="@source/必会工具/assets/image-20210811192256269.png" alt="image-20210811192256269"></p>
<p><img src="@source/必会工具/assets/image-20210811192350907.png" alt="image-20210811192350907"></p>
<h4 id="_4-5-3-vim使用" tabindex="-1"><a class="header-anchor" href="#_4-5-3-vim使用" aria-hidden="true">#</a> 4.5.3 vim使用</h4>
<p>作用: 对文件内容进行编辑，vim其实就是一个文本编辑器
语法: vim fileName
说明:
1). 在使用vim命令编辑文件时，如果指定的文件存在则直接打开此文件。如果指定的文件不存在则新建文件。
2). vim在进行文本编辑时共分为三种模式，分别是 命令模式（Command mode），插入模式（Insert mode）和底行模式（Last line mode）。这三种模式之间可以相互切换。我们在使用vim时一定要注意我们当前所处的是哪种模式。</p>
<p>三种模式:
- 命令模式
A. 命令模式下可以查看文件内容、移动光标（上下左右箭头、gg、G）
B. 通过vim命令打开文件后，默认进入命令模式
C. 另外两种模式需要首先进入命令模式，才能进入彼此</p>
<pre><code>  | 命令模式指令 | 含义                              |
  | ------------ | --------------------------------- |
  | gg           | 定位到文本内容的第一行            |
  | G            | 定位到文本内容的最后一行          |
  | dd           | 删除光标所在行的数据              |
  | ndd          | 删除当前光标所在行及之后的n行数据 |
  | u            | 撤销操作                          |
  | shift+zz     | 保存并退出                        |
  | i 或 a 或 o  | 进入插入模式                      |
</code></pre>
<p>​</p>
<ul>
<li>
<p>插入模式
A. 插入模式下可以对文件内容进行编辑
B. 在命令模式下按下[i,a,o]任意一个，可以进入插入模式。进入插入模式后，下方会出现【insert】字样
C. 在插入模式下按下ESC键，回到命令模式</p>
</li>
<li>
<p>底行模式
A. 底行模式下可以通过命令对文件内容进行查找、显示行号、退出等操作
B. 在命令模式下按下[:,/]任意一个，可以进入底行模式
C. 通过/方式进入底行模式后，可以对文件内容进行查找
D. 通过:方式进入底行模式后，可以输入wq（保存并退出）、q!（不保存退出）、set nu（显示行号）</p>
<table>
<thead>
<tr>
<th>底行模式命令</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>:wq</td>
<td>保存并退出</td>
</tr>
<tr>
<td>:q!</td>
<td>不保存退出</td>
</tr>
<tr>
<td>:set nu</td>
<td>显示行号</td>
</tr>
<tr>
<td>:set nonu</td>
<td>取消行号显示</td>
</tr>
<tr>
<td>:n</td>
<td>定位到第n行, 如 :10 就是定位到第10行</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p>​     <img src="@source/必会工具/assets/image-20210811194627474.png" alt="img"></p>
<p>​</p>
<p><strong>操作示例:</strong></p>
<p><img src="@source/必会工具/assets/image-20210811200005097.png" alt="image-20210811200005097"></p>
<h3 id="_4-6-查找命令" tabindex="-1"><a class="header-anchor" href="#_4-6-查找命令" aria-hidden="true">#</a> 4.6 查找命令</h3>
<h4 id="_4-6-1-find" tabindex="-1"><a class="header-anchor" href="#_4-6-1-find" aria-hidden="true">#</a> 4.6.1 find</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 在指定目录下查找文件
语法: find dirName -option fileName
举例:
    find  .  –name "*.java"			在当前目录及其子目录下查找.java结尾文件
    find  /beisheng  -name "*.java"	在/beisheng目录及其子目录下查找.java结尾的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p>
<p><img src="@source/必会工具/assets/image-20210811200438459.png" alt="image-20210811200438459"></p>
<h4 id="_4-6-2-grep" tabindex="-1"><a class="header-anchor" href="#_4-6-2-grep" aria-hidden="true">#</a> 4.6.2 grep</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>作用: 从指定文件中查找指定的文本内容
语法: grep word fileName
举例:
    grep Hello HelloWorld.java	查找HelloWorld.java文件中出现的Hello字符串的位置
    grep hello *.java			查找当前目录中所有.java结尾的文件中包含hello字符串的位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>操作示例:</strong></p>
<p><img src="@source/必会工具/assets/image-20210811200737596.png" alt="image-20210811200737596"></p>
<blockquote>
<p>grep通常配合管道一起使用</p>
<p>​	|  管道：可以把前面命令的输出作为后面命令的输入使用。</p>
</blockquote>
</div></template>


