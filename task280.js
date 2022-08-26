const s =  'I am using HackerRank to improve programming'
const t = 'am HackerRank to improve'

function getMissingWords (str1, str2){
    let res = [];
    str1 = str1.split(' ')
    str2 = str2.split(' ')
    let str3 = str1.concat(str2)
    for (let element of str3){
        if (str1.includes(element) && str2.includes(element)){
            continue
        }
        else {
            res.push(element)
        }
    }
    return res
}
getMissingWords(s, t) // [ 'I', 'using', 'programming' ]