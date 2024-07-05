
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

