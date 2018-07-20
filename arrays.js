var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elementToAdd) {
  // Does not mutate the original array
  arrNew = [elementToAdd, ...arr];
  return arrNew;
};

function destructivelyAddElementToBeginningOfArray(arr, elementToAdd) {
  // Mutates the original array
  arr.unshift(elementToAdd);
  return arr;
};

function accessElementInArray(arr, index) {
  return arr[index];
};

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  // Mutates the original array and returns the modified array
  arr.shift(); // This will return the removed elementToAdd
  return arr; // This will return the modified arr
};

function removeElementFromBeginningOfArray(arr) {
  // Takes in array and removes the first element
  // Does NOT mutate the original array
  
};


