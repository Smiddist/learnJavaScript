const arr =[-1, -2, -3]  // 7
const arr1 = [2, -1, 2, 3, -9]
const arr2 = [-1, 2, 3, -9, 11]
const arr3 = [-2, -1, 1, 2]
const arr4 = [100, -9, 2, -3, 5]
const arr5 = [1, 2, 3]

Array.prototype.sum = function (){
    let sum = 0
    this.forEach((item) => sum += item)
    return sum
}

function maxElemSum(array){
    let res = Math.max(...array);
    if (res < 0) {
        return res;
    }

    for(let i = 0; i < array.length +1 ; i++){
        nextArr = array.slice(0, i)
    
        for(let j = 0; j < array.length; j++){
            nextArr2 = nextArr.slice(j, i)

            if (res < nextArr2.sum()) {
                res = nextArr2.sum();
            }
        }
    }
   return res;
}
console.info(maxElemSum(arr))
console.info(maxElemSum(arr1))
console.info(maxElemSum(arr2))
console.info(maxElemSum(arr3))
console.info(maxElemSum(arr4))
console.info(maxElemSum(arr5))