const str  =  'How would you get first 52 character long string from a big message but dont cut the last word: word break problem';
const num  =  52;

function getNsCharsOfStrWithLastWord (str, num) {
    let res = [];
    str = str.split('')
    str.forEach((item, index) =>{
        if (index < num - 1){
            res.push(item)
        }
    })
    
    res.length = res.lastIndexOf(' ')
    res = res.join('')
    return (res)
}

const subStr  =  getNsCharsOfStrWithLastWord(str, num) // ‘How would you get first 52 character long string’
//expect(subStr.length <= num).toBe(true)
