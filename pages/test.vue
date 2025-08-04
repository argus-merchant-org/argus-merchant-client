<script setup lang="ts">
import type { Game } from '~/types'

const { getAllGames, getFeaturedGames } = useGames()

// 獲取測試數據
const allGames = getAllGames()
const featuredGames = getFeaturedGames()

// 測試遊戲點擊
const handleGameClick = (game: Game) => {
  console.log('Game clicked:', game)
}
</script>

<template>
  <div class="test-page" p-8>
    <h1 class="test-title" text-4xl font-bold mb-8 text-center>
      遊戲組件測試頁面
    </h1>

    <!-- 測試精選遊戲 -->
    <div class="test-section" mb-8>
      <h2 class="section-title" text-2xl font-bold mb-4>
        精選遊戲測試
      </h2>
      <div class="test-grid" grid="~ cols-2 sm:cols-3 md:cols-4" gap-4>
        <GameCard
          v-for="game in featuredGames"
          :key="game.game_id"
          :game="game"
          :show-demo-button="true"
          :show-real-button="true"
        />
      </div>
    </div>

    <!-- 測試所有遊戲 -->
    <div class="test-section" mb-8>
      <h2 class="section-title" text-2xl font-bold mb-4>
        所有遊戲測試
      </h2>
      <GameGrid
        :games="allGames"
        :show-demo-button="true"
        :show-real-button="true"
        title="所有遊戲"
        subtitle="測試遊戲網格組件"
      />
    </div>

    <!-- 測試模式切換 -->
    <div class="test-section" mb-8>
      <h2 class="section-title" text-2xl font-bold mb-4>
        模式切換測試
      </h2>
      <div class="mode-test" space-y-4>
        <div v-for="game in allGames.slice(0, 3)" :key="game.game_id" p-4 bg-gray-800 rounded-lg>
          <h3 class="game-name" text-lg font-bold mb-2>
            {{ game.game_name_cn }}
          </h3>
          <ModeSwitcher
            :game="game"
            @demo="handleGameClick"
            @real="handleGameClick"
          />
        </div>
      </div>
    </div>

    <!-- 測試會員選單 -->
    <div class="test-section" mb-8>
      <h2 class="section-title" text-2xl font-bold mb-4>
        會員選單測試
      </h2>
      <div class="member-test" flex justify-center>
        <MemberMenu />
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-page {
  @apply w-full;
}

.test-title {
  @apply text-white;
}

.test-section {
  @apply w-full;
}

.section-title {
  @apply text-white;
}

.test-grid {
  @apply w-full;
}

.mode-test {
  @apply w-full;
}

.game-name {
  @apply text-white;
}

.member-test {
  @apply w-full;
}
</style> 