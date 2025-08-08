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
  return locale.value === 'zh' ? props.game.name.zh : props.game.name.en
})

// 進入遊戲
const enterGame = (game: Game) => {
  navigateTo(`/games/${game.id}`)
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
      cursor-pointer
      @click="enterGame(game)"
    >
      <NuxtImg
        v-if="game.thumbnail"
        width="400"
        height="600"
        format="webp"
        :src="game.thumbnail"
        :alt="gameName"
        w-full
        h-full
        object-cover
        :style="{ 'view-transition-name': `game-${game.id}` }"
      />
      <div v-else h-full op10 flex>
        <div i-ph:question ma text-4xl />
      </div>
      
      <!-- 熱門標籤 -->
      <div
        v-if="game.isHot"
        absolute
        top-2
        left-2
        bg-red-500
        text-white
        px-2
        py-1
        text-xs
        font-bold
        rounded
      >
        熱門
      </div>
      
      <!-- 新遊戲標籤 -->
      <div
        v-if="game.isNew"
        absolute
        top-2
        right-2
        bg-green-500
        text-white
        px-2
        py-1
        text-xs
        font-bold
        rounded
      >
        新遊戲
      </div>
      
      <!-- 提供商標籤 -->
      <div
        absolute
        bottom-2
        left-2
        bg-blue-500
        text-white
        px-2
        py-1
        text-xs
        font-bold
        rounded
      >
        {{ game.providerName }}
      </div>
    </div>

    <!-- 遊戲資訊 -->
    <div class="game-info" p-3>
      <h3 class="game-title" text-lg font-semibold mb-2>
        {{ gameName }}
      </h3>
      <p class="game-category" text-sm text-gray-500>
        {{ game.category }}
      </p>
    </div>

    <!-- 按鈕區域 -->
    <div v-if="showDemoButton || showRealButton" class="game-actions" p-3 pt-0>
      <div flex gap-2>
        <button
          v-if="showDemoButton"
          class="demo-button"
          flex-1
          py-2
          px-4
          bg-blue-500
          text-white
          rounded
          hover="bg-blue-600"
          transition-colors
          @click="enterGame(game)"
        >
          試玩
        </button>
        <button
          v-if="showRealButton"
          class="real-button"
          flex-1
          py-2
          px-4
          bg-green-500
          text-white
          rounded
          hover="bg-green-600"
          transition-colors
          @click="enterGame(game)"
        >
          正式
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-card {
  @apply bg-white rounded-lg shadow-md overflow-hidden;
}

.game-image-container {
  @apply relative;
}

.game-info {
  @apply bg-white;
}

.game-title {
  @apply text-gray-800;
}

.game-category {
  @apply text-gray-500;
}

.game-actions {
  @apply bg-white;
}
</style> 