const vasya = { name: 'Вася', age: 25 }
const petya = { name: 'Петя', age: 30 }
const masha = { name: 'Маша', age: 28 }
const arrIn = [vasya, petya, masha]
const prop = 'age'

function getArrObjAverageProp(array, prop){
    const res = array.reduce((res, item) => ((res + item[prop]/array.length)), 0)    
    return console.info(Math.round(res))
}

getArrObjAverageProp(arrIn, prop)  // (25 + 30 + 29) / 3 = 28
