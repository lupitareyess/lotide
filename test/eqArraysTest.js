const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 7]), false);
assertEqual(eqArrays([1, 2, 3, 7], [1, 2, 3, 7]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
