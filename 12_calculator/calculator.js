const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let ans = arr.reduce((acc,it)=>acc+it,0);
  return ans;
};

const multiply = function(arr) {
  return arr.reduce((acc,it)=>acc*it,1);
};

const power = function(a,b) {
	return (a**b);
};

const factorial = function(a) {
	if(a==0||a==1) return 1;
  return a * factorial(a-1);
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
