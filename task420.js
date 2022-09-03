function getIntegerDivisorArr (num){
    let res = [];
    for (let i = 2; i < num; i++){
        if (num%i === 0){
            res.push(i)
        }
    }
    return res;
}

const a = getIntegerDivisorArr(6) // [2, 3]
const b = getIntegerDivisorArr(14) // [2, 7]
const c = getIntegerDivisorArr(28) // [2, 4, 7, 14]
