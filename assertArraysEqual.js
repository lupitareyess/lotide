const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let item of arr1) {
    if (arr1[item] !== arr2[item]) {
      return false;
    }
  }
  return true;
};


// Function to assert that 2 arrays are equal

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

// // TEST CODE
assertArraysEqual([1, 2, 4, 7], [1, 2, 4, 7]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

