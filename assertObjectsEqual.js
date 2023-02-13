const eqObjects = function(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (Array.isArray(obj1[key]) || Array.isArray(obj2[key])) {
      return (eqArrays(obj1[key], obj2[key]));
    }

    else if (key1[key] !== key2[key]) {
      return false;
    }
  }
  return true;

};

// Tests functions that return objects

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🚫 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`)
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" });