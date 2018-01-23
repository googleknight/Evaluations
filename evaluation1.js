function checkOpenframe(i, inputArray) {
  return (i + 1) < inputArray.length && inputArray[i] + inputArray[i + 1] < 10;
}

function calculateScore(inputArray) {
  let result = 0;
  // const prev = inputArray[0];
  // const scoreOfFrame = [];
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] < 10) {
      if (checkOpenframe(i, inputArray)) {
        result += inputArray[i] + inputArray[i + 1];
        i += 1;
      }
    }
  }
  return result;
}


module.exports = calculateScore;
