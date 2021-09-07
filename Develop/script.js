var dayEl = document.getElementById("currentDay");

function currentDate() {
    var today = moment().format("MM/DD/YYYY");

    dayEl.textContent = today;
};

currentDate();