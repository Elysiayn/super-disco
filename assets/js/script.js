//display current date in header
//const today = moment ();
//console.log(
//    "Today's date is " +
//    today.format('DD-MM-YYYY')
//);

//var d = new Date();
//document.getElementById("currentDay").innerHTML = d;

// useing moment.js to display current date in a div
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('[Todays Date is ] dddd, MMMM Do');