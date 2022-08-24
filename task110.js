const letterTemplate = {
    write (str, str1){
        return ("Hey, " + str + " " + str1 + " Yours Anna")
    },
}
const a = letterTemplate.write("Marina", "Happy Birthday to you!") 
const b = letterTemplate.write("Alex", "Happy New Year!") // ‘Hey, Marina, Happy New Year! Yours, Anna’
const c = letterTemplate.write("Nata", "My congratulations with marriage!") // ‘Hey, Nata, My congratulations with marriage! Yours, Anna’
