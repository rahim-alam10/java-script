                // Object Literals
// const User = {
//     username: "",
//     age:0,
//     Department: "",

//     getUserDetails: function(){
//         console.log("Got User details from database....")
//     }
// }

function User(n, a, d){
     this.username=n;
    this.age=a;
    this.Department=d;

    this.getUserDetails = function(){
        console.log("Got User details from database....")
    }
    return this;
}

const UserOne= new User("Rahim", 23, "CS");
const UserTwo= new User("Alam", 23, "AI");

console.log(UserOne)
console.log(UserOne.getUserDetails());

// console.log(UserOne.constructor);

console.log(UserTwo)
console.log(UserTwo.getUserDetails());