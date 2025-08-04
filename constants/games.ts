import type { Game, GameBrand, GameCategory, GameQuery } from '~/types'

// CDN 路徑
const cdnPath = 'https://ik.imagekit.io/pangamesoft/tr:w-120,q-70,f-webp,cm-extract/jili/game/'

// 遊戲列表
export const gameList = [
  {
    game_id: 1,
    game_code: '2',
    game_name_cn: '秦皇传说',
    game_name_en: 'Chin Shi Huang',
    game_cover_image: cdnPath + '2.png',
    game_report_name: 'csh',
    brand: 'jili',
    category: 'slot',
    rating: 4.5,
    is_featured: true,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/2',
    real_url: '/real/2',
    min_bet: 0.1,
    max_bet: 1000,
    rtp: 96.5,
    volatility: 'medium',
    release_date: '2024-01-15',
    description_cn: '探索古代秦朝的傳奇故事，體驗宏偉的歷史場景。',
    description_en: 'Explore the legendary story of ancient Qin Dynasty with magnificent historical scenes.'
  },
  {
    game_id: 2,
    game_code: '5',
    game_name_cn: '火热辣椒',
    game_name_en: 'Hot Chilli',
    game_cover_image: cdnPath + '5.png',
    game_report_name: 'chilli',
    brand: 'jili',
    category: 'slot',
    rating: 4.2,
    is_featured: false,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/5',
    real_url: '/real/5',
    min_bet: 0.1,
    max_bet: 500,
    rtp: 95.8,
    volatility: 'high',
    release_date: '2024-02-20',
    description_cn: '感受火辣刺激的遊戲體驗，挑戰高額獎金。',
    description_en: 'Experience the hot and spicy gaming adventure with high rewards.'
  },
  {
    game_id: 3,
    game_code: '6',
    game_name_cn: '发财树',
    game_name_en: 'Fortune Tree',
    game_cover_image: cdnPath + '6.png',
    game_report_name: 'luckytree',
    brand: 'jili',
    category: 'slot',
    rating: 4.7,
    is_featured: true,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/6',
    real_url: '/real/6',
    min_bet: 0.1,
    max_bet: 2000,
    rtp: 97.2,
    volatility: 'low',
    release_date: '2024-03-10',
    description_cn: '在神奇的發財樹下尋找財富，享受穩定的回報。',
    description_en: 'Find fortune under the magical money tree with stable returns.'
  },
  {
    game_id: 4,
    game_code: '13',
    game_name_cn: '球好运',
    game_name_en: 'Lucky Ball',
    game_cover_image: cdnPath + '13.png',
    game_report_name: 'wondershow',
    brand: 'jili',
    category: 'slot',
    rating: 4.0,
    is_featured: false,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/13',
    real_url: '/real/13',
    min_bet: 0.1,
    max_bet: 800,
    rtp: 96.0,
    volatility: 'medium',
    release_date: '2024-04-05',
    description_cn: '滾動幸運球，贏取豐厚獎金。',
    description_en: 'Roll the lucky ball to win generous rewards.'
  },
  {
    game_id: 6,
    game_code: '16',
    game_name_cn: '丛林之王',
    game_name_en: 'Jungle King',
    game_cover_image: cdnPath + '16.png',
    game_report_name: 'kk2',
    brand: 'jili',
    category: 'slot',
    rating: 4.3,
    is_featured: false,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/16',
    real_url: '/real/16',
    min_bet: 0.1,
    max_bet: 1500,
    rtp: 96.8,
    volatility: 'high',
    release_date: '2024-05-12',
    description_cn: '成為叢林之王，征服野生動物世界。',
    description_en: 'Become the king of the jungle and conquer the wild animal world.'
  },
  {
    game_id: 7,
    game_code: '17',
    game_name_cn: '上海甜心',
    game_name_en: 'Shanghai Beauty',
    game_cover_image: cdnPath + '17.png',
    game_report_name: 'sweetheart',
    brand: 'jili',
    category: 'slot',
    rating: 4.6,
    is_featured: true,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/17',
    real_url: '/real/17',
    min_bet: 0.1,
    max_bet: 1200,
    rtp: 96.9,
    volatility: 'medium',
    release_date: '2024-06-18',
    description_cn: '體驗上海風情，遇見美麗甜心。',
    description_en: 'Experience Shanghai charm and meet the beautiful sweetheart.'
  },
  {
    game_id: 8,
    game_code: '21',
    game_name_cn: '极速发发发',
    game_name_en: 'Fa Fa Fa',
    game_cover_image: cdnPath + '21.png',
    game_report_name: 'ols',
    brand: 'jili',
    category: 'slot',
    rating: 4.1,
    is_featured: false,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/21',
    real_url: '/real/21',
    min_bet: 0.1,
    max_bet: 600,
    rtp: 95.5,
    volatility: 'high',
    release_date: '2024-07-25',
    description_cn: '極速發財，快速贏取獎金。',
    description_en: 'Fast fortune, quick rewards.'
  },
  {
    game_id: 9,
    game_code: '35',
    game_name_cn: '疯狂777',
    game_name_en: 'Crazy777',
    game_cover_image: cdnPath + '35.png',
    game_report_name: 'ols2',
    brand: 'jili',
    category: 'slot',
    rating: 4.4,
    is_featured: false,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/35',
    real_url: '/real/35',
    min_bet: 0.1,
    max_bet: 1000,
    rtp: 96.2,
    volatility: 'medium',
    release_date: '2024-08-30',
    description_cn: '瘋狂的777，瘋狂的獎金。',
    description_en: 'Crazy 777, crazy rewards.'
  },
  {
    game_id: 10,
    game_code: '36',
    game_name_cn: '包青天',
    game_name_en: 'Bao boon chin',
    game_cover_image: cdnPath + '36.png',
    game_report_name: 'bbc',
    brand: 'jili',
    category: 'slot',
    rating: 4.8,
    is_featured: true,
    is_demo_available: true,
    is_real_available: true,
    demo_url: '/demo/36',
    real_url: '/real/36',
    min_bet: 0.1,
    max_bet: 2000,
    rtp: 97.5,
    volatility: 'low',
    release_date: '2024-09-15',
    description_cn: '跟隨包青天斷案，正義必勝。',
    description_en: 'Follow Judge Bao to solve cases, justice will prevail.'
  }
]

// 遊戲品牌
export const gameBrands = [
  {
    id: 'jili',
    name_cn: 'JILI',
    name_en: 'JILI',
    logo: cdnPath + 'brands/jili.png',
    game_count: gameList.filter(game => game.brand === 'jili').length
  }
]

// 遊戲分類
export const gameCategories = [
  {
    id: 'slot',
    name_cn: '老虎機',
    name_en: 'Slot Games',
    icon: 'i-ph-slot-machine'
  },
  {
    id: 'table',
    name_cn: '桌面遊戲',
    name_en: 'Table Games',
    icon: 'i-ph-cards'
  },
  {
    id: 'live',
    name_cn: '真人遊戲',
    name_en: 'Live Games',
    icon: 'i-ph-video-camera'
  },
  {
    id: 'arcade',
    name_cn: '街機遊戲',
    name_en: 'Arcade Games',
    icon: 'i-ph-game-controller'
  }
]

// 遊戲查詢列表
export const GAME_QUERY_LIST = [
  {
    type: 'featured' as const,
    title: '精選遊戲',
    query: 'featured',
    brand: undefined,
    category: undefined
  },
  {
    type: 'brand' as const,
    title: 'JILI 遊戲',
    query: 'jili',
    brand: 'jili',
    category: undefined
  },
  {
    type: 'category' as const,
    title: '老虎機',
    query: 'slot',
    brand: undefined,
    category: 'slot'
  }
] 