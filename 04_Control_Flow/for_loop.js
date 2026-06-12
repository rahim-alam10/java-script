let myArray = ["Flash", "Batman", "Superman"]
/*
console.log(myArray);
for (let index=0; index<myArray.length; index++){
    const element=myArray[index];
    console.log(element);   
*/ 

// for of loop
let myArray2 = [1,2,3,4,5,6]
for (const num of myArray2){
    //console.log(`Number = ${num}`)
}

const map = new Map()
map.set('IN', "India")
map.set('Pk', "Pakistan")
map.set('USA', "United States")

for (const [key, value] of map) {
    //console.log(key, " :- ", value);
}
 
// for of loop is not workable for objects so we use for in loop instead of it
const myObject= {
    js : 'Ja=va-Script',
    Cpp : 'C++',
    rb : 'ruby',
    swift : "Swift by Apple"
}

    //  For in loop is used to print keys of an Object
for (const key in myObject){
    //console.log(`${key} is Shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb","py", "Java", "Cpp"]
for(const key in programming){
    console.log(key);   // 0....4
    console.log(programming[key])   // js..... Cpp
}

