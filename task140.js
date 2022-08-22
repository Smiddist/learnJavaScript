const vasya = { name: 'Вася', age: 25 }
const petya = { name: 'Петя', age: 30 }
const masha = { name: 'Маша', age: 28 }
const arr = [vasya, petya, masha]
let prop = 'age'

function getArrObjSortedByProp (array, prop){
    console.info({prop})
    return array.sort(function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        }
        else if (a[prop] < b[prop]) {
          return -1;
        }
        else{
            return 0;
        }
      });
}

getArrObjSortedByProp(arr, prop); // [vasya, masha, petya] > [‘Вася’, ‘Маша’, ‘Петя’]

console.info(arr[0].name); // Вася
console.info(arr[1]["name"]); // Маша
prop = 'name'
console.info(arr[2][prop]); // Петя
prop = 'age'
console.info(arr[2][prop]); // 30