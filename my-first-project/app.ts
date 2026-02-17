// export {}

interface Customer {
    name: string;
    prices: number[];
}

let allCustomers: Customer[] = [
    {
        name: "Amal",
        prices: [100, 40, 200]
    },
    {
        name: "Kamal",
        prices: [50, 400, 100]
    },
    {
        name: "Nimal",
        prices: [1000, 2000]
    }
];

allCustomers.forEach((cust, index) => {
    console.log(`Customer ${index + 1}: ${cust.name} | Items bought: ${cust.prices.length}`);
});

// const shopName: string = "Myshop";
// let isPaid: boolean = true;
// let totalBill = 1500; //it is not nessesary to add type in variables
// let itemCount: number = 10
// const taxRate: number = 0.15;

// function sayWelcome(name: any) {
//     console.log("Welcome to ", shopName, "|", name);
// }
// function sayGoodbye(name: string) {
//     console.log("Good bye ", name);
// }
// function calculateFinalPrice(price: number[], tax: number): number {
//     let finalPrice: number = price[1] + price[1] * tax;
//     return finalPrice;
// }

// sayWelcome(customerName);

// itemPrice.forEach((price, i) => {//new method
//     console.log("Price:", i + 1, "-", price);
// });

// if (totalBill > 1500) {
//     console.log("Price is Rs.", calculateFinalPrice(itemPrice,taxRate) * itemCount - 150);
// } else {
//     console.log("price is Rs.", calculateFinalPrice(itemPrice,taxRate) * itemCount, "[No Discount]");
// }

// sayGoodbye(customerName);