const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

var giftsInSled = 0;

function getMaxGifts() {
  var selectedCities = [];
  var sortedGifts = giftsCities.sort((p1, p2) =>
    p1 < p2 ? 1 : p1 > p2 ? -1 : 0
  );

  for (var i of sortedGifts) {
    var giftIndex = i + giftsInSled;
    if (giftIndex < maxGifts && selectedCities.length < maxCities) {
      giftsInSled += i;
      selectedCities.push(i);
    }
  }

  console.log(giftsInSled);
  console.log(selectedCities);
}

getMaxGifts();
