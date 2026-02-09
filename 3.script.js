//1. Pure function:

// function abcd(val){
//     console.log(val+2);
// }

// abcd(12);
// abcd(12);
// abcd(12);
// abcd(12);

// 2.Impure Function:

// function abcd(val){
//     console.log(Math.random()+val);
// }

// abcd(12);
// abcd(12);
// abcd(12);
// abcd(12);

// 3.Scope in JS:
// 3.1- global scope 
// 3.2- functional scope 

// let a = 12;
// function abcd(){
//     let b = 14;
//     console.log(a);
//     console.log(b);
// }
// abcd()
// console.log(a)
// console.log(b)

// 4.Closures: 

// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }
