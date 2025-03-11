// Task 1, implement a conditional statement to check if a user is logged in
let loggedIn = true;

let cart = [
    { name: 'Pajamas', price: 10 },
    { name: 'Slippers', price: 20 },
    { name: 'Sound Machine', price: 15 },
    { name: 'Night Light', price: 20 },
    { name: 'Tooth Brush', price: 5 },
    { name: 'Good Night, Good Night Construction Site', price: 10 },
    { name: 'Stuffed Animal', price: 10 }
];

// Task 2: Display the cart based on login status
if (loggedIn) {
    console.log("Hello! Here are the items in your cart:");
    
    let totalCost = 0;


    for (let i = 0; i < cart.length; i++) {
        console.log(`${i + 1}. ${cart[i].name} - $${cart[i].price}`);
        totalCost += cart[i].price;
    }
    
    console.log(`Total cost: $${totalCost}`);
    
    function addItem(name, price) {
        cart.push({ name, price });
        console.log(`${name} has been added to your cart.`);
    }
    
    addItem('Tooth paste', 5);
    
    totalCost = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Updated total cost: $${totalCost}`);

    // tell user to log in to view their cart
} else {
    console.log("Please log in before you can view your cart.");
}


