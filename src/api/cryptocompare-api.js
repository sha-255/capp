const API_KEY =
  'f4034c4277998db9a0aba124c48283ea6acbd586a0bbb45c077d205f73afc5dc'

const tickersHandlers = new Map()

const loadTickers = async () => {
  if (tickersHandlers.size === 0) {
    return
  }
  const f = await fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${[
      ...tickersHandlers.keys()
    ].join(',')}&tsyms=USD&api_key=${API_KEY}`
  )
  return await f.json().then((rawData) => {
    const updatedPrices = Object.fromEntries(
      Object.entries(rawData).map(([key, value]) => [key, value.USD])
    )
    Object.entries(updatedPrices).forEach(([currency, newPrice]) => {
      const handlers = tickersHandlers.get(currency) ?? []
      handlers.forEach((fn) => fn(newPrice))
    })
  })
}

export const subscribeToTicker = (ticker, cb) => {
  const subscribers = tickersHandlers.get(ticker) || []
  tickersHandlers.set(ticker, [...subscribers, cb])
}

export const unsubscribeFromTicker = (ticker) => {
  tickersHandlers.delete(ticker)
}

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

setInterval(loadTickers, 3_000)
