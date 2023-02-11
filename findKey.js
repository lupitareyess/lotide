const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
};

//takes in an object and a callback. 
//It should scan the object and return the first key for which the callback returns a truthy value. 
//If no key is found, then it should return undefined.

const findKey = function(obj, callback) {
  const keys = Object.keys(obj);

  for (const key of keys) {
    const result = callback(obj[key]);
    if (result) {
      return key;
    }
  }
  return undefined;

};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma") // => "noma"


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 5), undefined);