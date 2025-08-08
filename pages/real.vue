<script setup lang="ts">
import type { Game } from '~/types'

const { getRealGames, getGamesByBrand } = useGames()

// 獲取可正式遊戲的遊戲
const realGames = getRealGames()

// 當前選中的品牌
const selectedBrand = ref<string>('')

// 根據品牌篩選遊戲
const filteredGames = computed(() => {
  if (!selectedBrand.value) {
    return realGames
  }
  return getGamesByBrand(selectedBrand.value).filter(game => game.isHot)
})

// 處理品牌切換
const handleBrandChange = (brand: string) => {
  selectedBrand.value = brand
}

// 處理遊戲點擊
const handleGameClick = (game: Game) => {
  // 這裡可以導航到遊戲詳情頁面
  console.log('Real game clicked:', game)
}
</script>

<template>
  <div class="real-page">
    <!-- 頁面標題 -->
    <div class="page-header" text-center mb-8>
      <h1 class="page-title" text-4xl font-bold mb-2>
        正式模式
      </h1>
      <p class="page-subtitle" text-gray-400>
        登入會員開始正式遊戲，享受真實獎勵
      </p>
    </div>

    <!-- 遊戲網格 -->
    <div class="games-section">
      <GameGrid
        :games="filteredGames"
        :show-demo-button="false"
        :show-real-button="true"
        title="正式遊戲"
        subtitle="登入後開始正式遊戲"
      />
    </div>
  </div>
</template>

<style scoped>
.real-page {
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