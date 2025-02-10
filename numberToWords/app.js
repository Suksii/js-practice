const numberToWords = (num) => {
  let numbersToWords = {
    0: "nula",
    1: "jedan",
    2: "dva",
    3: "tri",
    4: "četiri",
    5: "pet",
    6: "šest",
    7: "sedam",
    8: "osam",
    9: "devet",
    10: "deset",
    11: "jedanaest",
    12: "dvanaest",
    13: "trinaest",
    14: "četrnaest",
    15: "petnaest",
    16: "šesnaest",
    17: "sedamnaest",
    18: "osamnaest",
    19: "devetnaest",
    20: "dvadeset",
    30: "trideset",
    40: "četrdeset",
    50: "pedeset",
    60: "šezdeset",
    70: "sedamdeset",
    80: "osamdeset",
    90: "devedeset",
    100: "sto",
    200: "dvesta",
    300: "trista",
    400: "četiristo",
    500: "petsto",
    600: "šeststo",
    700: "sedamsto",
    800: "osamsto",
    900: "devetsto",
  };

  if (num < 0 || num > 999) return "Number must be between 1 and 999";
  if (numbersToWords[num]) return numbersToWords[num];
  else if (num.toString().split("").length === 2) {
    const numOfDecades = Math.floor(num / 10) * 10;
    const numOfOnes = num % 10;
    return numbersToWords[numOfDecades] + " " + numbersToWords[numOfOnes];
  } else if (num.toString().split("").length === 3) {
    const numOfHundreds = Math.floor(num / 100) * 100;
    const numOfDecades = Math.floor((num - numOfHundreds) / 10) * 10;
    const numOfOnes = num - numOfHundreds - numOfDecades;
    return (
      numbersToWords[numOfHundreds] +
      (numOfDecades !== 0 ? " " + numbersToWords[numOfDecades] : "") +
      (numOfOnes !== 0 ? " " + numbersToWords[numOfOnes] : "")
    );
  }
};

console.log(numberToWords(255));
