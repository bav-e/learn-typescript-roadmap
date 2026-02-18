export { }
// Scenario 2: "The Star Rating Counter"
// The Client's Story: "Hi Developer, it's Kamal again from Galaxy Cinemas! After our customers watch a movie, they leave a star rating (from 1 to 5) on our digital kiosk. Right now, I have to look at a long list on the screen and manually add up all the stars using a calculator to see the total engagement a movie received. I need a small script to automatically calculate the total sum of all the star ratings from a list."
// System Requirements:
// Mock Data: Create an array to hold the ratings given by 5 viewers: let ratings: number[] = [5, 4, 5, 3, 5];
// Accumulator: Create a variable named totalStars to keep track of the running total, and set its initial value to 0.
// Calculation: Use a forEach loop (or any basic loop you prefer) to go through each number in the array, one by one, and add it to your totalStars variable.
// Output: Once the loop is finished, print the final result to the console in this exact format: "Total Stars: 22"
// Your Constraints (Rules):
// Keep it basic: Do NOT use functions or objects. (You don't need .reduce() for this one either, just stick to a basic loop as requested!).
// We only need about 5 to 6 lines of pure logic (Variables + Array + Loop).

//-------Mock Data-----
let ratings: number[] = [5, 4, 5, 3, 5];
//------------------------

console.log("Total Stars:",ratings.reduce((acc, star) => acc + star, 0));