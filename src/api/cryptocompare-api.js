const API_KEY =
  'f4034c4277998db9a0aba124c48283ea6acbd586a0bbb45c077d205f73afc5dc'
const UNCORRECT_MESSAGE = 'INVALID_SUB'
const PRICE_CURRENCY = 'USD'
const wsUrl = new URL('wss://streamer.cryptocompare.com/v2')
wsUrl.searchParams.set('api_key', API_KEY)
const tickersHandlers = new Map()
const subscribedTickers = []

export const getCoinsNames = async () => {
  const url = new URL('https://min-api.cryptocompare.com/data/all/coinlist')
  url.searchParams.set('summary', true)
  const data = async () => {
    const f = await fetch(url)
    return await f.json()
  }
  const tmp = await data()
  return Object.keys(tmp.Data)
}

// export const subscribeToTicker = (ticker, callback) => {
//   const subscribers = tickersHandlers.get(ticker) || []
//   tickersHandlers.set(ticker, [...subscribers, callback])
//   //subscribeToTickerOnWs(ticker)
// }

// export const unsubscribeFromTicker = (ticker) => {
//   tickersHandlers.delete(ticker)
//   //unsubscribeFromTickerOnWs(ticker)
// }
