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
    <!-- 選單 -->
    <NuxtLink v-slot="{ isActive }" to="/menu" :title="'選單'">
      <div
        text-2xl
        :class="isActive ? 'i-ph-list-fill text-primary' : 'i-ph-list'"
      />
    </NuxtLink>

    <!-- 遊戲 -->
    <NuxtLink v-slot="{ isActive }" to="/games" :title="'遊戲'">
      <div
        text-2xl
        :class="isActive ? 'i-ph-game-controller-fill text-primary' : 'i-ph-game-controller'"
      />
    </NuxtLink>

    <!-- 正式 -->
    <NuxtLink v-slot="{ isActive }" to="/real" :title="'正式'">
      <div
        text-2xl
        :class="isActive ? 'i-ph-currency-dollar-fill text-primary' : 'i-ph-currency-dollar'"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
/* 保持簡潔，使用 UnoCSS 類別 */
</style> 