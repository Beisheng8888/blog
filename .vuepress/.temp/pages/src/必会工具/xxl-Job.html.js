export const data = JSON.parse("{\"key\":\"v-69630422\",\"path\":\"/src/%E5%BF%85%E4%BC%9A%E5%B7%A5%E5%85%B7/xxl-Job.html\",\"title\":\"xxl-Job分布式任务调度\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"必备组件\"],\"description\":\"xxl-Job分布式任务调度 1.1 什么是分布式任务调度 当前软件的架构已经开始向分布式架构转变，将单体结构拆分为若干服务，服务之间通过网络交互来完成业务处理。在分布式架构下，一个服务往往会部署多个实例来运行我们的业务，如果在这种分布式系统环境下运行任务调度，我们称之为分布式任务调度。 image-20210729230059884 将任务调度程序分布式构建，这样就可以具有分布式系统的特点，并且提高任务的调度处理能力：\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/Beisheng8888/blog/src/%E5%BF%85%E4%BC%9A%E5%B7%A5%E5%85%B7/xxl-Job.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Jh\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"xxl-Job分布式任务调度\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"xxl-Job分布式任务调度 1.1 什么是分布式任务调度 当前软件的架构已经开始向分布式架构转变，将单体结构拆分为若干服务，服务之间通过网络交互来完成业务处理。在分布式架构下，一个服务往往会部署多个实例来运行我们的业务，如果在这种分布式系统环境下运行任务调度，我们称之为分布式任务调度。 image-20210729230059884 将任务调度程序分布式构建，这样就可以具有分布式系统的特点，并且提高任务的调度处理能力：\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-07-18T07:48:56.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Jh\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-07-18T07:48:56.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"xxl-Job分布式任务调度\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-07-18T07:48:56.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Jh\\\",\\\"url\\\":\\\"https://github.com/Beisheng8888\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.1 什么是分布式任务调度\",\"slug\":\"_1-1-什么是分布式任务调度\",\"link\":\"#_1-1-什么是分布式任务调度\",\"children\":[]},{\"level\":2,\"title\":\"1.2 xxl-Job简介\",\"slug\":\"_1-2-xxl-job简介\",\"link\":\"#_1-2-xxl-job简介\",\"children\":[]},{\"level\":2,\"title\":\"1.3 XXL-Job-环境搭建\",\"slug\":\"_1-3-xxl-job-环境搭建\",\"link\":\"#_1-3-xxl-job-环境搭建\",\"children\":[{\"level\":3,\"title\":\"1.3.1 调度中心环境要求\",\"slug\":\"_1-3-1-调度中心环境要求\",\"link\":\"#_1-3-1-调度中心环境要求\",\"children\":[]},{\"level\":3,\"title\":\"1.3.2 源码仓库地址\",\"slug\":\"_1-3-2-源码仓库地址\",\"link\":\"#_1-3-2-源码仓库地址\",\"children\":[]},{\"level\":3,\"title\":\"1.3.3 初始化“调度数据库”\",\"slug\":\"_1-3-3-初始化-调度数据库\",\"link\":\"#_1-3-3-初始化-调度数据库\",\"children\":[]},{\"level\":3,\"title\":\"1.3.4 编译源码\",\"slug\":\"_1-3-4-编译源码\",\"link\":\"#_1-3-4-编译源码\",\"children\":[]},{\"level\":3,\"title\":\"1.3.5 配置部署“调度中心”\",\"slug\":\"_1-3-5-配置部署-调度中心\",\"link\":\"#_1-3-5-配置部署-调度中心\",\"children\":[]}]},{\"level\":2,\"title\":\"1.4 配置部署调度中心-docker安装\",\"slug\":\"_1-4-配置部署调度中心-docker安装\",\"link\":\"#_1-4-配置部署调度中心-docker安装\",\"children\":[]},{\"level\":2,\"title\":\"1.5 xxl-job入门案例编写\",\"slug\":\"_1-5-xxl-job入门案例编写\",\"link\":\"#_1-5-xxl-job入门案例编写\",\"children\":[{\"level\":3,\"title\":\"1.5.1 登录调度中心，点击下图所示“新建任务”按钮，新建示例任务\",\"slug\":\"_1-5-1-登录调度中心-点击下图所示-新建任务-按钮-新建示例任务\",\"link\":\"#_1-5-1-登录调度中心-点击下图所示-新建任务-按钮-新建示例任务\",\"children\":[]},{\"level\":3,\"title\":\"1.5.2 创建xxljob-demo项目，导入依赖\",\"slug\":\"_1-5-2-创建xxljob-demo项目-导入依赖\",\"link\":\"#_1-5-2-创建xxljob-demo项目-导入依赖\",\"children\":[]},{\"level\":3,\"title\":\"1.5.3 application.yml配置\",\"slug\":\"_1-5-3-application-yml配置\",\"link\":\"#_1-5-3-application-yml配置\",\"children\":[]},{\"level\":3,\"title\":\"1.5.4 新建配置类\",\"slug\":\"_1-5-4-新建配置类\",\"link\":\"#_1-5-4-新建配置类\",\"children\":[]},{\"level\":3,\"title\":\"1.5.4 任务代码，重要注解:@XxlJob(“JobHandler”)\",\"slug\":\"_1-5-4-任务代码-重要注解-xxljob-jobhandler\",\"link\":\"#_1-5-4-任务代码-重要注解-xxljob-jobhandler\",\"children\":[]},{\"level\":3,\"title\":\"1.5.5 测试-单节点\",\"slug\":\"_1-5-5-测试-单节点\",\"link\":\"#_1-5-5-测试-单节点\",\"children\":[]}]},{\"level\":2,\"title\":\"1.6 任务详解-执行器\",\"slug\":\"_1-6-任务详解-执行器\",\"link\":\"#_1-6-任务详解-执行器\",\"children\":[]},{\"level\":2,\"title\":\"1.7 任务详解-基础配置\",\"slug\":\"_1-7-任务详解-基础配置\",\"link\":\"#_1-7-任务详解-基础配置\",\"children\":[]},{\"level\":2,\"title\":\"1.8 路由策略(轮询)-案例\",\"slug\":\"_1-8-路由策略-轮询-案例\",\"link\":\"#_1-8-路由策略-轮询-案例\",\"children\":[]},{\"level\":2,\"title\":\"1.9 路由策略(分片广播)\",\"slug\":\"_1-9-路由策略-分片广播\",\"link\":\"#_1-9-路由策略-分片广播\",\"children\":[{\"level\":3,\"title\":\"1.9.1 分片逻辑\",\"slug\":\"_1-9-1-分片逻辑\",\"link\":\"#_1-9-1-分片逻辑\",\"children\":[]},{\"level\":3,\"title\":\"1.9.2 路由策略(分片广播)-案例\",\"slug\":\"_1-9-2-路由策略-分片广播-案例\",\"link\":\"#_1-9-2-路由策略-分片广播-案例\",\"children\":[]}]}],\"git\":{\"createdTime\":1689573771000,\"updatedTime\":1689666536000,\"contributors\":[{\"name\":\"北省\",\"email\":\"jih6666@126.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":13.3,\"words\":3991},\"filePathRelative\":\"src/必会工具/xxl-Job.md\",\"localizedDate\":\"2023年7月17日\",\"excerpt\":\"<h1> xxl-Job分布式任务调度</h1>\\n<h2> 1.1 什么是分布式任务调度</h2>\\n<p>当前软件的架构已经开始向分布式架构转变，将单体结构拆分为若干服务，服务之间通过网络交互来完成业务处理。在分布式架构下，一个服务往往会部署多个实例来运行我们的业务，如果在这种分布式系统环境下运行任务调度，我们称之为<strong>分布式任务调度</strong>。</p>\\n<figure><figcaption>image-20210729230059884</figcaption></figure>\\n<p>将任务调度程序分布式构建，这样就可以具有分布式系统的特点，并且提高任务的调度处理能力：</p>\",\"autoDesc\":true}")
