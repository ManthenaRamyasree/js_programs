//1 print Hello world
console.log("Hello world!");
alert("Hello, World!");
document.write("Hello, World!");
window.alert("Hello, World!");

//2 Add two numbers
var a = parseInt(prompt("Enter value of a: "));
var b = parseInt(prompt("Enter value of b: "));
var sum = alert(`sum of given numbers is: ${a + b}`);

//3 find square root
var num = prompt("Enter number: ");
var res = Math.sqrt(num);
document.write(`The square root of ${num} is ${res}`);

//4 area of triangle
var b = prompt("Enter base of a triangle: ");
var h = prompt("Enter height of a triangle: ");
var area = (b * h) / 2;
document.write(`The area of the triangle is ${area}`);

//5 swap two variables
var a = prompt("Enter the first variable: ");
var b = prompt("Enter the second variable: ");
[a, b] = [b, a];
document.write(`swap of given variables is ${[b, a]} : ${[a, b]}`);

//6 convert kms to miles

var kms = prompt("Enter value in kilometers: ");
//(1km = 0.621371miles)
var miles = kms * 0.621371;
document.write(`${kms} kilometers is equal to ${miles} miles.`);

//7 convert celsius to fahreheit

var celsius = prompt("Enter a celsius value: ");
var fahrenheit = celsius * 1.8 + 32;
document.write(
  `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit`
);

//8 prg to work with constants
const a = 20;
console.log(a);

const b = "Hello";
console.log(b);

//9 prg to write to console
console.log("welcome to javascript");
