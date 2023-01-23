function decorateTree(input) {
  var text = input.replaceAll(" ", "");
  var threeFloor = [input];
  const printR = ["B", "P"];
  const printB = ["R", "P"];
  const printP = ["R", "B"];

  for (i = 0; i < text.length - 1; i++) {
    var text = threeFloor[i];
    var arr = text.split(" ");
    var newFloor = "";

    for (var y = 0; y < arr.length; y++) {
      let firstN = arr[y];
      let secondN = arr[y + 1];
      if (y == arr.length - 1) continue;

      if (firstN == secondN) {
        newFloor += firstN;
      } else if (printR.includes(firstN) && printR.includes(secondN)) {
        newFloor += "R ";
      } else if (printB.includes(firstN) && printB.includes(secondN)) {
        newFloor += "B ";
      } else if (printP.includes(firstN) && printP.includes(secondN)) {
        newFloor += "P ";
      }
    }

    threeFloor.push(newFloor.trim());
  }

  return threeFloor.reverse();
}

console.log(decorateTree("B P R P"));
