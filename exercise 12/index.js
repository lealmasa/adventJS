function getCompleted(t1, t2) {
  var maxTime = turnIntoSeconds(t2);
  var minTime = turnIntoSeconds(t1);

  var gdc = getGcd(maxTime, minTime);

  return minTime / gdc + "/" + maxTime / gdc;
}

function turnIntoSeconds(arr) {
  var totalTimeArr = arr.split(":");
  return (totalTime = `${
    parseFloat(totalTimeArr[0]) * 3600 +
    parseFloat(totalTimeArr[1]) * 60 +
    parseFloat(totalTimeArr[2])
  }`);
}

function getGcd(a, b) {
  if (!b) return a;

  return getGcd(b, a % b);
}

console.log(getCompleted("03:30:30", "05:50:50"));
