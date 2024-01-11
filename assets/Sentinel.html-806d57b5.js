const l=JSON.parse('{"key":"v-3d3d23f6","path":"/src/%E9%AB%98%E7%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1/Sentinel.html","title":"微服务保护","lang":"zh-CN","frontmatter":{"category":["高级微服务"],"tag":["Sentinel"],"description":"微服务保护 1.初识Sentinel 1.1.雪崩问题及解决方案 1.1.1.雪崩问题 微服务中，服务间调用关系错综复杂，一个微服务往往依赖于多个其它微服务。 1533829099748 如图，如果服务提供者I发生了故障，当前的应用的部分业务因为依赖于服务I，因此也会被阻塞。此时，其它不依赖于服务I的业务似乎不受影响。 1533829198240","head":[["meta",{"property":"og:url","content":"https://github.com/Beisheng8888/blog/src/%E9%AB%98%E7%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1/Sentinel.html"}],["meta",{"property":"og:site_name","content":"Mr.Jh"}],["meta",{"property":"og:title","content":"微服务保护"}],["meta",{"property":"og:description","content":"微服务保护 1.初识Sentinel 1.1.雪崩问题及解决方案 1.1.1.雪崩问题 微服务中，服务间调用关系错综复杂，一个微服务往往依赖于多个其它微服务。 1533829099748 如图，如果服务提供者I发生了故障，当前的应用的部分业务因为依赖于服务I，因此也会被阻塞。此时，其它不依赖于服务I的业务似乎不受影响。 1533829198240"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-19T01:48:53.000Z"}],["meta",{"property":"article:author","content":"Mr.Jh"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:modified_time","content":"2023-07-19T01:48:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微服务保护\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-19T01:48:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jh\\",\\"url\\":\\"https://github.com/Beisheng8888\\"}]}"]]},"headers":[{"level":2,"title":"1.1.雪崩问题及解决方案","slug":"_1-1-雪崩问题及解决方案","link":"#_1-1-雪崩问题及解决方案","children":[{"level":3,"title":"1.1.1.雪崩问题","slug":"_1-1-1-雪崩问题","link":"#_1-1-1-雪崩问题","children":[]},{"level":3,"title":"1.1.2.超时处理","slug":"_1-1-2-超时处理","link":"#_1-1-2-超时处理","children":[]},{"level":3,"title":"1.1.3.仓壁模式","slug":"_1-1-3-仓壁模式","link":"#_1-1-3-仓壁模式","children":[]},{"level":3,"title":"1.1.4.断路器","slug":"_1-1-4-断路器","link":"#_1-1-4-断路器","children":[]},{"level":3,"title":"1.1.5.限流","slug":"_1-1-5-限流","link":"#_1-1-5-限流","children":[]},{"level":3,"title":"1.1.6.总结","slug":"_1-1-6-总结","link":"#_1-1-6-总结","children":[]}]},{"level":2,"title":"1.2.服务保护技术对比","slug":"_1-2-服务保护技术对比","link":"#_1-2-服务保护技术对比","children":[]},{"level":2,"title":"1.3.Sentinel介绍和安装","slug":"_1-3-sentinel介绍和安装","link":"#_1-3-sentinel介绍和安装","children":[{"level":3,"title":"1.3.1.初识Sentinel","slug":"_1-3-1-初识sentinel","link":"#_1-3-1-初识sentinel","children":[]},{"level":3,"title":"1.3.2.安装Sentinel","slug":"_1-3-2-安装sentinel","link":"#_1-3-2-安装sentinel","children":[]}]},{"level":2,"title":"1.4.微服务整合Sentinel","slug":"_1-4-微服务整合sentinel","link":"#_1-4-微服务整合sentinel","children":[]},{"level":2,"title":"2.1.簇点链路","slug":"_2-1-簇点链路","link":"#_2-1-簇点链路","children":[]},{"level":2,"title":"2.1.快速入门","slug":"_2-1-快速入门","link":"#_2-1-快速入门","children":[{"level":3,"title":"2.1.1.示例","slug":"_2-1-1-示例","link":"#_2-1-1-示例","children":[]},{"level":3,"title":"2.1.2.练习：","slug":"_2-1-2-练习","link":"#_2-1-2-练习","children":[]}]},{"level":2,"title":"2.2.流控模式","slug":"_2-2-流控模式","link":"#_2-2-流控模式","children":[{"level":3,"title":"2.2.1.关联模式","slug":"_2-2-1-关联模式","link":"#_2-2-1-关联模式","children":[]},{"level":3,"title":"2.2.2.链路模式","slug":"_2-2-2-链路模式","link":"#_2-2-2-链路模式","children":[]},{"level":3,"title":"2.2.3.总结","slug":"_2-2-3-总结","link":"#_2-2-3-总结","children":[]}]},{"level":2,"title":"2.3.流控效果","slug":"_2-3-流控效果","link":"#_2-3-流控效果","children":[{"level":3,"title":"2.3.1.warm up","slug":"_2-3-1-warm-up","link":"#_2-3-1-warm-up","children":[]},{"level":3,"title":"2.3.2.排队等待","slug":"_2-3-2-排队等待","link":"#_2-3-2-排队等待","children":[]},{"level":3,"title":"2.3.3.总结","slug":"_2-3-3-总结","link":"#_2-3-3-总结","children":[]}]},{"level":2,"title":"2.4.热点参数限流","slug":"_2-4-热点参数限流","link":"#_2-4-热点参数限流","children":[{"level":3,"title":"2.4.1.全局参数限流","slug":"_2-4-1-全局参数限流","link":"#_2-4-1-全局参数限流","children":[]},{"level":3,"title":"2.4.2.热点参数限流","slug":"_2-4-2-热点参数限流","link":"#_2-4-2-热点参数限流","children":[]},{"level":3,"title":"2.4.4.案例","slug":"_2-4-4-案例","link":"#_2-4-4-案例","children":[]}]},{"level":2,"title":"3.1.FeignClient整合Sentinel","slug":"_3-1-feignclient整合sentinel","link":"#_3-1-feignclient整合sentinel","children":[{"level":3,"title":"3.1.1.修改配置，开启sentinel功能","slug":"_3-1-1-修改配置-开启sentinel功能","link":"#_3-1-1-修改配置-开启sentinel功能","children":[]},{"level":3,"title":"3.1.2.编写失败降级逻辑","slug":"_3-1-2-编写失败降级逻辑","link":"#_3-1-2-编写失败降级逻辑","children":[]},{"level":3,"title":"3.1.3.总结","slug":"_3-1-3-总结","link":"#_3-1-3-总结","children":[]}]},{"level":2,"title":"3.2.线程隔离（舱壁模式）","slug":"_3-2-线程隔离-舱壁模式","link":"#_3-2-线程隔离-舱壁模式","children":[{"level":3,"title":"3.2.1.线程隔离的实现方式","slug":"_3-2-1-线程隔离的实现方式","link":"#_3-2-1-线程隔离的实现方式","children":[]},{"level":3,"title":"3.2.2.sentinel的线程隔离","slug":"_3-2-2-sentinel的线程隔离","link":"#_3-2-2-sentinel的线程隔离","children":[]},{"level":3,"title":"3.2.3.总结","slug":"_3-2-3-总结","link":"#_3-2-3-总结","children":[]}]},{"level":2,"title":"3.3.熔断降级","slug":"_3-3-熔断降级","link":"#_3-3-熔断降级","children":[{"level":3,"title":"3.3.1.慢调用","slug":"_3-3-1-慢调用","link":"#_3-3-1-慢调用","children":[]},{"level":3,"title":"3.3.2.异常比例、异常数","slug":"_3-3-2-异常比例、异常数","link":"#_3-3-2-异常比例、异常数","children":[]}]},{"level":2,"title":"4.1.授权规则","slug":"_4-1-授权规则","link":"#_4-1-授权规则","children":[{"level":3,"title":"4.1.1.基本规则","slug":"_4-1-1-基本规则","link":"#_4-1-1-基本规则","children":[]},{"level":3,"title":"4.1.2.如何获取origin","slug":"_4-1-2-如何获取origin","link":"#_4-1-2-如何获取origin","children":[]},{"level":3,"title":"4.1.3.给网关添加请求头","slug":"_4-1-3-给网关添加请求头","link":"#_4-1-3-给网关添加请求头","children":[]},{"level":3,"title":"4.1.4.配置授权规则","slug":"_4-1-4-配置授权规则","link":"#_4-1-4-配置授权规则","children":[]}]},{"level":2,"title":"4.2.自定义异常结果","slug":"_4-2-自定义异常结果","link":"#_4-2-自定义异常结果","children":[{"level":3,"title":"4.2.1.异常类型","slug":"_4-2-1-异常类型","link":"#_4-2-1-异常类型","children":[]},{"level":3,"title":"4.2.2.自定义异常处理","slug":"_4-2-2-自定义异常处理","link":"#_4-2-2-自定义异常处理","children":[]}]},{"level":2,"title":"5.1.规则管理模式","slug":"_5-1-规则管理模式","link":"#_5-1-规则管理模式","children":[{"level":3,"title":"5.1.1.pull模式","slug":"_5-1-1-pull模式","link":"#_5-1-1-pull模式","children":[]},{"level":3,"title":"5.1.2.push模式","slug":"_5-1-2-push模式","link":"#_5-1-2-push模式","children":[]}]}],"git":{"createdTime":1689573143000,"updatedTime":1689731333000,"contributors":[{"name":"北省","email":"jih6666@126.com","commits":2}]},"readingTime":{"minutes":30.06,"words":9019},"filePathRelative":"src/高级微服务/Sentinel.md","localizedDate":"2023年7月17日","excerpt":"<h1> 微服务保护</h1>\\n<h1> 1.初识Sentinel</h1>\\n<h2> 1.1.雪崩问题及解决方案</h2>\\n<h3> 1.1.1.雪崩问题</h3>\\n<p>微服务中，服务间调用关系错综复杂，一个微服务往往依赖于多个其它微服务。</p>\\n<figure><figcaption>1533829099748</figcaption></figure>\\n<p>如图，如果服务提供者I发生了故障，当前的应用的部分业务因为依赖于服务I，因此也会被阻塞。此时，其它不依赖于服务I的业务似乎不受影响。</p>\\n<figure><figcaption>1533829198240</figcaption></figure>","autoDesc":true}');export{l as data};