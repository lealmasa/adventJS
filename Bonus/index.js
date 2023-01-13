function triangle(base) {
  let output = "";
  Array(base)
    .fill(0)
    .forEach((v, i) => {
      output += ` `.repeat(base - i);
      output += `/`;
      output += `${i == base - 1 ? "_" : " "}`.repeat(i >= 1 ? i * 2 : i);
      output += "\\";
      output += " ".repeat(base - i);
      output += "\n";
    });
  return output;
}

console.log(triangle(6));
