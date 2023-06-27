/*
2. Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/

function checkDublicates(nums) {
  const checkingBoard = new Set();
  for (num of nums) {
    if (checkingBoard.has(num)) {
      return true;
    }
    checkingBoard.add(num);
  }

  return false;
}
