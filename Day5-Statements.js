// Conditional Statements in JavaScript
let mark = 90

if( mark >= 90){
console.log('GRADE : A')
}
else if( mark >= 75){
console.log('GRADE : B')
}
else if( mark >= 35){
console.log('GRADE : C')
}
else{
console.log('FAIL')
}

let test1 = 89.999

if( test1 >= 90){
console.log('GRADE : A')
I}
else if( test1 >= 75){
console.log('GRADE : B')
}
else if( test1 >= 35){
console.log('GRADE : C')
}
else{
console.log('FAIL')
}

function student(mark){

if( mark >= 90){
console.log('GRADE : A')
}
else if( mark >= 75){
console.log('GRADE : B')
}
else if( mark >= 35){
console.log('GRADE : C')
}
else{
console.log('FAIL')
}
}

student(45)
student(10)

//Dynamic Input
function student1(name,mark1){

if( mark1 >= 90){
console.log('GRADE : A')
}
else if( mark1 >= 75){
console.log('GRADE : B')
}
else if( mark1 >= 35){
console.log('GRADE : C')
}
else{
console.log('FAIL')
}
}

student1('Parthiban G',95)

//multiple conditions
let username = ''
let password = ''

if( username == 'parthiban' && password == 'Admin123'){
console.log('Successfully LoggedIn ... ')
}
else if( username == '' && password == '') {
console.log('Do not Skip ... ')
}
else if( username == 'parthiban' || password == !'Admin123' ){
console.log('Kindly enter valid password ... ')
}
else{
console.log('Sorry we can not proceed now. .. ')
}


let marks = 75
if(marks <= 90 && marks >= 75){
console.log('Your Eligible for Grade A')
}
else if(marks < 75 && marks >= 35){
console.log('Your Eligible for Grade B')
}
else{
console.log('Your not eligible')
}

let username1 = 'parthiban'
let password1 = 'Admin123'

if( username1 == 'parthiban' && password1 == 'Admin123'){
console.log('Successfully LoggedIn ... ')
}
else if( username1 == '' && password1 == '') {
console.log('Do not Skip ... ')
}
else if( username1 == 'parthiban' || password1 == !'Admin123' ){
console.log('Kindly enter valid password ... ')
}
else{
console.log('Sorry we can not proceed now. .. ')
}

//2 SWITCH CASE

let day = 2
switch(day){
case 1:
console.log('Monday')
case 2:
console.log('Tuesday')
case 3:
console.log('Wednesday')
case 4:
console.log('Thursday')
case 5:
console.log('Friday')
default :
console. log('Happy its Weekend!')
}

let a = 4
switch(a){
case 1:
console.log('Monday')
break
case 2:
console.log('Tuesday')
break
case 3:
console.log('Wednesday')
case 4:
console.log('Thursday')
case 5:
console.log('Friday')
break
default :
console. log('Happy its Weekend!')
break
}
