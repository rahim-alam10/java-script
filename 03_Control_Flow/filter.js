const nums=[1,2,3,4,5,6,7,8]

const NewNums = nums.filter( (num) => num >4 )
//console.log(NewNums)

// If we usae {} in a function declaration then we have to return a value
const NewNums2 = nums.filter( (num) => 
    {return num >4} )
//console.log(NewNums2)

// Using For each

const Newnums=[]

nums.forEach( (num) => {
    if (num>4){
        Newnums.push(num)
    }
})

console.log(NewNums)

