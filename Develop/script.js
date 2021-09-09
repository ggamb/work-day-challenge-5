var dayEl = document.getElementById("currentDay");

function currentDate() {
    var today = moment().format("MM/DD/YYYY");

    dayEl.textContent = today;
};


//Changes color of the time block textareas based on user's local time
function timeBlockColor() {
    var timeNow = moment().format("H");
    console.log("now",timeNow);
    var timeBlocks = $(".col-9");
    console.log("timeBlocks", timeBlocks);

    for(var i = 0; i < timeBlocks.length; i++) {
        var timeBlockID = timeBlocks[i].id;

        var updateTimeBlock = document.getElementById(timeBlockID);
        console.log(updateTimeBlock);

        $(timeBlocks[i].id).removeClass(".present .past .future");

        if (timeBlockID < timeNow) {
            $(updateTimeBlock).addClass("past");
        } else if (timeBlockID > timeNow) {
            $(updateTimeBlock).addClass("future");
        } else {
            $(updateTimeBlock).addClass("present");
        }
    }
    
}


//To add task
/*$(".row").on("click", "#tasks-col", function() {
    var taskAdded = $("#tasks-col").val();
    console.log(taskAdded);
});*/

currentDate();
timeBlockColor();
setInterval(timeBlockColor(), (1000 * 60) * 5);