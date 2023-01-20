const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

function getFilesToBackup(lastBackup, changes) {
  let toBackup = [];
  changes.forEach((element) => {
    if (element[1] > lastBackup && !toBackup.includes(element[0])) {
      toBackup.push(element[0]);
    }
  });
  return toBackup.sort();
}
console.log(getFilesToBackup(lastBackup, changes));
