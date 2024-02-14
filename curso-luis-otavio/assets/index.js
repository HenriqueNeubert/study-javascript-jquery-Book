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


let nameUser = "henrique"
let newName = replaceName(nameUser)

function replaceName(nameUser){
    nameUser = nameUser.replace('henrique', 'Neubert'); // altera param
    nameUser = nameUser.replace(/e/g, '#'); // g = todos os 'E'
    nameUser = nameUser.slice(0, 4); // 
    console.log(nameUser + ': Cortado');// para retirar param
    return nameUser
}
console.log(`${newName} tem 18 anos`);

// console.log(nameUser.indexOf('u')); //procura pelo index
// console.log(nameUser.match(/[a-z]/g));
// console.log(nameUser.search(/i/g)); //pesquisa por param
