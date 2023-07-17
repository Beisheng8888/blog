const e=JSON.parse('{"key":"v-3606a9ba","path":"/src/%E5%BF%85%E4%BC%9A%E5%B7%A5%E5%85%B7/Redis.html","title":"Redis基础","lang":"zh-CN","frontmatter":{"description":"Redis基础 Redis入门 Redis数据类型 Redis常用命令 在Java中操作Redis 1. 前言 1.1 什么是Redis Redis是一个基于内存的key-value结构数据库。Redis 是互联网技术领域使用最为广泛的存储中间件，它是「Remote Dictionary Service」的首字母缩写，也就是「远程字典服务」。","head":[["meta",{"property":"og:url","content":"https://github.com/Beisheng8888/blog/src/%E5%BF%85%E4%BC%9A%E5%B7%A5%E5%85%B7/Redis.html"}],["meta",{"property":"og:site_name","content":"冀辉的博客"}],["meta",{"property":"og:title","content":"Redis基础"}],["meta",{"property":"og:description","content":"Redis基础 Redis入门 Redis数据类型 Redis常用命令 在Java中操作Redis 1. 前言 1.1 什么是Redis Redis是一个基于内存的key-value结构数据库。Redis 是互联网技术领域使用最为广泛的存储中间件，它是「Remote Dictionary Service」的首字母缩写，也就是「远程字典服务」。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-17T06:02:51.000Z"}],["meta",{"property":"article:author","content":"Mr.JH"}],["meta",{"property":"article:modified_time","content":"2023-07-17T06:02:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-17T06:02:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.JH\\",\\"url\\":\\"https://github.com/Beisheng8888\\"}]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[{"level":3,"title":"1.1 什么是Redis","slug":"_1-1-什么是redis","link":"#_1-1-什么是redis","children":[]},{"level":3,"title":"1.2 使用Redis能做什么","slug":"_1-2-使用redis能做什么","link":"#_1-2-使用redis能做什么","children":[]}]},{"level":2,"title":"2. Redis入门","slug":"_2-redis入门","link":"#_2-redis入门","children":[{"level":3,"title":"2.1 Redis简介","slug":"_2-1-redis简介","link":"#_2-1-redis简介","children":[]},{"level":3,"title":"2.2 Redis下载与安装","slug":"_2-2-redis下载与安装","link":"#_2-2-redis下载与安装","children":[]},{"level":3,"title":"2.3 Redis服务启动与停止","slug":"_2-3-redis服务启动与停止","link":"#_2-3-redis服务启动与停止","children":[]},{"level":3,"title":"2.4 Redis配置文件","slug":"_2-4-redis配置文件","link":"#_2-4-redis配置文件","children":[]}]},{"level":2,"title":"3. Redis数据类型","slug":"_3-redis数据类型","link":"#_3-redis数据类型","children":[{"level":3,"title":"3.1 介绍","slug":"_3-1-介绍","link":"#_3-1-介绍","children":[]},{"level":3,"title":"3.2 Redis 5种常用数据类型","slug":"_3-2-redis-5种常用数据类型","link":"#_3-2-redis-5种常用数据类型","children":[]}]},{"level":2,"title":"4. Redis常用命令","slug":"_4-redis常用命令","link":"#_4-redis常用命令","children":[{"level":3,"title":"4.1 字符串string操作命令","slug":"_4-1-字符串string操作命令","link":"#_4-1-字符串string操作命令","children":[]},{"level":3,"title":"4.2 哈希hash操作命令","slug":"_4-2-哈希hash操作命令","link":"#_4-2-哈希hash操作命令","children":[]},{"level":3,"title":"4.3 列表list操作命令","slug":"_4-3-列表list操作命令","link":"#_4-3-列表list操作命令","children":[]},{"level":3,"title":"4.4 集合set操作命令","slug":"_4-4-集合set操作命令","link":"#_4-4-集合set操作命令","children":[]},{"level":3,"title":"4.5 有序集合sorted set操作命令","slug":"_4-5-有序集合sorted-set操作命令","link":"#_4-5-有序集合sorted-set操作命令","children":[]},{"level":3,"title":"4.6 通用命令","slug":"_4-6-通用命令","link":"#_4-6-通用命令","children":[]}]},{"level":2,"title":"5. 在Java中操作Redis","slug":"_5-在java中操作redis","link":"#_5-在java中操作redis","children":[{"level":3,"title":"5.1 介绍","slug":"_5-1-介绍","link":"#_5-1-介绍","children":[]},{"level":3,"title":"5.2 Jedis","slug":"_5-2-jedis","link":"#_5-2-jedis","children":[]},{"level":3,"title":"5.3 Spring Data Redis","slug":"_5-3-spring-data-redis","link":"#_5-3-spring-data-redis","children":[]}]}],"git":{"createdTime":1689573771000,"updatedTime":1689573771000,"contributors":[{"name":"北省","email":"jih6666@126.com","commits":1}]},"readingTime":{"minutes":13.01,"words":3904},"filePathRelative":"src/必会工具/Redis.md","localizedDate":"2023年7月17日","excerpt":"<h1> Redis基础</h1>\\n<ul>\\n<li>Redis入门</li>\\n<li>Redis数据类型</li>\\n<li>Redis常用命令</li>\\n<li>在Java中操作Redis</li>\\n</ul>\\n<h2> 1. 前言</h2>\\n<h3> 1.1 什么是Redis</h3>\\n<p>Redis是一个基于<strong>内存</strong>的key-value结构数据库。Redis 是互联网技术领域使用最为广泛的存储中间件，它是「<strong>Re</strong>mote <strong>Di</strong>ctionary <strong>S</strong>ervice」的首字母缩写，也就是「远程字典服务」。</p>","autoDesc":true}');export{e as data};
