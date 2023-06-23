/*
3. Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may
assume that the majority element always exists in the array.
*/

function findMajorityElement(nums) {
  let count = 0;
  let MajorityElement = nums[0];

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      MajorityElement = nums[i];
    }

    if (num[i] == MajorityElement) {
      count++;
    } else {
      count--;
    }
  }

  return MajorityElement;
}
