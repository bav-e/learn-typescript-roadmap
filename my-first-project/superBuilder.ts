export { }
// -----Scenario-----
// Client Scenario: "Super Builders - Weekly Payroll System"

// The Client's Story:
// "Hello Engineer, my name is Wimal. I own a construction company named 'Super Builders'. I need a simple system to calculate the weekly salaries of my employees. Right now, I'm doing all of this manually using a calculator, and it's becoming a real headache for me."
// System Requirements:
// - Standard Pay: An employee's standard workday is 8 hours. I pay a standard rate of Rs. 1000 per hour for these regular hours.
// - Overtime (OT) Pay: If an employee works more than 8 hours in a single day, every extra hour is considered Overtime. I pay Rs. 1500 per hour for OT. -(For example, if someone works 10 hours in a day, they should be paid the standard rate for 8 hours and the OT rate for the remaining 2 hours).-
// - Gross Salary: At the end of the week, the system needs to calculate the total standard pay and the total OT pay, then add them together to find the 'Gross Salary'.
// - Tax Deduction: There is a government regulation: If an employee's Gross Salary is strictly greater than Rs. 50,000, a 4% tax must be deducted from that Gross Salary. If it is Rs. 50,000 or less, there is no tax deduction.
// - Receipt Generation: Finally, I want the system to display a clear receipt on the screen showing the employee's name, standard pay, OT pay, deducted tax amount, and the 'Final Net Salary' (the actual amount given to the hand).
//--------------------
// Mock Data (For Testing):
let employeeName: string = "Nimal";
let hoursWorkedPerDay: number[] = [8, 10, 8, 12, 9];
//--------------------
const companyName: string = "Super Builders";

const payPerHour: number = 1000;
const otPerHour: number = 1500;
const workdayHours: number = 8;
const salaryTaxThreshold: number = 50000;

const taxRate: number = 0.04;

const calculateStandardPay = (stdHours: number) => stdHours * payPerHour;
const calculateOtPay = (otHours: number) => otHours * otPerHour;
const calculateTax = (gross: number, threshold: number, rate: number) => gross > threshold ? gross * rate : 0;
const calculatePayroll = (gross: number, tax: number) => gross - tax;

function printReceipt(empName: string, totStandardPay: number, totOtPay: number, taxAmount: number, netSalary: number) {
    console.log(`-----${companyName} - Weekly Salary Receipt-----\n`);
    console.log(`        employee Name - ${empName}`);
    console.log(
        `
        Standard Pay     : ${totStandardPay.toFixed(2)}
        OT Pay           : ${totOtPay.toFixed(2)}
        Deduced Tax(4%)  : -${taxAmount.toFixed(2)}
        ---------------------------
        Net Salary       : ${netSalary.toFixed(2)}
        ---------------------------
        `
    );
}

function generateReceipt(empName: string, hoursDay: number[], stdHours: number) {
    let otHours = 0;
    let totStandardHours = 0;
    hoursDay.forEach(hour => {
        otHours += hour > stdHours ? hour - stdHours : 0;
        totStandardHours += hour > stdHours ? stdHours : hour;
    });

    let totStandardPay = calculateStandardPay(totStandardHours);
    let totOtPay = calculateOtPay(otHours);
    let grossSalary = totStandardPay + totOtPay;
    let taxAmount = calculateTax(grossSalary, salaryTaxThreshold, taxRate);

    let netSalary = calculatePayroll(grossSalary, taxAmount);

    printReceipt(empName, totStandardPay, totOtPay, taxAmount, netSalary)
};

generateReceipt(employeeName, hoursWorkedPerDay, workdayHours);