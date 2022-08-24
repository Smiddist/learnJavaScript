const arrA  =  [2,3,4,11,17]
const arrB  =  [1,4,4,15,17,19]

function mergeTwoSortedArray (array0, array1){
    result = array0.concat(array1)
    result.sort(function compare(a, b) {
  if (a > b) return 1;
  if (a === b) return 0; 
  if (a < b) return -1;
})
    return result;
}
const output = mergeTwoSortedArray(arrA, arrB) // [1,2,3,4,4,4,11,15,17,17,19]
console.info(output)