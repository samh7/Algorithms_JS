function BinaryToDecimal1(num) {
  const nums = `${num}`
    .split("")
    .map((n) => Number(n))
    .reverse();
  return BinaryToDecimal(nums);
}
function BinaryToDecimal(nums = [], idx = 0) {
  if (idx === nums.length) return 0;
  return (
    Math.floor(Math.pow(2, idx) * nums[idx]) + BinaryToDecimal(nums, idx + 1)
  );
}


console.log(BinaryToDecimal1(11000110));
