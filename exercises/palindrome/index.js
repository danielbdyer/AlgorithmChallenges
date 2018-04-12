// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var rts = str.split('').reduce((rev, char) => char + rev, '')
  return str === rts;
}

// OTHER SOLUTIONS
//
// function palindrome(str) {
//  const reversed = str.split('').reverse().join('');
//  return str === reversed;
// }
//
// USING .every to return true/false...
// BUT it uses twice as much resources as necessary.
//
// function palindrome(str) {
//  return str.split('').every((char, i) => {
//    return char === str[str.length - i - 1]
//  })
// }

module.exports = palindrome;
