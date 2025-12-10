const convertToCelsius = function (farenheit) {
  let fToC = ((farenheit - 32) * 5) / 9;
  return Math.round(fToC * 10) / 10;
};

const convertToFahrenheit = function (celcius) {
  let cToF = (celcius * 9) / 5 + 32;
  return Math.round(cToF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
