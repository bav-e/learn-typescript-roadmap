//-------Scenario------
//There is a cinema hall named Savoy Cinema and you need to build basic billing system 
//from only using variables, arrays, functions, loops and conditions.
// Show Welcome message, tiket prices first. 
// Calculate the total price customer need to pay,
// 10% discount if total price is greater than 2000 and all customers get 5% tax.
// Finnaly print receipt with subtotal, discount, tax and final bill price with thank you message ending.
// --------------------

// ------mock data-----
let customerName: string = "Kasun";
let purchasedTickets: number[] = [1000, 1000, 500];
// --------------------

const taxRate: number = 0.05;
const discountRate: number = 0.1;

const hallName: string = "Savoy Cinema";
let ticketPrices: number[] = [500, 1000];
//----------------------
function calculatePrice(prices: number[]): number {
    let total = 0;
    prices.forEach(price => {
        total = total + price;
    });
    return total;

}
function calculateDiscount(subTotal: number): number {
    if (subTotal > 2000) {
        return subTotal * discountRate;
    } else {
        return 0;
    }
}
function calculateTax(price: number): number {
    return price * taxRate
}
// --------------------------
//--------main---------------
function makeBill() {
    let subTotal = calculatePrice(purchasedTickets);
    let discountAmount = calculateDiscount(subTotal);

    let discountedPrice = subTotal - discountAmount;

    let taxAmount = calculateTax(discountedPrice);
    let finalPrice = discountedPrice + taxAmount;

    console.log(`-----Welcome to ${hallName}! ${customerName}-----`);
    console.log(`tiket Prices are:`);
    ticketPrices.forEach((price, i) => {
        console.log(` ${i + 1}. ${price}`);
    });
    console.log(`You have purchased ${purchasedTickets.length} tikets`);
    console.log(`
    +----------------------------------+
    |    Sub Total    |    ${subTotal}        |
    |    Discount     |   -${discountAmount}         |
    |    tax          |    ${taxAmount}       | 
    |    Price        |    Rs.${finalPrice}   |
    +----------------------------------+
        `);
    console.log(`-----Thank You!-----`);
}
// ---------------------

makeBill()
