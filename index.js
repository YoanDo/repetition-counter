/**
 * repetition-counter
 * check words repetition in a sentence
 *
 * @name repCounter
 * @function
 * @param {String} input the input string.
 * @param {Boolean} If caseInsensitive `true`, the output will be case insensitive
 * @return {Object} An object containing the keys as words and the values as
 * counts (how many times they appear in the input string).
**/

module.exports = function repCounter(string, caseInsensitive = true) {
  // Remove special characters, split the sentence into words, remove from the array words smaller than 2 characters.
  if (typeof string !== "string"){
    return console.log('Your first input needs to be a string')
  }
  if (typeof caseInsensitive !== "boolean"){
    return console.log('Your second input needs to be a boolean')
  }
  let words = string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '').split(/\s/).filter( x => x.length > 1);
  if (caseInsensitive){
    let lowered = []
    for (var i = 0; i < words.length; i++) {
      lowered.push(words[i].toLowerCase());
    }
    words = lowered
  }
  let repMap = {};
  // Maps the repetitions
  words.forEach(function(word) {
    if (!repMap[word]) {
      repMap[word] = 0;
    }
    repMap[word] += 1;
  });
  return repMap;
}
