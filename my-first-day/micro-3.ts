export { }
// Scenario 3: "The Average Rating Calculator"
// The Client's Story: "Hello again! Kamal from Galaxy Cinemas here. Thanks to your previous script, we can now see the total stars. However, our marketing team needs the Average Star Rating to put on our movie posters. Calculating the average (Total Stars divided by the Number of Ratings) manually for hundreds of reviews is exhausting. Can you upgrade our system by building a reusable tool to calculate this automatically?"
// System Requirements:
// Function Setup: Create a function named getAverageRating.
// Parameters & Return Type: The function must accept a parameter named ratingsArray (which should be an array of numbers: number[]). It must also strictly define its return type as a number.
// The Core Logic: 1. Inside the function, calculate the total sum of all the numbers in the array (You can use the .reduce() method you learned earlier!).
// 2. Calculate the average by dividing that total sum by the number of items in the array (using ratingsArray.length).
// 3. return this final average value.
// Execution & Output: Call your function and pass our mock data [5, 4, 5, 3, 5] into it. Capture the returned value and print it to the console in this exact format: "Average Rating is: 4.4"
// Your Constraints (Rules):
// Strictly pure function: Do NOT use console.log() inside the function itself. The function's only job is to do the math and return the answer. You must do the printing (logging) outside of the function.

//-------Mock Data-----
let ratings: number[] = [5, 4, 5, 3, 5];
//------------------------

const getAverageRating = (ratingsArray: number[]): number => ratingsArray.reduce((acc, star) => acc + star, 0) / ratingsArray.length;

console.log(getAverageRating(ratings));