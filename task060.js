let a;

function isInteger(num){
    return (num%1 === 0)
}
a = isInteger(5) // true
a = isInteger(5.2) // false