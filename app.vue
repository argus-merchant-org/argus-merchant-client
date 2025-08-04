<script setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'zh',
  },
  charset: 'utf-8',
  title: 'Argus Merchant Games',
  titleTemplate: title => (title !== 'Argus Merchant Games' ? `${title} · Argus Merchant Games` : title),
  meta: [
    { name: 'description', content: '享受最優質的線上遊戲體驗，包含老虎機、桌面遊戲等多種遊戲類型' },
    { property: 'og:image', content: '/games-og.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@argus_merchant' },
    { name: 'twitter:creator', content: '@argus_merchant' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: '/games.webp',
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator />
  <div h-full w-full font-sans grid="~ lt-lg:rows-1fr_max-content lg:cols-max-content_1fr" of-hidden view-transition-app transition duration-0>
    <div id="app-scroller" of-x-hidden of-y-auto relative>
      <NuxtPage />
    </div>
    <NavBar lg:order-first />
    <IframeModal />
    <PhotoModal />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #111;
  color: white;
  color-scheme: dark;
}
</style>
