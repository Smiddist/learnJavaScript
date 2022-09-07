const arr1 = [0, 1, 3, 2, 4, 6, 5, 8, 10, 9]
const arr2 = [0, 1000]
const arr3 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
function countZerosInNumber (array) {
    let res = 0;
    array = array.join()
    array = array.split([])
    array.forEach(function(item) {
        if (item === '0'){
            res = res + 1
        }
    })
    return res;
}

/*
expect(countZerosInNumber(arr1)).toBe(2)
expect(countZerosInNumber(arr2)).toBe(4)
expect(countZerosInNumber(arr3)).toBe(12)
*/
console.info(countZerosInNumber(arr1)) // 2
console.info(countZerosInNumber(arr2)) // 4
console.info(countZerosInNumber(arr3)) // 12