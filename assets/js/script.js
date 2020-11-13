
// using moment.js to display current date in a div
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('[It is ]dddd, MMMM Do, [at] h:mm A');

