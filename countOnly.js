const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

// Function that is given and array (allItems) and object (itemsToCount)
// Will return an object containing counts of everything that the input object listed
// Function will report back how many instances of each string were found in the allItems array of strings

// continue skips the iteration

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const key of allItems) {
    if (!itemsToCount[key]) {
      continue;
    }
    if (!results[key]) {
      results[key] = 0;
    }

    results[key]++;
  }

  return results;
}

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;