//Exersice 1
let products = [
    {name: "Laptop", price: 1000, category: "electronics", inStock: true},
    {name: "Phone", price: 600, category: "electronics", inStock: false},
    {name: "Book", price: 20, category: "education", inStock: true},
    {name: "Headphones", price: 150, category: "electronics", inStock: true},
    {name: "Notebook", price: 5, category: "education", inStock: true}
];


//Task 1: get all products inStock
let productsInStock = products.filter(product => product.inStock === true);
console.log("ProductsInStock: ", productsInStock);

// Task 2: create a new array with just products names and prices
let nameAndPriceArrayReturn = products.map(product => {
    return {
        name: product.name,
        price: product.price}
});
console.log("New array with only name And Price with RETURN: ", nameAndPriceArrayReturn)

let nameAndPriceNoReturn = products.map(product => ({
    name: product.name,
    product: product.price
}))
console.log("New array with only name And Price WITHOUT return: ", nameAndPriceNoReturn)


let nameAndPriceFunction = products.map(product => {
    const name = product.name;
    const price = product.price;
    return {name: name, price: price}
});
console.log("New array with only name And Price FUNCTION: ", nameAndPriceFunction)

//Task 3: find first product in education cat.

let firstInEdu = products.filter(product => product.category === "education")
console.log("First product in education category FILTER: ", firstInEdu[0])

let firstEducation = products.find(product => product.category === "education");
console.log("First product in Education category:", firstEducation);

//Task 4: Calculate total value of all products in the Stock

let pricesInStock = productsInStock.map(product => product.price);
let sum = pricesInStock.reduce((acc, price)  => acc + price, 0);
console.log("Calculate total value of all products in the Stock:", sum);

// let sum = products
//     .filter(p => p.inStock)
//     .map(p => p.price)
//     .reduce((acc, price) => acc + price, 0);

//Task 5: Check if there are any product under 50$
let productsUnder50 = products.filter(product => product.price <= 50);
console.log("Check if there are any product under 50$", productsUnder50);

//Exersice 2
// Create a function that uses a switch statement to return different messages based on order status:
//     "pending" → "Order is being processed"
//     "completed" → "Order delivered successfully"
//     "cancelled" → "Order was cancelled"
//     default → "Unknown status"

console.log("\nExersice 2: Else-If\n")
function messageGen(status){
    if (status === "pending"){
        console.log("Order is being processed")
    } else if (status === "completed"){
        console.log("Order delivered successfully")
    } else if (status === "cancelled"){
        console.log("Order was cancelled")
    } else {
        console.log("Unknown status")
    }
}

messageGen("lkdjfs")
messageGen("pending")

console.log("\nExersice 2: Switch-Case\n")

let textCase;
let text = "pending";

switch(text){
    case "pending":
        console.log("Order is being processed")
        break;
    case "completed":
        console.log("Order delivered successfully")
        break;
    case "cancelled":
        console.log("Order was cancelled")
        break;
    default:
        console.log("Unknown status")
}
