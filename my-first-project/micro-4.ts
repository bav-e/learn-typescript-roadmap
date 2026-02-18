// Scenario 4: "The Product Tag"
// The Client's Story: "Hi Developer, welcome to TechNova Online Store. Right now, we are keeping track of our inventory using separate, disorganized variables for every product's name and price. It's getting messy and hard to manage! We need a structured way to bundle a product's details together into a single, organized 'tag' (object) so our system can handle them easily without mixing up the data."
// System Requirements:
// The Blueprint (Interface): Create a TypeScript interface named Product. It must define exactly two properties: a name (which must be a string) and a price (which must be a number).
// Mock Data (The Object): Create a single variable named myProduct and strictly type it using your new Product interface. Assign it some mock data (for example, give it the name "Laptop" and a price of 150000).
// Output: Use console.log() to access the data inside that object and print both the product's name and its price to the screen.
// Your Constraints (Rules):
// Keep it strictly basic: Focus only on creating the Interface and the Object. Do NOT use arrays, loops, functions, or any complex logic for this one. Just structure the data and print it!
interface Product {
    readonly id:string,
    name: string,
    price: number
    description ?:string
}
let myProduct: Product = {
    id:"ID123",
    name: "Laptop",
    price: 100000

};

// myProduct.id = "NEW-ID-123"
console.log(myProduct.name, myProduct.price);