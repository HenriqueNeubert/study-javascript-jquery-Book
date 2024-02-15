// const testingConfirm = confirm("Confirmado?")
// let num1 = prompt("Digite aqui!")
// let num2 = prompt("Digite aqui!")

// console.log("hello World!!!");
// console.log(testingConfirm);

// num1 = Number(num1);
// num2 = Number(num2);
// const result = String(num1 + num2)

// console.log(result);

/////////////////////////////

// let varA = 'A' //b
// let varB = 'B' //c
// let varC = 'C' //a
//
// varAtemp = varA
// varBtemp = varB
// varCtemp = varC

// varA = varBtemp
// varB = varCtemp
// varC = varAtemp

//OR

// [varA, varB, varC] = [varB, varC, varA]

// console.log(varA, varB, varC);
// console.log(varA)

// let nameUser = "henrique"
// let newName = replaceName(nameUser)

// function replaceName(nameUser){
//     nameUser = nameUser.replace('henrique', 'Neubert'); // altera param
//     nameUser = nameUser.replace(/e/g, '#'); // g = todos os 'E'
//     nameUser = nameUser.slice(0, 4); //
//     console.log(nameUser + ': Cortado');// para retirar param
//     return nameUser
// }
// console.log(`${newName} tem 18 anos`);

// console.log(nameUser.indexOf('u')); //procura pelo index
// console.log(nameUser.match(/[a-z]/g));
// console.log(nameUser.search(/i/g)); //pesquisa por param

// let number1 = 15.243432
// let number2 = 2.5

// console.log(number1.toString() + number2);
// console.log(number1.toString(2)); //Representação binária
// console.log(number1.toFixed(2));//Arredondar (2 casas)
// console.log(Number.isInteger(number1));// verifica se o número é inteiro

// let temp = number1 * 's'
// console.log(Number.isNaN(temp)); //verifica se a conta é valida via tru/false

// num1 = parseFloat(number1.toFixed(2)) // Transforma em float
// console.log(num1);
// console.log(Number.isInteger(num1));

// let numero1 = 9.542354
// let numero2 = Math.floor(numero1) // Arredondamento para baixo
// let numero2 = Math.ceil(numero1) // Arredondamento para cima
// let numero2 = Math.round(numero1) // Arredondamento para o mais próximo
// console.log(Math.max(1,3,45,6786,676,789,7865756,655,56756,65));//Mostra o maior número
// console.log(Math.min(1,3,45,6786,676,789,7865756,655,56756,65));//Mostra o menor número

// const aleatorio = Math.round(Math.random() * (10 - 5) + 5)
// console.log(aleatorio)

// console.log(numero2);

number();
function number() {
  const number = document.getElementById("number"); //numero impresso
  const numberDigit = parseFloat(prompt("Digit a number:")); //numero digitado
  const numberDivNan = document.getElementById("numberDivNan"); //numero impresso
  const numberNan = isNaN(numberDigit);
  const numberRoundUp = document.getElementById("numberRoundUp");
  const numberRoundDown = document.getElementById("numberRoundDown");
  const numberDecimalTwo = document.getElementById("numberDecimalTwo");
  const numberRoot = document.getElementById("numberRoot");
  const numberInteger = document.getElementById("numberInteger");

  if (numberDigit !== 0 && numberNan == false) {
    number.innerHTML = `<p>1 - This is digited number : ${numberDigit}</p> </br>`;
  } else {
    number.innerHTML = `<p>1 - Error (Please: digite a valid number!): ${numberDigit}</p> </br>`;
  }

  if (numberNan == false) {
    numberDivNan.innerHTML = `<p>2 - This is a number: NaN = ${numberNan}</p> </br>`;
  }
  if (numberNan == true) {
    numberDivNan.innerHTML = `<p>2 - This is'not a number: NaN = ${numberNan}</p> </br>`;
  }

  numberRoundUp.innerHTML = `<p>3 - Number round up: ${Math.ceil(
    numberDigit
  )}</p> </br>`;
  numberRoundDown.innerHTML = `<p>4 - Number round down: ${Math.floor(
    numberDigit
  )}</p> </br>`;
  numberDecimalTwo.innerHTML = `<p>5 - Number in two decimal: ${numberDigit.toFixed(
    2
  )}</p> </br>`;
  numberRoot.innerHTML = `<p>6 - Root: ${numberDigit ** 0.5} </br></p>`;

  if (Number.isInteger(numberDigit) == true) {
    numberInteger.innerHTML = `<p>7 - Number is interager? Yes, the number is integer</p> </br>`;
  } else {
    numberInteger.innerHTML = `<p>7 - Number is interager? No, the number not is integer</p> </br>`;
  }
}
