import { defineStore } from 'pinia'
import { getCoinsNames } from '../api/cryptocompare-api.js'

const coinsNames = getCoinsNames()

export const useCoinsStore = defineStore('coins-store', {
  state: async () => {
    return { coinsNames }
  }
})
