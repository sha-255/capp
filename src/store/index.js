import { createStore } from 'vuex'
import coins from './modules/coins.js'

export default createStore({
  modules: {
    coins
  }
})
