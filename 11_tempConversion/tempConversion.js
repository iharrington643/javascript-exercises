const convertToCelsius = function(tempF) {
  const newTempC = (tempF - 32) * (5/9);
  return Math.round(newTempC * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  const newTempF = (tempC * 9/5) + 32;
  return Math.round(newTempF * 10) / 10;
};

console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
