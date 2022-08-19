const arr = [1, 2, 1, 'min', 'max', 'max', 'min']

function removeDuplicateMembersArray (array){
    const res = array.filter(function(element, index){return (index===array.indexOf(element))})
    return console.info(res);
}
a = removeDuplicateMembersArray(arr) // [1, 2, 'min', 'max']
