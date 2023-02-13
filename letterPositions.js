const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let item of arr1) {
    if (arr1[item] !== arr2[item]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

// Returns indices in the string where each character is found

const letterPositions = function(sentence) {
  let sentenceNoSpaces = sentence.replace(/\s/g, '');
  let sentenceNoChar = sentenceNoSpaces.replace(/[^a-zA-Z0-9 ]/g, '');
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentenceNoChar[i]]) {
      result[sentenceNoChar[i]].push(i);
    } else {
      result[sentenceNoChar[i]] = [i];
    }
  }
  return result;
};

assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').o, [4]);
