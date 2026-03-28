////PRIMITIVE - IMMUTABLE (CANNOT BE CHANGE) - STACK MEMORY

//NUMBER

var a1 = 122507
console.log( typeof a1 )

var a2 = "Javascript"
console.log( typeof a2 )

var a3 = true
console.log( typeof a3 );

let a4 = null
console.log( typeof a4 )

let a5
console.log( typeof a5 )

let a6 = 'hello' + 5
console. log( typeof a6 )

var a7 = 122507
console.log( typeof a7 , a7 )

var a8 = "Javascript"
console.log( typeof a8 , a8 )

var a9 = true
console.log( typeof a9 , a9 );

let a10 = null
console.log( typeof a10 , a10 )

let a11
console.log( typeof a11 , a11 )

let a12 = 'hello' + 5
console. log( typeof a12 ,a12 )

let a13 = 'hello' * 5
console. log( typeof a13 ,a13 )

//Const

const b1 = 122507
console.log( typeof b1 )

const b2 = "Javascript"
console.log( typeof b2 )

const b3 = true
console.log( typeof b3 );

const b4 = null
console.log( typeof b4 )

const b5 = undefined
console.log( typeof b5 )

const b6 = 'hello' + 5
console. log( typeof b6 )

// const b4
// console.log( typeof b4 )

//NON - PRIMITIVE - MUTABLE (CAN BE CHANGE) - Heap MEMORY

//ARRAY
const c1 = [10, 20, 'playwright' , true]
console.log(typeof c1)

//OBJECT

const c2 = {
name : 'tej' ,
age : 23 ,
"course" : true
}
console.log(typeof c2 )

//FUNCTION

function greet() {
console.log("Hello World!")
}
greet()

console.log( typeof greet )

// Re-assigning array

let a14 = [10, 20, 'playwright' , true]
console.log(typeof a14)
a14 = [101, 202, 'javascript' ] //---->re- assign new array
console.log(a14)
console.log(a14[0])
a14[0] = "Hello"
console.log(a14[0])
console.log(a14)