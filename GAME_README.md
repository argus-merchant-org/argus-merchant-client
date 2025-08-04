# 遊戲系統使用說明

## 概述

這是一個基於 Nuxt.js 的遊戲展示系統，支援試玩和正式模式，包含完整的遊戲管理功能。

## 功能特色

### 🎮 遊戲展示
- **精選遊戲輪播** - 首頁展示主推遊戲
- **遊戲網格** - 響應式遊戲卡片展示
- **品牌分類** - 按遊戲品牌篩選
- **搜尋功能** - 支援中英文遊戲名稱搜尋

### 🎯 雙模式系統
- **試玩模式** - 免費體驗，無需註冊
- **正式模式** - 會員登入，真實獎勵

### 👤 會員系統
- **登入/註冊** - 完整的會員管理
- **會員中心** - 個人資料和遊戲記錄
- **金流管理** - 充值、提款、交易記錄

## 頁面結構

```
/                    # 首頁 - 遊戲展示
/demo               # 試玩模式
/real               # 正式模式
/search              # 遊戲搜尋
/games/[id]         # 遊戲詳情頁面
/test                # 組件測試頁面
```

## 組件說明

### 核心組件
- `GameCard.vue` - 遊戲卡片組件
- `GameGrid.vue` - 遊戲網格組件
- `ModeSwitcher.vue` - 試玩/正式模式切換
- `GameNavBar.vue` - 遊戲導航欄
- `MemberMenu.vue` - 會員選單

### 頁面組件
- `index.vue` - 首頁
- `demo.vue` - 試玩模式頁面
- `real.vue` - 正式模式頁面
- `search.vue` - 搜尋頁面
- `games/[id].vue` - 遊戲詳情頁面

## 數據結構

### Game 類型
```typescript
interface Game {
  game_id: number
  game_code: string
  game_name_cn: string
  game_name_en: string
  game_cover_image: string
  game_report_name: string
  brand: string
  category: 'slot' | 'table' | 'live' | 'arcade'
  rating: number
  is_featured: boolean
  is_demo_available: boolean
  is_real_available: boolean
  demo_url?: string
  real_url?: string
  min_bet?: number
  max_bet?: number
  rtp?: number
  volatility?: 'low' | 'medium' | 'high'
  release_date?: string
  description_cn?: string
  description_en?: string
}
```

## 使用方法

### 1. 啟動開發服務器
```bash
cd module/argus-merchant-client
npm run dev
```

### 2. 訪問測試頁面
打開瀏覽器訪問 `http://localhost:3001/test` 查看所有組件功能。

### 3. 查看主要頁面
- 首頁：`http://localhost:3001/`
- 試玩模式：`http://localhost:3001/demo`
- 正式模式：`http://localhost:3001/real`
- 搜尋頁面：`http://localhost:3001/search`

## 自定義配置

### 添加新遊戲
在 `constants/games.ts` 中添加新的遊戲數據：

```typescript
{
  game_id: 7,
  game_code: '20',
  game_name_cn: '新遊戲',
  game_name_en: 'New Game',
  game_cover_image: cdnPath + '20.png',
  game_report_name: 'newgame',
  brand: 'pragmatic',
  category: 'slot',
  rating: 4.0,
  is_featured: false,
  is_demo_available: true,
  is_real_available: true,
  demo_url: '/demo/newgame',
  real_url: '/real/newgame',
  // ... 其他屬性
}
```

### 添加新品牌
在 `constants/games.ts` 的 `gameBrands` 數組中添加：

```typescript
{
  id: 'newbrand',
  name_cn: '新品牌',
  name_en: 'New Brand',
  logo: cdnPath + 'brands/newbrand.png',
  game_count: 1
}
```

## 下一步開發

### 後端整合
1. **API 整合** - 連接真實的遊戲數據 API
2. **會員系統** - 整合用戶認證和授權
3. **金流系統** - 整合支付和提款功能

### 功能擴展
1. **遊戲詳情** - 添加更多遊戲資訊和截圖
2. **收藏功能** - 用戶可以收藏喜愛的遊戲
3. **推薦系統** - 基於用戶行為的遊戲推薦
4. **多語言** - 支援更多語言版本

### 性能優化
1. **圖片優化** - 使用 WebP 格式和懶加載
2. **代碼分割** - 按路由分割代碼
3. **緩存策略** - 實現適當的緩存機制

## 技術棧

- **前端框架**：Nuxt.js 3
- **UI 框架**：UnoCSS
- **圖標**：Phosphor Icons
- **圖片處理**：Nuxt Image
- **類型檢查**：TypeScript

## 開發團隊

這個遊戲系統是 Argus Merchant 項目的一部分，旨在提供完整的線上遊戲解決方案。 