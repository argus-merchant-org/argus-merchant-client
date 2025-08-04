<script setup lang="ts">
import type { Game } from '~/types'

const props = defineProps<{
  game: Game
  showDemoButton?: boolean
  showRealButton?: boolean
}>()

const { locale } = useI18n()

// 根據語言獲取遊戲名稱
const gameName = computed(() => {
  return locale.value === 'zh' ? props.game.game_name_cn : props.game.game_name_en
})

// 格式化評分
const formatRating = (rating: number) => {
  return rating.toFixed(1)
}

// 獲取波動性標籤
const getVolatilityLabel = (volatility: string) => {
  const labels = {
    low: '低',
    medium: '中',
    high: '高'
  }
  return labels[volatility as keyof typeof labels] || '中'
}

// 獲取波動性顏色
const getVolatilityColor = (volatility: string) => {
  const colors = {
    low: 'text-green-500',
    medium: 'text-yellow-500',
    high: 'text-red-500'
  }
  return colors[volatility as keyof typeof colors] || 'text-yellow-500'
}
</script>

<template>
  <div class="game-card">
    <!-- 遊戲圖片 -->
    <div
      class="game-image-container aspect-10/16"
      relative
      block
      bg-gray4:10
      p1
      transition
      duration-400
      hover="scale-105 z10"
    >
      <NuxtImg
        v-if="game.game_cover_image"
        width="400"
        height="600"
        format="webp"
        :src="game.game_cover_image"
        :alt="gameName"
        w-full
        h-full
        object-cover
        :style="{ 'view-transition-name': `game-${game.game_id}` }"
      />
      <div v-else h-full op10 flex>
        <div i-ph:question ma text-4xl />
      </div>
      
      <!-- 精選標籤 -->
      <div
        v-if="game.is_featured"
        absolute
        top-2
        left-2
        bg-yellow-500
        text-black
        px-2
        py-1
        text-xs
        font-bold
        rounded
      >
        精選
      </div>
      
      <!-- 波動性標籤 -->
      <div
        absolute
        top-2
        right-2
        :class="getVolatilityColor(game.volatility || 'medium')"
        bg-black:50
        px-2
        py-1
        text-xs
        font-bold
        rounded
      >
        {{ getVolatilityLabel(game.volatility || 'medium') }}
      </div>
    </div>

    <!-- 遊戲資訊 -->
    <div mt-2>
      <div class="game-title" font-medium>
        {{ gameName }}
      </div>
      
      <!-- 評分 -->
      <div flex text-sm gap-2 items-center mt-1>
        <div class="rating-stars" flex>
          <div
            v-for="i in 5"
            :key="i"
            :class="i <= Math.floor(game.rating) ? 'text-yellow-400' : 'text-gray-400'"
          >
            ★
          </div>
        </div>
        <div op60>
          {{ formatRating(game.rating) }}
        </div>
      </div>
      
      <!-- 遊戲按鈕 -->
      <div flex gap-2 mt-2>
        <button
          v-if="showDemoButton && game.is_demo_available"
          class="demo-btn"
          bg-blue-500
          hover:bg-blue-600
          text-white
          px-3
          py-1
          text-sm
          rounded
          transition
          duration-200
        >
          試玩
        </button>
        <button
          v-if="showRealButton && game.is_real_available"
          class="real-btn"
          bg-green-500
          hover:bg-green-600
          text-white
          px-3
          py-1
          text-sm
          rounded
          transition
          duration-200
        >
          正式
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-card {
  @apply transition-all duration-300 hover:shadow-lg;
}

.game-image-container {
  @apply overflow-hidden rounded-lg;
}

.game-title {
  @apply text-sm leading-tight;
}

.rating-stars {
  @apply text-xs;
}

.demo-btn, .real-btn {
  @apply font-medium;
}
</style> 