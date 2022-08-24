const str = 'How would you reverse words in a sentence'
const strRev = 'sentence a in words reverse you would How'

function reverseWordsSentence (str) {
    str = str.split(' ');
    str.reverse();
    str = str.join(' ');
    return str;
}
const a = reverseWordsSentence(str);
console.info(a);

//expect(reverseWordsSentence(str)).toBe(strRev)
