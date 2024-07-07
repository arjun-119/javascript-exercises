const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total,item)=>
     total + item
  ,0);
  
};

const multiply = function(arr) {
  return arr.reduce((total,item)=>
    total * item
 );
 
};

const power = function(base,power) {
	return Math.pow(base,power);
};

const factorial = function() {
	
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
