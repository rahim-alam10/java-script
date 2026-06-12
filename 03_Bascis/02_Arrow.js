const user={
    username: "Rahim",
    price: 999,
    welcomeMessege: function(){
        console.log(`${this.username}, Welcome to Website`)
    }
}            

/*
  user.welcomeMessege()           // Rahim

const chai=() =>{                // In Arrow Function we replaces function with =>
    let username="Rahim"
    console.log(this.username)   
}

chai()
*/

const addTwo = (num1, num2) => num1 + num2
            
            //OR
/*
const addTwo = (num1, num2) => {
    return num1+num2
}  
*/           

console.log(addTwo(3,4))