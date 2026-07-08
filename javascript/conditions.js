//Even number
num = 42;

if (num % 2 === 0) {
    console.log(num + " is an even number.");
    //msg = 'hello';
}
else {
    console.log(num + " is an odd number.");
}


//console.log ( msg );


//Tell the triangle is equilateral or isoceles or scalene
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


//Eligibility
const age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");   
}
else {
    console.log("You are not eligible to vote.");
}


//marks grading
marks=90
if(marks > 90 && marks <= 100)
{
    console.log("A")
}
else if (marks > 70 && marks<= 90)
{
    console.log("B")
}
else if ( marks > 50 && marks <=50)
{
    console.log("C")
}
else if (marks < 50)
{
    console.log("Fail")
}
else
{
    console.log("Unvalid")
}


//leap year
let year = 5052;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}

