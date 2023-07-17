export const data = JSON.parse("{\"key\":\"v-7feb3be7\",\"path\":\"/src/JavaWeb/Request_Response.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"Request&amp;Response 1，Request和Response的概述 ==Request是请求对象，Response是响应对象。==这两个对象在我们使用Servlet的时候有看到： 此时，我们就需要思考一个问题request和response这两个参数的作用是什么? 1628735746602 request:获取请求数据 浏览器会发送HTTP请求到后台服务器[Tomcat] HTTP的请求中会包含很多请求数据[请求行+请求头+请求体] 后台服务器[Tomcat]会对HTTP请求中的数据进行解析并把解析结果存入到一个对象中 所存入的对象即为request对象，所以我们可以从request对象中获取请求的相关参数 获取到数据后就可以继续后续的业务，比如获取用户名和密码就可以实现登录操作的相关业务 response:设置响应数据 业务处理完后，后台就需要给前端返回业务处理的结果即响应数据 把响应数据封装到response对象中 后台服务器[Tomcat]会解析response对象,按照[响应行+响应头+响应体]格式拼接结果 浏览器最终解析结果，把内容展示在浏览器给用户浏览\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/Beisheng8888/blog/src/JavaWeb/Request_Response.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"冀辉的博客\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Request&amp;Response 1，Request和Response的概述 ==Request是请求对象，Response是响应对象。==这两个对象在我们使用Servlet的时候有看到： 此时，我们就需要思考一个问题request和response这两个参数的作用是什么? 1628735746602 request:获取请求数据 浏览器会发送HTTP请求到后台服务器[Tomcat] HTTP的请求中会包含很多请求数据[请求行+请求头+请求体] 后台服务器[Tomcat]会对HTTP请求中的数据进行解析并把解析结果存入到一个对象中 所存入的对象即为request对象，所以我们可以从request对象中获取请求的相关参数 获取到数据后就可以继续后续的业务，比如获取用户名和密码就可以实现登录操作的相关业务 response:设置响应数据 业务处理完后，后台就需要给前端返回业务处理的结果即响应数据 把响应数据封装到response对象中 后台服务器[Tomcat]会解析response对象,按照[响应行+响应头+响应体]格式拼接结果 浏览器最终解析结果，把内容展示在浏览器给用户浏览\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.JH\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.JH\\\",\\\"url\\\":\\\"https://github.com/Beisheng8888\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Request&Response\",\"slug\":\"request-response\",\"link\":\"#request-response\",\"children\":[]},{\"level\":2,\"title\":\"1，Request和Response的概述\",\"slug\":\"_1-request和response的概述\",\"link\":\"#_1-request和response的概述\",\"children\":[]},{\"level\":2,\"title\":\"2，Request对象\",\"slug\":\"_2-request对象\",\"link\":\"#_2-request对象\",\"children\":[{\"level\":3,\"title\":\"2.1 Request继承体系\",\"slug\":\"_2-1-request继承体系\",\"link\":\"#_2-1-request继承体系\",\"children\":[]},{\"level\":3,\"title\":\"2.2 Request获取请求数据\",\"slug\":\"_2-2-request获取请求数据\",\"link\":\"#_2-2-request获取请求数据\",\"children\":[]},{\"level\":3,\"title\":\"2.3 IDEA快速创建Servlet\",\"slug\":\"_2-3-idea快速创建servlet\",\"link\":\"#_2-3-idea快速创建servlet\",\"children\":[]},{\"level\":3,\"title\":\"2.4 请求参数中文乱码问题\",\"slug\":\"_2-4-请求参数中文乱码问题\",\"link\":\"#_2-4-请求参数中文乱码问题\",\"children\":[]},{\"level\":3,\"title\":\"2.5 Request请求转发\",\"slug\":\"_2-5-request请求转发\",\"link\":\"#_2-5-request请求转发\",\"children\":[]}]},{\"level\":2,\"title\":\"3，Response对象\",\"slug\":\"_3-response对象\",\"link\":\"#_3-response对象\",\"children\":[{\"level\":3,\"title\":\"3.1 Response设置响应数据功能介绍\",\"slug\":\"_3-1-response设置响应数据功能介绍\",\"link\":\"#_3-1-response设置响应数据功能介绍\",\"children\":[]},{\"level\":3,\"title\":\"3.2 Respones请求重定向\",\"slug\":\"_3-2-respones请求重定向\",\"link\":\"#_3-2-respones请求重定向\",\"children\":[]},{\"level\":3,\"title\":\"3.3 路径问题\",\"slug\":\"_3-3-路径问题\",\"link\":\"#_3-3-路径问题\",\"children\":[]},{\"level\":3,\"title\":\"3.4 Response响应字符数据\",\"slug\":\"_3-4-response响应字符数据\",\"link\":\"#_3-4-response响应字符数据\",\"children\":[]},{\"level\":3,\"title\":\"3.3 Response响应字节数据\",\"slug\":\"_3-3-response响应字节数据\",\"link\":\"#_3-3-response响应字节数据\",\"children\":[]}]},{\"level\":2,\"title\":\"4，用户注册登录案例\",\"slug\":\"_4-用户注册登录案例\",\"link\":\"#_4-用户注册登录案例\",\"children\":[{\"level\":3,\"title\":\"4.1 用户登录\",\"slug\":\"_4-1-用户登录\",\"link\":\"#_4-1-用户登录\",\"children\":[]},{\"level\":3,\"title\":\"4.2 用户注册\",\"slug\":\"_4-2-用户注册\",\"link\":\"#_4-2-用户注册\",\"children\":[]},{\"level\":3,\"title\":\"4.3 SqlSessionFactory工具类抽取\",\"slug\":\"_4-3-sqlsessionfactory工具类抽取\",\"link\":\"#_4-3-sqlsessionfactory工具类抽取\",\"children\":[]}]}],\"readingTime\":{\"minutes\":39.9,\"words\":11971},\"filePathRelative\":\"src/JavaWeb/Request&Response.md\",\"excerpt\":\"<h2> Request&amp;Response</h2>\\n<h2> 1，Request和Response的概述</h2>\\n<p>==Request是请求对象，Response是响应对象。==这两个对象在我们使用Servlet的时候有看到：<br>\\n</p>\\n<p>此时，我们就需要思考一个问题request和response这两个参数的作用是什么?</p>\\n<figure><figcaption>1628735746602</figcaption></figure>\\n<ul>\\n<li>request:<mark>获取</mark>请求数据\\n<ul>\\n<li>浏览器会发送HTTP请求到后台服务器[Tomcat]</li>\\n<li>HTTP的请求中会包含很多请求数据[请求行+请求头+请求体]</li>\\n<li>后台服务器[Tomcat]会对HTTP请求中的数据进行解析并把解析结果存入到一个对象中</li>\\n<li>所存入的对象即为request对象，所以我们可以从request对象中获取请求的相关参数</li>\\n<li>获取到数据后就可以继续后续的业务，比如获取用户名和密码就可以实现登录操作的相关业务</li>\\n</ul>\\n</li>\\n<li>response:<mark>设置</mark>响应数据\\n<ul>\\n<li>业务处理完后，后台就需要给前端返回业务处理的结果即响应数据</li>\\n<li>把响应数据封装到response对象中</li>\\n<li>后台服务器[Tomcat]会解析response对象,按照[响应行+响应头+响应体]格式拼接结果</li>\\n<li>浏览器最终解析结果，把内容展示在浏览器给用户浏览</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
