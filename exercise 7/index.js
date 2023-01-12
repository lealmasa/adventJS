var cube = "";

function createCube(cubeSides) {
  // upperSide
  for (i = 0; i < cubeSides; i++) {
    var indexOfSpaces = cubeSides - 1;

    for (y = indexOfSpaces; y > i; y--) {
      cube += " ";
    }

    for (y = 0; y <= i; y++) {
      cube += "/\\";
    }
    for (y = 0; y < cubeSides; y++) {
      cube += "_\\";
    }
    cube += "\n";
  }

  // downSide
  for (i = cubeSides; i > 0; i--) {
    for (y = i; y < cubeSides; y++) {
      cube += " ";
    }

    for (y = 0; y < i; y++) {
      cube += "\\/";
    }
    for (y = 0; y < cubeSides; y++) {
      cube += "_/";
    }
    cube += "\n";
  }
}

createCube(12);

console.log(cube);
