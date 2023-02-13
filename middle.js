const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/**
 * 
 * @param {array} arr 
 * @returns middle element(s)
 */
const middle = function(arr) {
  let arrLength = arr.length;
  let middleElememt = [];
  let middleNumber = Math.floor(arr.length / 2);
  if (arrLength <= 2) {
    return middleElememt;
  } else if (arrLength % 2 !== 0) { // odd case
    middleElememt.push(arr[middleNumber]);
  }
  else {
    middleElememt = [arr[middleNumber - 1], arr[middleNumber]];
  }
  return middleElememt;
};

module.exports = middle;