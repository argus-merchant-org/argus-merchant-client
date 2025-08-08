<script setup lang="ts">
import type { Game } from '~/types'

const route = useRoute()
const { getGameById } = useGames()

// 獲取遊戲ID
const gameId = computed(() => route.params.id as string)

// 獲取遊戲詳情
const game = computed(() => getGameById(gameId.value))

// 處理進入遊戲
const handleEnterGame = () => {
  // 這裡可以導向遊戲或顯示遊戲詳情
  console.log('Enter game:', game.value)
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
          {{ game.name.zh }}
        </h1>
        <p class="game-subtitle" text-xl text-gray-400 mb-4>
          {{ game.name.en }}
        </p>
        
        <!-- 遊戲分類 -->
        <div class="game-category" flex justify-center items-center gap-2 mb-4>
          <span class="category-tag" bg-blue-500 text-white px-3 py-1 rounded text-sm>
            {{ game.category }}
          </span>
          <span class="provider-tag" bg-gray-500 text-white px-3 py-1 rounded text-sm>
            {{ game.providerName }}
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
            v-if="game.thumbnail"
            :src="game.thumbnail"
            :alt="game.name.zh"
            w-full
            h-auto
            rounded-lg
            shadow-lg
          />
          
          <!-- 熱門標籤 -->
          <div
            v-if="game.isHot"
            absolute
            top-4
            left-4
            bg-red-500
            text-white
            px-3
            py-1
            text-sm
            font-bold
            rounded
          >
            熱門
          </div>
          
          <!-- 新遊戲標籤 -->
          <div
            v-if="game.isNew"
            absolute
            top-4
            right-4
            bg-green-500
            text-white
            px-3
            py-1
            text-sm
            font-bold
            rounded
          >
            新遊戲
          </div>
        </div>
      </div>

      <!-- 遊戲資訊 -->
      <div class="game-info-section">
        <div class="game-description" mb-6>
          <h3 class="description-title" text-2xl font-bold mb-4>
            遊戲介紹
          </h3>
          <p class="description-text" text-gray-300 leading-relaxed>
            歡迎來到 {{ game.name.zh }}！這是一款由 {{ game.providerName }} 開發的精彩遊戲。
            無論您是新手還是資深玩家，都能在這裡找到屬於您的遊戲樂趣。
          </p>
        </div>

        <!-- 遊戲按鈕 -->
        <div class="game-actions" space-y-4>
          <button
            class="enter-game-btn"
            w-full
            py-4
            px-6
            bg-blue-500
            text-white
            text-lg
            font-bold
            rounded-lg
            hover="bg-blue-600"
            transition-colors
            @click="handleEnterGame"
          >
            進入遊戲
          </button>
          
          <div class="action-buttons" flex gap-4>
            <button
              class="demo-btn"
              flex-1
              py-3
              px-4
              bg-green-500
              text-white
              rounded-lg
              hover="bg-green-600"
              transition-colors
              @click="handleEnterGame"
            >
              試玩
            </button>
            <button
              class="real-btn"
              flex-1
              py-3
              px-4
              bg-red-500
              text-white
              rounded-lg
              hover="bg-red-600"
              transition-colors
              @click="handleEnterGame"
            >
              正式
            </button>
          </div>
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

.game-title {
  @apply text-white;
}

.game-subtitle {
  @apply text-lg;
}

.game-category {
  @apply w-full;
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

.description-title {
  @apply text-white;
}

.description-text {
  @apply text-base;
}

.game-actions {
  @apply w-full;
}

.enter-game-btn {
  @apply w-full;
}

.action-buttons {
  @apply w-full;
}
</style> 