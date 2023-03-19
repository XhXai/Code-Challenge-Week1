// Prompt the user to enter the speed.
let speed = prompt("Please enter speed of the car in km/hr");
// The Number(speedString)is used to convert the string value of speedString to a number and store it in the speed variable.
let number = Number(speedString);

// Determine the number of demerit points based on the speed limit.
let demeritPoints = 0;
if (speed < 70){
    console.log("Ok");
}else{
// the |0 or called the bitwise operator is used to convert a decimal number to an integer. the function math.trunc can also be used as demeritPoints = math.Trunc((speed - 70 / 5)).
    demeritPoints = ((speed - 70 / 5)) | 0;
    console.log("You are over the speed limit. You have been given " + demeritPoints + " demerit point(s).");
}