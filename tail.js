const assertEqual = require('./assertEqual');

/**
 * 
 * @param {array} arr 
 * @returns all elements in array, except the first
 */
const tail = function(arr) {
  const finalArr = arr.slice(1, arr.length);
  return finalArr;
};


module.exports = tail;


