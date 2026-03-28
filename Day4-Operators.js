//23-12-2025
//ARITHMETIC OPERATORS
var a = 10
var b = 20

var c = a + b
console.log( c )  //30

var c = a - b // +10 - 20 = -10
console.log( c ) //-10

var c = a * b
console.log( c ) //200

var c = a / b
console.log( c )  //Quotient--in top  //0.5

var c = b / a //20 % 10 = 0
console.log( 20 / 10 ) //Reminder // 2

var c = a % b //10 % 20 = 10
console.log( c ) //Reminder //10

var c = b % a //20 % 10 = 0
console.log( 20 % 10 ) //Reminder //0

//POWER ROOT
var c = a ** b  //10 * 10 * 10 * 10 * upto 20 times
console.log( c ) //100000000000000000000

//ASSIGNMENT OPERATORS

var a = 20
var b = 10

a = a + b//a = 20 + 10 = 30
console.log( a )

a = a - b// a = 30 - 10 = 20
console. log( a )

a = a * b // a = 20 * 10 = 200
console.log( a )

a/=b // a = 200 / 10 = 20
console.log( a )

a%=b // a = 20 % 10 = 0
console.log( a )

a**=b // a = 0 ** 10 = 0
console.log( a )

let e = 20
let d = 10

e = e + d//e = 20 + 10 = 30
console.log( e )

e = e - d// e = 30 - 10 = 20
console. log( e )

e = e * d // e = 20 * 10 = 200
console.log( e )

e/=d // e = 200 / 10 = 20
console.log( e )

e%=d // e = 20 % 10 = 0
console.log( e )

e**=d // e = 0 ** 10 = 0
console.log( e )

//const

let x = 20
let y = 10

x = x + y//x = 20 + 10 = 30
console.log( x )

x = x - y// x = 30 - 10 = 20
console. log( x )
x = x * y // x = 20 * 10 = 200
console.log( x )

x/=y // x = 200 / 10 = 20
console.log( x )

x%=y // x = 20 % 10 = 0
console.log( x )

x**=y // x = 0 ** 10 = 0
console.log( x )


//COMPARISON - return type (BOOLEAN)

var a = 100
var b = '101'
var c = 'hello'

console.log( a == b ) //It will check only content value
console.log( a === b ) //It will check content value and data type both //It will check strictly typeof value ( number === string)
console. log( a < b ) //Less Than Or
console. log( a > b ) //greater Than Or
console.log( a <= b ) //Less Than Or EqualTo
console.log( a >= b ) //Greater Than Or EqualTo
console.log( a != b )   //Not Equal To
console.log( a !== b ) //Not Equal To (check both content value and data type)
console.log( typeof a , typeof b ) //number string string
console.log( typeof a , typeof b , typeof c ) //number string string
console.log( a =b ) //false
console.log( b =a ) //true


//LOGICAL OPERATORS - return type (BOOLEAN)
//AND &&, || OR , ! NOT

let age = 18
let month = 2

if( age == 18 ){
console.log( "Eligible" )
}
else{
console.log( "Not Eligible" )
}


if( age == 31 ){
console.log( "Eligible" )
}
else{
console.log( "Not Eligible" )
}


if( age == 18 && month===2 ){
console.log( "Successfully Added" )
}
else{
console.log( "Try again" )
}

if( age == 18 && month==2 ){
console.log( "Successfully Added" )
}
else{
console.log( "Try again" )
}

// AND  --> it will check both conditions are true then only it will execute the if block
if( age === '18' && month == 2 ){
console.log( "Successfully Added" )
}
else{
console.log( "Sorry Try Again" )
}



//OR--> it will check any one condition is true it will execute the if block
if( age === '18' || month == 2 ){
console.log( "Successfully Added")
}
else{
console.log( "Sorry Try Again" )
}


//NOT --> it will reverse the condition

let m = null
if( m ) console.log( "This is A value")
else console.log("This is not A value")

let n
if( n ) console.log( "This is A value")
else console.log("This is not A value")

let p = null
if( !p ) console.log( "This is A value")
else console.log("This is not A value")

let o = 31
if( !o ) console.log( "This is A value",o)
else console.log("This is not A value",o)


// //TERNARY? False (0) , True (1)

// let abc = 35
// abc = ( abc == 35 ) ? true : false
// console.log( abc )
// abc = ( abc == 35 && abc === '35' || abc == 0 ) ? true : false
// console.log( abc )



//TERNARY ? False (0) , True (1)
//? represents IF
//: represents ELSE

let abc = 23
let msc = ( abc == 23 ) ? true : false
console.log( msc )
// number 23 == number 23 ? true : false => true
abc = ( abc == 23 && abc === '23' || abc == 1 ) ? true : false
console.log( abc )
//(number 23 == 23 && number 23) === string 23 ) ? true : false
// ( false (0) || number 23 == 1 ) => false

//6 UNARY
//POST Increment / Decrement

var a = 100
console.log( a++ )
console.log( a )
console.log( a )
console.log( a-- )
console.log( a )

//PRE - Increment /Decrement

var b = 200

console.log( -- b )
console. log( b)
console.log( ++ b )
console. log( b)


function greet(id , name , age ){
if( age == 18){
console.log( `${id++} : ${name} and ${age}` )
}
else{
console.log( `This ${id} id is not Eligible` )
}
}
greet( 1 , 'tej' , 19) 

greet(2 , 'Varun' , 17)

greet(3 , 'Arjun' , 18)


//let greeting;

if (100 < 200) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting)


const hour = new Date().getHours(); 
let greetings;

if (hour < 18) {
  greetings = "Good day";
} else {
  greetings = "Good evening";
}
console.log(greetings)