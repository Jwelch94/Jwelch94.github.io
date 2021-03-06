/**************************************************************************
                        Javascript Weather Functions
***************************************************************************/
// JS test
console.log('My javascript is being read.');
// WORKING FUNCTIONS//

//wind chill//
const temp = 31;
const speed = 5;
buildWC(speed, temp);

const direction = "N";
windDial(direction);

//////////////////////////////////////////

// Calculate the Windchill
function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;

    // Display the windchill
    console.log(wc);
     wc = 'Feels like '+wc+'°F';
    feelTemp.innerHTML = wc;
}
///////////////////////////////////////
//rounds number
function roundNum(num){

    let x = math.round(num);
    console.log(num);
    return x;
}
///////////////////////////////////////
//meter to feet
function meter(meters) {
let x = meters * 3.2804;
    x = math.round;
    console.log(feet);
    return x;
}

// Wind Dial Function
function windDial(direction){
    // Get the wind dial container
    const dial = document.getElementById("dial");
    //Determine the dial class
    switch (direction){
        case "North":
        case "N":
            dial.setAttribute("class", "n"); //"n" is the CSS rule selector
            break;
        case "NE":
        case "NNE":
        case "ENE":
            dial.setAttribute("class", "ne");
            break;
        case "NW":
        case "NNW":
        case "WNW":
            dial.setAttribute("class", "nw");
            break;
        case "South":
        case "S":
            dial.setAttribute("class", "s");
            break;
        case "SE":
        case "SSE":
        case "ESE":
            dial.setAttribute("class", "se");
            break;
        case "SW":
        case "SSW":
        case "WSW":
            dial.setAttribute("class", "sw");
            break;
        case "East":
        case "E":
            dial.setAttribute("class", "e");
            break;
        case "West":
        case "W":
            dial.setAttribute("class", "w");
            break;
    }
}

// Get Data from API
function getData(LOCALE) {
    const WU_API_KEY = '54aacdb03b7388c9';
    const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/conditions/q/" + LOCALE + ".json";
    fetch(URL)
        .then(response => response.json())
        .then(function (data) {
        console.log('Json object from getData function:');
        console.log(data);
        displayData(data);
    })
        .catch(error => console.log('There was an error: ', error))
} // end getData function

