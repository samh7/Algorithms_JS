function DecimaToBinary(num) {
  if (num === 0) return "0";
  let dividedNum = Math.floor(num / 2);
  let reminder = num % 2;
  return DecimaToBinary(dividedNum).concat(reminder);
}


console.log(DecimaToBinary(198));
