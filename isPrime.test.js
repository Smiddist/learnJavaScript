'use strict'

/*
Description: to suggest an algorithm of verifying if the number is a prime number
File name: isPrime.test.js
*/

function isPrime (num) {
    let res;
    for (let i = 2; i < 10 ; i++){
        if (num === i){
    continue
    }
    else if (num % i === 0){
        res = false
        break
    }
        else if (num < 2){
        res = false
    }
        else {
        res = true
    }
    }
    return res;
}
let a = isPrime(1);
console.info(a)

a = isPrime(3) // true
console.log(a)
a = isPrime(6) // false
console.log(a)
a = isPrime(7) // true
console.log(a)
a = isPrime(12) // false
console.log(a)
a = isPrime(25) // false
console.log(a)
a = isPrime(100) // false
console.log(a)
a = isPrime(49) // false
console.log(a)
a = isPrime(73) // true
console.log(a)