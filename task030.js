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