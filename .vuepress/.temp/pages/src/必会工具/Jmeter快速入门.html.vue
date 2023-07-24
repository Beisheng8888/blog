<template><div><h1 id="jmeter快速入门" tabindex="-1"><a class="header-anchor" href="#jmeter快速入门" aria-hidden="true">#</a> Jmeter快速入门</h1>
<h1 id="_1-安装jmeter" tabindex="-1"><a class="header-anchor" href="#_1-安装jmeter" aria-hidden="true">#</a> 1.安装Jmeter</h1>
<p>Jmeter依赖于JDK，所以必须确保当前计算机上已经安装了JDK，并且配置了环境变量。</p>
<h2 id="_1-1-下载" tabindex="-1"><a class="header-anchor" href="#_1-1-下载" aria-hidden="true">#</a> 1.1.下载</h2>
<p>可以Apache Jmeter官网下载，地址：<a href="http://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer">http://jmeter.apache.org/download_jmeter.cgi<ExternalLinkIcon/></a></p>
<figure><img src="@source/src/必会工具/assets/image-20210715193149837.png" alt="image-20210715193149837" tabindex="0" loading="lazy"><figcaption>image-20210715193149837</figcaption></figure>
<p>当然，我们资料也提供了下载好的安装包：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715193224094.png" alt="image-20210715193224094" tabindex="0" loading="lazy"><figcaption>image-20210715193224094</figcaption></figure>
<h2 id="_1-2-解压" tabindex="-1"><a class="header-anchor" href="#_1-2-解压" aria-hidden="true">#</a> 1.2.解压</h2>
<p>因为下载的是zip包，解压缩即可使用，目录结构如下：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715193334367.png" alt="image-20210715193334367" tabindex="0" loading="lazy"><figcaption>image-20210715193334367</figcaption></figure>
<p>其中的bin目录就是执行的脚本，其中包含启动脚本：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715193414601.png" alt="image-20210715193414601" tabindex="0" loading="lazy"><figcaption>image-20210715193414601</figcaption></figure>
<h3 id="_1-3-运行" tabindex="-1"><a class="header-anchor" href="#_1-3-运行" aria-hidden="true">#</a> 1.3.运行</h3>
<p>双击即可运行，但是有两点注意：</p>
<ul>
<li>启动速度比较慢，要耐心等待</li>
<li>启动后黑窗口不能关闭，否则Jmeter也跟着关闭了</li>
</ul>
<figure><img src="@source/src/必会工具/assets/image-20210715193730096.png" alt="image-20210715193730096" tabindex="0" loading="lazy"><figcaption>image-20210715193730096</figcaption></figure>
<h1 id="_2-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-快速入门" aria-hidden="true">#</a> 2.快速入门</h1>
<h2 id="_2-1-设置中文语言" tabindex="-1"><a class="header-anchor" href="#_2-1-设置中文语言" aria-hidden="true">#</a> 2.1.设置中文语言</h2>
<p>默认Jmeter的语言是英文，需要设置：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715193838719.png" alt="image-20210715193838719" tabindex="0" loading="lazy"><figcaption>image-20210715193838719</figcaption></figure>
<p>效果：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715193914039.png" alt="image-20210715193914039" tabindex="0" loading="lazy"><figcaption>image-20210715193914039</figcaption></figure>
<blockquote>
<p><strong>注意</strong>：上面的配置只能保证本次运行是中文，如果要永久中文，需要修改Jmeter的配置文件</p>
</blockquote>
<p>打开jmeter文件夹，在bin目录中找到 <strong>jmeter.properties</strong>，添加下面配置：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">language</span><span class="token punctuation">=</span><span class="token value attr-value">zh_CN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/src/必会工具/assets/image-20210715194137982.png" alt="image-20210715194137982" tabindex="0" loading="lazy"><figcaption>image-20210715194137982</figcaption></figure>
<blockquote>
<p>注意：前面不要出现#，#代表注释，另外这里是下划线，不是中划线</p>
</blockquote>
<h2 id="_2-2-基本用法" tabindex="-1"><a class="header-anchor" href="#_2-2-基本用法" aria-hidden="true">#</a> 2.2.基本用法</h2>
<p>在测试计划上点鼠标右键，选择添加 &gt; 线程（用户） &gt; 线程组：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715194413178.png" alt="image-20210715194413178" tabindex="0" loading="lazy"><figcaption>image-20210715194413178</figcaption></figure>
<p>在新增的线程组中，填写线程信息：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715195053807.png" alt="image-20210715195053807" tabindex="0" loading="lazy"><figcaption>image-20210715195053807</figcaption></figure>
<p>给线程组点鼠标右键，添加http取样器：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715195144130.png" alt="image-20210715195144130" tabindex="0" loading="lazy"><figcaption>image-20210715195144130</figcaption></figure>
<p>编写取样器内容：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715195410764.png" alt="image-20210715195410764" tabindex="0" loading="lazy"><figcaption>image-20210715195410764</figcaption></figure>
<p>添加监听报告：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715195844978.png" alt="image-20210715195844978" tabindex="0" loading="lazy"><figcaption>image-20210715195844978</figcaption></figure>
<p>添加监听结果树：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715200155537.png" alt="image-20210715200155537" tabindex="0" loading="lazy"><figcaption>image-20210715200155537</figcaption></figure>
<p>汇总报告结果：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715200243194.png" alt="image-20210715200243194" tabindex="0" loading="lazy"><figcaption>image-20210715200243194</figcaption></figure>
<p>结果树：</p>
<figure><img src="@source/src/必会工具/assets/image-20210715200336526.png" alt="image-20210715200336526" tabindex="0" loading="lazy"><figcaption>image-20210715200336526</figcaption></figure>
</div></template>


