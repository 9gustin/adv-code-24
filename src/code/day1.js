const { getInput, splitBreakLine } = require('../utils');

const data = splitBreakLine(getInput(1));

let left = []
let right = []

data.forEach(
  (currentItem) => {
    const [leftNumber, rightNumber] = currentItem.split(' ').filter(value => value !== '').map(Number)
    left.push(leftNumber || 0)
    right.push(rightNumber || 0)
  }, 0)

left = left.sort()
right = right.sort()

let i = 0;
const totalDistance = left.reduce(
  (acc, currentNumber) => {
    const diff = currentNumber - right[i]
    const possitiveDiff = diff >= 0 ? diff : diff * -1
    i = i + 1
    return acc + possitiveDiff

  }, 0
)

console.log({totalDistance})