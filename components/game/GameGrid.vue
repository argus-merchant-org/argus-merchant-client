<script setup lang="ts">
import type { Game } from '~/types'

defineProps<{
  games: Game[]
  showDemoButton?: boolean
  showRealButton?: boolean
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="game-grid-section">
    <!-- 標題區域 -->
    <div v-if="title || subtitle" mb-6>
      <h2 v-if="title" class="section-title" text-2xl font-bold mb-2>
        {{ title }}
      </h2>
      <p v-if="subtitle" class="section-subtitle" text-gray-400>
        {{ subtitle }}
      </p>
    </div>

    <!-- 遊戲網格 -->
    <div class="game-grid" grid="~ cols-2 sm:cols-3 md:cols-4 lg:cols-5 xl:cols-6" gap-4>
      <GameCard
        v-for="game in games"
        :key="game.id"
        :game="game"
        :show-demo-button="showDemoButton"
        :show-real-button="showRealButton"
      />
    </div>

    <!-- 空狀態 -->
    <div v-if="games.length === 0" class="empty-state" text-center py-12>
      <div i-ph-game-controller text-6xl op20 mb-4 />
      <h3 class="empty-title" text-xl font-medium mb-2>
        暫無遊戲
      </h3>
      <p class="empty-subtitle" text-gray-400>
        請嘗試其他分類或搜尋條件
      </p>
    </div>
  </div>
</template>

<style scoped>
.game-grid-section {
  @apply w-full;
}

.section-title {
  @apply text-white;
}

.section-subtitle {
  @apply text-sm;
}

.game-grid {
  @apply w-full;
}

.empty-state {
  @apply w-full;
}

.empty-title {
  @apply text-white;
}

.empty-subtitle {
  @apply text-sm;
}
</style> 