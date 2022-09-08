/*
function Calculator() {   
};
Calculator.prototype.multiply = function (a, b){
    return a*b;
}
Calculator.prototype.divide = function (a, b){
    return a/b;
}
Calculator.prototype.extend = function (a, b){
    return Math.pow(a, b)
}
Calculator.prototype.square = function (a, b){
    return Math.pow(a, 1/b)
}
// V2
Calculator.prototype.method = function (action, a, b) {
  if (action === "*") {
    return a*b;
  }
  if (action === "/") {
    return a/b;
  }
  if (action === "**") {
    return Math.pow(a, b)
  }
  if (action === "^") {
    return Math.pow(a, 1/b)
  }
}/*
	//calc.calculate("3 + 7"); // 10
   // Variant I. Method to add methods:
const powerCalc = new Calculator();

let res = powerCalc.method("*", 5, 6) // 30
console.info(res)
res = powerCalc.method("/", 15, 3) // 5
console.info(res)
res = powerCalc.method("**", 3, 3) // 27
console.info(res)
res = powerCalc.method("^", 16, 2) // 4
console.info(res)


    //Variant II. Method to add methods:
const calc = new Calculator();
res = calc.multiply(5, 6) // 30
console.info(res)
res = calc.divide(15, 3) // 5
console.info(res)
res = calc.extend(3, 3) // 27
console.info(res)
res = calc.square(16, 2) // 4
console.info(res)

*/

   // Variant III. Calculator with methods:
function Calculator() {
    
  this['+'] = 
    function (a, b) {
      return a + b
    }
    this['-'] = 
    function (a, b) {
      return a - b
    }
    this['*'] = 
    function (a, b) {
      return a * b
    }
    this['/'] = 
    function (a, b) {
      return a / b
    }
    this['**'] = 
    function (a, b) {
      return Math.pow(a, b)
    }
    this['^^'] = 
    function (a, b) {
      return Math.pow(a, 1/b)
    }
  }

     const calcX = new Calculator()
console.info('83' , calcX)
   console.info('[CalculatorMethod]', {
      '+: 3+4=7': calcX['+'](3, 4),
     '-: 3-4=-1': calcX['-'](3, 4),
      
      '*: 2*4=-8': calcX['*'](2, 4),
      '/: 12/4=-3': calcX['/'](12, 4),
      '**: 3**2=9': calcX['**'](3, 2),
      '^^: 16^^2=4': calcX['^^'](16, 2),
    })
