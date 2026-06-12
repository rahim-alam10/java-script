function SetUser(username){
    this.username=username
    console.log("Called");
}

function CreateUser(username, email, password){
    SetUser.call(this, username);
    this.email=email;
    this.password=password;

}

const userone = new CreateUser("Rahim", "rahim@gmail.com", 123)
console.log(userone)