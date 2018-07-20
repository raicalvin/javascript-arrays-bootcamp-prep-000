var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elementToAdd) {
  return arr.unshift(elementToAdd);
};

function destructivelyAddElementToBeginningOfArray(arr, elementToAdd) {
  return arr[-1] = elementToAdd;
};

