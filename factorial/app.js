const factorial = (n) => {
  let res = n;
  for (let i = 1; i < n; i++) {
    res *= n - i;
  }
  return res;
};

console.log(factorial(2));
