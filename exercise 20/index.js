const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];

const gifts = [
  { country: "Spain", weight: 30 },
  { country: "france", weight: 17 },
  { country: "italy", weight: 50 },
];

function howManyReindeers(reindeers, gifts) {
  return gifts.forEach((gift) => {
    let max = gift.weight;
    let capableReinders = reindeers.filter((x) => x.weightCapacity < max);
    let result = capableReinders
      .map((x) => [x.type, x.weightCapacity])
      .map(([type]) => ({
        type,
        num: 0,
      }));
    let sum = 0;
    let i = 0;

    while (true) {
      let reduceArr = capableReinders
        .map((x) => [x.weightCapacity])
        .reduce((sum, e) => parseFloat(sum) + parseFloat(e), 0);
      let sumCount = reduceArr + sum;

      if (sumCount > max) {
        capableReinders.shift();
      } else {
        for (x = 0; x < capableReinders.length; x++) {
          sum += capableReinders[x].weightCapacity;
          result[capableReinders.length - x - 1].num++;
        }
      }

      i++;
      if (sum >= max) break;
    }
    console.log(gift.country);
    console.log(result);
  });
}

howManyReindeers(reindeerTypes, gifts);
