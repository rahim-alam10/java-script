const user = {
    name:"Rahim",
    age: 22,
    village: "Gilgit",
    isActive: true,

    university: function(){
        console.log("Fast University")
    } 
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));

for (let [key,value] of Object.entries(user)) {
    if(typeof value !== 'function')
        console.log(`${key}: ${value}`);
}