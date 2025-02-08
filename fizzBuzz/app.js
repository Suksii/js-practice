const fizzBuzz = () => {
  let x = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      x.push("FizzBuzz");
    } else if (i % 3 === 0) {
      x.push("Fizz");
    } else if (i % 5 === 0) {
      x.push("Buzz");
    } else {
      x.push(i);
    }
  }
  return x;
};

console.log(fizzBuzz());
