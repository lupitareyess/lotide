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


// Create function that returns an array with only the middle elements 
// If array has one of 2 elements, no middle => return empty array
// If odd number of elements, only a single middle element
// If even number of elements, two elements should be returned 

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

//TEST CODE

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([2, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);

//come back to this, not working as expected. 