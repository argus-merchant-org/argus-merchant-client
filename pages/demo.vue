<script setup lang="ts">
import type { Game } from '~/types'

const { getDemoGames, getGamesByBrand } = useGames()

// 獲取可試玩的遊戲
const demoGames = getDemoGames()

// 當前選中的品牌
const selectedBrand = ref<string>('')

// 根據品牌篩選遊戲
const filteredGames = computed(() => {
  if (!selectedBrand.value) {
    return demoGames
  }
  return getGamesByBrand(selectedBrand.value).filter(game => game.is_demo_available)
})

// 處理品牌切換
const handleBrandChange = (brand: string) => {
  selectedBrand.value = brand
}

// 處理遊戲點擊
const handleGameClick = (game: Game) => {
  // 這裡可以導航到遊戲詳情頁面
  console.log('Demo game clicked:', game)
}
</script>

<template>
  <div class="demo-page">
    <!-- 頁面標題 -->
    <div class="page-header" text-center mb-8>
      <h1 class="page-title" text-4xl font-bold mb-2>
        試玩模式
      </h1>
      <p class="page-subtitle" text-gray-400>
        免費體驗遊戲樂趣，無需註冊即可試玩
      </p>
    </div>

    <!-- 遊戲網格 -->
    <div class="games-section">
      <GameGrid
        :games="filteredGames"
        :show-demo-button="true"
        :show-real-button="false"
        title="試玩遊戲"
        subtitle="選擇遊戲開始免費試玩"
      />
    </div>
  </div>
</template>

<style scoped>
.demo-page {
  @apply w-full px-4 lg:px-8;
}

.page-header {
  @apply w-full;
}

.page-title {
  @apply text-white;
}

.page-subtitle {
  @apply text-lg;
}

.games-section {
  @apply w-full;
}
</style> 