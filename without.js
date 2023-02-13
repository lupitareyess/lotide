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


// Create function that returns a subset of a given array, removing unwanted elements
// Returns array with only those elements from the source, and not present in the itemsToRemove arrary
// Source array should no be modified 

const without = function(sourceArr, itemsToRemove) {
  const results = [];
  for (const item of sourceArr) {
    if (!itemsToRemove.includes(item)) {
      results.push(item);
    }
  }

  return results;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]);

module.exports = without;