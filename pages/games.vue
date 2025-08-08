<script setup lang="ts">
import type { Game } from '~/types'

const { searchGames } = useGames()

// 搜尋關鍵字
const searchQuery = ref('')

// 搜尋結果
const searchResults = computed(() => {
  return searchGames(searchQuery.value)
})

// 處理搜尋
const handleSearch = () => {
  // 搜尋邏輯已在 computed 中處理
}

// 清空搜尋
const clearSearch = () => {
  searchQuery.value = ''
}

// 進入遊戲
const enterGame = (game: Game) => {
  // 這裡可以導向遊戲詳情頁面或直接進入遊戲
  navigateTo(`/games/${game.id}`)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 搜尋列 -->
    <div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
      <div class="flex items-center space-x-3">
        <div class="flex-1 relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜尋遊戲..."
            class="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            @input="handleSearch"
          />
          <button
            v-if="searchQuery"
            @click="clearSearch"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <div class="i-ph-x text-lg" />
          </button>
        </div>
        <button
          @click="handleSearch"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          搜尋
        </button>
      </div>
    </div>

    <!-- 遊戲列表 -->
    <div class="p-4">
      <!-- 搜尋結果標題 -->
      <div v-if="searchQuery" class="mb-4">
        <h2 class="text-lg font-semibold text-gray-800">
          搜尋結果: "{{ searchQuery }}"
        </h2>
        <p class="text-sm text-gray-600">
          找到 {{ searchResults.length }} 款遊戲
        </p>
      </div>

      <!-- 遊戲網格 -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="game in searchResults"
          :key="game.id"
          @click="enterGame(game)"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
        >
          <!-- 遊戲圖片 -->
          <div class="relative">
            <img
              :src="game.thumbnail"
              :alt="game.name.zh"
              class="w-full h-32 object-cover"
            />
            <!-- 新遊戲標籤 -->
            <div
              v-if="game.isNew"
              class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded"
            >
              新遊戲
            </div>
            <!-- 熱門標籤 -->
            <div
              v-if="game.isHot"
              class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
            >
              熱門
            </div>
          </div>

          <!-- 遊戲資訊 -->
          <div class="p-3">
            <h3 class="font-semibold text-gray-800 mb-1">
              {{ game.name.zh }}
            </h3>
            <p class="text-xs text-gray-500 mb-2">
              {{ game.name.en }}
            </p>
            <!-- 提供商標籤 -->
            <div class="flex items-center justify-between">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {{ game.providerName }}
              </span>
              <span class="text-xs text-gray-500">
                {{ game.category }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 無搜尋結果 -->
      <div
        v-if="searchQuery && searchResults.length === 0"
        class="text-center py-8"
      >
        <div class="i-ph-magnifying-glass text-4xl text-gray-400 mb-4" />
        <h3 class="text-lg font-semibold text-gray-600 mb-2">
          沒有找到相關遊戲
        </h3>
        <p class="text-sm text-gray-500">
          請嘗試其他關鍵字
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 使用 UnoCSS，無需額外樣式 */
</style>
