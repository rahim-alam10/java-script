// Default False Values (false, 0,-0, BigInt, 0n, "", null, undefined, NaN)
// Default True Values (true, 1,[], "0", 'false', " ", {}, function(){ })
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}

let val1;
val1= 5 ?? 10               // ?? Will take the right value and store in the desired variable
val1 = null ?? 10           // val1=10
val1 = undefined ?? 15      // val1=15
