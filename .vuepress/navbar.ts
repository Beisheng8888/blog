import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/src/",

    {
        text: "JavaSE",
        icon: "pen-to-square",
        prefix: "/src/JavaSE/",
        children: [
            {
                text: "JavaSE",
                icon: "pen-to-square",
                children: [
                    {text: "IO流01",  link: "IO流01"},
                    {text: "IO流02",  link: "IO流02"},
                    {text: "XML&枚举&注解",  link: "XML枚举注解"},
                    {text: "单元测试&日志",  link: "单元测试日志"},
                    {text: "可变参数",  link: "可变参数"},
                    {text: "多线程01",  link: "多线程01"},
                    {text: "多线程02",  link: "多线程02"},
                    {text: "常用API01",  link: "常用API01"},
                    {text: "常用API02",  link: "常用API02"},
                    {text: "泛型和TreeSet和二叉树",  link: "泛型和TreeSet和二叉树"},
                    {text: "类加载器和反射",  link: "类加载器和反射"},
                    {text: "红黑树",  link: "红黑树"},
                    {text: "继承",  link: "继承"},
                    {text: "网络编程",  link: "网络编程"},
                    {text: "集合",  link: "集合"},
                ],
            }
        ],
    },

    {
        text: "JavaWeb",
        icon: "pen-to-square",
        prefix: "/src/JavaWeb/",
        children: [
            {
                text: "JavaWeb",
                icon: "pen-to-square",
                children: [
                    {text: "Filter和Listener和Ajax", link: "Filter和Listener和Ajax"},
                    {text: "HTML和CSS", link: "HTML和CSS"},
                    {text: "HTTP和Tomcat和Servlet",  link: "HTTP和Tomcat和Servlet"},
                    {text: "JavaScript", link: "JavaScript"},
                    {text: "JDBC",  link: "JDBC"},
                    {text: "JSP",  link: "JSP"},
                    {text: "Maven和MyBatis",  link: "Maven和MyBatis"},
                    {text: "mysql基础",  link: "mysql基础"},
                    {text: "mysql高级",  link: "mysql高级"},
                    {text: "Request和Response",  link: "Request和Response"},
                    {text: "VUE和Element",  link: "VUE和Element"},
                    {text: "会话技术",  link: "会话技术"}
                ],
            }
        ],
    },

    {
        text: "V1 文档",
        icon: "book",
        link: "https://beisheng8888.github.io/#/",
    },
]);
