//19-12-2025
//ARRAY METHODS
//Index starts from 0. Length is starts from 1.

var a1 = [0, 20, 'javascript' , false]

console.log(a1)
console.log( a1[1] )
console.log( a1[3] )
console.log( a1[11] )

var a2= [10, 20, 'javascript' , false ,[101, 202,'playwright', true] ]

console.log(a2)
console.log( a2[1] )
console.log( a2[3] )
console.log( a2[11] )
console.log( a2[4] )

console.log( a2[4] [2]) //two dimension

//PUSH-->it will add the element at the last

var a3 = [10, 20, 30, 40, 50]
a3.push(600, 'Java', true)
console.log(a3)

//POP--->it will remove the last element
a3.pop()
console.log(a3)

//Shift--> it will remove the first element

var a3 = [100, 200, 300, 400, 500]
a3.shift()
console.log(a3)

//UNSHIFT--> it will add the element at the beginning
a3.unshift('js' , 'py' )
console.log(a3)

//Heap MEMORY

//TO STRING---> it will convert array to string

var a4 = [10, 20, 'Selenium' , true]
var str = a4.toString()
console.log(str)

//CONCAT--> it will merge the arrays
var a5 = [1, 2, 3]
let a6 = [4, 5, 6]
const a7 = [7,8,9]
console.log( a5 + a6 + a7 )
console.log( a5 , a6 , a7)
console.log( a5.concat(a6 , a7)) //---> a6 and a7 will be merged to a5 (it will store in a a5 memory location)

//20-12-2025
//SLICE - based on starting index and ending index (ending index is excluded)
// - based on starting index , deleteCount , ... Values


var a8 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
SPLICE
//remove---> will remove elements based on starting index and delete count
a8.splice(2 , 4) //starting index is 2 and delete count is 4, so it will remove 30,40,50,60
console.log(a8)

//replace--> remove and add new elements (update)
a8.splice(1 , 3 , 200, true, 'var') //starting index is 1 and delete count is 3, so it will remove 20,70,80 and add 200,true,'javascript'
console.log(a8)

//add--> without removing any element will add new elements
a8.splice(3 , 0 , 'a' , 'b' , 'c') //starting index is 3 and delete count is 0, so it will add 'a','b','c' at index 3
console.log(a8)

// let

let a9 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

//remove---> will remove elements based on starting index and delete count
a9.splice(2 , 4) //starting index is 2 and delete count is 4, so it will remove 30,40,50,60
console.log(a9)

//replace--> remove and add new elements (update)
a9.splice(1 , 3 , 200, true, 'let') //starting index is 1 and delete count is 3, so it will remove 20,70,80 and add 200,true,'javascript'
console.log(a9)

//add--> without removing any element will add new elements
a9.splice(3 , 0 , 'a' , 'b' , 'c') //starting index is 3 and delete count is 0, so it will add 'a','b','c' at index 3
console.log(a9)

//Const

const a10 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

//remove---> will remove elements based on starting index and delete count
a10.splice(2 , 4) //starting index is 2 and delete count is 4, so it will remove 30,40,50,60
console.log(a10)
//replace--> remove and add new elements (update)
a10.splice(1 , 3 , 200, true, 'const') //starting index is 1 and delete count is 3, so it will remove 20,70,80 and add 200,true,'javascript'
console.log(a10)

//add--> without removing any element will add new elements
a10.splice(3 , 0 , 'a' , 'b' , 'c') //starting index is 3 and delete count is 0, so it will add 'a','b','c' at index 3
console.log(a10)

//MAP---> it will perform the operation on each and every element of the array and return the new array
var a11 = [4, 9, 16, 25, 36 , 49]

var str = a11.map(Math.sqrt)
console.log(str)

//spread---> it will spread the array elements
var a = Math.min( ... a11)
console.log(a)
console.log( ... a11)

var b = a11.map(function(num) {
return num + 2
})
console.log(b)

var str = a11.map(function(num) {
return num + 2
})
console.log(str)

//FILTER

var a12 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var c = a12.filter(function (num){
return num % 2 != 0
})
console.log(c)


// filter using in addition operation will get the o/p of same array elements
var c = a12.filter( function(num ){
return num + 2
})
console.log(c)


// while using num % 2 operation in map will get boolean values
var c = a12.map(function (num) {
return num % 2 != 0
})
console.log(c)

//REDUCE---> it will return single value after performing operation on all the elements of the array

var a13 = [10, 20, 30, 40, 51]
var s = a13.reduce(function (num1 , num2){
return num1 + num2
})
console.log(s)



//VALUES--> it will return the values of the array one by one using for...of loop

var a15 = [10, 20, "java", "selenium", 50]
var s = a15.values()
for (var e of s) {
console.log(e)
}
console.log(e)


//FOR EACH---> it will perform the operation on each and every element of the array but will not return new array
a15.forEach( (v)=>{
console.log(v)

})

//SLICE - based on starting index between ending index +1
var a16 = [100, 200, 300, 400, 500, 600, 700]

var a = a16.slice(0, 3)
console.log(a)

var a = a16.slice(-6 , -4)
console.log(a)

//JOIN
var a17 = [10, 20, 30, 40]
console.log( a17.join(' k -- >'))

var a18=[11,2,9,7,5,15,3]
//ASC
var asc = a18.sort( (a, b) =>{
return a - b
})
console.log( asc )

//DESC
var desc = a18.sort( (a, b) =>{
return b - a
})
console.log( desc )

var arr = ['chatisgarh' , 'Banglore' ,'Andhraf' , 'bangladesh' , 'Chennai' , 'arunachalam']

console.log(arr.sort())

//ASC
console.log(arr.sort())

//DESC
console.log(arr.sort().reverse())

//length
console.log(arr.length - 1)

//REMOVE DUPLICATES FROM ARRAY
let a19 = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(a19)];
console.log(unique); // [1, 2, 3, 4]
