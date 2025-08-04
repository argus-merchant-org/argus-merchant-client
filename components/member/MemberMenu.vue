<script setup lang="ts">
const isMenuOpen = ref(false)

// 會員狀態 (這裡應該從 store 或 API 獲取)
const isLoggedIn = ref(false)
const userInfo = ref({
  username: '測試用戶',
  balance: 1000.00
})

// 切換選單
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 處理登入
const handleLogin = () => {
  // 這裡應該導航到登入頁面
  console.log('Navigate to login page')
}

// 處理登出
const handleLogout = () => {
  // 這裡應該處理登出邏輯
  console.log('Logout')
  isLoggedIn.value = false
  isMenuOpen.value = false
}

// 處理金流
const handlePayment = () => {
  // 這裡應該導航到金流頁面
  console.log('Navigate to payment page')
}

// 處理會員中心
const handleMemberCenter = () => {
  // 這裡應該導航到會員中心
  console.log('Navigate to member center')
}
</script>

<template>
  <div class="member-menu" relative>
    <!-- 會員按鈕 -->
    <button
      class="member-button"
      text-2xl
      p-2
      rounded-lg
      hover:bg-gray-800
      transition
      duration-200
      @click="toggleMenu"
    >
      <div i-ph-user />
    </button>

    <!-- 下拉選單 -->
    <div
      v-if="isMenuOpen"
      class="menu-dropdown"
      absolute
      top-full
      right-0
      mt-2
      bg-gray-900
      border
      border-gray-700
      rounded-lg
      shadow-lg
      min-w-48
      z-50
    >
      <!-- 未登入狀態 -->
      <div v-if="!isLoggedIn" class="guest-menu" p-4>
        <div class="guest-title" text-lg font-bold mb-4>
          歡迎來到遊戲世界
        </div>
        <div class="guest-actions" space-y-2>
          <button
            class="login-button"
            w-full
            bg-blue-500
            hover:bg-blue-600
            text-white
            px-4
            py-2
            rounded
            transition
            duration-200
            @click="handleLogin"
          >
            登入
          </button>
          <button
            class="register-button"
            w-full
            bg-green-500
            hover:bg-green-600
            text-white
            px-4
            py-2
            rounded
            transition
            duration-200
          >
            註冊
          </button>
        </div>
      </div>

      <!-- 已登入狀態 -->
      <div v-else class="user-menu" p-4>
        <div class="user-info" mb-4>
          <div class="username" text-lg font-bold mb-1>
            {{ userInfo.username }}
          </div>
          <div class="balance" text-sm text-gray-400>
            餘額: ${{ userInfo.balance.toFixed(2) }}
          </div>
        </div>
        
        <div class="user-actions" space-y-2>
          <button
            class="member-center-button"
            w-full
            text-left
            px-3
            py-2
            rounded
            hover:bg-gray-800
            transition
            duration-200
            @click="handleMemberCenter"
          >
            <div i-ph-user-circle mr-2 />
            會員中心
          </button>
          <button
            class="payment-button"
            w-full
            text-left
            px-3
            py-2
            rounded
            hover:bg-gray-800
            transition
            duration-200
            @click="handlePayment"
          >
            <div i-ph-currency-dollar mr-2 />
            金流管理
          </button>
          <hr border-gray-700 my-2>
          <button
            class="logout-button"
            w-full
            text-left
            px-3
            py-2
            rounded
            hover:bg-red-600
            transition
            duration-200
            @click="handleLogout"
          >
            <div i-ph-sign-out mr-2 />
            登出
          </button>
        </div>
      </div>
    </div>

    <!-- 背景遮罩 -->
    <div
      v-if="isMenuOpen"
      class="menu-backdrop"
      fixed
      inset-0
      z-40
      @click="isMenuOpen = false"
    />
  </div>
</template>

<style scoped>
.member-menu {
  @apply relative;
}

.member-button {
  @apply text-gray-400 hover:text-white;
}

.menu-dropdown {
  @apply w-full;
}

.guest-menu {
  @apply w-full;
}

.guest-title {
  @apply text-white;
}

.guest-actions {
  @apply w-full;
}

.login-button, .register-button {
  @apply font-medium;
}

.user-menu {
  @apply w-full;
}

.user-info {
  @apply w-full;
}

.username {
  @apply text-white;
}

.balance {
  @apply text-sm;
}

.user-actions {
  @apply w-full;
}

.member-center-button, .payment-button, .logout-button {
  @apply text-gray-300 hover:text-white flex items-center;
}

.menu-backdrop {
  @apply bg-transparent;
}
</style> 