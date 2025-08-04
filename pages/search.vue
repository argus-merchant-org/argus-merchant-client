<script setup lang="ts">
import type {Game} from '~/types'

const {searchGames} = useGames()

// 搜尋關鍵字
const searchKeyword = ref('')

// 搜尋結果
const searchResults = computed(() => {
  if (!searchKeyword.value.trim()) {
    return []
  }
  return searchGames(searchKeyword.value)
})

// 處理搜尋
const handleSearch = () => {
  // 搜尋邏輯已經在 computed 中處理
}

// 處理遊戲點擊
const handleGameClick = (game: Game) => {
  console.log('Search result game clicked:', game)
}
</script>

<template>
  <div class="search-page">
    <!-- 搜尋標題 -->
    <div class="search-header" text-center mb-8>
      <h1 class="search-title" text-4xl font-bold mb-2>
        搜尋遊戲
      </h1>
      <p class="search-subtitle" text-gray-400>
        輸入遊戲名稱或關鍵字進行搜尋
      </p>
    </div>

    <!-- 搜尋輸入框 -->
    <div class="search-input-section" mb-8>
      <div class="search-input-container" max-w-md mx-auto>
        <div class="search-input-wrapper" relative>
          <input
            v-model="searchKeyword"
            type="text"
            placeholder="搜尋遊戲..."
            class="search-input"
            w-full
            px-4
            py-3
            rounded-lg
            bg-gray-800
            text-white
            border
            border-gray-600
            focus:border-blue-500
            focus:outline-none
            transition
            duration-200
            @input="handleSearch"
          />
          <div class="search-icon" absolute right-3 top-12 transform="-translate-y-1/2" text-gray-400>
            <div i-ph-magnifying-glass text-xl />
          </div>
        </div>
      </div>
    </div>

    <!-- 搜尋結果 -->
    <div class="search-results">
      <div v-if="searchKeyword.trim()" class="results-header" mb-4>
        <h2 class="results-title" text-2xl font-bold>
          搜尋結果
        </h2>
        <p class="results-count" text-gray-400>
          找到 {{ searchResults.length }} 個遊戲
        </p>
      </div>

      <GameGrid
        :games="searchResults"
        :show-demo-button="true"
        :show-real-button="true"
        :title="searchKeyword.trim() ? '' : '熱門遊戲'"
        :subtitle="searchKeyword.trim() ? '' : '試試這些熱門遊戲'"
      />
    </div>
  </div>
</template>

<style scoped>
.search-page {
  @apply w-full px-4 lg:px-8;
}

.search-header {
  @apply w-full;
}

.search-title {
  @apply text-white;
}

.search-subtitle {
  @apply text-lg;
}

.search-input-section {
  @apply w-full;
}

.search-input-container {
  @apply w-full;
}

.search-input-wrapper {
  @apply w-full;
}

.search-input {
  @apply w-full;
}

.search-icon {
  @apply pointer-events-none;
}

.search-results {
  @apply w-full;
}

.results-header {
  @apply w-full;
}

.results-title {
  @apply text-white;
}

.results-count {
  @apply text-sm;
}
</style> 