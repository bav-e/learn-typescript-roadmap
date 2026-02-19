// Scenario: "The Universal Magic Box"
// The Client's Story: "Hi Developer, it's the inventory manager from TechNova again. We are building a new digital storage system. Right now, we have to write different functions to pack strings (like serial numbers), numbers (like prices), and objects (like product details). It's too repetitive! I need a single, universal 'Magic Box' function that can safely wrap any type of data we give it into a standardized package, without losing its TypeScript type safety."
// System Requirements:
// The Generic Function: Create an arrow function named wrapInBox<T>.
// The Parameter: It should accept a single parameter named item of type T.
// The Output (Return): The function must return a new object containing that item. The returned object must have exactly this shape: { content: item }.
// Execution - Box 1: Call the function and pass a string (e.g., "MacBook Pro") into it. Save the result in a variable called stringBox.
// Execution - Box 2: Call the function again, but this time pass a number (e.g., 450000). Save the result in a variable called numberBox.
// Display: Use console.log() to print both stringBox and numberBox to the screen.
// Your Constraints (Rules):
// Strictly Generic: You must use the <T> generic syntax. Do NOT use the any keyword. Let TypeScript's magic figure out the types automatically when you call the function!

interface Wrap<T> {
    content: T;
}

const wrapInBox = <T,>(item: T) => ({ content: item });

console.log(wrapInBox<number>(10))
console.log(wrapInBox<string>("Kamal"))