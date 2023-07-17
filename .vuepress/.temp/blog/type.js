export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-5277e224","v-1542590e","v-11d8a7d0","v-546871b2","v-5bc1edc1","v-184f4da6","v-744ccd44","v-4dd306af","v-38d376d7","v-3a884f76","v-63edbc13","v-65a294b2","v-7d677e30","v-2d44bdc0","v-3c2114ce","v-a0fb4714","v-781aa617","v-59ef47dc"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-1542590e","v-11d8a7d0","v-546871b2","v-5277e224","v-5bc1edc1"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

