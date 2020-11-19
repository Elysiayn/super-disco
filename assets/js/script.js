
// using moment.js to display current date in a div
var NowMoment = moment();
var current = document.getElementById('currentDay');
current.innerHTML = NowMoment.format('[The date is ]dddd, MMMM Do YYYY. [The time is ] h:mm A[.]');

//save value (input info in text area) to local storage on click of saveBtn
$(".saveBtn").on("click", function (event) {
    var saveDescription = $(this).siblings("textarea").val().trim();
 // save id of row w/ text input
    var textId = $(this).siblings("textarea").attr("id");
    localStorage.setItem(textId, saveDescription);
    console.log("saveDescription: ", saveDescription);
    console.log("textId: ", textId);
    console.log(localStorage);
});
 

// function to load events
var loadEvents = function() {
    $("#08").val(localStorage.getItem("08"))
    $("#09").val(localStorage.getItem("09"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))
    $("#18").val(localStorage.getItem("18"))
}

// Check time function and apply corresponding class
var auditTimes = function() {
    // select all description block elements
    var descriptionBlockElements = $(".description");

    // loop through description classes
    for (var i = 0; i < descriptionBlockElements.length; i++) {

        // get description elements by ID
        var getID = document.getElementById(descriptionBlockElements[i].id)

        // Get description arrays ID's as a string
        var descriptionID = descriptionBlockElements[i].id;        

        // remove any old classes from the element
        $(descriptionBlockElements[i].id).removeClass(".present .past .future");
       
        // apply new class if task is present/past/future
        if (descriptionID < moment().hour()) {
            $(getID).addClass("past");
        } else if (descriptionID > moment().hour()) {
            $(getID).addClass("future");
        } else {
            $(getID).addClass("present");
        }
    }

}

// run auditTimes every 30 minutes
setInterval(auditTimes, (1000 * 60) * 30);

//call functions
auditTimes()
loadEvents()



