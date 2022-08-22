function add(x, y) {
    return x + y
   }
   function getSumSpecial (y){
      return add(3, y);
   }
   
   a = getSumSpecial(5) // 8
   console.info(a)
   a = getSumSpecial(7) // 10
   console.info(a)
   a = getSumSpecial(8) // 11
   console.info(a)
   a = getSumSpecial(12) // 15
   console.info(a)