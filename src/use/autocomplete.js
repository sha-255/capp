const CorrectionByWords = (correctionArray, length) => {
  let counter = 0
  let breackIdx = 0
  correctionArray.forEach((el, idx) => {
    const chars = el.split('')
    chars.forEach(() => {
      counter++
      if (counter === length) {
        breackIdx = idx
      }
    })
  })
  return correctionArray.slice(0, breackIdx)
}

export default (filteredBy, filterArray, maxSymbols = 16) => {
  if (!filteredBy) return
  const correct = filterArray.filter((word) =>
    word.toLowerCase().includes(filteredBy.toLowerCase())
  )
  return CorrectionByWords(correct, maxSymbols)
}
