function CreateUser(username, score){
    this.username=username;
    this.score=score;
}

CreateUser.prototype.increment= function(){
    this.score++;
    console.log(`${this.username} price incremented by 1`)
    console.log(`New Price is : ${this.score}`)
}

CreateUser.prototype.printMe= function(){
    console.log(`${this.username} has score of ${this.score}`)
}

console.log(milk.cons)
const chai= new CreateUser("Chai", 10)
const milk= new CreateUser("Milk", 50)

chai.increment();
milk.increment();


