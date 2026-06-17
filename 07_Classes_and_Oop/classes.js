class User{
   constructor(username, email, password){
    this.username=username;
    this.email=email
    this.password=password
   } 

   encryptPassword(){
        return `${this.password}abc`
   }

   changeUser(){
    return `${this.username.toUpperCase()}`
   }
}

const userOne= new User("Rahim", "Rahim@gmail.com", 123)
console.log(userOne)

console.log(userOne.encryptPassword())
console.log(userOne.changeUser())