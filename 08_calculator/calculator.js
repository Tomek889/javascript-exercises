const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	return array.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function(array) {
  let total = 1;
  for (let num of array) {
    total *= num;
  }
  return total;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
  let factorial = 1
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
