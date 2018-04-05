// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var wordarray = str.split(' ')
  var capSentence = []
  for (let word of wordarray) {
    word = word.substr(0,1).toUpperCase() + word.substr(1);
    capSentence.push(word);
    }
  return capSentence.join(' ')
}

capitalize("Testing one two three");

module.exports = capitalize;
