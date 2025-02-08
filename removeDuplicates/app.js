// const removeDuplicates = (arr) => {
//   arr = [...new Set(arr)];
//   return arr;
// };

const removeDuplicates = (arr) => {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    if (!x.includes(arr[i])) {
      x.push(arr[i]);
    }
  }
  return x;
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 5]));
