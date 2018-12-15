let convert = {};

convert.cToF = function(celsius) {
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}

convert.fToC = function(fahrenheit) {
  if(!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}

convert.ctoK = function(kelvin) {
  if(!Number.isInteger(kelvin)) return undefined;
  return kelvin + 273.15;
}

module.exports = convert;