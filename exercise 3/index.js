const packOfGifts = ["book", "doll", "ball", "car", "ball"];
const reindeers = ["dasher", "dancer", "david"];

function distributeGifts(gifts, reindeers) {
  var giftsWeight = 0;
  var reindeersCapacity = 0;

  for (gift of gifts) {
    giftsWeight += gift.length;
  }

  for (reinder of reindeers) {
    reindeersCapacity += reinder.length * 2;
  }

  var maxCapacity = Math.floor(reindeersCapacity / giftsWeight);
  console.log(maxCapacity);
}

distributeGifts(packOfGifts, reindeers);
