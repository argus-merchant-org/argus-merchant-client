<script setup lang="ts">
import type { Game } from '~/types'

const { getFeaturedGames, getAllGames } = useGames()

// 獲取精選遊戲作為主推遊戲
const featuredGames = getFeaturedGames()
const allGames = getAllGames()

// 當前選中的品牌
const selectedBrand = ref<string>('')

// 根據品牌篩選遊戲
const filteredGames = computed(() => {
  if (!selectedBrand.value) {
    return allGames
  }
  return allGames.filter(game => game.brand === selectedBrand.value)
})

// 處理品牌切換
const handleBrandChange = (brand: string) => {
  selectedBrand.value = brand
}

// 處理遊戲點擊
const handleGameClick = (game: Game) => {
  // 這裡可以導航到遊戲詳情頁面
  console.log('Game clicked:', game)
}
</script>

<template>
  <div class="game-home">
    <!-- 主推遊戲輪播 -->
    <div v-if="featuredGames.length > 0" class="hero-section" mb-8>
      <h1 class="hero-title" text-3xl font-bold mb-4 text-center>
        精選遊戲
      </h1>
      <div class="hero-carousel" flex gap-4 overflow-x-auto pb-4>
        <div
          v-for="game in featuredGames"
          :key="game.game_id"
          class="hero-game"
          flex-shrink-0
          w-80
          cursor-pointer
          @click="handleGameClick(game)"
        >
          <GameCard
            :game="game"
            :show-demo-button="true"
            :show-real-button="true"
          />
        </div>
      </div>
    </div>

    <!-- 遊戲網格 -->
    <div class="games-section">
      <GameGrid
        :games="filteredGames"
        :show-demo-button="true"
        :show-real-button="true"
        title="所有遊戲"
        subtitle="選擇您喜愛的遊戲開始體驗"
      />
    </div>
  </div>
</template>

<style scoped>
.game-home {
  @apply w-full px-4 lg:px-8;
}

.hero-section {
  @apply w-full;
}

.hero-title {
  @apply text-white;
}

.hero-carousel {
  @apply w-full;
}

.hero-game {
  @apply transition-transform duration-300 hover:scale-105;
}

.games-section {
  @apply w-full;
}
</style>
