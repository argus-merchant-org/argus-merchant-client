<script setup lang="ts">
import type { Game } from '~/types'

const props = defineProps<{
  game: Game
}>()

const emit = defineEmits<{
  demo: [game: Game]
  real: [game: Game]
}>()

// 處理試玩按鈕點擊
const handleDemoClick = () => {
  emit('demo', props.game)
}

// 處理正式按鈕點擊
const handleRealClick = () => {
  emit('real', props.game)
}
</script>

<template>
  <div class="mode-switcher" flex gap-2>
    <button
      v-if="game.is_demo_available"
      class="demo-button"
      bg-blue-500
      hover:bg-blue-600
      text-white
      px-4
      py-2
      rounded-lg
      font-medium
      transition
      duration-200
      @click="handleDemoClick"
    >
      <div i-ph-play-circle mr-2 />
      試玩
    </button>
    
    <button
      v-if="game.is_real_available"
      class="real-button"
      bg-green-500
      hover:bg-green-600
      text-white
      px-4
      py-2
      rounded-lg
      font-medium
      transition
      duration-200
      @click="handleRealClick"
    >
      <div i-ph-currency-dollar mr-2 />
      正式
    </button>
  </div>
</template>

<style scoped>
.mode-switcher {
  @apply w-full;
}

.demo-button, .real-button {
  @apply flex items-center justify-center;
}

.demo-button:hover {
  @apply transform scale-105;
}

.real-button:hover {
  @apply transform scale-105;
}
</style> 