//this function returns the sum of input digits
function sumOfDigits(n: number): number {
    // base case: if the input is not a number or a negative number or not an integer
    // used throwing and handling exceptions
    if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
        throw new Error(`Invalid input (${n}): Input must be a positive whole number!`);
    };

    // base case: if the input n is less than 10 since it's only a single digit number.
    if (n < 10) {
        return n;
    }
    
    // the formula separates the digits from each other over and over and add them all together. 
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Counting the Digits of a Number: A recursive function that counts
// how many digits are there in an input.

// countDigits function
function countDigits(n: number): number {
    // base case: if n is not a number or less than zero or not an integer
    // used throwing and handling exceptions
    if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
        throw new Error(`Invalid input (${n}): Input must be a positive whole number!`)
    }

    // add base cade: if n is less than 10, return 1
    if (n < 10) {
        return 1;
    }

    // if n is greater than or equal to 10, return recursive call
    return 1 + countDigits(Math.floor(n / 10));
}

// call and print the function
// console.log(sumOfDigits(-5)); // testing the error handling
console.log(sumOfDigits(555)); 
console.log(sumOfDigits(1235523));

// console.log(countDigits(-60)); // testing the error handling
console.log(countDigits(2000));
console.log(countDigits(25151995));




