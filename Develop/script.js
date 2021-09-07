var dayEl = document.getElementById("currentDay");

function currentDate() {
    var today = moment().format("MM/DD/YYYY");

    console.log(today);

    dayEl.textContent = today;
};

currentDate();