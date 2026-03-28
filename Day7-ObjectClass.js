//Object Class in JavaScript

let object1 = {

    name : "Parthiban",
    day : 7,
    course : 1225,
    abc : function(){
        console.log('Hello world!')
    },
    obj1 : { company : 'TechM' , empId : 122507 , job : false}

}
console.log( object1 )
console.log( object1.obj1 )
object1.abc()

//NOTATION.[]---> to access the values

console.log( object1['name'])

console.log( object1.obj1.empId)

//EXITING VALUE UPDATE----> it will update the existing value
object1.name = 'ParthibanGT'
console.log(object1)

//REMOVE---> delete is keyword
delete object1.day
console.log( object1 )

//ADD
object1['age'] = 35
console.log(object1)

object1.obj1['age'] = 35
console.log(object1)

//IN-boolean value

console.log( 'age' in object1 ) //true
console.log( 'age' in object1.obj1 ) //true


//APPROACH - 2
let object2 = new Object()

object2.empName = "Ajith"
object2.empId = 456
object2.empStatus = true
object2.empMsg = function(){
console.log('Welcome Tech World!')
}
object2. empData = { name : 'Ajith' , age : 27}

console.log( object2 )

console.log( object2.empId)

//CLASSES

//BASE , PARENT , SUPER - CLASS
//THIS is a keyword. It will help to access current class object/properties and methods

class User1 {                    //PascalCase//

constructor()                   //- constructor is a special method inside a class
{                             
this.course = "JavaScript"     //GlobalLevel  //We use "this" to refer to the current object instance.   
                              // The class has initial properties: "course"
}

login(name1)                   //methodLevel-- localLevel
{ 
console. log('Hi' , name1 , 'welcome your course', this.course , 'is begin')
}

logOut (name2)                //methodLevel-- localLevel //camelCase
{ 
console. log('Thank you,', name2 ,'your', this.course , 'session is done')
}

}
//Object Creation p1 is object name
let p1 = new User1()  
p1.login('Parthiban')
p1.logOut('Parthiban')



//DERIVED , CHILD , SUB
//STATIC is keyword. Variable , Method
//STATIC is access by using only className without creating an Object
//Extends is keyword. It will help to inherit the properties and methods from Parent class to Child class
//The super() method refers to the parent class.
//By calling the super() method in the constructor method
// we call the parent's constructor method and gets access to the parent's properties and methods.


class User2 extends User1 {

static countOf = 0  //static variable

constructor()
{
super()             //to call parent class constructor
this.count = 0      // instance variable, unique for each object
User2.countOf++     //static variable increment  // increases the shared static variable
}

fetchData()   //instance method
{
console. log('Your daily logged in count', ++this.count)
}

static display()  //static method
{ 
console.log( 'Your Annual Count' , User2.countOf)
}
}

let p2 = new User2()

p2.fetchData()
p2.fetchData()

User2.display()

let p3 = new User2()
User2.display()

let p4 = new User2()
User2.display()

let p5 = new User2()
User2.display()

let p6 = new User2()
User2.display()

let p7 = new User2()
User2.display()

let p8 = new User2()
User2.display()

p4.login('GTP' , 12)

/*
OOPS - OBJECT ORIENTED PROGRAMMING SYSTEM / STRUCTURE

1. Encapsulation
2. Inheritance
   - Single
   - multiple
   - multi level
   - hybrid
3. Polymorphism
   - method overloading
   - method overriding
4. Abstraction
   - un implementation part without {}
   - interface
*/


// Class definition
class Car {
  constructor(brand, model) {
    this.brand = brand; // property
    this.model = model; // property
  }

  // method
  showDetails() {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  }
}

// Creating objects from the class
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// Using the objects
car1.showDetails(); // This car is a Toyota Corolla.
car2.showDetails(); // This car is a Honda Civic.


class car7 extends Car {

constructor()
{
super()             //to call parent class constructor
this.name = "benz"     // instance variable, unique for each object
}

fetchData()   //instance method
{
console. log('Your dream car is', this.name)
}

display()  //static method
{ 
console.log( 'Your car name is' , this.name)
}
}

let c = new car7()
c.fetchData()

let d = new car7()
d.display()












function fff() {
    let d = new car7()
    car7.display()
}

