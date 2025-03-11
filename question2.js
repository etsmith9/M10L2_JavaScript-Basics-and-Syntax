
// Task 1: Create a function to handle deposits, Task 2: Create a function to handle withdrawls
function totalBankStatement(initialSavings, withdrawl, deposits) {
    let total = initialSavings; 

    total -= withdrawl; 
    total += deposits; 

//Task 3, Develop a function to check current balance:
    return total; 
}

const initialSavings = 100;
const withdrawl = 200; 
const deposits = 500; 

console.log(`Your total bank statement: ${totalBankStatement(initialSavings, withdrawl, deposits)}`);
