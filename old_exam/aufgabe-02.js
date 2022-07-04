const a = [1, 2, 9, 1];
const b = [3, 1, 8, 9];
const c = [1, 9, 9];
const d = [1, 7, 9823];

function vor9(array) {
  let nineFound = false;
  return array.filter((x) => {
    if (x == 9) {
      nineFound = true;
    }
    return !nineFound;
  });
}

function vor9ForLoop(array) {
  let result = [];
  for (number of array) {
    if (number == 9) {
      break;
    }
    result.push(number);
  }
  return result;
}

function vor9Slice(array) {
  // const index = array.findIndex((x) => x == 9);
  const index = array.indexOf(9);
  return index > -1 ? array.slice(0, index) : array;
}

console.log(vor9(a));
console.log(vor9(b));
console.log(vor9(c));
console.log(vor9(d));

console.log(vor9ForLoop(a));
console.log(vor9ForLoop(b));
console.log(vor9ForLoop(c));
console.log(vor9ForLoop(d));

console.log(vor9Slice(a));
console.log(vor9Slice(b));
console.log(vor9Slice(c));
console.log(vor9Slice(d));
