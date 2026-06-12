const myNums = [1,2,3,]

const myTotal = myNums.reduce(function (acc, currval) 
{
    console.log(`acc: ${acc} and CurrVal: ${currval}`)
    return acc + currval;
}, 0)   // 0 is acc n 

console.log(myTotal)    // 6