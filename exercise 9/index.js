function checkPart(word) {
  var results = [];
  var arr = word.split("");

  for (i = arr.length; i >= 0; i--) {
    result = word.replace(word[i], "");
    results.push(result);
  }

  for (i of results) {
    var bool = checkPal(i, results);

    if (bool) {
      return console.log("it can be a palindrome");
    }
  }

  console.log("it cant be a palindrome");
}

function checkPal(word, arr2) {
  var arr = word.split("");
  var result = "";

  for (i = `${arr.length - 1}`; i >= 0; i--) {
    result += arr[i];
  }

  if (arr2.includes(result)) {
    return true;
  } else false;
}

checkPart("midu");
