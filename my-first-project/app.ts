const shopName: string = "Myshop";
let itemPrice: number = 150.0;
let isPaid: boolean = true;

const taxRate: number = 0.15;
// let taxAmount: number = itemPrice * taxRate;
let finalPrice: number = itemPrice + (itemPrice * taxRate);

console.log("Welcome to ", shopName);
console.log("price is Rs.", finalPrice);
