import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "D:/MyProject/DOC/vuepress-theme-hope-blog/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
