function isMatchingSubstringStr(str, str1){
    return str.includes(str1)
}

console.info(isMatchingSubstringStr('шалаш', 'аш')) // true
console.info(isMatchingSubstringStr('шалаш', 'баш')) // false

//isMatchingSubstringStr('шалаш', 'аш') // true
//isMatchingSubstringStr('шалаш', 'баш') // false
