export {}
const shopName: string = "Myshop";
let itemPrice = [100, 150, 500, 1000];
let isPaid: boolean = true;
let totalBill = 1500; //it is not nessesary to add type in variables
let itemCount: number = 10
const taxRate: number = 0.15;
let customerName = "Amal";

function sayWelcome(name: any) {
    console.log("Welcome to ", shopName, "|", name);
}
function sayGoodbye(name: string) {
    console.log("Good bye ", name);
}
function calculateFinalPrice(price: number[], tax:number): number {
    let finalPrice: number = price[1] + price[1] * tax;
    return finalPrice;
}

sayWelcome(customerName);

itemPrice.forEach((price, i) => {//new method
    console.log("Price:", i + 1, "-", price);
});

if (totalBill > 1500) {
    console.log("Price is Rs.", calculateFinalPrice(itemPrice,taxRate) * itemCount - 150);
} else {
    console.log("price is Rs.", calculateFinalPrice(itemPrice,taxRate) * itemCount, "[No Discount]");
}

sayGoodbye(customerName);