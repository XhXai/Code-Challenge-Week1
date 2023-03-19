const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
const benefits = parseFloat(prompt("Enter Benefits:"));

// Calculate gross Salary.
const grossSalary = basicSalary + benefits;

// Calculate NHIF Deductions.
// The Find() Array method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. The method is used to find a single value that satisfies a given condition
const nhifDeductions = (() => {
    if (grossSalary <= 6000) return 150;
    if (grossSalary <= 8000) return 300;
    if (grossSalary <= 12000) return 400;
    if (grossSalary <= 15000) return 500;
    if (grossSalary <= 20000) return 600;
    if (grossSalary <= 25000) return 750;
    if (grossSalary <= 30000) return 850;
    if (grossSalary <= 35000) return 900;
    if (grossSalary <= 40000) return 950;
    if (grossSalary <= 45000) return 1000;
    if (grossSalary <= 50000) return 1100;
    if (grossSalary <= 60000) return 1200;
    if (grossSalary <= 70000) return 1300;
    if (grossSalary <= 80000) return 1400;
    if (grossSalary <= 90000) return 1500;
    if (grossSalary <= 100000) return 1600;
    return 1700;
} )();

// Calculate NSSF Deductions
// Math.min this is a built-in function in javascript AMth object that returns the smallest of zero's or more numbers.
// In this case I have used math.min to ensure that the NSSF Deductions do not exceed a certain maximum value of 2400.
const nssfDeductions = Math.min(grossSalary * 0.06, 2400);

// Calculate Taxable Pay
const taxablePay = grossSalary - nhifDeductions - nssfDeductions;

// Calculate Payee Tax


// Calculate Net Salary
const netSalary = grossSalary - nhifDeductions - nssfDeductions;

// Log Results
console.log("Net Salary:", netSalary);