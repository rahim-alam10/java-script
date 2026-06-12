    // primitive ( Call by Value)
    // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
    
    /* Reference type or Non-Primitive
        1. Arrays 
        2. objects
        3. Functions
    */  
     
/*
const id= Symbol('123')
const anotherid= Symbol('123')


console.log(id==anotherid)  // False 
*/

// *******************************************
/* stack (primitive) , Heap (Non-primitive)//

let myname= "Rahim"
let anothername=myname
anothername="Alam"

console.log(myname)
console.log(anothername)

let userOne={
    email: "user@gmail.com",
    pass: 1234
}
let userTwo= userOne
userTwo.email="Rahim@gmail.com"   // changes both userone and usertwo email

console.log(userOne.email)
console.log(userTwo.email)

//*/

