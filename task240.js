function getRandomBetween(min, max){
    return Math.floor(((Math.random() + (max - min)+ min-1)) * 10) / 10
}

const random = getRandomBetween(5, 7)