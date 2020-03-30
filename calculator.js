const calculator = {
  plus: function(a, b) {
    return a + b;
  }
  minus: function(a, b) {
    return a - b;
  }
  multiply: function(a, b) {
    return a * b;
  }
  division: function(a, b) {
    return a / b;
  }
  square: function(a, b) {
    return a ** b;
  }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiply = calculator.multiply(5, 5);
const division = calculator.division(5, 5);
const square = calculator.square(5, 5);

console.log(plus, minus, multiply, division, square)
