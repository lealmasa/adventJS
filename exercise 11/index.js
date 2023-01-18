const heights = [1, 3, 8, 5, 2];

function checkJump(arr) {
  var index = arr[0];
  var maxPoint = arr.length;
  var result = true;

  arr.forEach((v, i) => {
    if (v >= index && i < maxPoint) {
      index = v;
      return;
    }

    if (v <= index) {
      index = v;
      maxPoint = i;
      return;
    }

    result = false;
  });

  return result;
}

console.log(checkJump(heights));
