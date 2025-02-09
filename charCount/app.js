const charCount = (str) => {
  const count = {};

  for (let char of str) {
    count[char.toLowerCase()] = (count[char] || 0) + 1;
  }
  return count;
};

console.log(charCount("HaPpy"));
