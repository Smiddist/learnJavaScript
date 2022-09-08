Array.prototype.getUnique = function getUnique (){
  let res = arr.filter((item, index) => index === arr.indexOf(item))
  res.sort()
  return res
}
const arr = [5, 5, 5, 1, 2, 2, 3]
console.info(arr.getUnique())
//console.info(getUnique(arr)) // [1, 2, 3, 5]