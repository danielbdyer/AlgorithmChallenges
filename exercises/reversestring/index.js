// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION THREE -- perhaps better than 2

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// where rev is the accumulator, and each char is the element being passed in

module.exports = reverse;

// SOLUTION ONE
//
// function reverse(str) {
// return str.split('').reverse().join('')
// }
//
// SOLUTION TWO
//
// function reverse(str) {
// let reversed = '';
//
// for (let character of str) {
// reversed = character + reversed;
// }
//
// return reversed;
// }
