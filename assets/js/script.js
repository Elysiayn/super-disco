
// using moment.js to display current date in a div
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('[The date is ]dddd, MMMM Do YYYY. [The time is ] h:mm A[.]');

//save vale (input info in text area) to local storage on click of saveBtn
$(".saveBtn").on("click", function (event) {
    var saveValue = $(this).siblings("textarea").val().trim();
    var saveTime = $
    localStorage.setItem(saveValue);
});

// write function that displays task on page
//need to know where to put task on page (maybe array w/ id to save into 
//local storage along w/ value)
//when set value into local storage can also set time into local storage, 
//when saveBtn clicked write another variable that can save time as well