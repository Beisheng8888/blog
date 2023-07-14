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
                    {text: "XML&枚举&注解", icon: "pen-to-square", link: "XML&枚举&注解"},
                    {text: "内部类和Lambda表达式", icon: "pen-to-square", link: "内部类和Lambda表达式"},
                ],
            }
        ],
    },

    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
