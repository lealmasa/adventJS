function fixLetter(str) {
  var text = str
    .trim()
    .toLowerCase()
    .replace(/\?+ /g, "? ")
    .replace(/\s\,/g, ",")
    .replace(/\s\./g, ".")
    .replace("santa claus", "Santa Claus")
    .replace(/\.\s\w/g, (match) => `${match.toUpperCase()}`)
    .replace(/\s+/g, " ");

  if (!text.endsWith(".")) {
    text += ".";
  }

  console.log(text);
}

fixLetter(
  `  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?`
);
