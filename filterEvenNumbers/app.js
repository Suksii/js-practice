const filterEvenNumbers = (arr) => {
  x = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      x.push(arr[i]);
    }
  }
  return x;
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7]));
