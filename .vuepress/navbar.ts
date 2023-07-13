import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/src/",


    {
        text: "Java基础",
        icon: "pen-to-square",
        prefix: "/src/Java基础/",
        children: [
            {
                text: "苹果",
                icon: "pen-to-square",
                children: [
                    {text: "苹果1", icon: "book", link: "1"},
                    {text: "苹果2", icon: "pen-to-square", link: "2"},
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
