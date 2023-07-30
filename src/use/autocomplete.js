// const calculateMaxSymbols = (calc, symbols) => {
//   const calc1 = JSON.parse(JSON.stringify(calc))
//   const arrStr = calc1.join('').slice(0, symbols)
//   const res = calc1.map((el, idx) => {
//     if (!calc1[idx - 1]) return
//     if (arrStr.includes(calc1[idx - 1])) {
//       return el
//     }
//   })
//   console.log(res.filter((el) => el !== undefined))
// }

const calculateMaxSymbols = (calc, symbols) => {
  let counter = 0
  let breackIdx = 0
  calc.forEach((el) => {
    const chars = el.split('')
    chars.forEach(() => {
      counter++
      if (counter === symbols) {
        breackIdx = calc.indexOf(el)
      }
    })
  })
  return calc.slice(0, breackIdx)
}

export default (filteredBy, filterArray, MAX_SYMBOLS = 18) => {
  if (!filteredBy) return
  const correct = filterArray.filter((c) =>
    c.toLowerCase().includes(filteredBy.toLowerCase())
  )
  return calculateMaxSymbols(correct, MAX_SYMBOLS)
}
