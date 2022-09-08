function isIntegerPalindrome(num){
    let res = true
    let array = ('' + num).split('')

    for (let i = 0; i < array.length; i++){
        if (array[i] === array[array.length - i - 1]){
            continue
        }
        else {
            res = false
        }
    }
    return res
}

const num0 = 121;
const num1 = 10011;
const num2 = 122;
const num3 = -1001
isIntegerPalindrome(num0)
isIntegerPalindrome(num1)
isIntegerPalindrome(num2)
isIntegerPalindrome(num3)