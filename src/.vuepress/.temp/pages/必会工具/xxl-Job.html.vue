<template><div><h1 id="xxl-job分布式任务调度" tabindex="-1"><a class="header-anchor" href="#xxl-job分布式任务调度" aria-hidden="true">#</a> xxl-Job分布式任务调度</h1>
<h2 id="_1-1-什么是分布式任务调度" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是分布式任务调度" aria-hidden="true">#</a> 1.1 什么是分布式任务调度</h2>
<p>当前软件的架构已经开始向分布式架构转变，将单体结构拆分为若干服务，服务之间通过网络交互来完成业务处理。在分布式架构下，一个服务往往会部署多个实例来运行我们的业务，如果在这种分布式系统环境下运行任务调度，我们称之为<strong>分布式任务调度</strong>。</p>
<p><img src="@source/必会工具/assets/image-20210729230059884.png" alt="image-20210729230059884"></p>
<p>将任务调度程序分布式构建，这样就可以具有分布式系统的特点，并且提高任务的调度处理能力：</p>
<p>1、并行任务调度</p>
<p>并行任务调度实现靠多线程，如果有大量任务需要调度，此时光靠多线程就会有瓶颈了，因为一台计算机CPU的处理能力是有限的。</p>
<p>如果将任务调度程序分布式部署，每个结点还可以部署为集群，这样就可以让多台计算机共同去完成任务调度，我们可以将任务分割为若干个分片，由不同的实例并行执行，来提高任务调度的处理效率。</p>
<p>2、高可用</p>
<p>若某一个实例宕机，不影响其他实例来执行任务。</p>
<p>3、弹性扩容</p>
<p>当集群中增加实例就可以提高并执行任务的处理效率。</p>
<p>4、任务管理与监测</p>
<p>对系统中存在的所有定时任务进行统一的管理及监测。让开发人员及运维人员能够时刻了解任务执行情况，从而做出快速的应急处理响应。</p>
<p><strong>分布式任务调度面临的问题：</strong></p>
<p>当任务调度以集群方式部署，同一个任务调度可能会执行多次，例如：电商系统定期发放优惠券，就可能重复发放优惠券，对公司造成损失，信用卡还款提醒就会重复执行多次，给用户造成烦恼，所以我们需要控制相同的任务在多个运行实例上只执行一次。常见解决方案：</p>
<ul>
<li>分布式锁，多个实例在任务执行前首先需要获取锁，如果获取失败那么就证明有其他服务已经在运行，如果获取成功那么证明没有服务在运行定时任务，那么就可以执行。</li>
<li>ZooKeeper选举，利用ZooKeeper对Leader实例执行定时任务，执行定时任务的时候判断自己是否是Leader，如果不是则不执行，如果是则执行业务逻辑，这样也能达到目的。</li>
</ul>
<h2 id="_1-2-xxl-job简介" tabindex="-1"><a class="header-anchor" href="#_1-2-xxl-job简介" aria-hidden="true">#</a> 1.2 xxl-Job简介</h2>
<p>针对分布式任务调度的需求，市场上出现了很多的产品：</p>
<p>1） TBSchedule：淘宝推出的一款非常优秀的高性能分布式调度框架，目前被应用于阿里、京东、支付宝、国美等很多互联网企业的流程调度系统中。但是已经多年未更新，文档缺失严重，缺少维护。</p>
<p>2） XXL-Job：大众点评的分布式任务调度平台，是一个轻量级分布式任务调度平台, 其核心设计目标是开发迅速、学习简单、轻量级、易扩展。现已开放源代码并接入多家公司线上产品线，开箱即用。</p>
<p>3）Elastic-job：当当网借鉴TBSchedule并基于quartz 二次开发的弹性分布式任务调度系统，功能丰富强大，采用zookeeper实现分布式协调，具有任务高可用以及分片功能。</p>
<p>4）Saturn： 唯品会开源的一个分布式任务调度平台，基于Elastic-job，可以全域统一配置，统一监
控，具有任务高可用以及分片功能。</p>
<p>XXL-JOB是一个分布式任务调度平台，其核心设计目标是开发迅速、学习简单、轻量级、易扩展。现已开放源代码并接入多家公司线上产品线，开箱即用。</p>
<p>源码地址：https://gitee.com/xuxueli0323/xxl-job</p>
<p>文档地址：https://www.xuxueli.com/xxl-job/</p>
<p><strong>特性</strong></p>
<ul>
<li><strong>简单灵活</strong>
提供Web页面对任务进行管理，管理系统支持用户管理、权限控制；
支持容器部署；
支持通过通用HTTP提供跨平台任务调度；</li>
<li><strong>丰富的任务管理功能</strong>
支持页面对任务CRUD操作；
支持在页面编写脚本任务、命令行任务、Java代码任务并执行；
支持任务级联编排，父任务执行结束后触发子任务执行；
支持设置指定任务执行节点路由策略，包括轮询、随机、广播、故障转移、忙碌转移等；
支持Cron方式、任务依赖、调度中心API接口方式触发任务执行</li>
<li><strong>高性能</strong>
任务调度流程全异步化设计实现，如异步调度、异步运行、异步回调等，有效对密集调度进行流量削峰；</li>
<li><strong>高可用</strong>
任务调度中心、任务执行节点均 集群部署，支持动态扩展、故障转移
支持任务配置路由故障转移策略，执行器节点不可用是自动转移到其他节点执行
支持任务超时控制、失败重试配置
支持任务处理阻塞策略：调度当任务执行节点忙碌时来不及执行任务的处理策略，包括：串行、抛弃、覆盖策略</li>
<li><strong>易于监控运维</strong>
支持设置任务失败邮件告警，预留接口支持短信、钉钉告警；
支持实时查看任务执行运行数据统计图表、任务进度监控数据、任务完整执行日志；</li>
</ul>
<h2 id="_1-3-xxl-job-环境搭建" tabindex="-1"><a class="header-anchor" href="#_1-3-xxl-job-环境搭建" aria-hidden="true">#</a> 1.3 XXL-Job-环境搭建</h2>
<h3 id="_1-3-1-调度中心环境要求" tabindex="-1"><a class="header-anchor" href="#_1-3-1-调度中心环境要求" aria-hidden="true">#</a> 1.3.1 调度中心环境要求</h3>
<ul>
<li>Maven3+</li>
<li>Jdk1.8+</li>
<li>Mysql5.7+</li>
</ul>
<h3 id="_1-3-2-源码仓库地址" tabindex="-1"><a class="header-anchor" href="#_1-3-2-源码仓库地址" aria-hidden="true">#</a> 1.3.2 源码仓库地址</h3>
<table>
<thead>
<tr>
<th style="text-align:left">源码仓库地址</th>
<th style="text-align:left">Release Download</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">https://github.com/xuxueli/xxl-job</td>
<td style="text-align:left"><a href="https://github.com/xuxueli/xxl-job/releases" target="_blank" rel="noopener noreferrer">Download<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">http://gitee.com/xuxueli0323/xxl-job</td>
<td style="text-align:left"><a href="http://gitee.com/xuxueli0323/xxl-job/releases" target="_blank" rel="noopener noreferrer">Download<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>也可以使用资料文件夹中的源码</p>
<h3 id="_1-3-3-初始化-调度数据库" tabindex="-1"><a class="header-anchor" href="#_1-3-3-初始化-调度数据库" aria-hidden="true">#</a> 1.3.3 初始化“调度数据库”</h3>
<p>请下载项目源码并解压，获取 “调度数据库初始化SQL脚本” 并执行即可。</p>
<p>位置：<code v-pre>/xxl-job/doc/db/tables_xxl_job.sql</code>  共8张表</p>
<p><img src="@source/必会工具/assets/image-20210730001433997.png" alt="image-20210730001433997"></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">-</span> xxl_job_lock：任务调度锁表；
<span class="token operator">-</span> xxl_job_group：执行器信息表，维护任务执行器信息；
<span class="token operator">-</span> xxl_job_info：调度扩展信息表： 用于保存<span class="token constant">XXL</span><span class="token operator">-</span><span class="token constant">JOB</span>调度任务的扩展信息，如任务分组、任务名、机器地址、执行器、执行入参和报警邮件等等；
<span class="token operator">-</span> xxl_job_log：调度日志表： 用于保存<span class="token constant">XXL</span><span class="token operator">-</span><span class="token constant">JOB</span>任务调度的历史信息，如调度结果、执行结果、调度入参、调度机器和执行器等等；
<span class="token operator">-</span> xxl_job_logglue：任务<span class="token constant">GLUE</span>日志：用于保存<span class="token constant">GLUE</span>更新历史，用于支持<span class="token constant">GLUE</span>的版本回溯功能；
<span class="token operator">-</span> xxl_job_registry：执行器注册表，维护在线的执行器和调度中心机器地址信息；
<span class="token operator">-</span> xxl_job_user：系统用户表；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调度中心支持集群部署，集群情况下各节点务必连接同一个mysql实例;</p>
<p>如果mysql做主从,调度中心集群节点务必强制走主库;</p>
<h3 id="_1-3-4-编译源码" tabindex="-1"><a class="header-anchor" href="#_1-3-4-编译源码" aria-hidden="true">#</a> 1.3.4 编译源码</h3>
<p>解压源码,按照maven格式将源码导入IDE, 使用maven进行编译即可，源码结构如下：</p>
<p><img src="@source/必会工具/assets/image-20210729230502703.png" alt="image-20210729230502703"></p>
<h3 id="_1-3-5-配置部署-调度中心" tabindex="-1"><a class="header-anchor" href="#_1-3-5-配置部署-调度中心" aria-hidden="true">#</a> 1.3.5 配置部署“调度中心”</h3>
<p>调度中心项目：xxl-job-admin</p>
<p>作用：统一管理任务调度平台上调度任务，负责触发调度执行，并且提供任务管理平台。</p>
<p>步骤一：调度中心配置</p>
<p>调度中心配置文件地址：<code v-pre>/xxl-job/xxl-job-admin/src/main/resources/application.properties</code></p>
<p>数据库的连接信息修改为自己的数据库</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment">### web</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8888</span>
<span class="token key attr-name">server.servlet.context-path</span><span class="token punctuation">=</span><span class="token value attr-value">/xxl-job-admin</span>

<span class="token comment">### actuator</span>
<span class="token key attr-name">management.server.servlet.context-path</span><span class="token punctuation">=</span><span class="token value attr-value">/actuator</span>
<span class="token key attr-name">management.health.mail.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token comment">### resources</span>
<span class="token key attr-name">spring.mvc.servlet.load-on-startup</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">spring.mvc.static-path-pattern</span><span class="token punctuation">=</span><span class="token value attr-value">/static/**</span>
<span class="token key attr-name">spring.resources.static-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/static/</span>

<span class="token comment">### freemarker</span>
<span class="token key attr-name">spring.freemarker.templateLoaderPath</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/templates/</span>
<span class="token key attr-name">spring.freemarker.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">.ftl</span>
<span class="token key attr-name">spring.freemarker.charset</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8</span>
<span class="token key attr-name">spring.freemarker.request-context-attribute</span><span class="token punctuation">=</span><span class="token value attr-value">request</span>
<span class="token key attr-name">spring.freemarker.settings.number_format</span><span class="token punctuation">=</span><span class="token value attr-value">0.##########</span>

<span class="token comment">### mybatis</span>
<span class="token key attr-name">mybatis.mapper-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/mybatis-mapper/*Mapper.xml</span>
<span class="token comment">#mybatis.type-aliases-package=com.xxl.job.admin.core.model</span>

<span class="token comment">### xxl-job, datasource</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/xxl_job?Unicode=true&amp;serverTimezone=Asia/Shanghai&amp;characterEncoding=UTF-8</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>

<span class="token comment">### datasource-pool</span>
<span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.zaxxer.hikari.HikariDataSource</span>
<span class="token key attr-name">spring.datasource.hikari.minimum-idle</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">spring.datasource.hikari.maximum-pool-size</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">spring.datasource.hikari.auto-commit</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.datasource.hikari.idle-timeout</span><span class="token punctuation">=</span><span class="token value attr-value">30000</span>
<span class="token key attr-name">spring.datasource.hikari.pool-name</span><span class="token punctuation">=</span><span class="token value attr-value">HikariCP</span>
<span class="token key attr-name">spring.datasource.hikari.max-lifetime</span><span class="token punctuation">=</span><span class="token value attr-value">900000</span>
<span class="token key attr-name">spring.datasource.hikari.connection-timeout</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">spring.datasource.hikari.connection-test-query</span><span class="token punctuation">=</span><span class="token value attr-value">SELECT 1</span>

<span class="token comment">### xxl-job, email</span>
<span class="token key attr-name">spring.mail.host</span><span class="token punctuation">=</span><span class="token value attr-value">smtp.qq.com</span>
<span class="token key attr-name">spring.mail.port</span><span class="token punctuation">=</span><span class="token value attr-value">25</span>
<span class="token key attr-name">spring.mail.username</span><span class="token punctuation">=</span><span class="token value attr-value">xxx@qq.com</span>
<span class="token key attr-name">spring.mail.password</span><span class="token punctuation">=</span><span class="token value attr-value">xxx</span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.auth</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.starttls.enable</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.starttls.required</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.mail.properties.mail.smtp.socketFactory.class</span><span class="token punctuation">=</span><span class="token value attr-value">javax.net.ssl.SSLSocketFactory</span>

<span class="token comment">### xxl-job, access token</span>
<span class="token key attr-name">xxl.job.accessToken</span><span class="token punctuation">=</span>

<span class="token comment">### xxl-job, i18n (default is zh_CN, and you can choose "zh_CN", "zh_TC" and "en")</span>
<span class="token key attr-name">xxl.job.i18n</span><span class="token punctuation">=</span><span class="token value attr-value">zh_CN</span>

<span class="token comment">## xxl-job, triggerpool max size</span>
<span class="token key attr-name">xxl.job.triggerpool.fast.max</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token key attr-name">xxl.job.triggerpool.slow.max</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>

<span class="token comment">### xxl-job, log retention days</span>
<span class="token key attr-name">xxl.job.logretentiondays</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动调度中心，默认登录账号 “admin/123456”, 登录后运行界面如下图所示。</p>
<p><img src="@source/必会工具/assets/image-20210729230630495.png" alt="image-20210729230630495"></p>
<h2 id="_1-4-配置部署调度中心-docker安装" tabindex="-1"><a class="header-anchor" href="#_1-4-配置部署调度中心-docker安装" aria-hidden="true">#</a> 1.4 配置部署调度中心-docker安装</h2>
<p>1.创建mysql容器，初始化xxl-job的SQL脚本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql57 <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /opt/mysql/conf:/etc/mysql <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /opt/mysql/logs:/var/log/mysql <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /opt/mysql/data:/var/lib/mysql <span class="token punctuation">\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\</span>
<span class="token parameter variable">-d</span> mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.拉取镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull xuxueli/xxl-job-admin:2.3.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.创建容器</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-e</span> <span class="token assign-left variable">PARAMS</span><span class="token operator">=</span><span class="token string">"--spring.datasource.url=jdbc:mysql://192.168.200.130:3306/xxl_job?Unicode=true&amp;characterEncoding=UTF-8 \
--spring.datasource.username=root \
--spring.datasource.password=root"</span> <span class="token punctuation">\</span>
<span class="token parameter variable">-p</span> <span class="token number">8888</span>:8080 <span class="token parameter variable">-v</span> /tmp:/data/applogs <span class="token punctuation">\</span>
<span class="token parameter variable">--name</span> xxl-job-admin <span class="token parameter variable">--restart</span><span class="token operator">=</span>always  <span class="token parameter variable">-d</span> xuxueli/xxl-job-admin:2.3.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-xxl-job入门案例编写" tabindex="-1"><a class="header-anchor" href="#_1-5-xxl-job入门案例编写" aria-hidden="true">#</a> 1.5 xxl-job入门案例编写</h2>
<h3 id="_1-5-1-登录调度中心-点击下图所示-新建任务-按钮-新建示例任务" tabindex="-1"><a class="header-anchor" href="#_1-5-1-登录调度中心-点击下图所示-新建任务-按钮-新建示例任务" aria-hidden="true">#</a> 1.5.1 登录调度中心，点击下图所示“新建任务”按钮，新建示例任务</h3>
<p><img src="@source/必会工具/assets/image-20210729232146585.png" alt="image-20210729232146585"></p>
<h3 id="_1-5-2-创建xxljob-demo项目-导入依赖" tabindex="-1"><a class="header-anchor" href="#_1-5-2-创建xxljob-demo项目-导入依赖" aria-hidden="true">#</a> 1.5.2 创建xxljob-demo项目，导入依赖</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--xxl-job--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.xuxueli<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>xxl-job-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-3-application-yml配置" tabindex="-1"><a class="header-anchor" href="#_1-5-3-application-yml配置" aria-hidden="true">#</a> 1.5.3 application.yml配置</h3>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8881</span>


<span class="token key atrule">xxl</span><span class="token punctuation">:</span>
  <span class="token key atrule">job</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.200.130<span class="token punctuation">:</span>8888/xxl<span class="token punctuation">-</span>job<span class="token punctuation">-</span>admin
    <span class="token key atrule">executor</span><span class="token punctuation">:</span>
      <span class="token key atrule">appname</span><span class="token punctuation">:</span> xxl<span class="token punctuation">-</span>job<span class="token punctuation">-</span>executor<span class="token punctuation">-</span>sample
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9999</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-4-新建配置类" tabindex="-1"><a class="header-anchor" href="#_1-5-4-新建配置类" aria-hidden="true">#</a> 1.5.4 新建配置类</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>beisheng<span class="token punctuation">.</span>xxljob<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xxl<span class="token punctuation">.</span>job<span class="token punctuation">.</span>core<span class="token punctuation">.</span>executor<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">XxlJobSpringExecutor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * xxl-job config
 *
 * <span class="token keyword">@author</span> xuxueli 2017-04-28
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XxlJobConfig</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">XxlJobConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${xxl.job.admin.addresses}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> adminAddresses<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${xxl.job.executor.appname}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> appname<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${xxl.job.executor.port}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> port<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">XxlJobSpringExecutor</span> <span class="token function">xxlJobExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">">>>>>>>>>>> xxl-job config init."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">XxlJobSpringExecutor</span> xxlJobSpringExecutor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XxlJobSpringExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setAdminAddresses</span><span class="token punctuation">(</span>adminAddresses<span class="token punctuation">)</span><span class="token punctuation">;</span>
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setAppname</span><span class="token punctuation">(</span>appname<span class="token punctuation">)</span><span class="token punctuation">;</span>
        xxlJobSpringExecutor<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xxlJobSpringExecutor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-4-任务代码-重要注解-xxljob-jobhandler" tabindex="-1"><a class="header-anchor" href="#_1-5-4-任务代码-重要注解-xxljob-jobhandler" aria-hidden="true">#</a> 1.5.4 任务代码，重要注解:@XxlJob(“<strong>JobHandler</strong>”)</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>beisheng<span class="token punctuation">.</span>xxljob<span class="token punctuation">.</span>job</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xxl<span class="token punctuation">.</span>job<span class="token punctuation">.</span>core<span class="token punctuation">.</span>handler<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">XxlJob</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloJob</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@XxlJob</span><span class="token punctuation">(</span><span class="token string">"demoJobHandler"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">helloJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"简单任务执行了。。。。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-5-测试-单节点" tabindex="-1"><a class="header-anchor" href="#_1-5-5-测试-单节点" aria-hidden="true">#</a> 1.5.5 测试-单节点</h3>
<ul>
<li>
<p>启动微服务</p>
</li>
<li>
<p>在xxl-job的调度中心中启动任务</p>
</li>
</ul>
<h2 id="_1-6-任务详解-执行器" tabindex="-1"><a class="header-anchor" href="#_1-6-任务详解-执行器" aria-hidden="true">#</a> 1.6 任务详解-执行器</h2>
<ul>
<li>
<p>执行器：任务的绑定的执行器，任务触发调度时将会自动发现注册成功的执行器, 实现任务自动发现功能;</p>
</li>
<li>
<p>另一方面也可以方便的进行任务分组。每个任务必须绑定一个执行器</p>
</li>
</ul>
<p><img src="@source/必会工具/assets/image-20210729232926534.png" alt="image-20210729232926534"></p>
<p><img src="@source/必会工具/assets/image-20210729232825564.png" alt="image-20210729232825564"></p>
<p>以下是执行器的属性说明：</p>
<table>
<thead>
<tr>
<th>属性名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>AppName</td>
<td>是每个执行器集群的唯一标示AppName, 执行器会周期性以AppName为对象进行自动注册。可通过该配置自动发现注册成功的执行器, 供任务调度时使用;</td>
</tr>
<tr>
<td>名称</td>
<td>执行器的名称, 因为AppName限制字母数字等组成,可读性不强, 名称为了提高执行器的可读性;</td>
</tr>
<tr>
<td>排序</td>
<td>执行器的排序, 系统中需要执行器的地方,如任务新增, 将会按照该排序读取可用的执行器列表;</td>
</tr>
<tr>
<td>注册方式</td>
<td>调度中心获取执行器地址的方式；</td>
</tr>
<tr>
<td>机器地址</td>
<td>注册方式为&quot;手动录入&quot;时有效，支持人工维护执行器的地址信息；</td>
</tr>
</tbody>
</table>
<p>自动注册和手动注册的区别和配置</p>
<p><img src="@source/必会工具/assets/image-20210729233016355.png" alt="image-20210729233016355"></p>
<h2 id="_1-7-任务详解-基础配置" tabindex="-1"><a class="header-anchor" href="#_1-7-任务详解-基础配置" aria-hidden="true">#</a> 1.7 任务详解-基础配置</h2>
<p><img src="@source/必会工具/assets/image-20210729233926457.png" alt="image-20210729233926457"></p>
<p><strong>基础配置</strong></p>
<ul>
<li>
<p>执行器：每个任务必须绑定一个执行器, 方便给任务进行分组</p>
</li>
<li>
<p>任务描述：任务的描述信息，便于任务管理；</p>
</li>
<li>
<p>负责人：任务的负责人；</p>
</li>
<li>
<p>报警邮件：任务调度失败时邮件通知的邮箱地址，支持配置多邮箱地址，配置多个邮箱地址时用逗号分隔</p>
</li>
</ul>
<p><img src="@source/必会工具/assets/image-20210729234009010.png" alt="image-20210729234009010"></p>
<p><strong>调度配置</strong></p>
<ul>
<li>调度类型：
<ul>
<li>无：该类型不会主动触发调度；</li>
<li>CRON：该类型将会通过CRON，触发任务调度；</li>
<li>固定速度：该类型将会以固定速度，触发任务调度；按照固定的间隔时间，周期性触发；</li>
</ul>
</li>
</ul>
<p><img src="@source/必会工具/assets/image-20210729234114283.png" alt="image-20210729234114283"></p>
<p><strong>任务配置</strong></p>
<ul>
<li>运行模式：</li>
</ul>
<p>​    BEAN模式：任务以JobHandler方式维护在执行器端；需要结合 &quot;JobHandler&quot; 属性匹配执行器中任务；</p>
<ul>
<li>
<p>JobHandler：运行模式为 &quot;BEAN模式&quot; 时生效，对应执行器中新开发的JobHandler类“@JobHandler”注解自定义的value值；</p>
</li>
<li>
<p>执行参数：任务执行所需的参数；</p>
</li>
</ul>
<p><img src="@source/必会工具/assets/image-20210729234219162.png" alt="image-20210729234219162"></p>
<p><strong>阻塞处理策略</strong></p>
<p>阻塞处理策略：调度过于密集执行器来不及处理时的处理策略；</p>
<ul>
<li>
<p>单机串行（默认）：调度请求进入单机执行器后，调度请求进入FIFO(First Input First Output)队列并以串行方式运行；</p>
</li>
<li>
<p>丢弃后续调度：调度请求进入单机执行器后，发现执行器存在运行的调度任务，本次请求将会被丢弃并标记为失败；</p>
</li>
<li>
<p>覆盖之前调度：调度请求进入单机执行器后，发现执行器存在运行的调度任务，将会终止运行中的调度任务并清空队列，然后运行本地调度任务；</p>
</li>
</ul>
<p><img src="@source/必会工具/assets/image-20210729234256062.png" alt="image-20210729234256062"></p>
<p><strong>路由策略</strong></p>
<p>当执行器集群部署时，提供丰富的路由策略，包括；</p>
<ul>
<li>
<p>FIRST（第一个）：固定选择第一个机器；</p>
</li>
<li>
<p>LAST（最后一个）：固定选择最后一个机器；</p>
</li>
<li>
<p><strong>ROUND（轮询）</strong></p>
</li>
<li>
<p>RANDOM（随机）：随机选择在线的机器；</p>
</li>
<li>
<p>CONSISTENT_HASH（一致性HASH）：每个任务按照Hash算法固定选择某一台机器，且所有任务均匀散列在不同机器上。</p>
</li>
<li>
<p>LEAST_FREQUENTLY_USED（最不经常使用）：使用频率最低的机器优先被选举；</p>
</li>
<li>
<p>LEAST_RECENTLY_USED（最近最久未使用）：最久未使用的机器优先被选举；</p>
</li>
<li>
<p>FAILOVER（故障转移）：按照顺序依次进行心跳检测，第一个心跳检测成功的机器选定为目标执行器并发起调度；</p>
</li>
<li>
<p>BUSYOVER（忙碌转移）：按照顺序依次进行空闲检测，第一个空闲检测成功的机器选定为目标执行器并发起调度；</p>
</li>
<li>
<p><strong>SHARDING_BROADCAST(分片广播)：广播触发对应集群中所有机器执行一次任务，同时系统自动传递分片参数；可根据分片参数开发分片任务；</strong></p>
</li>
</ul>
<p><img src="@source/必会工具/assets/image-20210729234409132.png" alt="image-20210729234409132"></p>
<h2 id="_1-8-路由策略-轮询-案例" tabindex="-1"><a class="header-anchor" href="#_1-8-路由策略-轮询-案例" aria-hidden="true">#</a> 1.8 路由策略(轮询)-案例</h2>
<p>1.修改任务为轮询</p>
<p><img src="@source/必会工具/assets/image-20210729234513775.png" alt="image-20210729234513775"></p>
<p>2.启动多个微服务</p>
<p><img src="@source/必会工具/assets/image-20210729234536483.png" alt="image-20210729234536483"></p>
<p>修改yml配置文件</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>port<span class="token punctuation">:</span><span class="token number">8881</span><span class="token punctuation">}</span>


<span class="token key atrule">xxl</span><span class="token punctuation">:</span>
  <span class="token key atrule">job</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.200.130<span class="token punctuation">:</span>8888/xxl<span class="token punctuation">-</span>job<span class="token punctuation">-</span>admin
    <span class="token key atrule">executor</span><span class="token punctuation">:</span>
      <span class="token key atrule">appname</span><span class="token punctuation">:</span> xxl<span class="token punctuation">-</span>job<span class="token punctuation">-</span>executor<span class="token punctuation">-</span>sample
      <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>executor.port<span class="token punctuation">:</span><span class="token number">9999</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.启动多个微服务</p>
<p>每个微服务轮询的去执行任务</p>
<h2 id="_1-9-路由策略-分片广播" tabindex="-1"><a class="header-anchor" href="#_1-9-路由策略-分片广播" aria-hidden="true">#</a> 1.9 路由策略(分片广播)</h2>
<h3 id="_1-9-1-分片逻辑" tabindex="-1"><a class="header-anchor" href="#_1-9-1-分片逻辑" aria-hidden="true">#</a> 1.9.1 分片逻辑</h3>
<p>执行器集群部署时，任务路由策略选择”分片广播”情况下，一次任务调度将会广播触发对应集群中所有执行器执行一次任务</p>
<p><img src="@source/必会工具/assets/image-20210729234756221.png" alt="image-20210729234756221"></p>
<p>执行器集群部署时，任务路由策略选择”分片广播”情况下，一次任务调度将会广播触发对应集群中所有执行器执行一次任务</p>
<p><img src="@source/必会工具/assets/image-20210729234822935.png" alt="image-20210729234822935"></p>
<h3 id="_1-9-2-路由策略-分片广播-案例" tabindex="-1"><a class="header-anchor" href="#_1-9-2-路由策略-分片广播-案例" aria-hidden="true">#</a> 1.9.2 路由策略(分片广播)-案例</h3>
<p>需求：让两个节点同时执行10000个任务，每个节点分别执行5000个任务</p>
<p>①：创建分片执行器</p>
<p><img src="@source/必会工具/assets/image-20210729234930218.png" alt="image-20210729234930218"></p>
<p>②：创建任务，路由策略为分片广播</p>
<p><img src="@source/必会工具/assets/image-20210729234948571.png" alt="image-20210729234948571"></p>
<p>③：分片广播代码</p>
<p>分片参数</p>
<p>​     index：当前分片序号(从0开始)，执行器集群列表中当前执行器的序号；</p>
<p>​     total：总分片数，执行器集群的总机器数量；</p>
<p>修改yml配置</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>port<span class="token punctuation">:</span><span class="token number">8881</span><span class="token punctuation">}</span>


<span class="token key atrule">xxl</span><span class="token punctuation">:</span>
  <span class="token key atrule">job</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.200.130<span class="token punctuation">:</span>8888/xxl<span class="token punctuation">-</span>job<span class="token punctuation">-</span>admin
    <span class="token key atrule">executor</span><span class="token punctuation">:</span>
      <span class="token key atrule">appname</span><span class="token punctuation">:</span> xxl<span class="token punctuation">-</span>job<span class="token punctuation">-</span>sharding<span class="token punctuation">-</span>executor
      <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>executor.port<span class="token punctuation">:</span><span class="token number">9999</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>beisheng<span class="token punctuation">.</span>xxljob<span class="token punctuation">.</span>job</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xxl<span class="token punctuation">.</span>job<span class="token punctuation">.</span>core<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">XxlJobHelper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xxl<span class="token punctuation">.</span>job<span class="token punctuation">.</span>core<span class="token punctuation">.</span>handler<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">XxlJob</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloJob</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${server.port}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> port<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@XxlJob</span><span class="token punctuation">(</span><span class="token string">"demoJobHandler"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">helloJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"简单任务执行了。。。。"</span><span class="token operator">+</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@XxlJob</span><span class="token punctuation">(</span><span class="token string">"shardingJobHandler"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shardingJobHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//分片的参数</span>
        <span class="token keyword">int</span> shardIndex <span class="token operator">=</span> <span class="token class-name">XxlJobHelper</span><span class="token punctuation">.</span><span class="token function">getShardIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> shardTotal <span class="token operator">=</span> <span class="token class-name">XxlJobHelper</span><span class="token punctuation">.</span><span class="token function">getShardTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//业务逻辑</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> integer <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>integer <span class="token operator">%</span> shardTotal <span class="token operator">==</span> shardIndex<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前第"</span><span class="token operator">+</span>shardIndex<span class="token operator">+</span><span class="token string">"分片执行了，任务项为："</span><span class="token operator">+</span>integer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


