// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n < 0) {
    var absolute = 0 - n;
    var minusflag = true;
  } else {
    var absolute = n;
  }
  let reversed = parseInt(absolute.toString().split('').reduce((rev, char) => char + rev, ''));
  return minusflag ? 0 - reversed : reversed;
}

// HINT: Use math.sign(var)! 

module.exports = reverseInt;
