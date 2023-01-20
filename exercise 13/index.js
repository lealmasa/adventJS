const battery = 20;
const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];

function selectSleigh() {
  let capableSleigh = [];
  sleighs.forEach((element) => {
    if (element.consumption * distance < battery) {
      capableSleigh.push(element.name);
    }
  });
  let bestOption = capableSleigh[capableSleigh.length - 1];
  return !bestOption ? "null" : bestOption;
}

console.log(selectSleigh());
