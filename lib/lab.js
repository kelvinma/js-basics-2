'use strict';

var paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

// 1. Write a function that splits a string into an array of normalized words,
//    (lowercase without punctuation).
var getNormalizedWords = function getNormalizedWords(words) {
  var splitWords;
  splitWords = words.split(/\s+/);

 var normalizedWords = [];
  for (var i = 0; i < splitWords.length; i++) {
      normalizedWords[i] = splitWords[i].replace(/[^\w']+/, '').toLowerCase();
  }
  return normalizedWords;
}



// 2. Write a function that takes a string and returns an array of it's unique
//    normalized words.

var getUniqueWords = function getUniqueWords(words) {
  var normalizedWords = getNormalizedWords(words);

  var uniqueWordsAsKeys = {};

  for (var j = 0; j < normalizedWords.length; j++) {
  //  var normalizedWord = normalizedWords[j];
  //  uniqueWordsAsKeys[normalizedWord] = true;
    uniqueWordsAsKeys[normalizedWords[j]] = true;
  }

  var uniqueWords = [];
  var k = 0;
  for (var word in uniqueWordsAsKeys) {
    uniqueWords[k++] = word;
  }
  return uniqueWords
  }


// 3. Write a function that counts how many words are in a string, providing
//    the *option* to count unique words instead of total words.
var wordCount = function wordCount(words, option) { //if option = true, unique count
  if (option === true) {
    return getUniqueWords(words).length;
  } else {
    return getNormalizedWords(words).length;
  }

}
console.log(getNormalizedWords(paragraph));
console.log(getUniqueWords(paragraph));
console.log(wordCount(paragraph));
console.log(wordCount(paragraph, true));
// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords: getNormalizedWords,
  getUniqueWords: getUniqueWords,
  wordCount: wordCount
};
