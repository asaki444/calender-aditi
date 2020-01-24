const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days =  ["S", "M", "T", "W", "T", "F", "S"]

function onLoad(){
    for(let i = 0; i < days.length; i++){
        if( i === 0 || i === days.length - 1){
            document.getElementById("days-row").innerHTML+= `<div class="edge-day">${days[i]}</div>`
        }
        else{
            document.getElementById("days-row").innerHTML+= `<div>${days[i]}</div>`
        }
    }


    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let findFirstDay = new Date(year, month, 1).getDay();
    let monthHTML =  document.getElementById("month")
    monthHTML.innerHTML = months[month];
    monthHTML.innerHTML+= " " + year;
   

    function addWeeks(){
       let daysInMonth = new Date(year, month, 0).getDate();
       let week = `<div class="week-row-1">&nbsp;</div>`
       let calendar =   document.getElementsByClassName("calendar");
      calendar.innerHTML+= week;
    let emptyDays= "<div class='day-contain'>&nbsp;</div>"
       document.getElementsByClassName("week-row-1").innerHTML += emptyDays.repeat(findFirstDay);
       let countWeeks = 1;
       let countDays = 1;
       for( let i = findFirstDay; i < daysInMonth + findFirstDay; i++ ){   
        if( i % 7 == 1){
            countWeeks++;
            calendar.innerHTML+= `<div class="week-row-${countWeeks}"></div>`;
        }
        else{
            document.getElementsByClassName(`week-row-${countWeeks}`).innerHTML+= 
            `<div class='day-contain'>${countDays}</div>`
        }
        countDays++;
       }
    }


    addWeeks()
}