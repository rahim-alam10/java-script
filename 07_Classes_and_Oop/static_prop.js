class User {
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){          // Unable to be Called by Children Object
        return `123`;
    } 
}   

const rahim = new User("Rahim")
// console.log(rahim.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email =email;
    }
}

const usertwo = new Teacher("Alam", "Alam@gmail.com")
usertwo.logMe()                             // Alam
console.log(usertwo.createId())             // Error: Static is used


