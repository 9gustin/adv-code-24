const { getInput } = require('../utils');

const data = getInput(3);

const possibleMultiplications = data.split('mul(')

const result = possibleMultiplications.reduce((acc, currentItem) => {
  const numberToMultiply = currentItem.split(')')[0]?.split(',')
  
  if (!numberToMultiply || numberToMultiply.length < 2) {
    return acc
  }

  const [number1, number2] = numberToMultiply.map(Number)
  const addition = number1 * number2

  return isNaN(addition) ? acc : acc + addition
}, 0)

console.log({result})
