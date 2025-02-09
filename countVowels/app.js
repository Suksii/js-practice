const countVowels = (str) => {
  const vowels = "aeiou";
  const vowelsArray = vowels.split("");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowelsArray.length; j++) {
      if (str[i].toLowerCase() === vowelsArray[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(countVowels("Iiii"));
