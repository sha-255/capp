import { defineStore } from 'pinia'
import { getCoinsNames } from '../api/cryptocompare-api.js'
import { ref } from 'vue'

export const useCoinsStore = defineStore('coins-store', () => {
  const coinsNames = ref([])

  const getCoins = async () => (coinsNames.value = await getCoinsNames())

  return { coinsNames, getCoins }
})
