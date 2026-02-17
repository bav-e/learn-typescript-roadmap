interface Customer {
    name: string,
    price: number[]
}
let allCustomers: Customer[] = [
    { name: "Amal", price: [200, 50, 300, 100] },
    { name: "Kamal", price: [1200, 100, 40] },
    { name: "Sunil", price: [40, 50, 60, 70, 80] },
    { name: "Vimal", price: [500, 50, 100, 500] },
    { name: "Ranmal", price: [250, 40] },
    { name: "Pawan", price: [1000, 100, 50] },
    { name: "Bimal", price: [750, 50, 100, 50] }
];
const vipThreshold = 1000;

const findVIPCustomers = (customersList: Customer[]) => {
    customersList.forEach(customer => {
        let totalBill = customer.price.reduce((ac, price) => ac + price, 0);

        if (totalBill > vipThreshold) {
            console.log(`⭐ VIP Customer Found: ${customer.name} - Total Bill: Rs.${totalBill}`);
        }
    });
};


findVIPCustomers(allCustomers);