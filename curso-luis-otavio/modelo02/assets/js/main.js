let inputWeigth = document.querySelector('#weigth')
let inputHeigth = document.querySelector('#heigth')
let mainFormIMC = document.querySelector('#mainFormIMC')
let messageResult = document.querySelector('#messageResult')

function eventForm(event) {
    event.preventDefault();
    weigth = inputWeigth.value
    heigth = inputHeigth.value

    checkInputValue(weigth, heigth)
}
mainFormIMC.addEventListener("submit", eventForm);


function calcIMC(weigth, heigth){
    let imc = (weigth / heigth) / heigth

    checkIMC(imc) 
}

function checkIMC(imc){
    if (imc < 18.5) {
        messageIMC(`<p>Abaixo do Peso: IMC = ${imc.toFixed(2)}</p>`)
    }else if(imc >= 18.5 && imc <= 24.9){
        messageIMC(`<p>Peso Normal: IMC = ${imc.toFixed(2)}</p>`)
    }else if(imc >= 25 && imc <= 29.9){
        messageIMC(`<p>Sobrepeso: IMC = ${imc.toFixed(2)}</p>`)
    }else if(imc >= 30 && imc <= 34.9){
        messageIMC(`<p>Obesidade Grau 1: IMC = ${imc.toFixed(2)}</p>`)
    }else if (imc >= 35 && imc <= 39.9){
        messageIMC(`<p>Obesidade Grau 2: IMC = ${imc.toFixed(2)}</p>`)
    }else if (imc >= 40){
        messageIMC(`<p>Obesidade Grau 3: IMC = ${imc.toFixed(2)}</p>`)
    }
}

function messageIMC(message){
    cleanMessage()
    messageResult.innerHTML += message
}

function cleanMessage(){
    messageResult.innerHTML = ''
}

function checkInputValue(weigth, heigth){
    
    if(weigth !== Number || heigth !== Number){
        cleanMessage()
        messageIMC('Você não digitou um número, tente novamente!')
        if(weigth === '' && heigth === ''){
            cleanMessage()
            messageIMC('Digite Seu peso e Sua Altura!')
        }
    }else if(weigth === ''){
        cleanMessage()
        messageIMC('Digite seu Peso!')
    }else if(heigth === ''){
        cleanMessage()
        messageIMC('Digite sua Altura!')
    }else{
        calcIMC(weigth, heigth)
    }
}


