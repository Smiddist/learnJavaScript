function getNthFibonacciNumber (num){
    let fib = [0, 1]
    for (let i = 1; i < num; i++){
         fib.push(fib[i]+fib[i-1])
    }
    const res = fib[fib.length - 1]
    return res;
}

a = getNthFibonacciNumber(1) // 1
b = getNthFibonacciNumber(3) // 2
c = getNthFibonacciNumber(5) // 5
d = getNthFibonacciNumber(10) // 55
