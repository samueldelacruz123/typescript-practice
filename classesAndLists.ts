// This is a Bookstore Inventory System where I uses the classes principles in carrying out
// books and processing them. 
class Book {
    // this declares what variables and types are we using
    title: string;
    author: string;
    price: number;

    // this constructs the variables
    constructor(t: string, a: string, p: number) {
        this.title = t;
        this.author = a;
        this.price = p;
    }

    // this prints the values of the variables
    getSummary () {
       return `${this.title} by ${this.author} costs ${this.price}`;
    }
}

// we test the class by creating instances
const bookOne = new Book('Batang Bisaya', 'Samuel Dela Cruz', 10);
const bookTwo = new Book('Samahang Labanan', 'Samuel Dela Cruz', 20);

// created an array called inventory
let inventory: Book[] = [];

// inserted the instances in the array
inventory.push(bookOne);
inventory.push(bookTwo);

// updated bookOne's price
bookOne.price = 50;

// looped through each of the books to print the output
inventory.forEach((book: Book) => {
    console.log(book.getSummary());
});