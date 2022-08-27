'use strict'
  /*
  С помощью Цикла For(), While()
  произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Ц. Добавьте «Рок-н-ролл» в конец.
Ц. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Ц. Вставьте «Рэп» и «Регги» в начало массива.
Ц. (while) Добавить к каждому нечетному элементу массива знак * (* Джаз)
  
  Массив по ходу выполнения операций:
  res1: Джаз, Блюз
  res2: Джаз, Блюз, Рок-н-ролл
  res3: Джаз, Классика, Рок-н-ролл
  res4: Классика, Рок-н-ролл
  res5: Рэп, Регги, Классика, Рок-н-ролл
  res6:: * Рэп, Регги, * Классика, Рок-н-ролл
  
  */


const styles = ['Джаз', 'Блюз']

const res1 = [...styles]
console.log('info', {res1})

function addEnd(res1){
  return res1.concat('Рок-н-ролл')
}
const res2 = addEnd(res1)
console.log('info', {res2})

function srch(res2){
    for (let i = 0; i < res2.length; i++) {
        if (res2[i + 1] === res2[Math.round((res2.length) / 2)])
            res2[i] = 'Классика'
    } 
  return res2
}
const res3 = srch(res2)
console.log('info', {res3})

const res4 = [...res3]
const result1 = res4.shift()
console.log('info', {res4})


const res5 = [...res4]
const result2 = res5.unshift('Рэп', 'Рэгги')
console.log('info', {res5})

let result3 = [...res5]

function addStars(result3){ 
  let i = 0 
  while (true) { 
    if ((i + 1) % 2 !== 0) { 
      result3[i] = '*' + result3[i] 
    }
    if ((i) === (result3.length - 1)) break
    i++;
  }
  return result3
}

const res6 = addStars(result3)
console.log('info', {res6})