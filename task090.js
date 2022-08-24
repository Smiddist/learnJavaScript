const arr = [
    { class: 'second', fare: 'a', weight: 12 },
    { class: 'second', fare: 'b', weight: 10 },
    { class: 'first', fare: 'a', weight: 15 },
    { class: 'first', fare: 'a', weight: 17 },
    { class: 'second', fare: 'a', weight: 12 },
    { class: 'first', fare: 'c', weight: 30 },
    { class: 'second', fare: 'b', weight: 22 },
  ]
  
  function arrayPlus(array, prop){
      const resFin = []
      const res = array.map(function(item){
          return item[prop[0]]+item[prop[1]]
      })
      const res1 = res.filter(function (item, index){
          return  index === res.indexOf(item)
      })
      for (let i = 0; i < res1.length; i++){
          for (let j = 0; j < array.length; j++){
            if (array[j].class + array[j].fare === res1[i]){
            resFin[i] = array[j]
           }
      }
  }   
          return resFin
  }
  const a = arrayPlus(arr,["class", "fare"])
  console.info('[29]', {a:JSON.stringify(a)})