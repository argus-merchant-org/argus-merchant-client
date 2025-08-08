import { gameList, gameBrands, gameCategories, GAME_QUERY_LIST } from '~/constants/games'
import type { Game, GameBrand, GameCategory, GameQuery } from '~/types'
import { games } from '~/data/games'

export const useGames = () => {
  // 獲取所有遊戲
  const getAllGames = () => games

  // 獲取精選遊戲
  const getFeaturedGames = () => games.filter(game => game.isHot)

  // 根據品牌獲取遊戲
  const getGamesByBrand = (brand: string) => games.filter(game => game.providerName === brand)

  // 根據分類獲取遊戲
  const getGamesByCategory = (category: string) => games.filter(game => game.category === category)

  // 搜尋遊戲
  const searchGames = (keyword: string) => {
    if (!keyword.trim()) {
      // 空搜尋返回前五個遊戲
      return games.slice(0, 5)
    }
    
    const lowerKeyword = keyword.toLowerCase()
    return games.filter(game => 
      game.name.zh.toLowerCase().includes(lowerKeyword) ||
      game.name.en.toLowerCase().includes(lowerKeyword)
    )
  }

  // 獲取遊戲詳情
  const getGameById = (id: string) => games.find(game => game.id === id)

  // 獲取所有品牌
  const getAllBrands = () => {
    const brands = [...new Set(games.map(game => game.providerName))]
    return brands.map(brand => ({
      id: brand,
      name: brand
    }))
  }

  // 獲取所有分類
  const getAllCategories = () => {
    const categories = [...new Set(games.map(game => game.category))]
    return categories.map(category => ({
      id: category,
      name: category
    }))
  }

  // 獲取查詢列表
  const getQueryList = () => GAME_QUERY_LIST

  // 獲取可試玩的遊戲
  const getDemoGames = () => games.filter(game => game.isNew)

  // 獲取可正式遊戲的遊戲
  const getRealGames = () => games.filter(game => game.isHot)

  return {
    getAllGames,
    getFeaturedGames,
    getGamesByBrand,
    getGamesByCategory,
    searchGames,
    getGameById,
    getAllBrands,
    getAllCategories,
    getQueryList,
    getDemoGames,
    getRealGames
  }
} 