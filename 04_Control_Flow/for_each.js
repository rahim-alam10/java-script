const coding = ["js", "rubby", "Java", "Python", "C++"]
coding.forEach( function (val){
    //console.log(val);          // js... C++
})

// Using Arrow Function

coding.forEach( (item)=> {
    //console.log(item);
})

//using Own Function Declartion

function printme(item){
    console.log(item);
}
coding.forEach(printme)         // here we are giving reference of function(printme)
                // For each loop donot returns anything                