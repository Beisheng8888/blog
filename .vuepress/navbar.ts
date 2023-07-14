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
