
                // Promise 1

// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task is completed....");
//         resolve();
//     }, 1000);
// });

// promiseOne.then(function() {
//     console.log("Promise consumed....");
// });

            // Promise 2

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Assyn Task 2 ...");
//         resolve()
        
//     },1000)
    
// }).then(function(){
//     console.log("Asyn 2 resolved ")
// })


            // Promise 3
// const PromiseThree= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Rahim", email:"alamrahim010@gmail.com"
//         })
//     }, 1000)
// })

// PromiseThree.then(function(user){
//     console.log(user)
// })


            // Promise 4

// const promiseFour= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username: "Rahim", email:"alamrahim010@gmail.com"})
//         }else{
//             reject('Error: Something went wrong....')
//         }        
//     },1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error);
// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected");
// })


            // Promise 5

const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "Rahim", email:"alamrahim010@gmail.com"})
        }else{
            reject('Error: Something went wrong....')
        }        
    },1000)
}) 

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
} 

consumePromiseFive();