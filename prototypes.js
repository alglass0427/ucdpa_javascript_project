
/* ---------------------prototypes----------------------- */

let Person =  function(firstName,birthYear){
    //these will be available For all instances (below person1 as example)
    this.firstName = firstName;
    this.birthYear = birthYear;
    //Never do this 
    let date = new Date()

    //Should not do this as it will create this function
    //or every instance(object) of this class (prototype)
    //makes code performance Slower
    //Go to line 21 
    //------------------------BAD PRACTICE----------------
    // this.calcAge = function () {
    //     console.log(date.getFullYear() - this.birthYear)
    // }
    //-----------------------------------------------------
}

function MyPersonFactory(){
    this.instances = [];
  };

  MyPersonFactory.prototype.create = function(firstNAme,birthYear){
    let tmp = new Person(firstNAme,birthYear);
    this.instances.push(tmp);
    return tmp;
  };
  
  MyPersonFactory.prototype.get = function(i){
    return this.instances[i];
  };
  
  MyPersonFactory.prototype.getAll = function(){
    return this.instances;
  };

let factory = new MyPersonFactory();

let person1 =  new factory.create("Alan",1986)


// console.log(person1 instanceof Person)  //returns true (boolean)

//shows the full prototype -  includes calcAge(below) and this is then inherited by peson1
console.log(Person.prototype)

//add method to the prototype on the fly  --- will be inherited by all instances
//of the class (prototype)

Person.prototype.calcAge = function (thisYear) {
    
    console.log(date.getFullYear() - this.birthYear)
}



//this key word is called by the instance that Calls

let date = new Date()

person1.calcAge(date.getFullYear())

//when logging the object the function is not carried by the instance 
//but only by the prototype

console.log(person1)

//__proto__
//

console.log(person1.__proto__);
console.log(person1.__proto__ === Person.prototype)

//Check if an object is instance of a prototype
console.log(Person.prototype.isPrototypeOf(person1))  
//---> true as person 1 is a prototype

console.log(Person.prototype.isPrototypeOf(Person))  
//---> false as Person is NOT a prototype of itself
