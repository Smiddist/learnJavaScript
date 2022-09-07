const str = 'reverse words in a sentence'
function remDupCharsFromStr (str) {
    let res;
    str = str.split([])
    str = str.filter((item, index) => index === str.indexOf(item))
    str = str.join('')
    return str;
}

strNew = remDupCharsFromStr(str) // 'revs wodinatc'