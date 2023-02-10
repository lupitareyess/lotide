
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

// Function will return a slice of the array with elements taken from the beginning - keeps going until the cb returns a truthy value

const takeUntil = function(arr, callback) {
  let newArr = [];
  for (let item of arr) {
    if (!callback(item)) {
      newArr.push(item);
    } else {
      return newArr;
    }
  }
};


// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// ASSERTIONS

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
