/*
Задача:
  Создать функцию с именем orderPrice() по выбору напитка и подсчету цены заказа
*/

(() => {
    function getOrderPrice(a) {
        for (let i = 0; i < a.length; i++){
            if (a[i].order === b){
                return a[i].price;
            }
        }
    }
    
  var a = [
       { order: 'Milk shake', price: 120 }, 
       { order: 'Ice cream shake', price: 150}, 
       { order: 'Water', price: 0 }, 
       { order: 'Cofe', price: 100 }
     ]
    
    var b =  'Milk shake'
    var res = getOrderPrice(a)
    console.info('info', { res })  // 120
  
    b =  'Water'
    res = getOrderPrice(a)
    console.info('info', { res })  // 0
  
  })()
  