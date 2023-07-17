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
    }
  ],
});
