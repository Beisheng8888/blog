import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "冀辉的博客",
  description: "冀辉的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
