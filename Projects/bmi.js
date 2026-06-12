const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `Please give a Valid Height ${height}`
    }

    if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please give a Valid Weight ${weight}`
    }
    else{
        var bmi = (weight/ ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }    

    const messege = document.querySelector('#messege')
    if(bmi < 18.6){
        messege.innerHTML = 'Under Weight!!!'
    }

    else if(bmi >= 18.6 && bmi<=24.9){
        messege.innerHTML = 'Normal Range'
    }

    else{
        messege.innerHTML = 'Overweight'
    }
})





