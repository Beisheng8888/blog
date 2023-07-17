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
                    {text: "IO流01", icon: "book", link: "IO流01"},
                    {text: "IO流02", icon: "pen-to-square", link: "IO流02"},
                    {text: "XML&枚举&注解", icon: "pen-to-square", link: "XML枚举注解"},
                    {text: "单元测试&日志", icon:"book", link: "单元测试日志"},
                    {text: "可变参数", icon:"book", link: "可变参数"},
                    {text: "多线程01", icon:"book", link: "多线程01"},
                    {text: "多线程02", icon:"book", link: "多线程02"},
                    {text: "常用API01", icon:"book", link: "常用API01"},
                    {text: "常用API02", icon:"book", link: "常用API02"},
                    {text: "泛型和TreeSet和二叉树", icon:"book", link: "泛型和TreeSet和二叉树"},
                    {text: "类加载器和反射", icon:"book", link: "类加载器和反射"},
                    {text: "红黑树", icon:"book", link: "红黑树"},
                    {text: "继承", icon:"book", link: "继承"},
                    {text: "网络编程", icon:"book", link: "网络编程"},
                    {text: "集合", icon:"book", link: "集合"},
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
