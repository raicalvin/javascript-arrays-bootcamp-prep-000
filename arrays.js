var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elementToAdd) {
  arr.unshift(elementToAdd);
  return arr;
};

function destructivelyAddElementToBeginningOfArray(arr, elementToAdd) {
  return arr[-1] = elementToAdd;
};

