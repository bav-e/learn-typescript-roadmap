const shopName: string = "Myshop";
let itemPrice = [100, 150, 500, 1000];
let isPaid: boolean = true;
let totalBill = 1500; //it is not nessesary to add type in variables
let itemCount: number = 10
const taxRate: number = 0.15;

let finalPrice: number = itemPrice[1] + itemPrice[1] * taxRate;

console.log("Welcome to ", shopName);

for (let i = 0; i < itemPrice.length; i++) {//old method
    console.log(i + 1, itemPrice[i]);
}

itemPrice.forEach((price, i)=>{
    console.log(i+1,price);
});


if (totalBill > 1500) {
    console.log("Price is Rs.", finalPrice * itemCount - 150);
} else {
    console.log("price is Rs.", finalPrice * itemCount, "[No Discount]");
}