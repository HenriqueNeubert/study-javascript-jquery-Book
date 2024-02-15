// testingCode01()
function testingCode01() {
  const testingConfirm = confirm("Confirmado?");
  let num1 = prompt("Digite aqui!");
  let num2 = prompt("Digite aqui!");

  console.log("hello World!!!");
  console.log(testingConfirm);

  num1 = Number(num1);
  num2 = Number(num2);
  const result = String(num1 + num2);

  console.log(result);
}

// testingCode02()
function testingCode02() {
  let varA = "A"; //b
  let varB = "B"; //c
  let varC = "C"; //a

  varAtemp = varA;
  varBtemp = varB;
  varCtemp = varC;

  varA = varBtemp;
  varB = varCtemp;
  varC = varAtemp;

  OR[(varA, varB, varC)] = [varB, varC, varA];

  console.log(varA, varB, varC);
  console.log(varA);
}

// testingCode03()
function testingCode03() {
  let nameUser = "henrique";
  let newName = replaceName(nameUser);

  function replaceName(nameUser) {
    nameUser = nameUser.replace("henrique", "Neubert"); // altera param
    nameUser = nameUser.replace(/e/g, "#"); // g = todos os 'E'
    nameUser = nameUser.slice(0, 4); //
    console.log(nameUser + ": Cortado"); // para retirar param
    return nameUser;
  }
  console.log(`${newName} tem 18 anos`);

  console.log(nameUser.indexOf("u")); //procura pelo index
  console.log(nameUser.match(/[a-z]/g));
  console.log(nameUser.search(/i/g)); //pesquisa por param
}

// testingCode04()
function testingCode04() {
  let number1 = 15.243432;
  let number2 = 2.5;

  console.log(number1.toString() + number2);
  console.log(number1.toString(2)); //Representação binária
  console.log(number1.toFixed(2)); //Arredondar (2 casas)
  console.log(Number.isInteger(number1)); // verifica se o número é inteiro

  let temp = number1 * "s";
  console.log(Number.isNaN(temp)); //verifica se a conta é valida via tru/false

  num1 = parseFloat(number1.toFixed(2)); // Transforma em float
  console.log(num1);
  console.log(Number.isInteger(num1));

  let numero1 = 9.542354;
  // let numero2 = Math.floor(numero1) // Arredondamento para baixo
  // let numero2 = Math.ceil(numero1) // Arredondamento para cima
  let numero2 = Math.round(numero1); // Arredondamento para o mais próximo
  console.log(Math.max(1, 3, 45, 6786, 676, 789, 7865756, 655, 56756, 65)); //Mostra o maior número
  console.log(Math.min(1, 3, 45, 6786, 676, 789, 7865756, 655, 56756, 65)); //Mostra o menor número

  const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
  console.log(aleatorio);

  console.log(numero2);
}

// testingCode05();
function testingCode05() {
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
    number.innerHTML = `<p>1 - This is the number typed : ${numberDigit}</p> </br>`;
  } else {
    number.innerHTML = `<p>1 - Error (Please: enter a valid number!): ${numberDigit}</p> </br>`;
  }

  if (numberNan == false) {
    numberDivNan.innerHTML = `<p>2 - This is the number: NaN = ${numberNan}</p> </br>`;
  }
  if (numberNan == true) {
    numberDivNan.innerHTML = `<p>2 - This is not the number: NaN = ${numberNan}</p> </br>`;
  }

  numberRoundUp.innerHTML = `<p>3 - Number round up: ${Math.ceil(
    numberDigit
  )}</p> </br>`;
  numberRoundDown.innerHTML = `<p>4 - Number round down: ${Math.floor(
    numberDigit
  )}</p> </br>`;
  numberDecimalTwo.innerHTML = `<p>5 - Number in two decimal places: ${numberDigit.toFixed(
    2
  )}</p> </br>`;
  numberRoot.innerHTML = `<p>6 - Root: ${numberDigit ** 0.5} </br></p>`;

  if (Number.isInteger(numberDigit) == true) {
    numberInteger.innerHTML = `<p>7 - Is the Number interager? Yes, the number is integer</p> </br>`;
  } else {
    numberInteger.innerHTML = `<p>7 - Is the Number interager? No, the number is not integer</p> </br>`;
  }
}

// ARRAYS //
// testingCode06();
function testingCode06() {
  const alunos = ["Henrique", "Carol", "Luis"];
  alunos[0] = "Neubert";
  alunos[alunos.length] = "Carlos";
  alunos[alunos.length] = "João"; //para adicionar
  alunos.push("Otavio"); // melhor forma para adicionar
  alunos.unshift("José"); //adiciona na frente
  const removido = alunos.pop(); //remove do fim e salva na const
  const removeInicio = alunos.shift(); // remove do inicio e salva na cons
  delete alunos[1]; //deleta item, mas mantém um index vazio no array
  // console.log(`Slice: ${alunos.slice(0,3)}`);
  // console.log(`Slice: ${alunos.slice(0,-1)}`);

  console.log(alunos);

  // console.log(alunos);
  // console.log(alunos[0]); //altera
  // console.log(alunos[1]);
}

// testingCode07();
function testingCode07() {
  const callHello = hello("Henrique");
  const callSum = sum(1, 4);

  function hello(name) {
    return `Good Morning ${name}`;
  }
  console.log(callHello);

  function sum(x = 1, y = 1) {
    const result = x + y;

    return result;
  }
  console.log(callSum);

  const root = function (n) {
    return n ** 0.5;
  };
  console.log(root(9));

  const rootArrow = (n) => n ** 0.5;
  console.log(rootArrow(9));
}

// testingCode08()
function testingCode08() {
  function createPerson(name, subname, age) {
    return {
      name: name,
      subname: subname,
      age: age,
    };
  }

  const person1 = createPerson("John", "Wayne", 55);
  const person2 = createPerson("Marla", "Singer", 34);
  const person3 = createPerson("Mia", "Wallace", 30);

  console.log(person1.name, person1.subname);
  console.log(person2.name, person2.subname);
  console.log(person3.name, person3.subname);

  const createPerson2 = {
    name: "John",
    subname: "Wayne",
    age: 55,

    fala() {
      console.log(
        `I'm Batman, i'm ${this.name} ${this.subname}, i have ${this.age} years old`
      );
    },

    incrementAge() {
      this.age++;
    },
  };

  createPerson2.fala();
  createPerson2.incrementAge();
  createPerson2.fala();
  createPerson2.incrementAge();
  createPerson2.fala();
  createPerson2.incrementAge();
  createPerson2.fala();
}

testingCode09();
function testingCode09() {
  function createRegister() {
    const form = document.querySelector(".form");
	const result = document.querySelector(".result")
	const person = []

    // form.onsubmit = function (event) {
	// 	event.preventDefault();
	// };

	function eventForm(event){
		event.preventDefault();

		const name = form.querySelector(".name");
		const subname = form.querySelector(".subname");
		const weight = form.querySelector(".weight");
		const height = form.querySelector(".height");

		const createPerson = {			
			name: name.value,
			subname: subname.value,
			weight: weight.value,
            height: height.value
		}

		person.push(createPerson)

		console.log(person);
		result.innerHTML = 
		`Name: ${createPerson.name} </br>
		Subname: ${createPerson.subname} <br>
		Weight: ${createPerson.weight} <br>
	    Height: ${createPerson.height}
		</br></br></br>`
		console.log(createPerson.name);


	}

	form.addEventListener('submit', eventForm)
	}
  createRegister();
}
