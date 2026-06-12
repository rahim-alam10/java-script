/* User Function
function loginUserMessage(usename = "sam"){
    if(!usename){
        console.log("Please enter a username....")
        return
    }  
    return `${usename} just logged in  !!! `  
}

console.log(loginUserMessage("Rahim"))

//*/

/* Spread Opearator
function CalculateCartPrice(...num1){   // This spread operator will store all parameters in an array and stores in num1
    return num1
}

console.log(CalculateCartPrice(200, 500, 700))
//*/

/* Object Function
const user = {
    username:  "Rahim Alam",
    Semester: 4
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and is now in ${anyobject.Semester}th Semester...`)
}

handleObject(user)
//*/

/* Passing Array
const myNewArray= [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
//*/

/*
function findFactorial(num){
    if(num == 0){
        return 1;
    }
    if(num == 1){
        return 1;
    }
    return num * findFactorial(num-1);
}

result = findFactorial(5);
console.log(`Result : ${result}`)

*/

