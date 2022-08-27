'use strict'
/*
Description: to suggest two ways of verifying the number as integer
File name: isInteger.test.js
a = isInteger(5) // true
a = isInteger(5.2) // false
*/


function num(a) {
    if (Number.isInteger(a)) {
        return true
    }
    return false
}
let a = num(5) // true
console.log('num', a)
a = num(5.2)
console.log('num', a) // false

function num1(a){
    return Math.round(a) === a
}

a = num1(5) // true
console.log('num1', a)
a = num1(5.2)
console.log('num1', a) // false

function num2(a) {
    if ((a ^ 0) === a) {
        return true
    }
    return false
}

a = num2(5) // true
console.log('num2', a)
a = num2(5.2)
console.log('num2', a) // false