
// Delay

const sayrahim = function(){
    console.log("Rahim");
}

setTimeout(sayrahim, 2000)

const changeText = function(){
    document.querySelector('h1').innerHTML = "Best Js Series"
}

const changeMe = setTimeout(changeText, 2000)

clearTimeout(changeMe)