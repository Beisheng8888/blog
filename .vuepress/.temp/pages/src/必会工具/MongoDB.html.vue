<template><div><h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1>
<h2 id="_1-1-1-安装mongodb" tabindex="-1"><a class="header-anchor" href="#_1-1-1-安装mongodb" aria-hidden="true">#</a> 1.1.1)安装MongoDB</h2>
<p>拉取镜像</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker pull mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建容器</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run -di --name mongo-service --restart=always -p 27017:27017 -v ~/data/mongodata:/data mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-1-2-导入资料中的mongo-demo项目到beisheng-leadnews-test中" tabindex="-1"><a class="header-anchor" href="#_1-1-2-导入资料中的mongo-demo项目到beisheng-leadnews-test中" aria-hidden="true">#</a> 1.1.2)导入资料中的mongo-demo项目到beisheng-leadnews-test中</h2>
<p>其中有三项配置比较关键：<br>
第一：mongo依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-data-mongodb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二：mongo配置</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9998</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">data</span><span class="token punctuation">:</span>
    <span class="token key atrule">mongodb</span><span class="token punctuation">:</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.200.130
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">27017</span>
      <span class="token key atrule">database</span><span class="token punctuation">:</span> leadnews<span class="token punctuation">-</span>history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三：映射</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>beisheng<span class="token punctuation">.</span>mongo<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapping<span class="token punctuation">.</span></span><span class="token class-name">Document</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
 * 联想词表
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
 *
 * <span class="token keyword">@author</span> beisheng
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Document</span><span class="token punctuation">(</span><span class="token string">"ap_associate_words"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApAssociateWords</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 联想词
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> associateWords<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createdTime<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-核心方法" tabindex="-1"><a class="header-anchor" href="#_1-1-3-核心方法" aria-hidden="true">#</a> 1.1.3)核心方法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>beisheng<span class="token punctuation">.</span>mongo<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>beisheng<span class="token punctuation">.</span>mongo<span class="token punctuation">.</span></span><span class="token class-name">MongoApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>beisheng<span class="token punctuation">.</span>mongo<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">ApAssociateWords</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>runner<span class="token punctuation">.</span></span><span class="token class-name">RunWith</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Sort</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">MongoTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>core<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">Criteria</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>core<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">Query</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span>junit4<span class="token punctuation">.</span></span><span class="token class-name">SpringRunner</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">MongoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MongoTest</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MongoTemplate</span> mongoTemplate<span class="token punctuation">;</span>

    <span class="token comment">//保存</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">/*for (int i = 0; i &lt; 10; i++) {
            ApAssociateWords apAssociateWords = new ApAssociateWords();
            apAssociateWords.setAssociateWords("123");
            apAssociateWords.setCreatedTime(new Date());
            mongoTemplate.save(apAssociateWords);
        }*/</span>
        <span class="token class-name">ApAssociateWords</span> apAssociateWords <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApAssociateWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        apAssociateWords<span class="token punctuation">.</span><span class="token function">setAssociateWords</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        apAssociateWords<span class="token punctuation">.</span><span class="token function">setCreatedTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mongoTemplate<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>apAssociateWords<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//查询一个</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveFindOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ApAssociateWords</span> apAssociateWords <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token string">"60bd973eb0c1d430a71a7928"</span><span class="token punctuation">,</span> <span class="token class-name">ApAssociateWords</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>apAssociateWords<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//条件查询</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Query</span> query <span class="token operator">=</span> <span class="token class-name">Query</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Criteria</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">"associateWords"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token class-name">Sort</span><span class="token punctuation">.</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token class-name">Sort<span class="token punctuation">.</span>Direction</span><span class="token punctuation">.</span><span class="token constant">DESC</span><span class="token punctuation">,</span><span class="token string">"createdTime"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> apAssociateWordsList <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> <span class="token class-name">ApAssociateWords</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>apAssociateWordsList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        mongoTemplate<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Query</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Criteria</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">"associateWords"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb补充" tabindex="-1"><a class="header-anchor" href="#mongodb补充" aria-hidden="true">#</a> MongoDB补充</h2>
<table>
<thead>
<tr>
<th>逻辑存储</th>
<th>MongoDB</th>
<th>mysql</th>
</tr>
</thead>
<tbody>
<tr>
<td>库</td>
<td>数据库DB</td>
<td>数据库DB</td>
</tr>
<tr>
<td></td>
<td>集合Collection</td>
<td>表TABLE</td>
</tr>
<tr>
<td></td>
<td>文档Document</td>
<td>记录Row Record</td>
</tr>
<tr>
<td></td>
<td>域/字段 Feild</td>
<td>字段/属性Feild</td>
</tr>
<tr>
<td></td>
<td>索引</td>
<td>索引</td>
</tr>
<tr>
<td></td>
<td><strong>无</strong></td>
<td>多表关联Join</td>
</tr>
<tr>
<td></td>
<td>4.0+(副本集级别的多文档事务)；4.2+(分布式集群的多文档事务)</td>
<td>支持事务</td>
</tr>
</tbody>
</table>
<h2 id="_1-为什么使用mongodb" tabindex="-1"><a class="header-anchor" href="#_1-为什么使用mongodb" aria-hidden="true">#</a> 1.为什么使用MongoDB</h2>
<p>1）读写性能高于mysql<br>
2）(单集合)存储数据量大于mysql，拓展性非常高——分布式集群容易拓展。<br>
3）数据结构灵活(采用BSON结构，属性比较松散)</p>
<h2 id="_2-spring-data-mongodb基于接口的使用套路" tabindex="-1"><a class="header-anchor" href="#_2-spring-data-mongodb基于接口的使用套路" aria-hidden="true">#</a> 2.spring-data-mongodb基于接口的使用套路</h2>
<blockquote>
<p>spring-data体系，整合了市面上优秀的第三方存储层框架：</p>
<p>spring-data-elasticsearch （没建议使用，很多高级查询必须要依赖原生API）</p>
<p>spring-data-redis (RedisTemplate)</p>
<p>spring-data-JPA（没学。整合了ORM框架：hibernate，有多表关联）</p>
<p>spring-data-mongodb （MongoTemplate</p>
</blockquote>
<h3 id="_2-1-引入起步依赖" tabindex="-1"><a class="header-anchor" href="#_2-1-引入起步依赖" aria-hidden="true">#</a> 2.1 引入起步依赖</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-data-mongodb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-2-配置文件" aria-hidden="true">#</a> 2.2 配置文件</h3>
<blockquote>
<p>配置连接等</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">data</span><span class="token punctuation">:</span>
    <span class="token key atrule">mongodb</span><span class="token punctuation">:</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.200.130
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">27017</span>
      <span class="token key atrule">database</span><span class="token punctuation">:</span> leadnews<span class="token punctuation">-</span>history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-pojo对应集合" tabindex="-1"><a class="header-anchor" href="#_2-3-pojo对应集合" aria-hidden="true">#</a> 2.3 POJO对应集合</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@org.springframework.data.mongodb.core.mapping.Document</span><span class="token punctuation">(</span><span class="token string">"ap_associate_words"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApAssociateWords</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token comment">//声明主键 -- 给文档ID(_id)使用</span>
    <span class="token annotation punctuation">@org.springframework.data.annotation.Id</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 联想词
     */</span>

    <span class="token annotation punctuation">@Field</span> <span class="token comment">//声明域 -- 同名则无需处理</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> associateWords<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createdTime<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>@org.springframework.data.mongodb.core.mapping.Document(&quot;ap_associate_words&quot;)</p>
<p>指定POJO映射的MongoDB中的集合！</p>
</blockquote>
<h3 id="_2-4-自定义接口-不需要实现" tabindex="-1"><a class="header-anchor" href="#_2-4-自定义接口-不需要实现" aria-hidden="true">#</a> 2.4 自定义接口(不需要实现)</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ApAssociateDao</span> <span class="token keyword">extends</span> <span class="token class-name">MongoRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>MongoRepository&lt;T, ID&gt;</p>
<p>T表示DAO操作的POJO和对应的集合；</p>
<p>ID(可序列化)表示POJO的主键类型。 ObjectId（MongoDB默认的主键类型）</p>
</blockquote>
<h2 id="_2-5-注入接口-使用api" tabindex="-1"><a class="header-anchor" href="#_2-5-注入接口-使用api" aria-hidden="true">#</a> 2.5 注入接口，使用API</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">MongoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MongoDaoTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ApAssociateDao</span> associateDao<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API:</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">ApAssociateWords</span> apAssociateWords <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApAssociateWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    apAssociateWords<span class="token punctuation">.</span><span class="token function">setAssociateWords</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    apAssociateWords<span class="token punctuation">.</span><span class="token function">setCreatedTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    associateDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>apAssociateWords<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>既是插入也是修改</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveFindOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> result <span class="token operator">=</span> associateDao<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token string">"60bd0043aab4f3022ce4a119"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>按照ID查询</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findPageAndSord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Pageable</span> pageable <span class="token operator">=</span> <span class="token class-name">PageRequest</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token class-name">Sort<span class="token punctuation">.</span>Direction</span><span class="token punctuation">.</span><span class="token constant">DESC</span><span class="token punctuation">,</span><span class="token string">"createdTime"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> page <span class="token operator">=</span> associateDao<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//获取总记录数</span>
    <span class="token keyword">long</span> totalElements <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getTotalElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取总页数</span>
    <span class="token keyword">int</span> totalPages <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getTotalPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取本页集合数据</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> content <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>totalElements <span class="token operator">+</span> <span class="token string">"xxxx"</span> <span class="token operator">+</span> totalPages<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按照规范使用接口方法" tabindex="-1"><a class="header-anchor" href="#按照规范使用接口方法" aria-hidden="true">#</a> 按照规范使用接口方法</h2>
<blockquote>
<p>findBy开头 (首字母大写)属性 查询方式(条件参数)；</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ApAssociateDao</span> <span class="token keyword">extends</span> <span class="token class-name">MongoRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> <span class="token function">findByAssociateWordsEquals</span><span class="token punctuation">(</span><span class="token class-name">String</span> words<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以按条件查询并分页、排序</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findInterPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name">Pageable</span> pageable
        <span class="token operator">=</span> <span class="token class-name">PageRequest</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token class-name">Sort</span><span class="token punctuation">.</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token class-name">Sort<span class="token punctuation">.</span>Direction</span><span class="token punctuation">.</span><span class="token constant">ASC</span><span class="token punctuation">,</span><span class="token string">"createdTime"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> page
        <span class="token operator">=</span> associateDao<span class="token punctuation">.</span><span class="token function">findByAssociateWordsStartsWith</span><span class="token punctuation">(</span><span class="token string">"456"</span><span class="token punctuation">,</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取总记录数</span>
    <span class="token keyword">long</span> totalElements <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getTotalElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取总页数</span>
    <span class="token keyword">int</span> totalPages <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getTotalPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取本页集合数据</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> content <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>totalElements <span class="token operator">+</span> <span class="token string">"xxxx"</span> <span class="token operator">+</span> <span class="token keyword">to</span><span class="token operator">></span>talPages<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>接口中，Pageable放在最后！</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ApAssociateDao</span> <span class="token keyword">extends</span> <span class="token class-name">MongoRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> <span class="token function">findByAssociateWordsEquals</span><span class="token punctuation">(</span><span class="token class-name">String</span> words<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> <span class="token function">findByAssociateWordsStartsWith</span><span class="token punctuation">(</span><span class="token class-name">String</span> prefix<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApAssociateWords</span><span class="token punctuation">></span></span> <span class="token function">findByAssociateWordsStartingWithAndAndCreatedTimeLessThan</span><span class="token punctuation">(</span><span class="token class-name">String</span> prefix<span class="token punctuation">,</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


