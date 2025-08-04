<script setup lang="ts">
import type { Game } from '~/types'

const route = useRoute()
const { getGameById } = useGames()

// 獲取遊戲ID
const gameId = computed(() => parseInt(route.params.id as string))

// 獲取遊戲詳情
const game = computed(() => getGameById(gameId.value))

// 處理試玩
const handleDemo = () => {
  if (game.value?.demo_url) {
    window.open(game.value.demo_url, '_blank')
  }
}

// 處理正式遊戲
const handleReal = () => {
  if (game.value?.real_url) {
    window.open(game.value.real_url, '_blank')
  }
}

// 頁面不存在時顯示404
if (!game.value) {
  throw createError({
    statusCode: 404,
    statusMessage: '遊戲不存在'
  })
}
</script>

<template>
  <div v-if="game" class="game-detail-page">
    <!-- 遊戲標題區域 -->
    <div class="game-header" mb-8>
      <div class="game-title-section" text-center>
        <h1 class="game-title" text-4xl font-bold mb-2>
          {{ game.game_name_cn }}
        </h1>
        <p class="game-subtitle" text-xl text-gray-400 mb-4>
          {{ game.game_name_en }}
        </p>
        
        <!-- 遊戲評分 -->
        <div class="game-rating" flex justify-center items-center gap-2 mb-4>
          <div class="rating-stars" flex>
            <div
              v-for="i in 5"
              :key="i"
              :class="i <= Math.floor(game.rating) ? 'text-yellow-400' : 'text-gray-400'"
            >
              ★
            </div>
          </div>
          <span class="rating-score" text-lg font-bold>
            {{ game.rating.toFixed(1) }}
          </span>
        </div>
      </div>
    </div>

    <!-- 遊戲內容 -->
    <div class="game-content" grid="~ cols-1 lg:cols-2" gap-8>
      <!-- 遊戲圖片 -->
      <div class="game-image-section">
        <div class="game-image-container" relative>
          <NuxtImg
            v-if="game.game_cover_image"
            :src="game.game_cover_image"
            :alt="game.game_name_cn"
            w-full
            h-auto
            rounded-lg
            shadow-lg
          />
          
          <!-- 精選標籤 -->
          <div
            v-if="game.is_featured"
            absolute
            top-4
            left-4
            bg-yellow-500
            text-black
            px-3
            py-1
            text-sm
            font-bold
            rounded
          >
            精選
          </div>
          
          <!-- 波動性標籤 -->
          <div
            absolute
            top-4
            right-4
            :class="game.volatility === 'high' ? 'text-red-500' : game.volatility === 'low' ? 'text-green-500' : 'text-yellow-500'"
            bg-black:50
            px-3
            py-1
            text-sm
            font-bold
            rounded
          >
            {{ game.volatility === 'high' ? '高' : game.volatility === 'low' ? '低' : '中' }}波動
          </div>
        </div>
      </div>

      <!-- 遊戲資訊 -->
      <div class="game-info-section">
        <!-- 遊戲描述 -->
        <div class="game-description" mb-6>
          <h3 class="section-title" text-2xl font-bold mb-3>
            遊戲描述
          </h3>
          <p class="description-text" text-gray-300 leading-relaxed>
            {{ game.description_cn }}
          </p>
        </div>

        <!-- 遊戲統計 -->
        <div class="game-stats" mb-6>
          <h3 class="section-title" text-2xl font-bold mb-3>
            遊戲統計
          </h3>
          <div class="stats-grid" grid="~ cols-2" gap-4>
            <div class="stat-item" bg-gray-800 p-4 rounded-lg>
              <div class="stat-label" text-gray-400 text-sm mb-1>
                RTP
              </div>
              <div class="stat-value" text-xl font-bold>
                {{ game.rtp }}%
              </div>
            </div>
            <div class="stat-item" bg-gray-800 p-4 rounded-lg>
              <div class="stat-label" text-gray-400 text-sm mb-1>
                最小投注
              </div>
              <div class="stat-value" text-xl font-bold>
                ${{ game.min_bet }}
              </div>
            </div>
            <div class="stat-item" bg-gray-800 p-4 rounded-lg>
              <div class="stat-label" text-gray-400 text-sm mb-1>
                最大投注
              </div>
              <div class="stat-value" text-xl font-bold>
                ${{ game.max_bet }}
              </div>
            </div>
            <div class="stat-item" bg-gray-800 p-4 rounded-lg>
              <div class="stat-label" text-gray-400 text-sm mb-1>
                波動性
              </div>
              <div class="stat-value" text-xl font-bold>
                {{ game.volatility === 'high' ? '高' : game.volatility === 'low' ? '低' : '中' }}
              </div>
            </div>
          </div>
        </div>

        <!-- 遊戲按鈕 -->
        <div class="game-actions">
          <ModeSwitcher
            :game="game"
            @demo="handleDemo"
            @real="handleReal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-detail-page {
  @apply w-full px-4 lg:px-8;
}

.game-header {
  @apply w-full;
}

.game-title-section {
  @apply w-full;
}

.game-title {
  @apply text-white;
}

.game-subtitle {
  @apply text-gray-400;
}

.game-rating {
  @apply w-full;
}

.rating-stars {
  @apply text-xl;
}

.rating-score {
  @apply text-white;
}

.game-content {
  @apply w-full;
}

.game-image-section {
  @apply w-full;
}

.game-image-container {
  @apply w-full;
}

.game-info-section {
  @apply w-full;
}

.game-description {
  @apply w-full;
}

.section-title {
  @apply text-white;
}

.description-text {
  @apply text-base;
}

.game-stats {
  @apply w-full;
}

.stats-grid {
  @apply w-full;
}

.stat-item {
  @apply w-full;
}

.stat-label {
  @apply text-xs;
}

.stat-value {
  @apply text-white;
}

.game-actions {
  @apply w-full;
}
</style> 