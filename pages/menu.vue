<script setup lang="ts">
// 選單頁面邏輯
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        選單
      </h1>
      
      <div class="space-y-4">
        <NuxtLink
          to="/games"
          class="block w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          遊戲列表
        </NuxtLink>
        
        <NuxtLink
          to="/real"
          class="block w-full p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-center"
        >
          正式模式
        </NuxtLink>
        
        <button
          class="block w-full p-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          設定
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 使用 UnoCSS，無需額外樣式 */
</style>
