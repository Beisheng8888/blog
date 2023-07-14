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
                    {text: "IO流01", icon: "book", link: "1"},
                    {text: "IO流02", icon: "pen-to-square", link: "2"},
                    "3",
                    "4",
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
