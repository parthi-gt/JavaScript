//FUNCTION TYPES
//1)BASIC FUNCTION

//without parameter

function greet()
{
console.log('Hello World!')
}
greet()

//with parameter
function great(a)
{
console.log(a * 10)
}
great(5)


//multi parameter
console.log( "--------multi parameter-------")
function isEven(num1 , num2 ){
return num1 == num2
}
console.log( isEven(10,20) ) //false
console.log( isEven(10,10) ) //true 

function isnoteven(num1 , num2 ){
return num1 != num2
}
console.log( isnoteven(10,20) ) //false
console.log( isnoteven(10,10) ) //true 

//default parameter
console.log( "--------default parameter-------")

function defalt(name) {
    console.log( 'Hello',name )
}
defalt('Parthiban')
defalt() //Hello undefined

console.log( "--------function with parameter-------")
function defalt1(name='user') {
    console.log( 'Hello',name )
}
defalt1('Parthiban')
defalt1() //Hello user




//DUPLICATE FUNCTION---> HOISTING it will consider the last function only
console.log( "--------DUPLICATE FUNCTION-------")
function positive()
{
let name = "Arjun";    // here name Arjun will not display in console because of hoisting
console.log(name) ;      
}
positive()  //HOISTING

function positive()
{
let num = 786;          // here num 786 will display in console because of hoisting
console.log(num);
}



//DUPLICATE FUNCTION
function positive()
{
let name = "Arjun"
console.log(name)
}

positive()

function positive(num){

console.log(num)
}

function positive(num = 'Ai'){

console.log(num)

}
console.log( "------------------------")



//2) FUNCTION EXPRESSION

//without parameter
let f1 = function(){
console.log('Welcome Tech World!')

f1()

}

//with param
let f2 = function(a ){
console.log( a + 20)
}
f2(10)

//multi param
let f3 = function(a, b, c){
return a + b - c
}
console.log(f3(25, 15, 10))


//default
let f4 = function(name = 'Bot' ){
console.log('Hello' ,name)
}
f4()
f4('Vikram')


//ARROW FUNCTION

//without param 

let f5 = ()=> {
console.log('This is Arrow Function')
}
f5()

//with param
let f6 = (a)=> console.log( a ** 2)

f6(10)

//multi param
let f7 = (l, h, b) => {
return l*h*b
}

console.log(f7(10, 20, 30))

//default
let f8 = (name = "Ai bot")=> ("Hello i am " + name)

console.log(f8())
console.log(f8('Karma'))




//5 anonymous FUNCTION

console.log('START')
setTimeout(()=> console.log('MIDDLE')) //default : 100 ms
setTimeout(()=> console.log('End'),5000 ) // after 5 sec will execute
console.log('Morning')
console.log('Afternoon' )
console.log('Evening')



//6 CALL BACK FUNCTION

function redmi(){
console.log('Brand is good')
}
// redmi()

function vivo( a , b){
console.log('Best Camera' , a)

}

vivo(100, redmi() )




//FACTORIAL - Recursion

//5! => 5*4! => 5*4*3! => 5*4*3*2! => 5*4*3*2*1! => 120

function fact(n){

if(n == 1){
//5 == 1
//4 == 1
//3 == 1
//2 == 1
//1 == 1
return 1
}
return n * fact(n-1)

I

}

console.log(fact(5))

// 5 * (5-1) 4 = 20
// 20 * (4-1)3 = 60
// 60 * (3-1)2 = 120






















