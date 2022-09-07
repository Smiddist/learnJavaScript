const arr = [1, 3, 2, 6, 5, 8, 10, 9, 4]
  
  
function getLargestSumAnyTwoElems (array){
    let maxSum = 0;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[i] + array[j] > maxSum && array[i] !== array[j]){
                maxSum = array[i] + array[j]
                console.info(maxSum)
            }
        }
    }
    return maxSum;
}

getLargestSumAnyTwoElems(arr) // 19
console.info(getLargestSumAnyTwoElems(arr))