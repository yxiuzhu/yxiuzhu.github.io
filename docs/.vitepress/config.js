import { defineConfig } from "vitepress";
export default defineConfig({
  title: "HamBlog",
  description: "Just playing around.",
  themeConfig: {
    siteTitle: "Ham Blog", // 重置首页标题
    logo: "/my-logo-title.svg",
    // 顶部导航栏
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    // 侧边栏
    sidebar: [
      {
        text: "Section Title A",
        items: [
          { text: "Item A", link: "/item-a" },
          { text: "Item B", link: "/item-b" },
        ],
      },
      {
        text: "Section Title B",
        items: [
          { text: "Item C", link: "/item-c" },
          { text: "Item D", link: "/item-d" },
        ],
      },
    ],
    // 开启搜索功能
    localSearch: {
      locales: {
        zh: {
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: {
                selectText: '选择',
                navigateText: '切换'
              }
            }
          }
        }
      }
    }
  },
});
