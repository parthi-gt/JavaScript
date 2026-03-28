//22-12-2025
//STRING METHODS
//Index starts from 0

var x = "Javascript programming"

console. log( x) // finding length of string--->22
console.log( x.length - 1 ) //index = [length - 1] --->21
console.log( x.length ) //length--->22
console.log( x[4] ) //index 4--->s

//SLICE - based on starting index between ending index +1

var str = "Javascript Programming Language "
var y = str.slice(0 , 10)
console.log(y)  //Javascript
// var y = str.indexOf('p')
// console.log(y)

console.log(str.length-1)

var y = str.slice(-21 , -9)
console.log(y)

var y = str. slice(-9 , -1)
console.log(y)


//SUB STRING
// it wont allow negative index 
var str = "Javascript Programming"

var y = str.substring(0 , 10)
console.log(y)

console.log(str.substring(11, 22))
console.log(str.substring(-22, -11)) // it will display the empty string because substring does not accept negative values

//UPPER CASE
var str = 'javascript'
console.log( str.toUpperCase() )

//LOWER CASE
var str = 'PLAYWRIGHT'
console.log( str.toLowerCase())

//TRIM--> it will remove the extra spaces in the starting and ending of the string
var str = "   javascript with playwright   "

console.log( str.trim() )
console.log( str.trimEnd() ) //it will remove the extra spaces in the ending of the string
console.log( str.trimStart() ) //it will remove the extra spaces in the starting of the string

//CONCAT
var s1 = 'javascript'
let s2 = 'programming'
const s3 = "language"

console.log( s1 + s2 + s3)
console.log( s1, s2, s3)
console. log( s2.concat(s1, s3) ) //s1 and s3 will be stored in s2 memory location

//INDEX OF
var str = "javascript with playwright"

console.log( str.indexOf('p') )//first occurrence of character 'p'

//LAST INDEX OF
console.log( str.lastIndexOf('z') ) //if the character is not present it will return -1
console.log( str.lastIndexOf('p') ) //last occurrence of character 'p'

//CHAR AT
console.log( str.charAt(100) ) //if the index is not present it will return empty string

var str = " java with selenium"

//includes-- it will return boolean value true/false
console.log( str.includes('selenium') )

//starts with
console.log( str.startsWith(' j') )

//ends with
console. log( str.endsWith( 'M' ) )

//REPLACE---> it will replace only first occurrence
var str = 'javascript with playwright, java with selenium'

console.log( str.replace('java' , 'type') )

//REPLACE all----> it will replace all the occurrences
console.log( str.replaceAll('java' , 'type') )

//REPEAT---> it will repeat the string based on the count provided
var str = 'javascript -> '
console.log( str.repeat(5) )

//SPLIT
var str = "Faviteja@gmail.com"

console.log( str.split('@') ) //it will split the string based on '@' and return array
console.log( str.split('') ) //it will split each character and return array
