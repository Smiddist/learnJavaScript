function getMixedmixArraysOrderly(array1, array2){
    let res = []
    let index = 0;
    while(res.length < array1.length + array2.length){
        res.push(array1[index])
        res.push(array2[index])
        index += 1
    }
    return res;
}

  const inA = [1,2,3]
  const inB = ['a','b','c']
  const a = getMixedmixArraysOrderly(inA, inB)