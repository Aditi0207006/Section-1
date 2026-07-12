const nums = [2,4,6,8,9,3,5];

for(let i=0 ; i < nums.length ; i++ )
{
    console.log(nums[i]);
}
console.log('------for of loop------');
for (let n of nums){
    console.log(n);
}
console.log('----for each function----');
//call back function
nums.forEach( (a) => {console.log(a);});