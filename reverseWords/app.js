const reverseWords = (str) => {
  let wordsArray = str.split(" ");
  let reversedArray = wordsArray.reverse();

  return reversedArray;
};

console.log(reverseWords("I am practicing JavaScript"));
