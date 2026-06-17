let myHeroes = ["Thor","SpiderMan"]
let heroPower = {
    Thor:"hammer",
    Spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spiderman Power is ${this.Spiderman}`);
    }
}

Object.prototype.rahim= function(){
    console.log("Hello, I am Object Prototype");
}

Array.prototype.hello= function(){
    console.log("Hello, I am an Array prototype")
}
heroPower.rahim()
myHeroes.rahim()
myHeroes.hello()