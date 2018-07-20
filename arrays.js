var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elementToAdd) {
  arrNew = [elementToAdd, ...arr];
  return arrNew;
};

function destructivelyAddElementToBeginningOfArray(arr, elementToAdd) {
  arr.unshift(elementToAdd);
  return arr;
};

function accessElementInArray(arr, index) {
  return arr[index];
};

