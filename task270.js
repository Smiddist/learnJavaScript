const arr = [1, 3, 2, 4, 6, 5, 8, 10, 9]
 
function getMissingNumUnsortedArr(array){
    let res = [];
    for (let i = 1; i < Math.max.apply(null, array)+1; i++){
        if(!array.includes(i)){
        res.push(i)
        }
    }
    return res;
}

// expect(getMissingNumUnsortedArr(arr )).toBe(7)
