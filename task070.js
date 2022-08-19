let a;

function isPrime(num){
    return console.info(num%2 !== 0 || num%3 !== 0 && num > 3)
}
a = isPrime(3) // true
a = isPrime(6) // false
a = isPrime(7) // true
a = isPrime(12) // false
