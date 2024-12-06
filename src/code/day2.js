const { getInput, splitBreakLine } = require('../utils');

const data = splitBreakLine(getInput(2));
const MAX_ALLOWED_DIFF = 3

const safeReports = data.reduce((acc, currentReport) => {
  const numbers = currentReport.split(' ').filter(value => value !== '').map(Number)

  if (numbers.length < 2) {
    return acc
  }

  const areIncrease = numbers[0] < numbers[1]

  let areSafe = false

  if (areIncrease) {
    areSafe = numbers.every((item, index) => {
      const nextItem = numbers[index + 1] 
      return !nextItem || (nextItem >= item + 1 && nextItem <= item + MAX_ALLOWED_DIFF)
    })
  } else {
    areSafe = numbers.every((item, index) => {
      const nextItem = numbers[index + 1] 
      return !nextItem || (nextItem <= item - 1 && nextItem >= item - MAX_ALLOWED_DIFF)
    })
  }

  return areSafe ? acc + 1 : acc
}, 0)

console.log({safeReports})
