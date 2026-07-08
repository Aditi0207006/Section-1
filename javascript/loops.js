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

