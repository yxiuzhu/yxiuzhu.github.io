// //vite.config.ts
// import { SearchPlugin } from 'vitepress-plugin-search'
// import { defineConfig } from 'vite'
// import flexSearchIndexOptions from 'flexsearch'
// //default options
// var options = {
//   ...flexSearchIndexOptions,
//   previewLength: 100, //搜索结果预览长度
//   buttonLabel: '搜索',
//   placeholder: '情输入关键词'
// }

// export default defineConfig({
//   plugins: [SearchPlugin(options)]
// })
export default {
  build: {
    outDir: 'docs' // 将 "docs" 修改为你想要的输出目录名
  } // 将网站部署到 /docs/ 子目录
}
