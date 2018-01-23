function checkStrike(pins) {
  return pins === 10;
}
function checkSpare(i, inputArray) {
  return (i + 1) < inputArray.length && inputArray[i] + inputArray[i + 1] === 10;
}
function checkOpenframe(i, inputArray) {
  return (i + 1) < inputArray.length && inputArray[i] + inputArray[i + 1] < 10;
}

function calculateScore(inputArray) {
  let result = 0;
  for (let i = 0; i < inputArray.length - 1; i += 1) {
    if (checkStrike(inputArray[i])) {
      result += 10 + inputArray[i + 1] + inputArray[i + 2];
    } else if (checkSpare(i, inputArray)) {
      result += 10 + inputArray[i + 2];
      i += 1;
    } else if (checkOpenframe(i, inputArray)) {
      result += inputArray[i] + inputArray[i + 1];
      i += 1;
    }
  }
  return result;
}


module.exports = calculateScore;
