//Global variables
var dayEl = document.getElementById("currentDay");
var buttons = $(".saveBtn");
var tasksArray = [];


//Sets current date at top of page in MM/DD/YYYY format
function currentDate() {
    var today = moment().format("MM/DD/YYYY");
    dayEl.textContent = today;
}


//Changes color of the time block textareas based on user's local time
function timeBlockColor() {
    //Variables to check current time and select all textareas
    var timeNow = moment().format("H");
    var timeBlocks = $(".col-9");
    
    //Loop to iterate through the time blocks by id
    //Each textarea has an id that corresponds to a 24 hour format of the time it represents
    //Loop adds the css class necessary to textarea to alert user of the past/present/future hour
    for(var i = 0; i < timeBlocks.length; i++) {
        var timeBlockID = timeBlocks[i].id;

        var updateTimeBlock = document.getElementById(timeBlockID);

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

//Creates click listeners for all buttons on the page and sends to saveTask() function
for(var i = 0; i < buttons.length; i++){
    $(buttons[i]).on("click", function() {
        saveTask($(this).siblings()[1].value, $(this)[0].id);
    });
}

//Function to save tasks once user clicks a save button
function saveTask(taskAdded, buttonIndex) {
    var savedArray = JSON.parse(localStorage.getItem("tasks")) || [];

    for(var i = 0; i < buttons.length; i++) {
        savedArray[i] = $(".col-9")[i].textContent;
    }

    savedArray[buttonIndex] = taskAdded;

    tasksArray = savedArray;

    localStorage.setItem("tasks", JSON.stringify(savedArray));
}

//Function to load tasks in the corresponding time block based on what is in localStorage
function loadTask() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    for(var i = 0; i < buttons.length; i++){
        $(".col-9")[i].textContent = savedTasks[i];
    } 
}


//Runs necessary functions to make the page work 
currentDate();
timeBlockColor();
loadTask();


//setInterval to update the colors on the calendar every 3 minutes and the date every hour
setInterval(timeBlockColor, (1000 *60) * 3);
setInterval(currentDate, (1000 *60) * 60);