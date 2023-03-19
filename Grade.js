// Prompt the user to enter the grade.
let marks = (prompt("Please enter student's marks (between 0 to 100):"));

// Check if the input is within valid rage.
if (marks >= 0 && marks <= 100) {
    // Determine grade based on the marks range.
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }
    // Output the grade to console.
console.log(`The student grade is ${grade}.`);
} else {
      // Output an error message if the input is not within the valid range
  console.log("Invalid input. Please enter a number between 0 and 100.");
}




