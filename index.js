// const gifts = [ "bicicleta", "auto", "muñeca", "xbox"]

// function wrapping() {
//     for(let item of gifts) {
//         var wrapper= "*";
//         var lenght = gifts[0].length + gifts.indexOf(item) + 1

//         for (i = 0; i < lenght ; i++ ) {

//             wrapper += "*";
//         }

//         wrappedGift = wrapper + item + wrapper;

//         console.log(wrappedGift)

//     }

// }
// wrapping()

// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

/*

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año

*/

/*const year = 2022
const holidays = ['01/06', '04/01', '12/25', '10/02', '02/04' ] // formato MM/DD

var date = new Date('01/06, 2022');
var weekDay = date.getDay()

function CalculateExtraHours(dates) {

    var extraHours = 0;

    for (var day of dates) {

        var formartedDate = new Date(day + ", " + year)
        
        var weekDay = formartedDate.getDay()

        if (weekDay == 0 || weekDay == 0){

        } else {
            extraHours += 2;
        }
    }


    window.prompt("este año se trabajaran " + extraHours + " horas extras")
}

CalculateExtraHours(holidays) */

/*const packOfGifts = ["book", "doll", "ball", "car", "ball"];
const reindeers = ["dasher", "dancer", "david"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(gifts, reindeers) {
  var giftsWeight = 0;
  var reindeersCapacity = 0;
  
  for (gift of gifts) {
    giftsWeight += gift.length
  }
  
  
  for (reinder of reindeers) {
    reindeersCapacity += (reinder.length  * 2)
  }


  var maxCapacity = Math.floor(reindeersCapacity / giftsWeight);
  console.log(maxCapacity)
}



distributeGifts(packOfGifts, reindeers); // 2¨*/

/*
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
*/
/*
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
    if ( giftIndex < maxGifts && selectedCities.length < maxCities) {
      giftsInSled += i;
      selectedCities.push(i)
    }
  }
  
  console.log(giftsInSled)
  console.log(selectedCities)
  
}

getMaxGifts()
*/

// console.log("/\\_\\\n\\/_/");

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

createCube(4);

console.log(cube);


