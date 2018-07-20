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



