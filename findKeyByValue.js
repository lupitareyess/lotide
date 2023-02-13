const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
};


// Takes in object and a value. Scans the object amd returns the first key which contains the given value
// if no key found, return undefined 
const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

//TEST CASES
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;