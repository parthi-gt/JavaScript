//LOOPS

//FOR - initialization ; Condition ; Increment / Decrement

console.log(' --- FOR --- ')

for( let i = 1 ; i <= 5 ; i++){
console.log(i)

}
console.log('-----------')

for(let i=5 ; i >= 1; i -- ){
console.log(i)

}

console.log('-----------')

for(let i=-5 ; i <= 5; i ++ ){
console.log(i)

}

console.log('-----------')

for(let i=-5 ; i <= 9; i ++ ){
console.log(i)

}
//While 
// Initialization ; Condition ; Increment / Decrement
//WHILE checks before the first iteration;

console.log(' --- WHILE --- ') 
// Initialization ;
// Condition ;
// Increment / Decrement

let j =1
while( j <= 5)
{
console.log(j)
j++
}

// Execution flow
// - Initialize: j = 1.
// - Check: Is j <= 5?
// - If true: Execute the body:
// - Log: console.log(j).
// - Increment: j++.
// - Repeat: Go back to the check.
// - Stop: When j <= 5 is false.


//DO WHILE - Initialization ; Increment / Decrement ; Condition
// do...while checks after executing the body once, so it runs at 
// least once even if the condition is false

console.log(' --- DO WHILE --- ')
// Initialization ;
// Increment / Decrement
// Condition ;

let k = 1
do
{
console.log(k)
k++
}
while( k <= 5)

// Execution flow
// - Initialize: k = 1.
// - Execute body (without checking yet):
// - Log: console.log(k).
// - Increment: k++.
// - Check condition: k <= 5.
// - If true: Repeat the body, then check again.
// - Stop: When k <= 5 becomes false.

console.log( "-------------")
let arr = [10, 20, 30, 40, 50, 60, 70]

//FOR
for(let i=0; i < arr.length ; i++){
console.log( arr[i] )

}
console.log( "-------------")
let arr1 = [10, 20, 30, 40, 50, 60, 70]
for(let i=0; i < arr1.length ; i++){
console.log( arr1)

}
console.log( "-------FOR OF------")
//FOR OF
let arr2 = [10, 20, 30, 40, 50, 60, 70]
for (const element of arr2) {
console.log(element)

}
console.log( "-------FOR OF with break------")
//FOR OF
// it does not work index based
for (var e of arr) {
console.log(e)
if( e == 30){
break}}

console.log( "-----------Find the duplicates------------------ ")
//Find the duplicates
let usernames= ['john', 'amit', 'sara', 'amit','john', 'amit']
for( let i=0; i < usernames. length ; i++){

for(let j= i + 1 ; j < usernames. length ; j++){

if( usernames[i] === usernames[j]){
console.log( usernames[i] )

}
}
}

let obj1 = { name : 'tej' , age : 23 , course : true}

//FOR IN
for (const key in obj1) {
console.log( key +" :"+ obj1[key])
}

//FOR OF
let obj2 = [{ name : 'tej' , age : 23 , course : true}]
for (const element of obj2) {
console.log( element.name)

}




//Extract the data
let userData = [
{name : 'john' , role : 'tester'} ,
{name : 'amit' , role : 'dev'} ,
{name : 'sara' , role : 'admin' } ,
{name : 'john' , role : 'dev'}

]

for( let i=0 ; i < userData.length ; i++){

if( userData[i].role == "tester"){
console. log(`${userData[i].name} is ${userData[i]. role}` )
console.log(userData[i].name + " is " + userData[i].role)

}
}


console.log(' -- TASK -- ')
//Find the duplicates
//nested for loops
let usernames = ['john' , 'amit' , 'sara' , 'sara', 'john' , 'amit' , 'ajith' ]

for( let i=0; i < usernames.length ; i++){

for(let j= i + 1 ; j < usernames.length ; j++){

if( usernames[i] == usernames[j]){
console.log( usernames[i] )
}
}
}