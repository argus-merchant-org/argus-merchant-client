<script setup lang="ts">
import type { GameBrand } from '~/types'

const props = defineProps<{
  mode: 'demo' | 'real'
  selectedBrand?: string
}>()

const emit = defineEmits<{
  brandChange: [brand: string]
  search: []
  menu: []
  member: []
}>()

const { getAllBrands } = useGames()
const brands = getAllBrands()

// 處理品牌切換
const handleBrandClick = (brandId: string) => {
  emit('brandChange', brandId)
}

// 處理搜尋
const handleSearch = () => {
  emit('search')
}

// 處理選單
const handleMenu = () => {
  emit('menu')
}

// 處理會員
const handleMember = () => {
  emit('member')
}
</script>

<template>
  <div class="game-navbar" flex="~ row lg:col" justify-evenly items-center py-5 lg:px-5 border="t lg:r base" bg-black>
    <!-- 品牌導航 -->
    <div class="brand-nav" flex="~ row lg:col" gap-4 lg:gap-2>
      <button
        v-for="brand in brands"
        :key="brand.id"
        class="brand-button"
        :class="{ 'active': selectedBrand === brand.id }"
        text-lg
        px-3
        py-2
        rounded-lg
        transition
        duration-200
        @click="handleBrandClick(brand.id)"
      >
        <div class="brand-icon" i-ph-game-controller />
        <span class="brand-name" hidden lg:block text-sm>
          {{ brand.name_cn }}
        </span>
      </button>
    </div>

    <!-- 搜尋按鈕 -->
    <button
      class="search-button"
      text-2xl
      p-2
      rounded-lg
      hover:bg-gray-800
      transition
      duration-200
      @click="handleSearch"
    >
      <div i-ph-magnifying-glass />
    </button>

    <!-- 選單按鈕 -->
    <button
      class="menu-button"
      text-2xl
      p-2
      rounded-lg
      hover:bg-gray-800
      transition
      duration-200
      @click="handleMenu"
    >
      <div i-ph-list />
    </button>

    <!-- 模式切換按鈕 -->
    <NuxtLink
      v-if="mode === 'demo'"
      to="/real"
      class="mode-switch-button"
      text-2xl
      p-2
      rounded-lg
      bg-green-500
      hover:bg-green-600
      transition
      duration-200
    >
      <div i-ph-currency-dollar />
    </NuxtLink>

    <NuxtLink
      v-else
      to="/demo"
      class="mode-switch-button"
      text-2xl
      p-2
      rounded-lg
      bg-blue-500
      hover:bg-blue-600
      transition
      duration-200
    >
      <div i-ph-play-circle />
    </NuxtLink>

    <!-- 會員按鈕 (僅在正式模式顯示) -->
    <MemberMenu v-if="mode === 'real'" />
  </div>
</template>

<style scoped>
.game-navbar {
  @apply w-full;
}

.brand-nav {
  @apply flex-1;
}

.brand-button {
  @apply flex items-center gap-2 text-gray-400 hover:text-white;
}

.brand-button.active {
  @apply text-white bg-gray-800;
}

.brand-icon {
  @apply text-xl;
}

.brand-name {
  @apply font-medium;
}

.search-button, .menu-button {
  @apply text-gray-400 hover:text-white;
}

.mode-switch-button {
  @apply text-white;
}
</style> 