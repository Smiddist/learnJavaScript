const arr1 = [2, 3, 4, 5, 4, 3, 2]
const arr2 = [2, 3, 5, 5, 4, 3, 2]
const arr3 = [0, 3, 4, 2, 4, 3, 2]

function getElemUnpaired (array){
    const uniqArray = array.filter((item, index) =>index !== array.indexOf(item))
    const res = array.find((item) => !uniqArray.includes(item))
    return res;
}

getElemUnpaired(arr1) // 5
getElemUnpaired(arr2) // 4
getElemUnpaired(arr3) // 0