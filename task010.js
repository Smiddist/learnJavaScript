
       /*
       Shift+Return (Enter) > new line
       Arrow Up > Return the previous state of the code
       Return (Enter) > Run the code   
       
    1. To know index of Мама (var x1)
	2. Add Бабушку Дедушку (var x2)
	2.1. Sort array alphabetically (var x3)
	3. Exclude Кота (массив x4)
	4. Создать строку ... - моя семья Аня, Алена, Бося, Мама, Папа (строка x5)
	5. Вычислить длину строки (число x6)
	6. Выводить все в консоль и проверять себя

    */
    const a1=["Аня","Алена","Бося","Мама","Папа"]
    const x1 = a1.indexOf("Мама")
    const a2 = ["Бабушка","Дедушка"]   
    const x2 = [...a1, "Бабушка","Дедушка"]
    const x3 = [...x2];
    x3.sort();
    const x4 = [...x3];
    x4.splice(3, 1)
    const x5 = "моя семья - " + a1
    const x6 = x5.length
    
console.info(x1,x2,x3,x4,x5,x6)