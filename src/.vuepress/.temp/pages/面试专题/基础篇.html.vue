<template><div><h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<blockquote>
<p><em><strong>基础篇要点：算法、数据结构、基础设计模式</strong></em></p>
</blockquote>
<h2 id="_1-二分查找" tabindex="-1"><a class="header-anchor" href="#_1-二分查找" aria-hidden="true">#</a> 1. 二分查找</h2>
<p><strong>算法描述</strong></p>
<ol>
<li>
<p>前提：有已排序数组 A（假设已经做好）</p>
</li>
<li>
<p>定义左边界 L、右边界 R，确定搜索范围，循环执行二分查找（3、4两步）</p>
</li>
<li>
<p>获取中间索引 M = Floor((L+R) /2)</p>
</li>
<li>
<p>中间索引的值  A[M] 与待搜索的值 T 进行比较</p>
<p>① A[M] == T 表示找到，返回中间索引</p>
<p>② A[M] &gt; T，中间值右侧的其它元素都大于 T，无需比较，中间索引左边去找，M - 1 设置为右边界，重新查找</p>
<p>③ A[M] &lt; T，中间值左侧的其它元素都小于 T，无需比较，中间索引右边去找， M + 1 设置为左边界，重新查找</p>
</li>
<li>
<p>当 L &gt; R 时，表示没有找到，应结束循环</p>
</li>
</ol>
<blockquote>
<p><em>更形象的描述请参考：binary_search.html</em></p>
</blockquote>
<p><strong>算法实现</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> m<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        m <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">==</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> m<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">></span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            r <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试代码</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> target <span class="token operator">=</span> <span class="token number">47</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决整数溢出问题</strong></p>
<p>当 l 和 r 都较大时，<code v-pre>l + r</code> 有可能超过整数范围，造成运算错误，解决方法有两种：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> m <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还有一种是：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>其它考法</strong></p>
<ol>
<li>
<p>有一个有序表为 1,5,8,11,19,22,31,35,40,45,48,49,50 当二分查找值为 48 的结点时，查找成功需要比较的次数</p>
</li>
<li>
<p>使用二分法在序列 1,4,6,7,15,33,39,50,64,78,75,81,89,96 中查找元素 81 时，需要经过（   ）次比较</p>
</li>
<li>
<p>在拥有128个元素的数组中二分查找一个数，需要比较的次数最多不超过多少次</p>
</li>
</ol>
<p>对于前两个题目，记得一个简要判断口诀：奇数二分取中间，偶数二分取中间靠左。对于后一道题目，需要知道公式：</p>
<p>$$n = log_2N = log_{10}N/log_{10}2$$</p>
<p>其中 n 为查找次数，N 为元素个数</p>
<h2 id="_2-冒泡排序" tabindex="-1"><a class="header-anchor" href="#_2-冒泡排序" aria-hidden="true">#</a> 2. 冒泡排序</h2>
<p><strong>算法描述</strong></p>
<ol>
<li>依次比较数组中相邻两个元素大小，若 a[j] &gt; a[j+1]，则交换两个元素，两两都比较一遍称为一轮冒泡，结果是让最大的元素排至最后</li>
<li>重复以上步骤，直到整个数组有序</li>
</ol>
<blockquote>
<p><em>更形象的描述请参考：bubble_sort.html</em></p>
</blockquote>
<p><strong>算法实现</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bubble</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 一轮冒泡</span>
        <span class="token keyword">boolean</span> swapped <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 是否发生了交换</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"比较次数"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> a<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Utils</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                swapped <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"第"</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token string">"轮冒泡"</span>
                           <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>swapped<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>优化点1：每经过一轮冒泡，内层循环就可以减少一次</li>
<li>优化点2：如果某一轮冒泡没有发生交换，则表示所有数据有序，可以结束外层循环</li>
</ul>
<p><strong>进一步优化</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bubble_v2</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> last <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 表示最后一次交换索引位置</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"比较次数"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> a<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Utils</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                last <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        n <span class="token operator">=</span> last<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"第轮冒泡"</span>
                           <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>每轮冒泡时，最后一次交换索引可以作为下一轮冒泡的比较次数，如果这个值为零，表示整个数组有序，直接退出外层循环即可</li>
</ul>
<h2 id="_3-选择排序" tabindex="-1"><a class="header-anchor" href="#_3-选择排序" aria-hidden="true">#</a> 3. 选择排序</h2>
<p><strong>算法描述</strong></p>
<ol>
<li>
<p>将数组分为两个子集，排序的和未排序的，每一轮从未排序的子集中选出最小的元素，放入排序子集</p>
</li>
<li>
<p>重复以上步骤，直到整个数组有序</p>
</li>
</ol>
<blockquote>
<p><em>更形象的描述请参考：selection_sort.html</em></p>
</blockquote>
<p><strong>算法实现</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">selection</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// i 代表每轮选择最小元素要交换到的目标索引</span>
        <span class="token keyword">int</span> s <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 代表最小元素的索引</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">></span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// j 元素比 s 元素还要小, 更新 s</span>
                s <span class="token operator">=</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> s<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>优化点：为减少交换次数，每一轮可以先找最小的索引，在每轮最后再交换元素</li>
</ul>
<p><strong>与冒泡排序比较</strong></p>
<ol>
<li>
<p>二者平均时间复杂度都是 $O(n^2)$</p>
</li>
<li>
<p>选择排序一般要快于冒泡，因为其交换次数少</p>
</li>
<li>
<p>但如果集合有序度高，冒泡优于选择</p>
</li>
<li>
<p>冒泡属于稳定排序算法，而选择属于不稳定排序</p>
<ul>
<li>稳定排序指，按对象中不同字段进行多次排序，不会打乱同值元素的顺序</li>
<li>不稳定排序则反之</li>
</ul>
</li>
</ol>
<p><strong>稳定排序与不稳定排序</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"=================不稳定================"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Card</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cards <span class="token operator">=</span> <span class="token function">getStaticCards</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>cards<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">selection</span><span class="token punctuation">(</span>cards<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Card</span> a<span class="token punctuation">)</span> <span class="token operator">-></span> a<span class="token punctuation">.</span>sharpOrder<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>cards<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">selection</span><span class="token punctuation">(</span>cards<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Card</span> a<span class="token punctuation">)</span> <span class="token operator">-></span> a<span class="token punctuation">.</span>numberOrder<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>cards<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"=================稳定================="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cards <span class="token operator">=</span> <span class="token function">getStaticCards</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>cards<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bubble</span><span class="token punctuation">(</span>cards<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Card</span> a<span class="token punctuation">)</span> <span class="token operator">-></span> a<span class="token punctuation">.</span>sharpOrder<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>cards<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bubble</span><span class="token punctuation">(</span>cards<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Card</span> a<span class="token punctuation">)</span> <span class="token operator">-></span> a<span class="token punctuation">.</span>numberOrder<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>cards<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都是先按照花色排序（♠♥♣♦），再按照数字排序（AKQJ...）</p>
<ul>
<li>
<p>不稳定排序算法按数字排序时，会打乱原本同值的花色顺序</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[[♠7], [♠2], [♠4], [♠5], [♥2], [♥5]]
[[♠7], [♠5], [♥5], [♠4], [♥2], [♠2]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原来 ♠2 在前 ♥2 在后，按数字再排后，他俩的位置变了</p>
</li>
<li>
<p>稳定排序算法按数字排序时，会保留原本同值的花色顺序，如下所示 ♠2 与 ♥2 的相对位置不变</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[[♠7], [♠2], [♠4], [♠5], [♥2], [♥5]]
[[♠7], [♠5], [♥5], [♠4], [♠2], [♥2]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_4-插入排序" tabindex="-1"><a class="header-anchor" href="#_4-插入排序" aria-hidden="true">#</a> 4. 插入排序</h2>
<p><strong>算法描述</strong></p>
<ol>
<li>
<p>将数组分为两个区域，排序区域和未排序区域，每一轮从未排序区域中取出第一个元素，插入到排序区域（需保证顺序）</p>
</li>
<li>
<p>重复以上步骤，直到整个数组有序</p>
</li>
</ol>
<blockquote>
<p><em>更形象的描述请参考：insertion_sort.html</em></p>
</blockquote>
<p><strong>算法实现</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 修改了代码与希尔排序一致</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// i 代表待插入元素的索引</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> t <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 代表待插入的元素值</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">>=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// j-1 是上一个元素索引，如果 > t，后移</span>
                a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                j<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 如果 j-1 已经 &lt;= t, 则 j 就是插入位置</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>与选择排序比较</strong></p>
<ol>
<li>
<p>二者平均时间复杂度都是 $O(n^2)$</p>
</li>
<li>
<p>大部分情况下，插入都略优于选择</p>
</li>
<li>
<p>有序集合插入的时间复杂度为 $O(n)$</p>
</li>
<li>
<p>插入属于稳定排序算法，而选择属于不稳定排序</p>
</li>
</ol>
<p><strong>提示</strong></p>
<blockquote>
<p><em>插入排序通常被你所轻视，其实它的地位非常重要。小数据量排序，都会优先选择插入排序</em></p>
</blockquote>
<h2 id="_5-希尔排序" tabindex="-1"><a class="header-anchor" href="#_5-希尔排序" aria-hidden="true">#</a> 5. 希尔排序</h2>
<p><strong>算法描述</strong></p>
<ol>
<li>
<p>首先选取一个间隙序列，如 (n/2，n/4 … 1)，n 为数组长度</p>
</li>
<li>
<p>每一轮将间隙相等的元素视为一组，对组内元素进行插入排序，目的有二</p>
<p>① 少量元素插入排序速度很快</p>
<p>② 让组内值较大的元素更快地移动到后方</p>
</li>
<li>
<p>当间隙逐渐减少，直至为 1 时，即可完成排序</p>
</li>
</ol>
<blockquote>
<p><em>更形象的描述请参考：shell_sort.html</em></p>
</blockquote>
<p><strong>算法实现</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">shell</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> gap <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> gap <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> gap <span class="token operator">/=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// i 代表待插入元素的索引</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> t <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 代表待插入的元素值</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">>=</span> gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 每次与上一个间隙为 gap 的元素进行插入排序</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// j-gap 是上一个元素索引，如果 > t，后移</span>
                    a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    j <span class="token operator">-=</span> gap<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 如果 j-1 已经 &lt;= t, 则 j 就是插入位置</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" gap:"</span> <span class="token operator">+</span> gap<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考资料</strong></p>
<ul>
<li>https://en.wikipedia.org/wiki/Shellsort</li>
</ul>
<h2 id="_6-快速排序" tabindex="-1"><a class="header-anchor" href="#_6-快速排序" aria-hidden="true">#</a> 6. 快速排序</h2>
<p><strong>算法描述</strong></p>
<ol>
<li>每一轮排序选择一个基准点（pivot）进行分区
<ol>
<li>让小于基准点的元素的进入一个分区，大于基准点的元素的进入另一个分区</li>
<li>当分区完成时，基准点元素的位置就是其最终位置</li>
</ol>
</li>
<li>在子分区内重复以上过程，直至子分区元素个数少于等于 1，这体现的是分而治之的思想 （<a href="https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm" target="_blank" rel="noopener noreferrer">divide-and-conquer<ExternalLinkIcon/></a>）</li>
<li>从以上描述可以看出，一个关键在于分区算法，常见的有洛穆托分区方案、双边循环分区方案、霍尔分区方案</li>
</ol>
<blockquote>
<p><em>更形象的描述请参考：quick_sort.html</em></p>
</blockquote>
<p><strong>单边循环快排（lomuto 洛穆托分区方案）</strong></p>
<ol>
<li>
<p>选择最右元素作为基准点元素</p>
</li>
<li>
<p>j 指针负责找到比基准点小的元素，一旦找到则与 i 进行交换</p>
</li>
<li>
<p>i 指针维护小于基准点元素的边界，也是每次交换的目标索引</p>
</li>
<li>
<p>最后基准点与 i 交换，i 即为分区位置</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">quick</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">>=</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> l<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// p 索引值</span>
    <span class="token function">quick</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> l<span class="token punctuation">,</span> p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左边分区的范围确定</span>
    <span class="token function">quick</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左边分区的范围确定</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> pv <span class="token operator">=</span> a<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 基准点元素</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> l<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> h<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" i="</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回值代表了基准点元素所在的正确索引，用它确定下一轮分区的边界</span>
    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>双边循环快排（不完全等价于 hoare 霍尔分区方案）</strong></p>
<ol>
<li>选择最左元素作为基准点元素</li>
<li>j 指针负责从右向左找比基准点小的元素，i 指针负责从左向右找比基准点大的元素，一旦找到二者交换，直至 i，j 相交</li>
<li>最后基准点与 i（此时 i 与 j 相等）交换，i 即为分区位置</li>
</ol>
<p>要点</p>
<ol>
<li>
<p>基准点在左边，并且要先 j 后 i</p>
</li>
<li>
<p>while( <strong>i</strong> <strong>&lt; j</strong> &amp;&amp; a[j] &gt; pv ) j--</p>
</li>
<li>
<p>while ( <strong>i</strong> <strong>&lt; j</strong> &amp;&amp; a[i] <strong>&lt;=</strong> pv ) i++</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">quick</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">>=</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> l<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">quick</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> l<span class="token punctuation">,</span> p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">quick</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> pv <span class="token operator">=</span> a<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// j 从右找小的</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> pv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// i 从左找大的</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> pv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> l<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" j="</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> j<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>快排特点</strong></p>
<ol>
<li>
<p>平均时间复杂度是 <code v-pre>$O(nlog_2⁡n )$</code>，最坏时间复杂度 $O(n^2)$</p>
</li>
<li>
<p>数据量较大时，优势非常明显</p>
</li>
<li>
<p>属于不稳定排序</p>
</li>
</ol>
<p><strong>洛穆托分区方案 vs 霍尔分区方案</strong></p>
<ul>
<li>霍尔的移动次数平均来讲比洛穆托少3倍</li>
<li>https://qastack.cn/cs/11458/quicksort-partitioning-hoare-vs-lomuto</li>
</ul>
<h2 id="_7-arraylist" tabindex="-1"><a class="header-anchor" href="#_7-arraylist" aria-hidden="true">#</a> 7. ArrayList</h2>
<p><strong>扩容规则</strong></p>
<ol>
<li>
<p>ArrayList() 会使用长度为零的数组</p>
</li>
<li>
<p>ArrayList(int initialCapacity) 会使用指定容量的数组</p>
</li>
<li>
<p>public ArrayList(Collection&lt;? extends E&gt; c) 会使用 c 的大小作为数组容量</p>
</li>
<li>
<p>add(Object o) 首次扩容为 10，再次扩容为上次容量的 1.5 倍</p>
</li>
<li>
<p>addAll(Collection c) 没有元素时，扩容为 Math.max(10, 实际元素个数)，有元素时为 Math.max(原容量 1.5 倍, 实际元素个数)</p>
</li>
</ol>
<p>其中第 4 点必须知道，其它几点视个人情况而定</p>
<h2 id="_8-iterator" tabindex="-1"><a class="header-anchor" href="#_8-iterator" aria-hidden="true">#</a> 8. Iterator</h2>
<p>Fail-Fast 与 Fail-Safe</p>
<ul>
<li>
<p>ArrayList 是 fail-fast 的典型代表，遍历的同时不能修改，尽快失败</p>
</li>
<li>
<p>CopyOnWriteArrayList 是 fail-safe 的典型代表，遍历的同时可以修改，原理是读写分离</p>
</li>
</ul>
<h2 id="_9-linkedlist" tabindex="-1"><a class="header-anchor" href="#_9-linkedlist" aria-hidden="true">#</a> 9. LinkedList</h2>
<p><strong>LinkedList</strong></p>
<ol>
<li>基于双向链表，无需连续内存</li>
<li>随机访问慢（要沿着链表遍历）</li>
<li>头尾插入删除性能高</li>
<li>占用内存多</li>
</ol>
<p><strong>ArrayList</strong></p>
<ol>
<li>基于数组，需要连续内存</li>
<li>随机访问快（指根据下标访问）</li>
<li>尾部插入、删除性能可以，其它部分插入、删除都会移动数据，因此性能会低</li>
<li>可以利用 cpu 缓存，局部性原理</li>
</ol>
<h2 id="_10-hashmap" tabindex="-1"><a class="header-anchor" href="#_10-hashmap" aria-hidden="true">#</a> 10. HashMap</h2>
<h3 id="_1-基本数据结构" tabindex="-1"><a class="header-anchor" href="#_1-基本数据结构" aria-hidden="true">#</a> 1）基本数据结构</h3>
<ul>
<li>1.7 数组 + 链表</li>
<li>1.8 数组 + （链表 | 红黑树）</li>
</ul>
<blockquote>
<p>更形象的演示，见资料中的 hash-demo.jar，运行需要 jdk14 以上环境，进入 jar 包目录，执行下面命令</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>java -jar --add-exports java.base/jdk.internal.misc=ALL-UNNAMED hash-demo.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h3 id="_2-树化与退化" tabindex="-1"><a class="header-anchor" href="#_2-树化与退化" aria-hidden="true">#</a> 2）树化与退化</h3>
<p><strong>树化意义</strong></p>
<ul>
<li>红黑树用来避免 DoS 攻击，防止链表超长时性能下降，树化应当是偶然情况，是保底策略</li>
<li>hash 表的查找，更新的时间复杂度是 $O(1)$，而红黑树的查找，更新的时间复杂度是 <code v-pre>$O(log_2⁡n )$</code>，TreeNode 占用空间也比普通 Node 的大，如非必要，尽量还是使用链表</li>
<li>hash 值如果足够随机，则在 hash 表内按泊松分布，在负载因子 0.75 的情况下，长度超过 8 的链表出现概率是 0.00000006，树化阈值选择 8 就是为了让树化几率足够小</li>
</ul>
<p><strong>树化规则</strong></p>
<ul>
<li>当链表长度超过树化阈值 8 时，先尝试扩容来减少链表长度，如果数组容量已经 &gt;=64，才会进行树化</li>
</ul>
<p><strong>退化规则</strong></p>
<ul>
<li>情况1：在扩容时如果拆分树时，树元素个数 &lt;= 6 则会退化链表</li>
<li>情况2：remove 树节点时，若 root、root.left、root.right、root.left.left 有一个为 null ，也会退化为链表</li>
</ul>
<h3 id="_3-索引计算" tabindex="-1"><a class="header-anchor" href="#_3-索引计算" aria-hidden="true">#</a> 3）索引计算</h3>
<p><strong>索引计算方法</strong></p>
<ul>
<li>首先，计算对象的 hashCode()</li>
<li>再进行调用 HashMap 的 hash() 方法进行二次哈希
<ul>
<li>二次 hash() 是为了综合高位数据，让哈希分布更为均匀</li>
</ul>
</li>
<li>最后 &amp; (capacity – 1) 得到索引</li>
</ul>
<p><strong>数组容量为何是 2 的 n 次幂</strong></p>
<ol>
<li>计算索引时效率更高：如果是 2 的 n 次幂可以使用位与运算代替取模</li>
<li>扩容时重新计算索引效率更高： hash &amp; oldCap == 0 的元素留在原来位置 ，否则新位置 = 旧位置 + oldCap</li>
</ol>
<p><strong>注意</strong></p>
<ul>
<li>二次 hash 是为了配合 <strong>容量是 2 的 n 次幂</strong> 这一设计前提，如果 hash 表的容量不是 2 的 n 次幂，则不必二次 hash</li>
<li><strong>容量是 2 的 n 次幂</strong> 这一设计计算索引效率更好，但 hash 的分散性就不好，需要二次 hash 来作为补偿，没有采用这一设计的典型例子是 Hashtable</li>
</ul>
<h3 id="_4-put-与扩容" tabindex="-1"><a class="header-anchor" href="#_4-put-与扩容" aria-hidden="true">#</a> 4）put 与扩容</h3>
<p><strong>put 流程</strong></p>
<ol>
<li>HashMap 是懒惰创建数组的，首次使用才创建数组</li>
<li>计算索引（桶下标）</li>
<li>如果桶下标还没人占用，创建 Node 占位返回</li>
<li>如果桶下标已经有人占用
<ol>
<li>已经是 TreeNode 走红黑树的添加或更新逻辑</li>
<li>是普通 Node，走链表的添加或更新逻辑，如果链表长度超过树化阈值，走树化逻辑</li>
</ol>
</li>
<li>返回前检查容量是否超过阈值，一旦超过进行扩容</li>
</ol>
<p><strong>1.7 与 1.8 的区别</strong></p>
<ol>
<li>
<p>链表插入节点时，1.7 是头插法，1.8 是尾插法</p>
</li>
<li>
<p>1.7 是大于等于阈值且没有空位时才扩容，而 1.8 是大于阈值就扩容</p>
</li>
<li>
<p>1.8 在扩容计算 Node 索引时，会优化</p>
</li>
</ol>
<p><strong>扩容（加载）因子为何默认是 0.75f</strong></p>
<ol>
<li>在空间占用与查询时间之间取得较好的权衡</li>
<li>大于这个值，空间节省了，但链表就会比较长影响性能</li>
<li>小于这个值，冲突减少了，但扩容就会更频繁，空间占用也更多</li>
</ol>
<h3 id="_5-并发问题" tabindex="-1"><a class="header-anchor" href="#_5-并发问题" aria-hidden="true">#</a> 5）并发问题</h3>
<p><strong>扩容死链（1.7 会存在）</strong></p>
<p>1.7 源码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable<span class="token punctuation">,</span> <span class="token keyword">boolean</span> rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> newTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">:</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> e<span class="token punctuation">.</span>key <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span>next <span class="token operator">=</span> newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
            e <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>e 和 next 都是局部变量，用来指向当前节点和下一个节点</li>
<li>线程1（绿色）的临时变量 e 和 next 刚引用了这俩节点，还未来得及移动节点，发生了线程切换，由线程2（蓝色）完成扩容和迁移</li>
</ul>
<p><img src="@source/面试专题/img/image-20210831084325075.png" alt="image-20210831084325075"></p>
<ul>
<li>线程2 扩容完成，由于头插法，链表顺序颠倒。但线程1 的临时变量 e 和 next 还引用了这俩节点，还要再来一遍迁移</li>
</ul>
<p><img src="@source/面试专题/img/image-20210831084723383.png" alt="image-20210831084723383"></p>
<ul>
<li>第一次循环
<ul>
<li>循环接着线程切换前运行，注意此时 e 指向的是节点 a，next 指向的是节点 b</li>
<li>e 头插 a 节点，注意图中画了两份 a 节点，但事实上只有一个（为了不让箭头特别乱画了两份）</li>
<li>当循环结束是 e 会指向 next 也就是 b 节点</li>
</ul>
</li>
</ul>
<p><img src="@source/面试专题/img/image-20210831084855348.png" alt="image-20210831084855348"></p>
<ul>
<li>第二次循环
<ul>
<li>next 指向了节点 a</li>
<li>e 头插节点 b</li>
<li>当循环结束时，e 指向 next 也就是节点 a</li>
</ul>
</li>
</ul>
<p><img src="@source/面试专题/img/image-20210831085329449.png" alt="image-20210831085329449"></p>
<ul>
<li>第三次循环
<ul>
<li>next 指向了 null</li>
<li>e 头插节点 a，<strong>a 的 next 指向了 b</strong>（之前 a.next 一直是 null），b 的 next 指向 a，死链已成</li>
<li>当循环结束时，e 指向 next 也就是 null，因此第四次循环时会正常退出</li>
</ul>
</li>
</ul>
<p><img src="@source/面试专题/img/image-20210831085543224.png" alt="image-20210831085543224"></p>
<p><strong>数据错乱（1.7，1.8 都会存在）</strong></p>
<h3 id="_6-key-的设计" tabindex="-1"><a class="header-anchor" href="#_6-key-的设计" aria-hidden="true">#</a> 6）key 的设计</h3>
<p><strong>key 的设计要求</strong></p>
<ol>
<li>HashMap 的 key 可以为 null，但 Map 的其他实现则不然</li>
<li>作为 key 的对象，必须实现 hashCode 和 equals，并且 key 的内容不能修改（不可变）</li>
<li>key 的 hashCode 应该有良好的散列性</li>
</ol>
<p>如果 key 可变，例如修改了 age 会导致再次查询时查询不到</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HashMapMutableKey</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>stu<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        stu<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name<span class="token punctuation">;</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>

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
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> o<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> o<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
            <span class="token keyword">return</span> age <span class="token operator">==</span> student<span class="token punctuation">.</span>age <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> student<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>String 对象的 hashCode() 设计</strong></p>
<ul>
<li>目标是达到较为均匀的散列效果，每个字符串的 hashCode 足够独特</li>
<li>字符串中的每个字符都可以表现为一个数字，称为 $S_i$，其中 i 的范围是 0 ~ n - 1</li>
<li>散列公式为： $S_0∗31^{(n-1)}+ S_1∗31^{(n-2)}+ … S_i ∗ 31^{(n-1-i)}+ …S_{(n-1)}∗31^0$</li>
<li>31 代入公式有较好的散列特性，并且 31 * h 可以被优化为
<ul>
<li>即 $32 ∗h -h $</li>
<li>即 $2^5  ∗h -h$</li>
<li>即 $h≪5  -h$</li>
</ul>
</li>
</ul>
<h2 id="_11-单例模式" tabindex="-1"><a class="header-anchor" href="#_11-单例模式" aria-hidden="true">#</a> 11. 单例模式</h2>
<p><strong>饿汉式</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton1</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">INSTANCE</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"单例对象不能重复创建"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"private Singleton1()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton1</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton1</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">otherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"otherMethod()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">readResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>构造方法抛出异常是防止反射破坏单例</li>
<li><code v-pre>readResolve()</code> 是防止反序列化破坏单例</li>
</ul>
<p><strong>枚举饿汉式</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Singleton2</span> <span class="token punctuation">{</span>
    <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"private Singleton2()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"@"</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton2</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">otherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"otherMethod()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>枚举饿汉式能天然防止反射、反序列化破坏单例</li>
</ul>
<p><strong>懒汉式</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton3</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"private Singleton3()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton3</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// Singleton3.class</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">Singleton3</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">INSTANCE</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">otherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"otherMethod()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>其实只有首次创建单例对象时才需要同步，但该代码实际上每次调用都会同步</li>
<li>因此有了下面的双检锁改进</li>
</ul>
<p><strong>双检锁懒汉式</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton4</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"private Singleton4()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton4</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 可见性，有序性</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton4</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">INSTANCE</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton4</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">INSTANCE</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">otherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"otherMethod()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为何必须加 volatile：</p>
<ul>
<li><code v-pre>INSTANCE = new Singleton4()</code> 不是原子的，分成 3 步：创建对象、调用构造、给静态变量赋值，其中后两步可能被指令重排序优化，变成先赋值、再调用构造</li>
<li>如果线程1 先执行了赋值，线程2 执行到第一个 <code v-pre>INSTANCE == null</code> 时发现 INSTANCE 已经不为 null，此时就会返回一个未完全构造的对象</li>
</ul>
<p><strong>内部类懒汉式</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton5</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"private Singleton5()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Holder</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token class-name">Singleton5</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton5</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Holder</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">otherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"otherMethod()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>避免了双检锁的缺点</li>
</ul>
<p><strong>JDK 中单例的体现</strong></p>
<ul>
<li>Runtime 体现了饿汉式单例</li>
<li>Console 体现了双检锁懒汉式单例</li>
<li>Collections 中的 EmptyNavigableSet 内部类懒汉式单例</li>
<li>ReverseComparator.REVERSE_ORDER 内部类懒汉式单例</li>
<li>Comparators.NaturalOrderComparator.INSTANCE 枚举饿汉式单例</li>
</ul>
</div></template>


