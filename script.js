// function abcd(age,name){
//     //parameters
//     console.log(age,name);
// }
// abcd(21,"Aman");
// // arguments

//  REST Parameters:
// function abc(a,b,...c){
//     console.log(a,b,c);
// }
// abc(1,2,3,4,5,6,7)

//  Hoisting
// abc();
// function abc(){
// console.log("Hey");
// }


// k;
// var k = function abc(){
// console.log("Hey");
// } // Gets and undefined output

// Parameters in Js :
// 1.required

// function abcd(a,b,c,d){
//         console.log(a,b,c,d);
//     }

//     abcd()
    
// undefiend output : 1.Agar aapne parameter banaye and arguments value nahi pass ki toh vo parameter becomes undefined, it means required parameter me values bhejni padegi.

// 2.destructured:

// function abcd({name,age}){
    //     console.log(name,age);
    // }

    // abcd({name:"Aman",age:21});

    // make a dictionary / object and then pass the values like this and you can call the values like this

// 3.REST:-

// function abcd(...value){
//         console.log(value);
//     }
//     abcd(1,2,3,4,5,6,7,8,9);

// stores values in Array. 


// 4.Default:- 


// function abcd(a,b,c){
//         console.log(a,b,c);
//     }

//     abcd(1,2);

    // arguments < parameters : o/p - 1,2,undefined.

// if kisi ki value nahi ayi we can add a default value so : 

// function abcd(a=0,b=0,c=0){
//         console.log(a,b,c);
//     }

//     abcd(1,2);


// 2.ARGUMENTS IN JAVA-SCRIPT:[Positional , default , spread]:

// 1.Postional & default mixed:

// function abcd(a=0,b=0,c=0, d=0){
//         console.log(a,b,c,d);
//     }

//     abcd(1,2,3);

// har ek parameter ko argument uske position pe milega , if kuch nahi dala and default value input ki toh vo active ho jayegi.

// 3. spread: to pass all values of array into parameter:

// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }

// let arr = [1,2,3,4]
// abcd(...arr)

// functions: 

// 1.Classic function: a normal function
// 2. Nested function : function ke andarr function

// function abcd(){
//     function ghij(){

//     }
// }

// 3. Scope Chain: 
// let a = 12;
// function abcd(){
//     let b = 13;
//     function defg(){
//         console.log(b);
//     }
// }
// abcd();


// 4: Understanding Immediatly Invoked Function Expression (IIFE) :

// (function(){

// })();

// used to make private variable , eg : balance in a bank account. 

// (function(){
//     let balance = 5000;
// })();



// More Functions is js :- 

// 1. Fat Arrow Function === Arrow function

// let fnc = ()=>{
//     console.log("Hello");
// };
// fnc();

// 2. Anonymous Function:

// ek esa function jiska koi naam naa ho.

// function (){
// };

// 3. Higher Order Function :-

// HOF : 2 Cheezo se defined hota hai : 1. Ek esa function jo return karde ek aur function
                                    //   : 2. Ya toh vo function accept karle ek aur parameter mein 

// function abcd(){
//     return function(){

//     }
// }

// abcd is hihger order function 
// OR
// abcd parameter me accept karle ek function then it will be an higher order function 

// function abcd(a){

// }
// abcd(function(){

// });


// 4. Call back function : 

// function abcd(a){    : Ye hua higher order function

// }
// abcd(function{    : ye hai call back function

// });

// ye jo argument me function bheja usko hi call back kehte hai. 



// 5. First Class Function: 

// first class - hawa 

//  fcf ek concept hai -> function us language mein variable ki tarah use ho sakte hai.

// let a = function (){

// };

// function abcd(a,b){

// }
// abcd(function(){

// },b)

// 6. Pure Functions:
