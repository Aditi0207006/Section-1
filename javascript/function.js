function add(a,b){
    const c=a+b;
    console.log(c);
}

add(45,546);
//console.log(c);

const avgNums = function(a,b,c){
       avg = (a+b+c) / 3;
      //console.log(avg);
      return avg ;
};

const result = avgNums(56,9,1);
console.log(result);

const factorial = (n) => {
    console.log(n);
    let f=1;

    for(let i = 1; i<=n;i++){
        f=f*1;
    }
    return f;
}

const fact = factorial(7);
console.log(fact);