import { ref, onMounted, watch } from 'vue'
import {
  subscribeToTicker,
  unsubscribeFromTicker
} from '../api/cryptocompare-api'

export function useTickersList() {
  const tickers = ref([])

  onMounted(() => showLocalStorageContent())

  watch(tickers, () => setLocalStorageContent())

  const showLocalStorageContent = () => {
    const data = localStorage.getItem('tickers-list')
    if (data) {
      tickers.value = JSON.parse(data).map((t) => ref(t))
      tickers.value.forEach((ticker) => {
        subscribeToTicker(ticker.value.name, (newPrice) =>
          updateTicker(ticker.value.name, newPrice)
        )
      })
    }
  }

  const setLocalStorageContent = () => {
    localStorage.setItem(
      'tickers-list',
      JSON.stringify(
        tickers.value
          .map((t) => {
            return t.value
          })
          .map((t) => (t = { ...t, price: '...' }))
      )
    )
  }

  const addTicker = (ticker) => {
    tickers.value = [ticker, ...tickers.value]
  }

  const addTickerByName = (name) => {
    const ticker = ref({
      name: name.toUpperCase(),
      price: '...'
    })
    subscribeToTicker(ticker.value.name, (newPrice) =>
      updateTicker(ticker.value.name, newPrice)
    )
    addTicker(ticker)
  }

  const deleteTicker = (tickerToDelete) => {
    tickers.value = tickers.value.filter(
      (ticker) => ticker.value !== tickerToDelete.value
    )
    unsubscribeFromTicker(tickerToDelete)
  }

  const updateTicker = (tickerName, price) => {
    tickers.value
      .filter((t) => t.value.name === tickerName)
      .forEach((t) => {
        t.value.price = price
      })
  }

  return { addTicker, addTickerByName, deleteTicker, updateTicker, tickers }
}
