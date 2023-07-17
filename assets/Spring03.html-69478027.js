const e=JSON.parse('{"key":"v-385c2350","path":"/src/%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/Spring03.html","title":"Spring03","lang":"zh-CN","frontmatter":{"description":"Spring03 一、AOP 1 AOP简介 问题导入 问题1：AOP的作用是什么？ 问题2：连接点和切入点有什么区别，二者谁的范围大？ 问题3：请描述什么是切面？ 1.1 AOP简介和作用【理解】 AOP(Aspect Oriented Programming)面向切面编程，一种编程范式，指导开发者如何组织程序结构 OOP(Object Oriented Programming)面向对象编程 作用：在不惊动原始设计的基础上为其进行功能增强。简单的说就是在不改变方法源代码的基础上对方法进行功能增强。 Spring理念：无入侵式/无侵入式","head":[["meta",{"property":"og:url","content":"https://github.com/Beisheng8888/blog/src/%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/Spring03.html"}],["meta",{"property":"og:site_name","content":"冀辉的博客"}],["meta",{"property":"og:title","content":"Spring03"}],["meta",{"property":"og:description","content":"Spring03 一、AOP 1 AOP简介 问题导入 问题1：AOP的作用是什么？ 问题2：连接点和切入点有什么区别，二者谁的范围大？ 问题3：请描述什么是切面？ 1.1 AOP简介和作用【理解】 AOP(Aspect Oriented Programming)面向切面编程，一种编程范式，指导开发者如何组织程序结构 OOP(Object Oriented Programming)面向对象编程 作用：在不惊动原始设计的基础上为其进行功能增强。简单的说就是在不改变方法源代码的基础上对方法进行功能增强。 Spring理念：无入侵式/无侵入式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-17T03:51:13.000Z"}],["meta",{"property":"article:author","content":"Mr.JH"}],["meta",{"property":"article:modified_time","content":"2023-07-17T03:51:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring03\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-17T03:51:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.JH\\",\\"url\\":\\"https://github.com/Beisheng8888\\"}]}"]]},"headers":[{"level":2,"title":"一、AOP","slug":"一、aop","link":"#一、aop","children":[{"level":3,"title":"1 AOP简介","slug":"_1-aop简介","link":"#_1-aop简介","children":[]},{"level":3,"title":"2 AOP入门案例【重点】","slug":"_2-aop入门案例【重点】","link":"#_2-aop入门案例【重点】","children":[]},{"level":3,"title":"3 AOP工作流程【理解】","slug":"_3-aop工作流程【理解】","link":"#_3-aop工作流程【理解】","children":[]},{"level":3,"title":"4 AOP切入点表达式","slug":"_4-aop切入点表达式","link":"#_4-aop切入点表达式","children":[]},{"level":3,"title":"5 AOP通知类型【重点】","slug":"_5-aop通知类型【重点】","link":"#_5-aop通知类型【重点】","children":[]}]},{"level":2,"title":"二、AOP案例","slug":"二、aop案例","link":"#二、aop案例","children":[{"level":3,"title":"1 案例-测量业务层接口万次执行效率","slug":"_1-案例-测量业务层接口万次执行效率","link":"#_1-案例-测量业务层接口万次执行效率","children":[]},{"level":3,"title":"2 AOP切入点数据获取","slug":"_2-aop切入点数据获取","link":"#_2-aop切入点数据获取","children":[]},{"level":3,"title":"3 案例-百度网盘密码数据兼容处理","slug":"_3-案例-百度网盘密码数据兼容处理","link":"#_3-案例-百度网盘密码数据兼容处理","children":[]},{"level":3,"title":"4 AOP开发总结","slug":"_4-aop开发总结","link":"#_4-aop开发总结","children":[]}]},{"level":2,"title":"三、Spring事务管理","slug":"三、spring事务管理","link":"#三、spring事务管理","children":[{"level":3,"title":"1 Spring事务简介【重点】","slug":"_1-spring事务简介【重点】","link":"#_1-spring事务简介【重点】","children":[]},{"level":3,"title":"2 Spring事务角色【理解】","slug":"_2-spring事务角色【理解】","link":"#_2-spring事务角色【理解】","children":[]},{"level":3,"title":"3 Spring事务相关配置","slug":"_3-spring事务相关配置","link":"#_3-spring事务相关配置","children":[]}]}],"git":{"createdTime":1689565133000,"updatedTime":1689565873000,"contributors":[{"name":"北省","email":"jih6666@126.com","commits":2}]},"readingTime":{"minutes":19.7,"words":5909},"filePathRelative":"src/基础框架/Spring03.md","localizedDate":"2023年7月17日","excerpt":"<h1> Spring03</h1>\\n<h2> 一、AOP</h2>\\n<h3> 1 AOP简介</h3>\\n<h4> 问题导入</h4>\\n<p>问题1：AOP的作用是什么？</p>\\n<p>问题2：连接点和切入点有什么区别，二者谁的范围大？</p>\\n<p>问题3：请描述什么是切面？</p>\\n<h4> 1.1 AOP简介和作用【理解】</h4>\\n<ul>\\n<li>AOP(Aspect Oriented Programming)面向切面编程，一种编程范式，指导开发者如何组织程序结构\\n<ul>\\n<li>OOP(Object Oriented Programming)面向对象编程</li>\\n</ul>\\n</li>\\n<li>作用：在不惊动原始设计的基础上为其进行功能增强。简单的说就是在不改变方法源代码的基础上对方法进行功能增强。</li>\\n<li>Spring理念：无入侵式/无侵入式</li>\\n</ul>","autoDesc":true}');export{e as data};