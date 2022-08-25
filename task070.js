function isPrime (num) {
    let res;
    for (let i = 2; i < 10 ; i++){
    if (num === i){
    continue
    }
    else if (num%i===0){
    res = false
    break
    }
    else if (num < 2){
    res = false
    }
    
    else {
    res = true
    }
    }
    
    return res;
    }
    let a = isPrime(1);