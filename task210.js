const str = 'reverse words in a sentence'

function getFirstNonRepeatingChar (str){
    str = str.split([])    
    str = str.filter((item) =>  str.indexOf(item) === str.lastIndexOf(item))    
    return str;
}
const char = getFirstNonRepeatingChar(str) //  'v'
console.info(char)