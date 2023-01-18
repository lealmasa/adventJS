/*const leds = [0, 0, 0, 1];

function turnLights(arr) {
  var cycles = 0;

  while (!arr.every((i) => i == 1)) {
    prevState = leds;

    var index = `${cycles == 0 ? arr.length - 1 : cycles - 1}`;

    if (prevState[index] == 1 && prevState[cycles] == 0) {
      arr[cycles] = 1;
      console.log(prevState);
      continue; 
    }
    cycles++;
  }
}
  turnLights(leds);*/

const leds = [0, 0, 1, 0, 0];

function countTime(leds) {
  let count = 0;
  while (!leds.every((led) => led == 1)) {
    leds = leds.map((led, i) => {
      let shouldTurnOn = false;
      if (i == 0) {
        shouldTurnOn = leds[leds.length - 1] == 1;
      } else {
        shouldTurnOn = leds[i - 1] == 1;
      }
      return shouldTurnOn || led == 1 ? 1 : 0;
    });
    count++;
  }
  console.log(leds);
  return count * 7;
}

console.log(countTime(leds));
console.log(leds);
