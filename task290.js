const arr = [1, 3, 2, 4, 6, 5, 8, 10, 9]
  
  
function isSumGivenNumber (array, num){
    let res = false;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if ((num === array[i] + array[j])){
                res = true
            }
        }
    }
    return res
}

const num = 10
isSumGivenNumber(arr, num) // true
console.info(isSumGivenNumber(arr, num))
const num1 = 52
isSumGivenNumber(arr, num1) // false
console.info(isSumGivenNumber(arr, num1))