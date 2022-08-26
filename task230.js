
 function isPalindrom (str){
    str = str.split([])
    let res;
    str = str.map((item, index, str) => (str.length - 1) === (str.indexOf(item) + str.lastIndexOf(item)))
    //console.info (str)
    if (str.includes(false)){
        return false;
    }
    else return true
}

const a = isPalindrom('шалаш')  // true
const b = isPalindrom('гараж') // false
