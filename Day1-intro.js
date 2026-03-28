
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


//CONST-bLOCK & iMMUTABLE(can not be changed)

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
    var abc=2004
    //will print only local value because reassignment global value
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