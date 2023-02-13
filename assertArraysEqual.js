const eqArrays = require('./eqArrays');

/**
 * 
 * @param {array} actual 
 * @param {array} expected 
 */
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

module.exports = assertArraysEqual;



