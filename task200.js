const str = 'I am the good boy'

function reverseWordsPlace (str) {
    let res = [];
    str = str.split(' ')
    str.forEach(function(item){
        item = item.split([])
        item = item.reverse()
        item = item.join('')
        res.push(item)
    })
    res = res.join(' ')
    return res;
}

const strNew = reverseWordsPlace(str) // 'I ma eht doog yob'