const assertEqual = require('./assertEqual');
/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 * @returns true if perfect match or false if not
 */

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

module.exports = eqArrays;
