---
layout: home

title: Ham Web
titleTemplate: 个人网站

hero:
  name: Ham Web
  text: 这玩意儿真好玩儿
  tagline: 前端信息纪要
  image:
    src: /pure-logo.png
    alt: logo
  actions:
    - theme: brand
      text: 看看我的世界
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/yxiuzhu/ham-blog

features:
  - icon: ⚡️
    title: 记录知识
    details: 把学习整理的知识记录下来，对知识进一步理解，系统性学习
  - icon: 🖖
    title: 技术文章
    details: 将研究技术、阅读源码的过程记录下来，不管作为分享，还是自己以后回顾，都是一种很不错的方式
  - icon: 🛠️
    title: 个人网站
    details: 博客可以用来展示自己的学习成果，也能作为自己的名片
---

<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
console.log(theme)
</script>

<template>
  <h1>{{ theme }}</h1>
</template>