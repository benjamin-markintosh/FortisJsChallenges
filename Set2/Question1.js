/*
1. Givenanintegernum,writeafunctionthatrepeatedlyaddsallitsdigits
until the result has only one digit, and return it.
*/

function digitAddition(num) {
  if (num < 10) {
    return num;
  }

  const numAsString = num.toString();

  let sum = 0;
  let len = numAsString.length;

  for (let i = 0; i < len; i++) {
    const numAsIntenger = parseInt(numAsString[i]);
    sum = sum + numAsIntenger;
  }

  return digitAddition(sum);
}
