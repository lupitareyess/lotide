const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

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




// returns new array based on the results of the cb functionß

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
}


// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[0] + word[1]);
console.log(results2);

const results3 = map(words, word => word.length);
console.log(results3);

// ASSERTION CHECK

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['gr', 'co', 'to', 'ma', 'to']);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);


module.exports = map;