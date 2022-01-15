"use strict";

// Complete the maxSubsetSum function below.
function minimumSwaps(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentIndex = i;
    let currentValue = arr[i] - 1;
    if (currentIndex != currentValue) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] - 1 == currentIndex) {
          let aux = arr[i];
          arr[i] = arr[j];
          arr[j] = aux;
          result++;
          break;
        }
      }
    }
  }
  return result;
}

function main() {
  const arr = [2, 3, 4, 1, 5];
  // const arr = [4, 3, 1, 2];
  console.log(arr);
  const res = minimumSwaps(arr);

  console.log(res + "\n");
}

main();
