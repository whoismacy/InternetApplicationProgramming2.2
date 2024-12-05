// Function to calculate the 

function factorial(num){
    // Base case: factorial of 0 or 1 is always 1
    if (num == 0 || num == 1 ) return 1;

    // Recursive case: multiply the nuber by the factorial of (num - 1)
    return num * factorial(num - 1);

}

// Exaple usahe: Calculate the factorial of 5

console.log(factorial(9));// Output: 120
