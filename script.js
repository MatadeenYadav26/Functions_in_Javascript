// Questions

// Q1: Write a function say hello , which prints hello:
// function sayhello(){
//     console.log("Hello");
// }
// sayhello()

// Q2: Create a function add(a,b) that returns sum value:
// function add(a,b){
//     return(a+b);
// }
// let a = add(5,2);
// console.log(a);

// Q3: Write a function with default parameter named "Guest" that prints "" Hi<name> ":

// function abc(name="Guest"){
//     console.log(`Hi,${name}`);
// }
// abc()
// abc("Aman")

// Q4: Use rest parameter to make a function that adds unlimited numbers
// function addunlimited(...numbers){
//    console.log(numbers); 
// }
// addunlimited(1,2,3,4,5)

// function addunlimited(...numbers){
//     let sum = 0;
// numbers.forEach(function(val){
//     sum+= val;
// });
// console.log(sum);
// }
// addunlimited(1,2,3,4,5)

// Method 2 : forloops : 

// function addunlimited(...numbers){
//     let sum = 0;
// for(let i = 0 ;i<numbers.length;i++){
//     sum = sum + numbers[i];
// }
// console.log(sum);
// }
// addunlimited(1,2,3,4,5)

// Method-3:

// function addunlimited(...numbers){
//   let ans =  numbers.reduce(function(acc,val){
//     return acc+val;
//    },0);
//    console.log(ans);    
// }
// addunlimited(1,2,3,4,5)

// Q5: Create IIFE that prints "I run instantly"

// (function(){
//     console.log("I run instantly"); // IIFE k andar jo v likhdoge vo chal jayega
// })();

// Q6: Make a function where inner one prints variable from outer once:

// function outer(){
//     let a = 12;
//         function inner(){
//             console.log(a);
//     }
//     inner();
// }

// outer()

// Q7: Create an array of 5 fruits , add one at the end and remove 1 from front:

// let arr = ["a","b",'c','d','e']
// arr.push("f");
// console.log(arr);
// arr.unshift("k");
// console.log(arr);
// arr.shift();
// console.log(arr);

// Q8: Use a forloop to print all values of array:

// let arr = ["a",'b','c','d']

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// Q9: Create an object person with keys name , age and city, print eac key's value:

// let obj = 
//      {name:'Aman',
//     Age:21,
//     city:"Surat"}

// Method-1
// console.log(person);
// console.log(person.name);
// console.log(person.Age);
// console.log(person.city);

// method-2:
// for(let key in person){
//     console.log(key);
// }


// for(let key in obj){
//     console.log(obj[key]);
// }


// Que-10: Use setTimeout() to log "Time's Up!" after 2 seconds:

// setTimeout(function(){
//     console.log("Time's Up!");
// },2000);

