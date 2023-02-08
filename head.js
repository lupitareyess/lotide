// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

// HEAD FUNCTION
// Return first element in an array - should not be returned as an array

const head = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[i]
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 6);
assertEqual(head([]), undefined);