export const data = JSON.parse("{\"key\":\"v-7c3961dd\",\"path\":\"/src/JavaWeb/JDBC.html\",\"title\":\"JDBC\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"JavaWeb\"],\"description\":\"JDBC 1，JDBC概述 在开发中我们使用的是java语言，那么势必要通过java语言操作数据库中的数据。这就是接下来要学习的JDBC。 1.1 JDBC概念 JDBC 就是使用Java语言操作关系型数据库的一套API 全称：( Java DataBase Connectivity ) Java 数据库连接 img 我们开发的同一套Java代码是无法操作不同的关系型数据库，因为每一个关系型数据库的底层实现细节都不一样。如果这样，问题就很大了，在公司中可以在开发阶段使用的是MySQL数据库，而上线时公司最终选用oracle数据库，我们就需要对代码进行大批量修改，这显然并不是我们想看到的。我们要做到的是同一套Java代码操作不同的关系型数据库，而此时sun公司就指定了一套标准接口（JDBC），JDBC中定义了所有操作关系型数据库的规则。众所周知接口是无法直接使用的，我们需要使用接口的实现类，而这套实现类（称之为：驱动）就由各自的数据库厂商给出。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/Beisheng8888/blog/src/JavaWeb/JDBC.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Jh\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"JDBC\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"JDBC 1，JDBC概述 在开发中我们使用的是java语言，那么势必要通过java语言操作数据库中的数据。这就是接下来要学习的JDBC。 1.1 JDBC概念 JDBC 就是使用Java语言操作关系型数据库的一套API 全称：( Java DataBase Connectivity ) Java 数据库连接 img 我们开发的同一套Java代码是无法操作不同的关系型数据库，因为每一个关系型数据库的底层实现细节都不一样。如果这样，问题就很大了，在公司中可以在开发阶段使用的是MySQL数据库，而上线时公司最终选用oracle数据库，我们就需要对代码进行大批量修改，这显然并不是我们想看到的。我们要做到的是同一套Java代码操作不同的关系型数据库，而此时sun公司就指定了一套标准接口（JDBC），JDBC中定义了所有操作关系型数据库的规则。众所周知接口是无法直接使用的，我们需要使用接口的实现类，而这套实现类（称之为：驱动）就由各自的数据库厂商给出。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-07-18T07:08:24.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Jh\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-07-18T07:08:24.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"JDBC\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-07-18T07:08:24.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Jh\\\",\\\"url\\\":\\\"https://github.com/Beisheng8888\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1，JDBC概述\",\"slug\":\"_1-jdbc概述\",\"link\":\"#_1-jdbc概述\",\"children\":[{\"level\":3,\"title\":\"1.1  JDBC概念\",\"slug\":\"_1-1-jdbc概念\",\"link\":\"#_1-1-jdbc概念\",\"children\":[]},{\"level\":3,\"title\":\"1.2  JDBC本质\",\"slug\":\"_1-2-jdbc本质\",\"link\":\"#_1-2-jdbc本质\",\"children\":[]},{\"level\":3,\"title\":\"1.3  JDBC好处\",\"slug\":\"_1-3-jdbc好处\",\"link\":\"#_1-3-jdbc好处\",\"children\":[]}]},{\"level\":2,\"title\":\"2，JDBC快速入门\",\"slug\":\"_2-jdbc快速入门\",\"link\":\"#_2-jdbc快速入门\",\"children\":[{\"level\":3,\"title\":\"2.1  编写代码步骤\",\"slug\":\"_2-1-编写代码步骤\",\"link\":\"#_2-1-编写代码步骤\",\"children\":[]},{\"level\":3,\"title\":\"2.2  具体操作\",\"slug\":\"_2-2-具体操作\",\"link\":\"#_2-2-具体操作\",\"children\":[]}]},{\"level\":2,\"title\":\"3，JDBC API详解\",\"slug\":\"_3-jdbc-api详解\",\"link\":\"#_3-jdbc-api详解\",\"children\":[{\"level\":3,\"title\":\"3.1  DriverManager\",\"slug\":\"_3-1-drivermanager\",\"link\":\"#_3-1-drivermanager\",\"children\":[]},{\"level\":3,\"title\":\"3.2  Connection\",\"slug\":\"_3-2-connection\",\"link\":\"#_3-2-connection\",\"children\":[]},{\"level\":3,\"title\":\"3.3  Statement\",\"slug\":\"_3-3-statement\",\"link\":\"#_3-3-statement\",\"children\":[]},{\"level\":3,\"title\":\"3.4  ResultSet\",\"slug\":\"_3-4-resultset\",\"link\":\"#_3-4-resultset\",\"children\":[]},{\"level\":3,\"title\":\"3.5  案例\",\"slug\":\"_3-5-案例\",\"link\":\"#_3-5-案例\",\"children\":[]},{\"level\":3,\"title\":\"3.6  PreparedStatement\",\"slug\":\"_3-6-preparedstatement\",\"link\":\"#_3-6-preparedstatement\",\"children\":[]}]},{\"level\":2,\"title\":\"4，数据库连接池\",\"slug\":\"_4-数据库连接池\",\"link\":\"#_4-数据库连接池\",\"children\":[{\"level\":3,\"title\":\"4.1  数据库连接池简介\",\"slug\":\"_4-1-数据库连接池简介\",\"link\":\"#_4-1-数据库连接池简介\",\"children\":[]},{\"level\":3,\"title\":\"4.2  数据库连接池实现\",\"slug\":\"_4-2-数据库连接池实现\",\"link\":\"#_4-2-数据库连接池实现\",\"children\":[]},{\"level\":3,\"title\":\"4.3  Driud使用\",\"slug\":\"_4-3-driud使用\",\"link\":\"#_4-3-driud使用\",\"children\":[]}]},{\"level\":2,\"title\":\"5，JDBC练习\",\"slug\":\"_5-jdbc练习\",\"link\":\"#_5-jdbc练习\",\"children\":[{\"level\":3,\"title\":\"5.1  需求\",\"slug\":\"_5-1-需求\",\"link\":\"#_5-1-需求\",\"children\":[]},{\"level\":3,\"title\":\"5.2  案例实现\",\"slug\":\"_5-2-案例实现\",\"link\":\"#_5-2-案例实现\",\"children\":[]}]}],\"git\":{\"createdTime\":1689563915000,\"updatedTime\":1689664104000,\"contributors\":[{\"name\":\"北省\",\"email\":\"jih6666@126.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":23.09,\"words\":6926},\"filePathRelative\":\"src/JavaWeb/JDBC.md\",\"localizedDate\":\"2023年7月17日\",\"excerpt\":\"<h1> JDBC</h1>\\n<h2> 1，JDBC概述</h2>\\n<p>在开发中我们使用的是java语言，那么势必要通过java语言操作数据库中的数据。这就是接下来要学习的JDBC。</p>\\n<h3> 1.1  JDBC概念</h3>\\n<blockquote>\\n<p>JDBC   就是使用Java语言操作关系型数据库的一套API</p>\\n<p>全称：( Java DataBase Connectivity ) Java 数据库连接</p>\\n</blockquote>\\n<figure><figcaption>img</figcaption></figure>\\n<p>我们开发的同一套Java代码是无法操作不同的关系型数据库，因为每一个关系型数据库的底层实现细节都不一样。如果这样，问题就很大了，在公司中可以在开发阶段使用的是MySQL数据库，而上线时公司最终选用oracle数据库，我们就需要对代码进行大批量修改，这显然并不是我们想看到的。我们要做到的是同一套Java代码操作不同的关系型数据库，而此时sun公司就指定了一套标准接口（JDBC），JDBC中定义了所有操作关系型数据库的规则。众所周知接口是无法直接使用的，我们需要使用接口的实现类，而这套实现类（称之为：驱动）就由各自的数据库厂商给出。</p>\",\"autoDesc\":true}")
