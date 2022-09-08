let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

function getArrShuffled (array){
  array.sort(() => Math.random() - 0.5);
  return array
}
getArrShuffled(arr) // [2,1,3] or whatever