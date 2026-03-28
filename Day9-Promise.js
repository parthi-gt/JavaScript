//PROMISE is an OBJECT in JS
//APPROACH - 1

let prom1 = new Promise((resolve , reject)=>{
let paymentStatus = true //true or false
if(paymentStatus){
resolve()
}
else{
reject()
}
} )

// console.log(prom1)
//HOISTING

prom1.then(success).catch(faill)
prom1.then(success).catch(faill)

function success ()
{
console.log('I got payment')
}
function faill()
{
console.log('Sorry i did not receive')
}



//APPROACH - 2

let prom2 = new Promise((resolve , reject)=>{

let paymentStatus = false

if(paymentStatus){
resolve("Successfully added")
}

else
    {
reject("Invalid data")
}
})
prom2.then((rs)=> console.log(rs))
.catch((er)=> console.log((er)))

// console.log(prom2)




//APPROACH - 3

function prom3(){
return new Promise((resolve , reject)=>{

let paymentStatus = true

if(paymentStatus){
resolve("This is Promise")
}
else{
reject(new Error( "Invalid Credentials") )
}
})
}

prom3().then((a)=> console.log(a))
.catch((b)=> console.log(b))
.finally(()=>{
console.log("Thank you ... ")

})







//ASYNC AWAIT

//Synchronous
console.log('1')
console.log('2')
console.log('3')

//Async
console.log(100)
setTimeout(()=> console.log(200))
console.log(300)


console.log("------------------ERROR HANDLING - TRY CATCH-------------------")
//ERROR HANDLING - TRY CATCH

let age = ' '

try{
if(age <=23)
    {
throw ("Your  Eligible")
}
else if(isNaN(age))
    {
throw("Invalid age")
}
else if(age == " ")
    {
throw("Required field")
}
else {
    console.log("Thanks")
}

}
catch(err){
console.log(err)
}
console.log("------------------ERROR HANDLING - TRY CATCH-------------------")

//ASYNC AWAIT
console.log("------------------ASYNC AWAIT-------------------")

function data1()    //data1() returns a Promise
{
    return new Promise((resolve, reject)=>{

 setTimeout(()=>                 //"setTimeout" delays execution by 3 seconds
    {
 resolve('This is Async!')      // After 3 seconds, you call:"resolve('This is Async!')"
 reject(new Error('Network issue ... '))        //A promise can be resolved OR rejected only once.

                                                // 👉 After resolve() runs, the promise is finished
                                                // 👉 reject() will never execute
}, 3000)
})
}

// console.log(data1())

async function data2(){
console.log('Hi')


try{
let d = await data1()
console.log(d)
}
catch(err){
console.log(err)
}
}
data2()
console.log("------------------ASYNC AWAIT-------------------")