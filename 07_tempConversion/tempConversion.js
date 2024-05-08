const convertToCelsius = function(temp) {
  temp= (temp-32)/1.8 ;
  let oneDecimalPlace=Math.round(temp*10)/10;
  return oneDecimalPlace;
};

const convertToFahrenheit = function(temp) {
  temp=temp*1.8+32;
  let oneDecimalPlace=Math.round(temp*10)/10;
  return oneDecimalPlace;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
