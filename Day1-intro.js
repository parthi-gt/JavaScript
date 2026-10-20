
// console.log("help me Lord") //String

// console.log(122507) //Number

// console.log(true) //Boolean

// console.log( [10,20, 'PlayWright', false]   ) //Array

// console.log( {name:'Parthiban', age:35, city:'TN'}  ) //Object

//VAR-Function scope

var a=10
//console.log(a)

var a=20
//console.log(a)

a=30
console.log(a)

//LET-BLOCK SCOPE

let b=100
console.log(b)

//let b=200
//console.log(b)   Re-declaration not allowed

b=300
console.log(b) //Re-assignment allowed


//CONST-BLOCK & iMMUTABLE(can not be changed)

const c=500
console.log(c)

// const c=600
// console.log(c) Re-declaration not allowed

// c=700
//console.log(c) //Re-assignment not allowed


//GLOBAL SCOPE

//01
var abc=101
console.log(abc)
{
    var abc=2001
    console.log(abc) //will print both global & Local,101 & 2001
}

//02
var abc=102

{
    var abc=2002
    console.log(abc) //will print local value 2002
}

//03
var abc=103
console.log(abc)
{
    var abc=2003
    //will print Global
}

//04
var abc=104

{
    var abc=2004 //will print only local value because reassignment global value
}
console.log(abc)

//LET

//01
let xyz=301
console.log(xyz)
{
    let xyz=4001
    console.log(xyz) //will print both global & Local,101 & 2001
}


//reassignment and redeclaration not allowed

//02
// var xyz=102

// {
//     var xyz=2002
//     console.log(xyz) //Cannot redeclare block-scoped variable 'xyz'.
// }

// //03
// var xyz=103
// console.log(xyz)
// {
//     var xyz=2003
//     //Cannot redeclare block-scoped variable 'xyz'.
// }

// //04
// var xyz=104

// {
//     var xyz=2004
//     //Cannot redeclare block-scoped variable 'xyz'.
// }
// console.log(xyz)


// // 1. String — text
// let name = "Hello";

// // 2. Number — integers and decimals
// let score = 99;
// let price = 4.99;

// // 3. Boolean — true or false
// let isLoggedIn = true;

// // 4. Undefined — declared but not assigned
// let x;
// console.log(x); // undefined

// // 5. Null — intentionally empty
// let user = null;

// // 6. BigInt — very large integers
// let bigNum = 9007199254740991n;

// // 7. Symbol — unique identifier
// let id = Symbol("id");

// // 8. Object — collections of key-value pairs
// //    (Arrays and Functions are also objects)

// let person = { name: "Bob", age: 30 };  // Object
// let colors = ["red", "green", "blue"];  // Array
// function greet() { return "Hi!"; }      // Function


// let name = "Hello";           // ← No console.log
// let score = 99;               // ← No console.log
// let price = 4.99;             // ← No console.log
// let isLoggedIn = true;        // ← No console.log
// let x;
// console.log(x);               // ← This prints: undefined
// let user = null;              // ← No console.log
// let bigNum = 9007199254740991n;  // ← No console.log
// let id = Symbol("id");        // ← No console.log


let name = "Hello";
console.log(name);

let score = 99;
console.log(score);

let price = 4.99;
console.log(price);

let isLoggedIn = true;
console.log(isLoggedIn);

let x;
console.log(x);

let user = null;
console.log(user);

let bigNum = 9007199254740991n;
console.log(bigNum);

let id = Symbol("id");
console.log(id);

// 8. Object — collections of key-value pairs
//    (Arrays and Functions are also objects)

let person = { name: "Bob", age: 30 };
console.log(person);

let colors = ["red", "green", "blue"];
console.log(colors);

function greet() { return "Hi!"; }
console.log(greet());           // Calls the function and logs result
// OR
console.log(greet);             // Logs the function itself


// to run node Day1-intro.js