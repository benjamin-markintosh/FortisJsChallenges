/*
5. GivenanArraycontainingintegers,floats,andonecharacterstrings,
 write a function that takes an Array as a parameter
  and returns an Object with keys evens, odds, and chars. The value for evens is an array
of sorted even numbers, the value for odds is a list of sorted odd numbers and chars is a list of sorted single-character strings.
Caution: DO NOT use the sort array method
*/

function sortArray(someArray) {
  const len = someArray.length;
  for (let i = 0; i < len; i++) {
    if (someArray[i] % 2 == 0) {
      object.evens.push(someArray[i]);
    } else if (someArray[i] % 2 == 1) {
      object.odds.push(someArray[i]);
    } else {
      object.chars.push(someArray[i]);
    }
  }
}

/* objects in javascript

const object = {
  evens: [],
  odds: [],
  chars: [],
};
*/
