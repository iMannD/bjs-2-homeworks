function getArrayParams(...arr) {
  if (arr.length < 1) {
    return 0;
  } 
  let min = Infinity;
  let max = -Infinity;
  let sum;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr.max;
    }
    sum = sum + arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  } 
  return arr.reduce(function(sum, i) {
    return sum + i;
  })
}

function differenceMaxMinWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  } 
  let minimal = Math.max(...arr);
  let maximal = Math.max(...arr);
  let diff = maximal - minimal;
  return diff;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diff;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  diff = sumEvenElement - sumEvenElement;
  return diff;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  } 
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avgEven;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  avgEven = sumEvenElement / countEvenElement;
  return avgEven;
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length < 1) {
    return 0;
  } 
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i])) > maxWorkerResult {
      maxWorkerResult = func(arrOfArr);
    }
  }
  return maxWorkerResult;
}
