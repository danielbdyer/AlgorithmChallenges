// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var lowerA = stringA.toLowerCase().split('');
  var lowerB = stringB.toLowerCase().split('');
  var countsA = {};
  var countsB = {}


  for (let char of lowerA) {
    if (countsA.hasOwnProperty(char)) {
      countsA[char] += 1;
    } else {
      countsA[char] = 1;
      debugger;
    }
  }

  for (let char of lowerB) {
    if (countsB.hasOwnProperty(char)) {
      countsB[char] += 1;
    } else {
      countsB[char] = 1;
    }
  }

  console.log(stringA, stringB, countsA, countsB)
  return countsA == countsB;
}

module.exports = anagrams;
