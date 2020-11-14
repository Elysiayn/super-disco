
// using moment.js to display current date in a div
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('[The date is ]dddd, MMMM Do YYYY. [The time is ] h:mm A');

var tasks = {};

var createTask = function (taskText, taskDate) {
    
}