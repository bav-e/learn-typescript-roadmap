export{}
// Scenario 1: "The Cinema Ticket Checker"
// The Client's Story:
// "Hi Developer, I'm Kamal, the manager of Galaxy Cinemas. We are currently showing a new movie that is strictly restricted to adults (18+). Right now, my staff is manually calculating ages from ID cards, and sometimes they make mistakes when it's crowded. I need a tiny, simple script to check a customer's age and immediately tell us if they are allowed to enter the theater or not."
// System Requirements:
// Age Setup: Create a variable named customerAge and assign any age to it (e.g., 16, 20, etc.).
// Access Logic: Use a basic if / else statement to check the age.
// If the customer's age is exactly 18 or older (>= 18), the system must print: "You can watch the movie!"
// If the customer's age is below 18, the system must print: "Sorry, you are too young!"
// Your Constraints (Rules):
// Keep it basic: Do NOT use functions, arrays, or objects.
// We only need about 5 to 6 lines of pure logic (Variables + If/Else).
// Take your time, write down this simple code, and share it with me when you are ready! Let's see how strong your basics are.

//-------Mock Data-----
let customerAge: number = 16;
// ----------------------
const AGE_OF_ADULT = 18;

console.log(customerAge < AGE_OF_ADULT ? "Sorry, you are too young!" : "You can watch the movie!");