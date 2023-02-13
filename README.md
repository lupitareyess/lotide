# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @lupitareyess/lotide`

**Require it:**

`const _ = require('@lupitareyess/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: Checks if inputted arrays are equal and prints assertions.
- `assertEqual(actual, expected)`: Reports if actual input matches expected input. Returns assertion passed if there is a match, and returns failed if it does not match.
- `assertObjectsEqual(obj1, obj2)`: Checls if inputted objects are equal.
- `countLetters(str)`: Takes in string of letters and returns the count of each letter in the string.
- `countOnly(allItems, itemsToCount)`: Returns object with the count of items of interest.
- `eqArrays(arr1, arr2)`: Checks if inputted arrays are equal.
- `eqObjects(obj1, obj2)`: Checks equality of objects by looping through key:value pairs.
- `findKey(obj, callback)`: Scans object and returns the first key for which the callback statement returns a truthy value.
- `findKeyByValue(obj, value)`: Scans object and returns the first key which contains the given value.
- `head(arr)`: Returns first element in array.
- `letterPositions(str)`: Returns all the indixes in the string where each charcter is found.
- `map(arr, callback)`: Returns a new array based on results of the callback function.
- `middle(arr)`: Return middle element(s) in array.
- `tail(arr)`: Returns all elements in an array, except the first element.
- `takeUntil(arr, callback)`: Collects items from array until the callback provides returns a truthy value.
- `without(source, itemsToRemove)`: Returns a subset of a given array, removing unwanted elements. Does not alter original array.
