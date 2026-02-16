const shopName: string = "Myshop";
let itemPrice: number = 150;
let isPaid: boolean = true;
let totalBill = 1500; //it is not nessesary to add type in variables
let itemCount:number = 10
const taxRate: number = 0.15;
// let taxAmount: number = itemPrice * taxRate;
let finalPrice: number = itemPrice + itemPrice * taxRate;

console.log("Welcome to ", shopName);

if (totalBill > 1500) {
    console.log("Price is Rs.", finalPrice * itemCount - 150);
} else {
    console.log("price is Rs.", finalPrice * itemCount, "[No Discount]");
}
