const arr = [ 1, 2, 3, 4, 5 ]

function getSubSumsArr (array) {
    let result = [...array]
    for (let i = 0; i < array.length; i++){        
        for (let j = 0; j <= i; j++){
            result[i] += array[j]
        }
        result[i] -= array[i]
    }
    return console.info(result)
}

getSubSumsArr( arr )  // [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]