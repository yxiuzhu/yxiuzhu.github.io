// .vitepress/theme/index.js
import Layout from './Layout.vue'
import MyLayout from './MyLayout.vue'

import "./styles/style.css";
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  // enhanceApp({ app }) {
  //   app.component('Layout', Layout)
  // },
  Layout: MyLayout
}
