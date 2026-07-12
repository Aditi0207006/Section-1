// for (let i = 0; i <=10; i++) {
//     console.log(i);
// };

// // WAP to print all odd numbers in range of 10 - 60

// for (let i = 10; i <= 60; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// let a = 0;
// while (a < 20) {
//     console.log(a);
//     a++;
// };


// let b = 20;
// do{
//     console.log(b);
//     b++;    
// }while(b < 10);


// const nums = [34,56,46,12,78,98]
// for (let i of nums)
// {
//     console.log(i);
// }


// let a=10;
// while (a<20){
//     console.log(a);
//     a++;
// }
// console.log(a);


// let b=10;
// do{
//     console.log(b);
//     b++;
// }while(b>20)

//print all even numbers in range of 10-35
for(let i=10 ; i<=35 ; i++)
{
    if(i%2 === 0){
        console.log(i);
    }
}


//print first 10 fibonacci series elements 
let a = 0, b = 1;
for (let i = 1; i <= 10; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}


//WAP to reverse a number
let num = 12345;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed Number:", reverse);


//WAP to check if the number is palindrome
let number = 121;
let original = number;
let r = 0;

while (number > 0) {
    let digit = number % 10;
    r = r * 10 + digit;
    number = Math.floor(number / 10);
}

if (original === r) {
    console.log(original + " is a Palindrome");
} else {
    console.log(original + " is Not a Palindrome");
}


//WAP to check if the number is Armstrong
let n = 153;
let o= n;
let sum = 0;

while (n > 0) {
    let digit = n % 10;
    sum = sum + (digit ** 3);
    n = Math.floor(n / 10);
}
if (sum === o) {
    console.log(o + " is an Armstrong Number");
} else {
    console.log(o + " is Not an Armstrong Number");
}