const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

var inventory = [];
var giftToRefill = [];

function getGiftsToRefill() {
  getInvetory(a1);
  getInvetory(a2);
  getInvetory(a3);
}

function getInvetory(array) {
  for (var element of array) {
    if (!inventory.includes(element)) {
      inventory.push(element);
    }
  }
}

function checkInventory() {
  for (var element of inventory) {
    var index = 0;

    if (a1.includes(element)) {
      index++;
    }
    if (a2.includes(element)) {
      index++;
    }
    if (a3.includes(element)) {
      index++;
    }

    if (index < 2) {
      giftToRefill.push(element);
    }
  }
}

console.log(inventory);
console.log(giftToRefill);

getGiftsToRefill();
checkInventory();
