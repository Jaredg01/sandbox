/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? No, both values can be none
// When do they need to be reset or updated? 

const mon = document.getElementById("monday");
const tue = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thu = document.getElementById("thursday");
const fri = document.getElementById("friday");
let half = document.getElementById("half");
let full = document.getElementById("full");
let totalCost = document.getElementById("calculated-cost");
let dailyRate = 35;
let daysAmount = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



//Monday
function respondMon() {
    if (!mon.classList.contains("clicked")) {
    mon.classList.add("clicked");
    daysAmount += 1;
    calculate();
    } else {
        mon.classList.remove("clicked");
        daysAmount -= 1;
        calculate();
    }
}

//Tuesday
function respondTue() {
    if (!tue.classList.contains("clicked")) {
    tue.classList.add("clicked");
    daysAmount += 1;
    calculate();
    } else {
        tue.classList.remove("clicked");
        daysAmount -= 1;
        calculate();
    }
}

//Wednesday
function respondWed() {
    if (!wed.classList.contains("clicked")) {
    wed.classList.add("clicked");
    daysAmount += 1;
    calculate();
    } else {
        wed.classList.remove("clicked");
        daysAmount -= 1;
        calculate();
    }
}

//Thursday
function respondThu() {
    if (!thu.classList.contains("clicked")) {
    thu.classList.add("clicked");
    daysAmount += 1;
    calculate();
    } else {
        thu.classList.remove("clicked");
        daysAmount -= 1;
        calculate();
    }
}

//Friday
function respondFri() {
    if (!fri.classList.contains("clicked")) {
    fri.classList.add("clicked");
    daysAmount += 1;
    calculate();
    } else {
        fri.classList.remove("clicked");
        daysAmount -= 1;
        calculate();
    }
}

mon.addEventListener("click", respondMon);
tue.addEventListener("click", respondTue);
wed.addEventListener("click", respondWed);
thu.addEventListener("click", respondThu);
fri.addEventListener("click", respondFri);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clr = document.getElementById("clear-button");
let days = [mon, tue, wed, thu, fri];
function clearButton() {
    let i;
    for (i in days) {
        if (days[i].classList.contains("clicked"))  {
            days[i].classList.remove("clicked");
        }
    }
    dailyRate = 35;
    daysAmount = 0;
    totalCost.innerHTML = 0;
}

clr.addEventListener("click", clearButton);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function respondhalf() {
     if (!half.classList.contains("clicked")) {
        half.classList.add("clicked");
        full.classList.remove("clicked");
        dailyRate = 20;
        calculate();
     }
}

half.addEventListener("click", respondhalf);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function respondfull() {
    if (!full.classList.contains("clicked")) {
       full.classList.add("clicked");
       half.classList.remove("clicked");
       dailyRate = 35;
       calculate();
    }
}

full.addEventListener("click", respondfull);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let total = dailyRate * daysAmount;
    totalCost.innerHTML = total;
}
