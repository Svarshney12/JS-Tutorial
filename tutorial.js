
// print 
console.log("hello from experience")

// Variable

let monthlyrent = 500; // mutable(it will chang later)
//const monthlyrent = 500; // non-mutuable(it will not change later)
//var monthlyrent = 500; // mutable but it use in earlier
monthlyrent=900; // camel casing 
yearlyrent = monthlyrent * 12;// we should use semicolon or not its totally ohk to do this or not
console.log(yearlyrent);

console.log("jndjsnndj'sjxnsnxwnsx'")


//string concatnation

const firstName = "Subhi"
const lastName = "Varshney"
sentence = "Hello " + firstName + " " + lastName + "! How are You ?"
sentencewithTemplate = `Hello ${firstName} ${lastName}! How are You ?`
console.log(sentence)
console.log(sentencewithTemplate)
  
let baby = 67.8;
console.log(baby)   

//if-else

const isSkyBlue = true
if(isSkyBlue){
    console.log("the sky is blue")
}
else{
    console.log("the sky is not blue")
}


// if else-if else

let a = 2+2
let b = '4'
//let b = 4 //for same thing ans sam type
if (a === b){
    console.log("same thing and same type")
} 
else if(a == b){
    console.log("same thing but not same type")    
}
else{
    console.log("uh panic?")
}

// const friendsAtYourParty = 0
let friendsAtYourParty = 0
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
friendsAtYourParty = friendsAtYourParty + 1
console.log(friendsAtYourParty)

// while loop

let friendAtYourParty = 0
while(friendAtYourParty < 10)
{
    console.log("another friend joined your party")

    friendAtYourParty = friendAtYourParty + 1
    
}
console.log(friendAtYourParty)
//for loop
 
let x= 0
for(let i = 0; i < 10; i++){
    x++
    console.log(i)
}
console.log(x)

let y= 0
for(let j=10;j>0;j--){
    x++
    console.log(j)
}
console.log(y)

// exercise 
// Print the character many times by using loop 

const TimesToRepeat = 100;
const Character = '👀';
let word = '';
for( i = 0; i<TimesToRepeat; i++){
    word = word + Character;
}
console.log(word);

//console.log("".padStart(TimesToRepeat,Character))

// Function

function addtwo(number)
{
    return number + 2
}
const FinalAns = addtwo(6)
console.log(FinalAns)

const otherans = addtwo(8)
console.log(otherans)

function greet(fisrtname,lastname,honorific,greeting){
    return `${greeting} ${honorific} ${lastname}! I'm extremely pleased to join us, ${fisrtname}! I hope you enjoy your stay, ${honorific} ${fisrtname}`

}

console.log(greet("Brian","Holt","Lord","Salutaions")) 
console.log(greet("Jack","Holt","Lord","A-hoy")) 


//  call  a function
const myHomeCity = "Seattle"
const myHomeState = "Washington"
const myHomeCountry = "USA"

function logOutYourHome(city,state,country){
    console.log(`You are from ${city}, ${state} ${country}.`)
}
logOutYourHome(myHomeCity,myHomeState,myHomeCountry)
logOutYourHome ("Hathras","UttarPradesh","India")

// without parameters functions 

function bark (){
    console.log("woof")
}
const meow = function (){
    console.log("meeeeoww")
}
const chirp = () =>{
    console.log("chirp chirp")
}

bark()
meow()
chirp()


//Scope

function addFive(number){
    const someVariable = "you can't see me outside this function"
    console.log(someVariable)
    return number + 5
    
}
// console.log(someVariable) this will give error 
console.log(addFive(10))



//out of scope
let p = 0 // if we  put const instead of let then it will not change the value of p and  will not print the increased value of p that's why we use let
for (let i = 0; i<=10; i++){
    console.log(i) // this i is in scope 
    p++
}

//console.log(i) // this i is out of scope


// In function we can call first before declaration
 sayHi()// both work  

 function sayHi(){
    console.log("Hi")
 }
 sayHi()// both work
//  const A = "A";
// let F;

// function doStuff(B) {
//   console.log(B); // works, B parameter is still in scope
//   const C = "C";
//   let H = "H";
//   if (1 + 1 === 2) {
//     const D = "D";
//     H = "something else";
//   }
//   console.log(D); // does not work, D was declared in that if statement block
//   console.log(H); // works, H was declared outside the if statement
//   F = "F";
// }

// let E = 0;
// while (E < 3) {
//   E++;
//   console.log(A); // works, the outter block (called the global scope) is still in scope
//   const G = "G";
// }
// console.log(E); // works, E was declared outside the whie loop
// console.log(G); // does not work, declared inside the while loop and it's over

// doStuff("B");
// console.log(B); // does not work, the B parameter expires after the function call
// console.log(C); // does not work, C was declared inside the function and the function is over
// console.log(F); // works, F was declared in the global scope

 // built in functions
 const sentence = "ThiS IS WEiered CastIng ON It"
 const lowerCaseSentence= sentence.toLowerCase()
 const UpperCaseSentence = sentence.toUpperCase()
 console.log(lowerCaseSentence)
 console.log(UpperCaseSentence)


let string = "hi my name is subhi"
string = string.substring(3)
//string = string.substring(3,5)
console.log(string)

// want to round a number use math

const number = 5.0
const RoundNumber = Math.round(number)
const FloorNumber = Math.floor(number)
const CeilNumber = Math.ceil(number)
console.log(RoundNumber)
console.log(FloorNumber)
console.log(CeilNumber)
const num = Math.random()
console.log(num)

// want to see if a string contains another string?
const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo =
      "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringToLookFor = "cute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));

console.log(Date.now())

//objects
const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100,
  };

  const propertyname = 'city'

  console.log(person);
  console.log(person.name);
  console.log(person["name"]); // same as the line above; prefer using the other one
  console.log(person.favoriteFood);
  console.log(person.city);
  console.log(person['city']); //this will give error
  console.log(person[propertyname]); //this will give error


  const person1 = {
    name: "Angie",
    ageRange: "25-35",
  };
  const person2 = {
    name: "Francesca",
    ageRange: "65-75",
  };
  
  function suggestMusic(person) {
    if (person.ageRange === "25-35") {
      console.log("We think you will like Daft Punk.");
    } else if (person.ageRange === "65-75") {
      console.log("You are obviously going to like Johnny Cash.");
    } else {
      console.log(
        "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
      );
    }
  }
  
  suggestMusic(person1);
  suggestMusic(person2);


  const dog = {
    name: "dog",
    speak() {
      console.log("woof woof");
    },
  };
  
  dog.speak();


  const mee = {
    name: {
      first: "Brian",
      last: "Holt",
    },
    location: {
      city: "Seattle",
      state: "WA",
      country: "USA",
    },
  };
  
  console.log(mee.name.first);
  console.log(mee.location.state);
  console.log(console)



  // context
const me = {
    name: {
      first: "Brian",
      last: "Holt",
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA",
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    },
  };
  
  console.log(me.getAddress());
 const pulledoutgetAddress = me.getAddress.bind(me)
 console.log(pulledoutgetAddress())



//  console.log(this === window);
//  console.log(this.scrollY); 
//  console.log(window.scrollY);
//  console.log(scrollY);


// arrays

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);

  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));

const courses = [
    { teacher: "Will Sentance", course: "JavaScript: The Hard Parts" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React" },
    { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
    { teacher: "Scott Moss", course: "Intro to Node.js" },
  ];
  
  courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });
  
  console.log(courses);
  
  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to Databases" };
  
  console.log(courses);
  courses.pop() // remove last one 
  console.log(courses);
  courses.shift() // remove first one  
  console.log(courses);

  const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
  ];
  
  // method 1
  for (let i = 0; i < cities.length; i++) {
    console.log(i, cities[i]);
  }
  
  // method 2
  cities.forEach(function (city) {
    console.log(city);
  });

  // method 3

  let timesCalled = 0;
  function logCity (city){
    console.log(timesCalled, city)
    timesCalled++;
  }
 cities.forEach(logCity);
  



