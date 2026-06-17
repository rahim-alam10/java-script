class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    
    // if we define setter then we have to forcefully define getter also
    get password(){
        return this._password.toUpperCase();
    }

    set password(pass){
        this._password=pass.toUpperCase();
    }
} 

const rahim = new User("rahim@gmail.com", "123")
console.log(rahim.password)