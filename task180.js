const str = 'string'
function getReverseStr (str) {
    let res = str.split([]);
    res.reverse();
    res = res.join('');
    return res;
}
const strNext = getReverseStr(str) // 'gnirts' 
console.info(strNext)