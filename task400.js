const arr = [3, 8, 9, 7, 6] 
const times = 2

function getRotatedArray(array, iteration){ // Warning! using the method causes mutation of the array
    for (let i = 0; i < iteration; i++){
      array.push(...array.splice(0,1))
      //console.info(array)
    }
    console.info(array)
    return array;
}

getRotatedArray(arr, times) // [9,7,6,3,8]

