import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"
import Slide from "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});