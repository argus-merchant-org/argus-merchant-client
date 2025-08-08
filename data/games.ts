import type { Game } from '~/types'

export const games: Game[] = [
  {
    id: 'game1',
    name: {
      zh: '老虎機',
      en: 'Slot Machine'
    },
    providerName: 'Provider A',
    thumbnail: 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Slot+Machine',
    isHot: true,
    isNew: false,
    category: '老虎機'
  },
  {
    id: 'game2',
    name: {
      zh: '百家樂',
      en: 'Baccarat'
    },
    providerName: 'Provider B',
    thumbnail: 'https://via.placeholder.com/300x200/059669/FFFFFF?text=Baccarat',
    isHot: true,
    isNew: false,
    category: '百家樂'
  },
  {
    id: 'game3',
    name: {
      zh: '輪盤',
      en: 'Roulette'
    },
    providerName: 'Provider A',
    thumbnail: 'https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Roulette',
    isHot: true,
    isNew: false,
    category: '輪盤'
  },
  {
    id: 'game4',
    name: {
      zh: '21點',
      en: 'Blackjack'
    },
    providerName: 'Provider C',
    thumbnail: 'https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=Blackjack',
    isHot: true,
    isNew: false,
    category: '21點'
  },
  {
    id: 'game5',
    name: {
      zh: '骰寶',
      en: 'Sic Bo'
    },
    providerName: 'Provider B',
    thumbnail: 'https://via.placeholder.com/300x200/EA580C/FFFFFF?text=Sic+Bo',
    isHot: true,
    isNew: false,
    category: '骰寶'
  },
  {
    id: 'game6',
    name: {
      zh: '龍虎鬥',
      en: 'Dragon Tiger'
    },
    providerName: 'Provider A',
    thumbnail: 'https://via.placeholder.com/300x200/0891B2/FFFFFF?text=Dragon+Tiger',
    isHot: false,
    isNew: true,
    category: '龍虎鬥'
  },
  {
    id: 'game7',
    name: {
      zh: '牛牛',
      en: 'Bull Bull'
    },
    providerName: 'Provider C',
    thumbnail: 'https://via.placeholder.com/300x200/16A34A/FFFFFF?text=Bull+Bull',
    isHot: false,
    isNew: true,
    category: '牛牛'
  },
  {
    id: 'game8',
    name: {
      zh: '炸金花',
      en: 'Golden Flower'
    },
    providerName: 'Provider B',
    thumbnail: 'https://via.placeholder.com/300x200/9333EA/FFFFFF?text=Golden+Flower',
    isHot: false,
    isNew: false,
    category: '炸金花'
  }
]
