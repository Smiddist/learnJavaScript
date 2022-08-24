let a;
function isPrime (num){
    return (num%2!==0 && num%3!==0 && num%5!==0 || num <=3 )
    }
    
a = isPrime(12) // true
a = isPrime(16) // false
a = isPrime(17) // true
a = isPrime(25) // false
