// // // //OR--> it will check any one condition is true it will execute the if block

// // // let age = 18
// // // let month = 2

// // // if( age = '18' || month == 2 ){
// // // console.log( "Successfully Added")
// // // }
// // // else{
// // // console.log( "Sorry Try Again" )
// // // }

// // // // AND  --> it will check both conditions are true then only it will execute the if block
// // // if( age == 18 && month == 2 ){
// // // console.log( "Successfully Added" )
// // // }
// // // else{
// // // console.log( "Sorry Try Again" )
// // // }

// // // if( age === 18 && month == 2 ){
// // // console.log( "Successfully Added" )
// // // }
// // // else{
// // // console.log( "Both are not equal one only equal" )
// // // }

// // //Ternary Operator
// // // if (100 > 200) {
// // //   greeting = "Good day";
// // // } else {
// // //   greeting = "Good evening";
// // // }
// // // console.log(greeting)


// // // if (100 > 200) {
// // //   console.log("200 is greater");
// // // } else {
// // //   console.log("100 is lesser than 200");
// // // }


// // // //let abc = 23
// // // //if (100 > 200) {
// // //   let msc = ( 100 > 200 ) ? true : false
// // //   console.log( msc )

// // //   var a = ( 100 < 200 ) ? true : false
// // //   console.log( a )

// // let num1 = 10;
// // let num2 = 5;

// // function calculator(num1, num2,operator){ 
// //   switch (operator) {
// //     case '+':
// //         console.log(num1 + num2);
// //         break;
// //     case '-':
// //         console.log(num1 - num2);
// //         break;
// //     case '*':
// //         console.log(num1 * num2);
// //         break;
// //     case '/':
// //       result = (num2 !== 0) ? (num1 / num2) : "Error: Division by zero";
// //       break;
// //     case '%':
// //         console.log(num1 % num2);
// //         break;
// //     case '>':
// //         let compare = ( num1 > num2 ) ? true : false ;
// //         console.log( compare );
// //     case '**':
// //         console.log(num1 ** num2);// exponentiation 
// //         break;
// //     default:
// //         console.log("Invalid operator");
// //   }
// // }
  

// // calculator(num1, num2, '+'); // Addition
// // calculator(num1, num2, '-'); // Subtraction
// // calculator(num1, num2, '*'); // Multiplication
// // calculator(num1, num2, '/'); // Division
// // calculator(num1, num2, '%'); // Modulus
// // calculator(num1, num2, '**'); // Exponentiation
// // calculator(num1, num2, '.');




// // function calculator1(num1, op, num2){ 
// //   switch (op) {
// //     case '+':
// //         console.log(num1 + num2);
// //         break;
// //     case '-':
// //         console.log(num1 - num2);
// //         break;
// //     case '*':
// //         console.log(num1 * num2);
// //         break;
// //     case '/':
// //       console.log(num1 / num2);
// //         break;
// //     case '%':
// //         console.log(num1 % num2);
// //         break;
// //     case '>':
// //         //let compare = ( 
// //         console.log( num1 > num2 ) ? true : false ;
// //         break;
// //     case '**':
// //         console.log(num1 ** num2);// exponentiation 
// //         break;
// //     default:
// //         console.log("Invalid operator");
// //   }
// // }
// // calculator1(10, '+', 25); // Addition
// // calculator1(10, '-', 5); // Subtraction
// // calculator1(100, '*', 25); // Multiplication
// // calculator1(200, '/', 10); // Division
// // calculator1(20, '%', 10); // Modulus
// // calculator1(20, '>', 10); // compare
// // calculator1(10, '**', 10); // Exponentiation
// // calculator1(10, '.', 25); // Invalid operator



// // // function operator (num1, op, num2){ 
// // //   switch (op) {
// // //     case '+':
// // //         console.log(num1 + num2);
// // //         break;
// // //     case '-':
// // //         console.log(num1 - num2);
// // //         break;
// // //     case '*':
// // //         console.log(num1 * num2);
// // //         break;
// // //     case '/':
// // //       result = (num2 !== 0) ? (num1 / num2) : "Error: Division by zero";
// // //       break;
// // //     case '%':
// // //         console.log(num1 % num2);
// // //         break;
// // //     case '>':
// // //         let compare = ( num1 > num2 ) ? true : false ;
// // //         console.log( compare );
// // //     case '**':
// // //         console.log(num1 ** num2);// exponentiation 
// // //         break;
// // //     default:
// // //         console.log("Invalid operator");
// // //   }
// // // }
  

// // // operator(10, '+', 25); // Addition
// // // operator(10, '-', 25); // Subtraction
// // // operator(10, '*', 25); // Multiplication
// // // operator(10, '/', 25); // Division  
// // // operator(10, '%', 25); // Modulus
// // // operator(10, '**', 10); // Exponentiation
// // // operator(10, '.', 25); // Invalid operator

// // function factorial(n) {
// //   if (n === 0 || n === 1) {
// //     return 1;
// //   }
// //   return n * factorial(n - 1);
// // }

// // console.log(factorial(5)); // 120


// // console.log('-----------')

// console.log(' --- FOR --- ')

// for (let i = 1; i <= 10; i++) {
//   console.log(i + " * 2 = " + (i * 2))
// }

// // --- FOR --- 
// // 1 * 2 = 2
// // 2 * 2 = 4
// // 3 * 2 = 6
// // 4 * 2 = 8
// // 5 * 2 = 10
// // 6 * 2 = 12
// // 7 * 2 = 14
// // 8 * 2 = 16
// // 9 * 2 = 18
// // 10 * 2 = 20
// console.log('-----------')
// console.log(' --- while --- ')

// let j =1
// while( j <= 10)
// {
// console.log(j + " * 3 = " + (j * 3))
// j++
// }

// //  --- while ---
// // 1 * 3 = 3
// // 2 * 3 = 6
// // 3 * 3 = 9
// // 4 * 3 = 12
// // 5 * 3 = 15
// // 6 * 3 = 18
// // 7 * 3 = 21
// // 8 * 3 = 24
// // 9 * 3 = 27
// // 10 * 3 = 30

// console.log(' --- do while --- ')
// let k = 1
// do
// {
// console.log(k + " * 4 = " + (k * 4))
// k++
// }
// while( k <= 10)

// //     --- do while ---
// // 1 * 4 = 4
// // 2 * 4 = 8
// // 3 * 4 = 12
// // 4 * 4 = 16
// // 5 * 4 = 20
// // 6 * 4 = 24
// // 7 * 4 = 28
// // 8 * 4 = 32
// // 9 * 4 = 36
// // 10 * 4 = 40



//FOR EACH---> it will perform the operation on each and every element of the array but will not return new array
// var a15 = [10, 20, "java", "selenium", 50]
//[10, 20, "java", "selenium", 50].forEach( (v=>console.log(v)))
// console.log(v)

// })


// ["Apple", "Banana", "Carrot", "Orange"].forEach(v => console.log(v));
// [10, 20, 30, 40, 50].forEach(v => console.log(v));


// let arr = ["Apple", "Banana", "Carrot", "Orange"]
// let str = [10, 20, 30, 40, 50]

// arr.forEach( (v)=>{
// console.log(v)

// })

// str.forEach( (v)=>{
// console.log(v)

// })

// const word = "madam";

// // Reverse the string using split, reverse, and join
// const reversedWord = word.split("").reverse().join("");

// // Compare original and reversed
// if (word === reversedWord) {
//   console.log(`"${word}" is a palindrome`);
// } else {
//   console.log(`"${word}" is not a palindrome`);
// }



//PALINDROME

//madam = madam

// function palindrome(str){

// let word = "madam" //rac ecar
// word = word.split('').reverse().join('')

// if(word == str)
// console.log("Palindrome")

// else
//     {
// console.log("Not a Palindrome")
// }
// }
// palindrome('madam')


//multi parameter
function isnoteven(num1 , num2 ){
return num1 != num2
}
console.log( isnoteven(10,20) ) //false
console.log( isnoteven(10,10) ) //true 















































