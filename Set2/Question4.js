/*

4. Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.
*/

function singleElement(nums) {
  const set = new Set();

  for (num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return set.values().next().value;
}
