window.$docsify = {
  el: "#app",
  repo: "https://github.com/YlAwen",
  loadSidebar: "../../_sidebar.md", //开启导航栏
  subMaxLevel: 4, //目录最大级数
  auto2top: true, //切换页面自动回到顶部
  loadNavbar: true, //开启侧边栏
  coverpage: true, //开启封面
  maxLevel: 4, //可配置最大支持渲染的标题层级
  homepage: "README.md", //README.md作为首页
  onlyCover: true, // 只在访问主页时加载封面
  count: {
    countable: true,
    fontsize: "0.9em",
    color: "rgb(90,90,90)",
    language: "chinese",
  },
  sidebarDisplayLevel: 1, // set sidebar display level
  plugins: [
    function (hook) {
      var footer = [
        "<hr/>",
        "<footer>",
        "<span> Copyright &copy; 2022  </span>",
        "<span> 💖 Awen</span>",
        "</footer>",
      ].join("");

      hook.afterEach(function (html) {
        return html + footer;
      });
    },
  ],

  // 完整配置参数
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    paths: "auto", // or 'auto'
    // 支持本地化
    placeholder: {
      "/": "Search",
      "/zh-cn/": "Search",
    },
    // 支持本地化
    noData: {
      "/": "No result found",
      "/zh-cn/": "No result found",
    },

    // 搜索标题的最大层级, 1 - 6
    depth: 4,
    namespace: "website-1",

    copyCode: {
      buttonText: "Copy",
      errorText: "Error",
      successText: "OK!",
    },

    "flexible-alerts": {
      style: "flat",
    },
  },
};
