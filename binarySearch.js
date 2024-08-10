function BinarySearch1(nums = [], target) {
  return BinarySearch(nums, target, 0, nums.length);
}
function BinarySearch(nums = [], target, lo, hi) {
  if (lo > hi) return false;
  if (nums[lo] === target || nums[hi] === target) return true;
  let midpoint = Math.floor((nums.length - lo) / 2) + lo;
  if (nums[midpoint] === target) return true;
  if (midpoint === lo || midpoint === hi) return false;
  if (nums[midpoint] > target)
    return BinarySearch(nums, target, lo + 1, midpoint - 1);
  return BinarySearch(nums, target, midpoint + 1, hi);
}

console.log(
  BinarySearch1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 18], 15)
);
