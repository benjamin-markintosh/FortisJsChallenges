/*

3. Writeafunctionnamed

twoSumwhichtakes
twoparameters:nums and target.
 Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to the target
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
.

*/

function twoSum(nums, target) {
  const firstArrayElement = nums[0];
  const lastArrayElement = nums[nums.length - 1];

  //  for(initialisation; condition ; iteration){

  // }

  // let indices be i
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}
