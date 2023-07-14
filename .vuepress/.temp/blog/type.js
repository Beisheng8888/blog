export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-1542590e","v-11d8a7d0","v-546871b2","v-5277e224","v-184f4da6","v-744ccd44","v-4dd306af","v-5bc1edc1"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-1542590e","v-11d8a7d0","v-546871b2","v-5277e224"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

