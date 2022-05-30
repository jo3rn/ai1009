// function allGreaterThanTen(arr) {
//   if (arr.length === 0) {
//     return "empty array";
//   }
//   let flag = true;
//   arr.forEach((element) => {
//     if (element < 10) {
//       flag = false;
//     }
//   });
//   return flag;
// }

function allGreaterThanTen(arr) {
  if (arr.length === 0) {
    return "empty array";
  }
  return arr.every((x) => x > 10);
}

let a = allGreaterThanTen([100, 12, 40]); // true
let b = allGreaterThanTen([100, 12, 4]); // false
let c = allGreaterThanTen([10.1]); // true
let d = allGreaterThanTen([]); // "empty array"

console.log(`${a}\n${b}\n${c}\n${d}\n`);

// function someGreaterThanTen(arr) {
//   if (arr.length === 0) {
//     return "empty array";
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//   }

//   for (const element of arr) {
//     if (element > 10) {
//       return true;
//     }
//   }
//   return false;
// }

function someGreaterThanTen(arr) {
  if (arr.length === 0) {
    return "empty array";
  }
  return arr.some((x) => x > 10);
}

a = someGreaterThanTen([100, 12, 40]); // true
b = someGreaterThanTen([10.1, 1, 4]); // true
c = someGreaterThanTen([1, 2, 3]); // false
d = someGreaterThanTen([]); // "empty array"

console.log(`${a}\n${b}\n${c}\n${d}\n`);
