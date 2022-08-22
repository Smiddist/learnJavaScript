function getGreatestDivisorTwoNumbers (a, b){
    let x;
    if (a > b){
        x = a;
    }
    else {
        x = b;
    }
    for (x; x > 0; x--){
        if (a % x ===0 && b % x ===0){
            return console.info(x);
        }
    }
}
const a = getGreatestDivisorTwoNumbers(12, 6) // 6
const b = getGreatestDivisorTwoNumbers(12, 256) // 4
