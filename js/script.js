//prendo gli elementi dal DOM
let body = document.querySelector('body')
let bulb = document.getElementById('bulb')
let button = document.querySelector('.btn')

//definisco il comportamento del bottone
button.addEventListener('click', function () {


    //effettuo il controllo per rendere ripetibile l'accensione
    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white"
        button.innerHTML = 'Spegni la luce'
        bulb.src = '../img/yellow_lamp.png'
    } else {
        body.style.backgroundColor = "black"
        button.innerHTML = 'Accendi la luce'
        bulb.src = '../img/white_lamp.png'
    }

})