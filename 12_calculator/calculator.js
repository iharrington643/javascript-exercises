const add = function(add1, add2) {
	return add1 + add2;
};

const subtract = function(subtract1, subtract2) {
	return subtract1 - subtract2;
};

const sum = function(sumArray) {
	total = 0;

  for (i = 0; i < sumArray.length; i++) {
    total = total + sumArray[i];
  };

  return total;
};

const multiply = function(multiplyArray) {
  total = 1;

  for (i = 0; i < multiplyArray.length; i++) {
    total = total * multiplyArray[i];
  };

  return total;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
  total = 1;

  for (i = 0; i < n; i++) {
    total = total * (i + 1);
  };

  return total;
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
