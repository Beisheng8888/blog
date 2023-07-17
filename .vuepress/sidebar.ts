import { sidebar } from "vuepress-theme-hope";

export default sidebar({


  "/": [
    "",
    {
      text: "JavaSE",
      icon: "laptop-code",
      prefix: "src/JavaSE/",
      link: "src/JavaSE/",
      children: "structure",
    },
    {
      text: "JavaWeb",
      icon: "laptop-code",
      prefix: "src/JavaWeb/",
      link: "src/JavaWeb/",
      children: "structure",
    },
    {
      text: "基础框架",
      icon: "laptop-code",
      prefix: "src/基础框架/",
      link: "src/基础框架/",
      children: "structure",
    },
    {
      text: "基础微服务",
      icon: "laptop-code",
      prefix: "src/基础微服务/",
      link: "src/基础微服务/",
      children: "structure",
    },
    {
      text: "高级微服务",
      icon: "laptop-code",
      prefix: "src/高级微服务/",
      link: "src/高级微服务/",
      children: "structure",
    },
    {
      text: "🍇扩展",
      icon: "laptop-code",
      prefix: "src/必会工具/",
      link: "src/必会工具/",
      children: "structure",
    }
  ],
});
