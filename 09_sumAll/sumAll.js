const sumAll = function (a, b) {
  let sum = 0;
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    !Number.isInteger(a) ||
    !Number.isInteger(a) ||
    a < 0 ||
    b < 0
  ) {
    return "ERROR";
  }

  if (b > a) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let j = b; j <= a; j++) {
      sum += j;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
