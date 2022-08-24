const str = 'How would you reverse words in a sentence'
const strRev = 'sentence a in words reverse you would How'

function reverseWordsSentence (str) {
    const separator = ' '
    let res = str.split(separator);
    res.reverse();
    res = res.join(' ');
    return res;
}
const a = reverseWordsSentence(str);
console.info(a);

//expect(reverseWordsSentence(str)).toBe(strRev)
