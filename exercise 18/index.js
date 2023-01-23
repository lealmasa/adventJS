function dryNumber(toFind, maxCode) {
  var newArr = [];
  if (toFind >= 10) return "The number to find its to large";
  for (i = 1; i <= maxCode; i++) {
    if (i.toString().includes(toFind.toString())) newArr.push(i);
  }
  return newArr;
}

console.log(dryNumber(2, 20));
