//prendo gli elementi dal DOM
let body = document.querySelector('body')
let bulb = document.getElementById('bulb')
let button = document.querySelector('.btn')

//definisco il comportamento del bottone
button.addEventListener('click', function(){

    
    body.style.backgroundColor = "white"
    button.innerHTML = 'Spegni la luce'
    bulb.src = '../img/yellow_lamp.png'

})