<script setup>
import '@unocss/reset/tailwind.css'
import GameNavBar from "~/components/layout/GameNavBar.vue";

// 簡化的 head 配置
useHead({
  title: 'Argus Merchant Games',
  htmlAttrs: {
    lang: 'zh',
  },
  meta: [
    { name: 'description', content: '享受最優質的線上遊戲體驗，包含老虎機、桌面遊戲等多種遊戲類型' },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator />
  <div h-full w-full font-sans grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]" of-hidden view-transition-app transition duration-0>
    <GameNavBar order-last lg:order-first mode="demo"/>
    <div id="app-scroller" of-x-hidden of-y-auto relative>
      <NuxtPage />
    </div>
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
