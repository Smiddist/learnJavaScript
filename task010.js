   let a = isInteger(5) // true
   let b = isInteger(5.2) // false

    function  isInteger (i){
        
    if (i%1 === 0){
        return true
    }
    else {
        return false
    }
}

console.info(b)