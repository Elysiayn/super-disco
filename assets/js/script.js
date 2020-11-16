
// using moment.js to display current date in a div
var NowMoment = moment();
var current = document.getElementById('currentDay');
current.innerHTML = NowMoment.format('[The date is ]dddd, MMMM Do YYYY. [The time is ] h:mm A[.]');

//save value (input info in text area) to local storage on click of saveBtn
$(".saveBtn").on("click", function (event) {
    var saveDescription = $(this).siblings("textarea").val().trim();
 // save id of row w/ text input
    var textId = $(this).siblings("textarea").attr("id");
    localStorage.setItem(saveDescription, textId);
    console.log(localStorage);
});
 

// function to load events
var loadEvents = function() {
    $("#0").val(localStorage.getItem("0"))
    $("#1").val(localStorage.getItem("1"))
    $("#2").val(localStorage.getItem("2"))
    $("#3").val(localStorage.getItem("3"))
    $("#4").val(localStorage.getItem("4"))
    $("#5").val(localStorage.getItem("5"))
    $("#6").val(localStorage.getItem("6"))
    $("#7").val(localStorage.getItem("7"))
    $("#8").val(localStorage.getItem("8"))
    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))
}

// Check time function and apply corresponding class
var checkTimes = function() {
    // select all description block elements
    var descriptionBlockElements = $(".description");

    // loop through description classes
    for (var i = 0; i < descriptionBlockElements.length; i++) {

        // get description elements by ID
        var manipID = document.getElementById(descriptionBlockElements[i].id)

        // Get description arrays ID's as a string
        var descriptionID = descriptionBlockElements[i].id;        

        // remove any old classes from the element
        $(descriptionBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (descriptionID < current) {
            $(manipID).addClass("past");
        } else if (descriptionID > current) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }

}

// run checkTime every 30 minutes
setInterval(checkTimes, (1000 * 60) * 30);

//call functions
checkTimes()
loadEvents()



