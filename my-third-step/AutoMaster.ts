// Scenario: "AutoMaster - Parts & Service Management System"
// The Client's Story:
// "Hello Engineer, I'm Sunil. I own AutoMaster, a busy garage and auto parts store. We stock thousands of items and serve many customers daily. I’m struggling to keep track of everything manually using notebooks. I need a robust system to handle my inventory, search for data, and generate bills for my customers."
// 1. Smart Inventory Management
// We stock two types of items:
// Unit-based items: Like Spark Plugs or Tires. These are sold in whole numbers (Quantity is a number).
// Volume-based items: Like Engine Oil or Coolant. These are measured in liters (Quantity is a string, e.g., "2.5L").
// Requirement: Every part must have a Name, a Unique ID (which must be readonly), a Price, and a Quantity (which can be either a number or a string).
// 2. The Universal Search Engine (Generics)
// My system doesn't just store Parts; it also stores Employee details (Name and Role). I don't want to write ten different search functions. I need one Generic Search Function.
// Input: It should take an Array of any type (Parts or Employees) and a Search Term (string).
// Logic: It should return the item if the Name matches the search term.
// 3. Dynamic Billing & Service Logic
// When a customer checks out, the system needs to calculate the bill based on their category:
// Regular Customers: Pay the full price.
// VIP Customers: Get a 12% discount on the total bill.
// Service Charge: If a "Service" was performed (instead of just buying parts), a fixed fee of Rs. 3000 must be added to the final total.
// 4. Stock Alert Report
// I need to know when I'm running out of items.
// Logic: Generate a "Low Stock Report" that lists all items where the quantity is less than 5.
//Hypothesis:
// 1. Search Logic: The searchAll function assumes that search keywords for IDs are exact number matches, while string-based searches for names are case-insensitive and treat the input as a direct search term or partial match.
// 2. Quantity Normalization: For volume-based items (e.g., "5.5L"), it is assumed that the string always begins with a numeric value.
// 3. Customer Status: The billing logic assumes that the "VIP" status is case-sensitive and strictly matches the string "VIP". Any other value is treated as a "Regular" customer.
// 4. Single-Item Selection: When generating a bill, it is assumed that the result passed into generateBill is a pre-filtered array containing the specific item the customer intends to purchase.
// 5. Data Consistency: It is assumed that all input data for the inventory, employees, and customers strictly adheres to their respective TypeScript interfaces.
// import { Part, Employee, Customer, inventory, employees, customers } from "./data";

//------mock Data---------
//interfaces
interface Part {
    readonly id: number;
    name: string;
    price: number;
    quantity: number | string;
}
interface MappedPart extends Omit<Part, 'quantity'> {
    quantity: number
}
interface Employee {
    readonly id: number;
    name: string;
    role: string;
    salary: number;
}
interface Customer {
    name: string;
    type: "Regular" | "VIP";
}
interface GenerateBill {
    result: MappedPart[];
    customer: Customer[];
    amount: number;
    discount: number;
    service: boolean;
    charge: number;
}
interface BillResult {
    price: number;
    isVip: boolean;
    subTotal: number;
    discountedTotal: number;
    netTotal: number;
    itemName: string;
}
// data
const inventory: Part[] = [
    { id: 101, name: "Spark Plug", price: 1200, quantity: 20 },
    { id: 102, name: "Brake Pads", price: 4500, quantity: 4 },//
    { id: 103, name: "Engine Oil", price: 8500, quantity: "8L" },
    { id: 104, name: "Tire - Michelin", price: 25000, quantity: 8 },
    { id: 105, name: "Coolant", price: 2500, quantity: "5.5L" },
    { id: 106, name: "Wiper Blade", price: 950, quantity: 12 },
    { id: 107, name: "Brake Fluid", price: 1200, quantity: "0.5L" },//
    { id: 108, name: "Car Battery", price: 32000, quantity: 3 },//
    { id: 109, name: "Air Filter", price: 1800, quantity: 15 },
    { id: 110, name: "Transmission Fluid", price: 5500, quantity: "5L" }
];
const employees: Employee[] = [
    { id: 1, name: "Sunil", role: "Manager", salary: 85000 },
    { id: 2, name: "Nimal", role: "Senior Mechanic", salary: 65000 },
    { id: 3, name: "Kamal", role: "Junior Mechanic", salary: 45000 },
    { id: 4, name: "Saman", role: "Sales", salary: 40000 },
    { id: 5, name: "Perera", role: "Helper", salary: 30000 }
];
const customers: Customer[] = [
    { name: "Amal", type: "Regular" },
    { name: "Bimal", type: "VIP" },
    { name: "Sunimal", type: "Regular" },
    { name: "Ruwan", type: "VIP" },
    { name: "Kasun", type: "Regular" }
];
//------------------------
const companyName = "Auto Master"
const discountRate = 0.12;
const serviceCharge = 3000;
const orderAmount = 0.1;

const searchAll = <T extends { id?: number; name?: string }>(searchArr: T[], keyWord: number | string): T[] => {
    if (typeof keyWord === "number") {
        return searchArr.filter(i => i.id === keyWord);
    }
    const searchRegex = new RegExp(keyWord, "i");
    return searchArr.filter(i => searchRegex.test(i.name || ""));
}

const mapData = <T extends object>(filterArr: T[]) => {
    if (filterArr.length === 0) { return [] };
    return filterArr.map(item => {
        if (!("quantity" in item)) { return item }
        const qty = item.quantity;
        return {
            ...item,
            quantity: typeof qty === "string" ? parseFloat(qty) || 0 : qty
        }
    });
}

const checkStock = (invArr: MappedPart[], threashold = 5) => {
    return invArr.filter(invItem => {
        return invItem.quantity < threashold
    });
}
const validateOrderAmount = (result: MappedPart[], amount: number) => {
    return result.some(item => item.quantity >= amount);
};

const generateBill = (opts: GenerateBill): string | BillResult => {

    const checkVip = (customer: Customer[]) => customer.find(cus => cus.type)?.type === "VIP";
    const calcSubTotal = (p: number, amt: number) => p * amt;
    const calcNetTotal = (sv: boolean, cg: number, dtot: number) => sv ? dtot + cg : dtot;
    const calcDisountedTot = (status: boolean, subtot: number, discount: number) => status ? subtot * (1 - discount) : subtot;
    const foundItem = opts.result.find(item => item.price)

    if (!(foundItem)) {
        return "No Item Found"
    }
    const price = foundItem?.price
    const isVip = checkVip(opts.customer)
    const subTotal = calcSubTotal(price, opts.amount)
    const discountedTotal = calcDisountedTot(isVip, subTotal, opts.discount)
    const netTotal = calcNetTotal(opts.service, opts.charge, discountedTotal)
    return {
        price,
        isVip,
        subTotal,
        discountedTotal,
        netTotal,
        itemName: foundItem.name
    };
}

const printBill = (company: string, lowStock: MappedPart[], name: Customer[], bill: number | string | BillResult) => {
    console.log(`=================================`)
    console.log(`-------${company}-Invoice-------`)
    console.log(`=================================`)
    if (typeof bill === "object" && bill !== null) {
        console.log(`Name:${name[0]?.name || "N/A"}\nStatus:${bill.isVip ? "VIP (12% Discount Applied)" : "Regular"}`)
        console.log(`=================================`)
        console.log(`
Item           : ${bill.itemName}
---------------------------------
Sub-Total      : LKR ${bill.subTotal.toLocaleString()}
Discounted     : LKR ${bill.discountedTotal.toLocaleString()}
---------------------------------
NET TOTAL      : LKR ${bill.netTotal.toLocaleString()}
            `)
        console.log(`=================================\n`)
    }
    console.log("Low Stock Items")
    console.table(lowStock)

}
const main = () => {
    const searchResult = searchAll(inventory, 104);
    const mappedResult = mapData(searchResult) as MappedPart[];
    const lowStockResult = checkStock(mapData(inventory) as MappedPart[]);

    const isAvailable = validateOrderAmount(mappedResult, orderAmount);

    const searchCustomer = searchAll(customers, "Bimal");

    const billOptions: GenerateBill = {
        result: mappedResult,
        customer: searchCustomer,
        amount: orderAmount,
        discount: discountRate,
        service: true,
        charge: serviceCharge
    }
    const bill = isAvailable ? generateBill(billOptions) : 0

    printBill(companyName, lowStockResult, searchCustomer, bill)
}
main()