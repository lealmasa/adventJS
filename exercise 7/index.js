function cube(base) {
  let output = "";
  let input = base * 2;

  for (i = 1; i <= input; i++) {
    output += ` `.repeat(i <= input / 2 ? input - i : i - 1);
    output += `${i <= input / 2 ? "/\\" : "\\/"}`.repeat(
      i <= input / 2 ? i : input - i + 1
    );
    output += `${i <= input / 2 ? "_\\" : "_/"}`.repeat(base);
    output += `\n`;
  }

  console.log(output);
}

cube();
