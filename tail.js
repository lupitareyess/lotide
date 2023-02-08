// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

// TAIL FUNCTION
// Return all elements in array, except the first
// slice (start, end) - returns shallow copy

const tail = function(arr) {
  const finalArr = arr.slice(1, arr.length);
  return finalArr;
};


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case a: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 2: Check if array is empty
const result2 = tail([]);
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined);
assertEqual(result2[1], undefined);

// Test Case 3: Check if array only has one element
const result3 = tail(["Hello"]);
assertEqual(result3.length, 0);
assertEqual(result3[0], undefined);
assertEqual(result3[1], undefined);

// Test Case b: Check that original array is not altered
const words2 = ["Hello"];
tail(words2);
assertEqual(words2.length, 1);


