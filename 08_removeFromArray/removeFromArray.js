const removeFromArray = function (arr, ...rem) {
  return arr.filter((item) => !rem.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
