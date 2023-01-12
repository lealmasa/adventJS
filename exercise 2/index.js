const year = 2022;
const holidays = ["01/06", "04/01", "12/25", "10/02", "02/04"]; // formato MM/DD

var date = new Date("01/06, 2022");
var weekDay = date.getDay();

function CalculateExtraHours(dates) {
  var extraHours = 0;

  for (var day of dates) {
    var formartedDate = new Date(day + ", " + year);

    var weekDay = formartedDate.getDay();

    if (weekDay == 0 || weekDay == 0) {
    } else {
      extraHours += 2;
    }
  }

  window.prompt("este año se trabajaran " + extraHours + " horas extras");
}

CalculateExtraHours(holidays);
