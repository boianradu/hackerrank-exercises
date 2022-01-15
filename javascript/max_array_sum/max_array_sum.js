"use strict";

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
  let sumResult = 0;
  for (let i = 0; i < arr.length; i++) {
    loop1: for (let step1 = 2; step1 < arr.length; step1++) {
      loop2: for (let step2 = 2; step2 < arr.length; step2++) {
        let arrAux = [];
        arrAux[0] = arr[i];
        for (let j = i + step1; j < arr.length; j += step2) {
          arrAux.push(arr[j]);
        }
        // console.log(arrAux);
        if (arrAux.length > 1) {
          let sum = arrAux.reduce(function (a, b) {
            return a + b;
          }, 0);
          if (sum > sumResult) sumResult = sum;
        }
        if (step1 + step2 + i >= arr.length) {
          if (step1 + 1 + i >= arr.length) break loop1;
          break loop2;
        }
      }
    }
  }
  if (sumResult < 0) sumResult = 0;
  return sumResult;
}

function main() {
  const arr = [
    3, 5, -7, 8, 10, 15, -22, 16, 18, 103, 44, -55, -23, 8, 9, 0, 13, 2, 15, 3,
    2, 80, 0, -18, -44,
  ];
  const res = maxSubsetSum(arr);

  console.log(res + "\n");
}

main();
