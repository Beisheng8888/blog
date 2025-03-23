import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/src/",

    {
        text: "🍈JavaSE",
        prefix: "/src/JavaSE/",
        children: [
            {
                text: "JavaSE",
                icon: "pen-to-square",
                children: [
                    {text: "IO流01", icon: "IO", link: "IO流01"},
                    {text: "IO流02", icon: "IO", link: "IO流02"},
                    {text: "XML&枚举&注解", icon: "at", link: "XML枚举注解"},
                    {text: "单元测试&日志", link: "单元测试日志"},
                    {text: "可变参数", link: "可变参数"},
                    {text: "多线程01", link: "多线程01"},
                    {text: "多线程02", link: "多线程02"},
                    {text: "常用API01", link: "常用API01"},
                    {text: "常用API02", link: "常用API02"},
                    {text: "泛型和TreeSet和二叉树", link: "泛型和TreeSet和二叉树"},
                    {text: "类加载器和反射", link: "类加载器和反射"},
                    {text: "红黑树", link: "红黑树"},
                    {text: "继承", link: "继承"},
                    {text: "网络编程", link: "网络编程"},
                    {text: "集合", link: "集合"},
                ],
            }
        ],
    },
    {
        text: "🍉JavaWeb",
        prefix: "/src/JavaWeb/",
        children: [
            {
                text: "JavaWeb",
                icon: "pen-to-square",
                children: [
                    {text: "Filter和Listener和Ajax", link: "Filter和Listener和Ajax"},
                    {text: "HTML和CSS", link: "HTML和CSS"},
                    {text: "HTTP和Tomcat和Servlet", link: "HTTP和Tomcat和Servlet"},
                    {text: "JavaScript", link: "JavaScript"},
                    {text: "JDBC", link: "JDBC"},
                    {text: "JSP", link: "JSP"},
                    {text: "Maven和MyBatis", link: "Maven和MyBatis"},
                    {text: "mysql基础", link: "mysql基础"},
                    {text: "mysql高级", link: "mysql高级"},
                    {text: "Request和Response", link: "Request和Response"},
                    {text: "VUE和Element", link: "VUE和Element"},
                    {text: "会话技术", link: "会话技术"}
                ],
            }
        ],
    },
    {
        text: "🍊基础框架",
        prefix: "/src/基础框架/",
        children: [
            {
                text: "基础框架",
                icon: "pen-to-square",
                children: [
                    {text: "Maven高级", link: "Maven高级"},
                    {text: "MyBatisPlus", link: "MyBatisPlus"},
                    {text: "Spring01", link: "Spring01"},
                    {text: "Spring02", link: "Spring02"},
                    {text: "Spring03", link: "Spring03"},
                    {text: "SpringBoot", link: "SpringBoot"},
                    {text: "SpringMVC01", link: "SpringMVC01"},
                    {text: "SpringMVC02", link: "SpringMVC02"},

                ],
            }
        ],
    },

    {
        text: "🍋基础微服务",
        prefix: "/src/基础微服务/",
        children: [
            {
                text: "基础微服务",
                icon: "pen-to-square",
                children: [
                    {text: "Docker", link: "Docker"},
                    {text: "Docker应用", link: "Docker应用"},
                    {text: "RabbitMQ", link: "RabbitMQ"},
                    {text: "SpringCloud01", link: "SpringCloud01"},
                    {text: "SpringCloud02", link: "SpringCloud02"},
                ],
            }
        ],
    },
    {
        text: "🍌高级微服务",
        prefix: "/src/高级微服务/",
        children: [
            {
                text: "高级微服务",
                icon: "pen-to-square",
                children: [
                    {text: "RabbitMQ-高级篇", link: "RabbitMQ-高级篇"},
                    {text: "Sentinel", link: "Sentinel"},
                    {text: "分布式事务", link: "分布式事务"},
                    {text: "分布式缓存", link: "分布式缓存"},
                ],
            }
        ],
    },
    {
        text: "🍍扩展",
        prefix: "/src/必会工具/",
        children: [
            {
                text: "必会工具",
                icon: "pen-to-square",
                children: [
                    {text: "freemarker和Minio", link: "freemarker和Minio"},
                    {text: "Git", link: "Git"},
                    {text: "Jmeter快速入门", link: "Jmeter快速入门"},
                    {text: "Kafka", link: "Kafka"},
                    {text: "Linux-01", link: "Linux-01"},
                    {text: "Linux-02", link: "Linux-02"},
                    {text: "MongoDB", link: "MongoDB"},
                    {text: "Mysql读写分离", link: "Mysql读写分离"},
                    {text: "Mysql高性能优化方案", link: "Mysql高性能优化方案"},
                    {text: "Nacos", link: "Nacos"},
                    {text: "Redis", link: "Redis"},
                    {text: "Redis集群", link: "Redis集群"},
                    {text: "seata的部署和集成", link: "seata的部署和集成"},
                    {text: "sentinel规则持久化", link: "sentinel规则持久化"},
                    {text: "xxl-Job", link: "xxl-Job"},
                    {text: "其他", link: "其他"},
                    {text: "分布式搜索引擎01", link: "分布式搜索引擎01"},
                    {text: "分布式搜索引擎02", link: "分布式搜索引擎02"},
                    {text: "分布式搜索引擎03", link: "分布式搜索引擎03"},
                    {text: "集成minio", link: "集成minio"},
                ],
            }
        ],
    },
    {
        text: "🍇面试专题",
        prefix: "/src/面试专题/",
        children: [
            {
                text: "面试专题",
                icon: "pen-to-square",
                children: [
                    {text: "基础篇", link: "基础篇"},
                    {text: "并发篇", link: "并发篇"},
                    {text: "框架篇", link: "框架篇"},
                    {text: "虚拟机篇", link: "虚拟机篇"}
                ],
            }
        ],
    },
    {
        text: "🍒V1 文档",
        link: "https://beisheng8888.github.io/#/",
    },
]);
