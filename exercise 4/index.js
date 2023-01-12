const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

function packBoxes(boxesToPack) {
  var longitudes = [];
  var heights = [];
  var width = [];
  indexOfSorted = 0;

  let sortedBoxes = boxes.sort((p1, p2) =>
    p1.l < p2.l ? 1 : p1.l > p2.l ? -1 : 0
  );

  for (var gift of sortedBoxes) {
    longitudes.push(gift.l);
    heights.push(gift.h);
    width.push(gift.w);
  }

  checkValues(width);
  checkValues(longitudes);
  checkValues(heights);

  if (indexOfSorted > 0) {
    return console.log("no se pueden stackear");
  } else {
    return console.log("si se pueden stackear");
  }
}

function checkValues(toSort) {
  for (var value of toSort) {
    var index = toSort[0];
    index -= value;
    if (index < 0) {
      indexOfSorted++;
    }
  }
}

packBoxes(boxes);
