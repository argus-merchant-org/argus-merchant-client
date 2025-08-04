import { gameList, gameBrands, gameCategories, GAME_QUERY_LIST } from '~/constants/games'
import type { Game, GameBrand, GameCategory, GameQuery } from '~/types'

export const useGames = () => {
  // 獲取所有遊戲
  const getAllGames = () => gameList

  // 獲取精選遊戲
  const getFeaturedGames = () => gameList.filter(game => game.is_featured)

  // 根據品牌獲取遊戲
  const getGamesByBrand = (brand: string) => gameList.filter(game => game.brand === brand)

  // 根據分類獲取遊戲
  const getGamesByCategory = (category: string) => gameList.filter(game => game.category === category)

  // 搜尋遊戲
  const searchGames = (keyword: string) => {
    const lowerKeyword = keyword.toLowerCase()
    return gameList.filter(game => 
      game.game_name_cn.toLowerCase().includes(lowerKeyword) ||
      game.game_name_en.toLowerCase().includes(lowerKeyword)
    )
  }

  // 獲取遊戲詳情
  const getGameById = (id: number) => gameList.find(game => game.game_id === id)

  // 獲取所有品牌
  const getAllBrands = () => gameBrands

  // 獲取所有分類
  const getAllCategories = () => gameCategories

  // 獲取查詢列表
  const getQueryList = () => GAME_QUERY_LIST

  // 獲取可試玩的遊戲
  const getDemoGames = () => gameList.filter(game => game.is_demo_available)

  // 獲取可正式遊戲的遊戲
  const getRealGames = () => gameList.filter(game => game.is_real_available)

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