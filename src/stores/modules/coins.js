import { getCoinsNames } from '../../api/cryptocompare-api.js'

export default {
  actions: {
    async getCoins({ commit }) {
      commit('updateCoins', await getCoinsNames())
    }
  },
  mutations: {
    updateCoins(state, coins) {
      state.coins = coins
    }
  },
  state: {
    coins: []
  },
  getters: {
    allCoins(state) {
      return state.coins
    }
  }
}
