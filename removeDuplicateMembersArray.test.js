'use strict'

/*
[] Task #080: removeDuplicateMembersArray(arr) Remove duplicate members from an array
Description: to fInd unique array of objects
File name: removeDuplicateMembersArray.test.js

const arr = [1, 2, 1, 'min', 'max', 'max', 'min']
a = removeDuplicateMembersArray(arr) // [1, 2, 'min', 'max']

P.S.: не использовать Set 🙂 и быть способным объяснить решение
*/

const arr = [1, 2, 1, 'min', 'max', 'max', 'min']

function removeDuplicateMembersArray(array) {
    let res = []
    res = array.filter((element, index) => index === array.indexOf(element))
    return res
}



let a = removeDuplicateMembersArray(arr)

console.log(arr)
console.log(a)





/*
function removeDuplicateMembersArray(array) {
    let result = []
    for (let i = 0; i < array.length; i++)
        if (result.indexOf(array[i]) === -1)
        result.push(array[i])
    return result
}
*/