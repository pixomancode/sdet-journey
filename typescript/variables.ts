// Variables store values that can be reused in the program

const myname: string = "Zubayr"; // A string variable
// myname="Tester"; // This will cause an error because 'myname' is a constant and cannot be reassigned
console.log(myname); // Output: Zubayr


let myage: number = 25; // A number variable
myage = 30; // This is allowed because 'myage' is declared with 'let' and can be reassigned
console.log(myage); // Output: 30

//const a Throws an error because 'a' is declared as a constant and needs to initialize a value at the time of declaration
//a=30;

let a: number; // A number variable declared with 'let' but not initialized
a = 30; // Now we can assign a value to 'a'
const answer = true;
const colour = "blue"; 
console.log(typeof answer); // Output: boolean
console.log(typeof colour); // Output: string
console.log(typeof a); // Output: number


// let z:number =10;
// z="appple";
// This will cause an error because 'z' is declared as a number and cannot be assigned a string value