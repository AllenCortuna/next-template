export const amountToWords = (amount) => {
  const numberWords = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tensWords = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const numberToWordsRecursive = (num) => {
    if (num < 20) return numberWords[num];
    if (num < 100)
      return (
        tensWords[Math.floor(num / 10)] +
        (num % 10 !== 0 ? " " + numberWords[num % 10] : "")
      );
    if (num < 1000)
      return (
        numberWords[Math.floor(num / 100)] +
        " Hundred" +
        (num % 100 !== 0 ? " " + numberToWordsRecursive(num % 100) : "")
      );
    if (num < 1000000)
      return (
        numberToWordsRecursive(Math.floor(num / 1000)) +
        " Thousand" +
        (num % 1000 !== 0 ? " " + numberToWordsRecursive(num % 1000) : "")
      );
    if (num < 1000000000)
      return (
        numberToWordsRecursive(Math.floor(num / 1000000)) +
        " Million" +
        (num % 1000000 !== 0 ? " " + numberToWordsRecursive(num % 1000000) : "")
      );
    if (num < 1000000000000)
      return (
        numberToWordsRecursive(Math.floor(num / 1000000000)) +
        " Billion" +
        (num % 1000000000 !== 0
          ? " " + numberToWordsRecursive(num % 1000000000)
          : "")
      );
  };

  const [pesos, cents] = amount.split(".");
  const pesosInWords =
    numberToWordsRecursive(parseInt(pesos.replace(/\D/g, ""))) || "Zero";
  // const centsInWords = cents
  //   ? numberToWordsRecursive(parseInt(cents) || 0) || "Zero"
  //   : "Only";

  const fraction = `${cents || "00"}/100`;

  return cents
    ? `${pesosInWords} Pesos & ${fraction}`
    : `${pesosInWords} Pesos Only`;
};
