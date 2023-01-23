// const paths = [[0], [3, 4], [9, 8, 1]];

// function getOptimalPath(input) {
//   let index = 0;
//   let solutions = [];
//   input.forEach((element) => {
//     let possiblePositions = [];
//     possiblePositions.push(index, index + 1);

//     let value = element
//       .filter((number) => possiblePositions.includes(element.indexOf(number)))
//       .sort();
//     index = element.indexOf(value[0]);
//     solutions.push(value[0]);
//   });
//   return solutions;
// }

// console.log(getOptimalPath(paths));

const path = [[0], [3, 4], [9, 8, 1]];

function getOptimalPath(path) {
  function traverse(path, level, index, sum) {
    if (level >= path.length || index >= path[level].length) {
      return sum;
    }

    sum = path[level][index];
    const left = traverse(path, level + 1, index, 0) + sum;
    const right = traverse(path, level + 1, index + 1, 0) + sum;

    if (left < right) {
      return left;
    }

    return right;
  }

  return traverse(path, 0, 0, 0);
}

console.log(getOptimalPath(path));
