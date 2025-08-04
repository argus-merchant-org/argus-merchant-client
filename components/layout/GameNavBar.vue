<script setup lang="ts">

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

const {getAllBrands} = useGames()
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
  <div
    flex="~ row lg:col"
    justify-evenly items-center
    py5 lg:px5
    border="t lg:r base"
    bg-black
  >
    <!-- 首頁 -->
    <NuxtLink v-slot="{ isActive }" to="/" :title="'首頁'">
      <div
        text-2xl
        :class="isActive ? 'i-ph-house-fill text-primary' : 'i-ph-house'"
      />
    </NuxtLink>

    <!-- 試玩模式 -->
    <NuxtLink v-slot="{ isActive }" to="/demo" :title="'試玩模式'">
      <div
        text-2xl
        :class="isActive ? 'i-ph-play-circle-fill text-primary' : 'i-ph-play-circle'"
      />
    </NuxtLink>

    <!-- 正式模式 -->
    <NuxtLink v-slot="{ isActive }" to="/real" :title="'正式模式'">
      <div
        text-2xl
        :class="isActive ? 'i-ph-currency-dollar-fill text-primary' : 'i-ph-currency-dollar'"
      />
    </NuxtLink>

    <!-- 搜尋 -->
    <NuxtLink v-slot="{ isActive }" to="/search" :title="'搜尋遊戲'">
      <div
        text-2xl
        :class="isActive ? 'i-ph-magnifying-glass-fill text-primary' : 'i-ph-magnifying-glass'"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
/* 保持簡潔，使用 UnoCSS 類別 */
</style> 