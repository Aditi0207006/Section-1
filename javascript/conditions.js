num = 45;

if (num % 2 === 0) {
    console.log(num + " is an even number.");
    //msg = 'hello';
}
else {
    console.log(num + " is an odd number.");
}



//console.log ( msg );

const side1 = 30;
const side2 = 40;
const side3 = 50;

if (side1 === side2 && side2 === side3) {
    console.log("The triangle is equilateral.");
}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("The triangle is isosceles.");
}
else {
    console.log("The triangle is scalene.");
}

const age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");   
}
else {
    console.log("You are not eligible to vote.");
}