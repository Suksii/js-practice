// const findMax = (arr) => {
//   return Math.max(...arr);
// };

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMax([10, 20, 5, 8, 99, 41, -313]));
