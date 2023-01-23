// const toys = ["ball", "doll", "car", "puzzle"];
// const positions = [2, 3, 1, 0];

// function sortToys(toys, positions) {
//   var newArr = [];
//   var sortedToys = toys.map((v, i) => {
//     newArr.push((positions[i] += v));
//   });
//   return (correctOrder = newArr
//     .sort()
//     .map((x) => x.replace(/^[^\d]*(\d+)/, "")));
// }

// console.log(sortToys(toys, positions));

const toys = ["pc", "xbox", "ps4", "switch", "nintendo"];
const positions = [8, 6, 5, 7, 9];

function sortToys(toys, positions) {
  return (sortedToys = positions
    .map((x, i) => (x += toys[i]))
    .sort()
    .map((x) => x.replace(/^[^\d]*(\d+)/, "")));
}

console.log(sortToys(toys, positions));
