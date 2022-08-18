
/*
С помощью Цикла For(), While()
произведём 5 операций с массивом.

1 Создайте массив styles с элементами «Джаз» и «Блюз».
2 Ц. Добавьте «Рок-н-ролл» в конец.
3 Ц. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
4 Удалите первый элемент массива и покажите его.
5 Ц. Вставьте «Рэп» и «Регги» в начало массива.
6 Ц. (while) Добавить к каждому нечетному элементу массива знак * (* Джаз)

Массив по ходу выполнения операций:
res1: Джаз, Блюз
res2: Джаз, Блюз, Рок-н-ролл
res3: Джаз, Классика, Рок-н-ролл
res4: Классика, Рок-н-ролл
res5: Рэп, Регги, Классика, Рок-н-ролл
res6:: * Рэп, * Регги, * Классика, * Рок-н-ролл
*/

let styles = ['jazz', 'blues']
const res1 = [...styles];
styles.push('rock n roll')
const res2 = [...styles]
function addClassicInMiddleArrayPart(array) {
array[(Math.ceil(array.length / 2)) - 1] = 'classic'
return array;
}
const res3 = addClassicInMiddleArrayPart(styles);

const res4 = styles.shift();
styles.unshift('rap', 'reggae')
const res5 = [...styles]
addStarsInOddArrayElements(styles)
const res6 = styles
function addStarsInOddArrayElements(array){
let i = 0
let trigger = true;
while(i < array.length - 1){

if ((i + 1) % 2 !== 0){
array[i] = '*' + array[i]
}
if (i === array.length - 1){
trigger = false;
}
i++;
}
}
console.info('res1 ' + res1)
console.info('res2 ' + res2)
console.info('res3 ' + res3)
console.info('res4 ' + res4)
console.info('res5 ' + res5)
console.info('res6 ' + res6)