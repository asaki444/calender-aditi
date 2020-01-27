const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["S", "M", "T", "W", "T", "F", "S"]

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function onLoad() { 

    document.getElementById("cursor-left").addEventListener('click', () => {
        scroll('left')
    });
    document.getElementById("cursor-right").addEventListener('click', () => {
        scroll('right')
    })

    for (let i = 0; i < days.length; i++) {
        if (i === 0 || i === days.length - 1) {
            document.getElementById("days-row").innerHTML += `<div class="edge-day">${days[i]}</div>`
        } else {
            document.getElementById("days-row").innerHTML += `<div>${days[i]}</div>`
        }
    }


    loadCalendar(currentMonth, currentYear);

}

function scroll(direction) {

    if (direction === 'right') {
        11 > currentMonth ? currentMonth += 1 : currentMonth = 0;
        if (currentMonth === 0) {
            currentYear += 1;
        }
    } else {
        currentMonth > 0 ? currentMonth -= 1 : currentMonth = 11;
        if (currentMonth === 11) {
            currentYear -= 1;
        }

    }
    document.getElementById("month").innerHTML = "";
    document.querySelectorAll("#week-row-1, #week-row-2, #week-row-3, #week-row-4, #week-row-5").forEach(element => {
        element.innerHTML = ""
    })



    loadCalendar(currentMonth, currentYear)
}


function loadCalendar(month, year) {

    let findFirstDay = new Date(year, month, 1).getDay();
    let monthHTML = document.getElementById("month")
    monthHTML.innerHTML = months[month];
    monthHTML.innerHTML += " " + year;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let emptyDays = `<div class='day-contain'>&nbsp;&nbsp;</div>`
    document.getElementById(`week-row-1`).innerHTML += emptyDays.repeat(findFirstDay);
    let countWeeks = 1;
    let countDays = 1;
    for (let i = findFirstDay + 1; i < daysInMonth + findFirstDay + 1; i++) {
        let week = document.getElementById(`week-row-${countWeeks}`)
        if (i % 7 == 0) {
            countWeeks++;
            week.innerHTML +=
                `<div class='day-contain edge-day'>${countDays}</div>`
        } else if (
            i % 7 == 1
        ) {
            week.innerHTML +=
                `<div class='day-contain edge-day'>${countDays}</div>`
        } else {
            week.innerHTML +=
                `<div class='day-contain'>${countDays}</div>`
        }
        countDays++;
    }
}