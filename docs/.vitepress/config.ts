import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'HamWeb',
  description: 'Just playing web.',
  base: '/',
  themeConfig: {
    siteTitle: 'Ham Web', // 重置首页标题
    logo: 'images/my-logo-title.svg',
    // head: [
    //   ['link', { rel: 'icon', href: '/images/favicon.ico' }]
    // ],
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
      // live2d widget
      // [
      //   'script',
      //   {
      //     src: 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js'
      //   }
      // ],
    ],
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '技术',
        items: [
          { text: 'Vue', link: '/markdown/technology-space/vue/vue' },
          { text: 'React', link: 'markdown/technology-space/react/react' },
          { text: 'Node', link: 'markdown/technology-space/node/node' },
          {
            text: '微前端',
            link: 'markdown/technology-space/micro-frontend/micro-frontend'
          }
        ]
      },
      {
        text: '关于我',
        items: [
          {
            text: '个人介绍',
            link: '/markdown/personal-intro/introduce/introduce'
          },
          {
            text: 'TodoList',
            link: '/markdown/personal-intro/todolist/todolist'
          },
          { text: 'note', link: '/markdown/personal-intro/note/note' }
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      '/markdown/technology-space/': sidebarTechnologySpace(),
      '/markdown/personal-intro/': sidebarPersonalIntro()
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/yxiuzhu' }],
    // Algolia全文搜索功能 https://docsearch.algolia.com/apply/
    search: {
      provider: 'algolia',
      options: {
        appId: 'EXQ3ENVA3V',
        apiKey: 'f6517c78bca08d328e0d27928a980152',
        indexName: 'yxiuzhuio'
      }
    }
  },
  lastUpdated: true // 记录文章上次更新时间
})

// 技术侧边导航
function sidebarTechnologySpace() {
  return [
    {
      text: 'Vue',
      items: [{ text: 'Vue介绍', link: '/markdown/technology-space/vue/vue' }]
    },
    {
      text: 'React',
      items: [
        { text: 'React介绍', link: '/markdown/technology-space/react/react' }
      ]
    },
    {
      text: 'Node',
      items: [
        { text: 'Node介绍', link: '/markdown/technology-space/node/node' }
      ]
    },
    {
      text: '微前端',
      items: [
        {
          text: '微前端介绍',
          link: '/markdown/technology-space/micro-frontend/micro-frontend'
        }
      ]
    }
  ]
}
// 关于我侧边导航
function sidebarPersonalIntro() {
  return [
    {
      text: '个人介绍',
      items: [
        {
          text: '个人介绍',
          link: '/markdown/personal-intro/introduce/introduce'
        }
      ]
    },
    {
      text: 'Todolist',
      items: [
        { text: 'Todolist', link: '/markdown/personal-intro/todolist/todolist' }
      ]
    },
    {
      text: '笔记',
      items: [
        { text: '待发布笔记', link: '/markdown/personal-intro/note/note' },
        {
          text: '《亲密关系》读书笔记',
          link: '/markdown/personal-intro/note/Intimate-relationship'
        }
      ]
    }
  ]
}
