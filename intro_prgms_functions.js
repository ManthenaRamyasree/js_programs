//1 print Hello world
function hello() {
  console.log("Hello world!");
  alert("Hello, World!");
  document.write("Hello, World!");
  window.alert("Hello, World!");
}
hello();

//2 Add two numbers
var a = parseInt(prompt("Enter value of a: "));
var b = parseInt(prompt("Enter value of b: "));
function sum() {
  var sum = alert(`sum of given numbers is: ${a + b}`);
  document.write(`sum of given numbers is: ${a + b}`);
}
sum();

//3 find square root
var num = prompt("Enter number: ");
function srqRoot() {
  var res = Math.sqrt(num);
  document.write(`The square root of ${num} is ${res}`);
}
srqRoot();

//4 area of triangle
var b = prompt("Enter base of a triangle: ");
var h = prompt("Enter height of a triangle: ");
function area() {
  var area = (b * h) / 2;
  document.write(`The area of the triangle is ${area}`);
}
area();

//5 swap two variables
var a = prompt("Enter the first variable: ");
var b = prompt("Enter the second variable: ");
function swap() {
  [a, b] = [b, a];
  document.write(`swap of given variables is ${[b, a]} : ${[a, b]}`);
}
swap();

//6 convert kms to miles

var kms = prompt("Enter value in kilometers: ");
//(1km = 0.621371miles)
function mile() {
  var miles = kms * 0.621371;
  document.write(`${kms} kilometers is equal to ${miles} miles.`);
}
mile();

//7 convert celsius to fahreheit

var celsius = prompt("Enter a celsius value: ");
function fahreheit() {
  var fahrenheit = celsius * 1.8 + 32;
  document.write(
    `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit`
  );
}
fahreheit();

//8 prg to work with constants
const a = 20;
const b = "Hello";
function constants() {
  document.write(a);
  document.write(b);
}
constants();

//9 prg to write to console
function cons() {
  console.log("welcome to javascript");
}
cons();
