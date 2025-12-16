import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/Users/beisheng/MyProjects/blog/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import ArtPlayer from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import AudioPlayer from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import Badge from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Replit from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";
import Share from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import SiteInfo from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import StackBlitz from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VideoPlayer from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import XiGua from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/XiGua.js";
import YouTube from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/beisheng/MyProjects/blog/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    if(!hasGlobalComponent("XiGua")) app.component("XiGua", XiGua);
    if(!hasGlobalComponent("YouTube")) app.component("YouTube", YouTube);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
