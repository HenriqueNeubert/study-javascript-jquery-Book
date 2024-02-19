let inputWeigth = document.querySelector('#weigth')
let inputHeigth = document.querySelector('#heigth')
let mainFormIMC = document.querySelector('#mainFormIMC')


function eventForm(event) {
    event.preventDefault();

    let weigth = parseFloat(inputWeigth.value)
    let heigth = parseFloat(inputHeigth.value)
    let imc = (weigth / heigth) / heigth

    calcIMC(imc)

}
mainFormIMC.addEventListener("submit", eventForm);


function calcIMC(imc){

    if (imc < 18.5) {
        console.log(`Abaixo do Peso: IMC = ${imc.toFixed(2)}`);
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log(`Peso Normal: IMC = ${imc.toFixed(2)}`);
    }else if(imc >= 25 && imc <= 29.9){
        console.log(`Sobrepeso: IMC = ${imc.toFixed(2)}`);
    }else if(imc >= 30 && imc <= 34.9){
        console.log(`Obesidade Grau 1: IMC = ${imc.toFixed(2)}`);
    }else if (imc >= 35 && imc <= 39.9){
        console.log(`Obesidade Grau 2: IMC = ${imc.toFixed(2)}`);
    }else if (imc >= 40){
        console.log(`Obesidade Grau 3: IMC = ${imc.toFixed(2)}`);
    }

    return imc
}



