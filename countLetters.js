const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

// Function takes in sentence (as string) and returns a count of each of the letters in the sentence

const countLetters = function(str) {
  const lowerCaseStr = str.toLowerCase();
  const result = {};
  for (let letter of lowerCaseStr) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;

};

// TEST CODE
const sentence = "hello"
const result = countLetters(sentence);

assertEqual(result.h, 1);
assertEqual(result.e, 1);
assertEqual(result.l, 2);
assertEqual(result.o, 1);

module.exports = countLetters;