function printTable(arr) {
  let rigthColumn = getLargeStr(arr, "quantity");
  let leftColumn = getLargeStr(arr, "name");
  let base = leftColumn + rigthColumn;
  output = "";

  output += `+`.repeat(rigthColumn == 1 ? base + 14 : base + 7);
  output += "\n";
  output += "| Gift";
  output += ` `.repeat(leftColumn - 4);
  output += ` |`;
  output += " quantity";
  output += ` `.repeat(rigthColumn < 9 ? 0 : rigthColumn - 8);
  output += ` |`;
  output += "\n";
  output += `| `;
  output += `-`.repeat(leftColumn == 1 ? 4 : leftColumn);
  output += ` | `;
  output += `-`.repeat(rigthColumn == 1 ? 8 : rigthColumn);
  output += ` |`;
  output += "\n";

  for (gifts of arr) {
    output += "| " + gifts.name;
    output += ` `.repeat(leftColumn - gifts.name.length);
    output += ` |`;
    output += " " + gifts.quantity;
    output +=
      ` `.repeat(
        rigthColumn == 1 ? 7 : rigthColumn - gifts.quantity.toString().length
      ) + " |";
    output += "\n";
  }
  output += `*`.repeat(rigthColumn == 1 ? base + 14 : base + 7);

  console.log(output);
}

function getLargeStr(arr, index) {
  let result = arr
    .map((x) => [x[index]])
    .sort((a, b) => b[0].length - a[0].length)
    .shift()
    .toString();

  return result.length;
}

console.log(
  printTable([
    { name: "Game", quantity: 2 },
    { name: "Bike", quantity: 1 },
    { name: "Book", quantity: 3 },
  ])
);
