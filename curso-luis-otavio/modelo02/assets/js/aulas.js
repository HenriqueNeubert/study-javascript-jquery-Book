function ternaria() {
  const pontoUsuario = 1000
  const nivelUsuario = pontoUsuario >= 100 ? 'Usuário Vip' : 'Usuário Normal'

  const corUsuario = null
  const corPadrao = corUsuario || 'Preto'
  console.log(nivelUsuario, corPadrao);
}
// ternaria()

function data() {
  // // const data = new Date()
  // // console.log(data.toString()); 
  //a, m, d, M, s, ms
  function teste() {
    const data = new Date(2019, 3, 20, 15, 14, 27)
    console.log('Dia', data.getDate());
    console.log('Dia', data.getMonth());//mês começa do 0
    console.log('Ano', data.getFullYear());
    console.log('Dia semana', data.getDay()); //0 = domingo e 6 = sábado
    //...
  }
  //teste()

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
  }

  function formataData(data) {
    const dia = zeroAEsquerda(dataAtual.getDate())
    const mes = zeroAEsquerda(dataAtual.getMonth() + 1)
    const ano = zeroAEsquerda(dataAtual.getFullYear())
    const hora = zeroAEsquerda(dataAtual.getHours)
    const min = zeroAEsquerda(dataAtual.getMinutes)
    const seg = zeroAEsquerda(dataAtual.getSeconds)

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
  }
  const dataAtual = new Date()
  dataBrasil = formataData(dataAtual)
  console.log(dataAtual)
}
// data()

function switchAndCase() {
  let diaSemana = 0;
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      break;
    case 1:
      diaSemanaTexto = "Segunda";
      break;
    case 2:
      diaSemanaTexto = "Terça"
      break;
    default:
      diaSemanaTexto = "Padrão";
      break;
  }
  console.log(diaSemanaTexto);
}
// switchAndCase()

function exerciseDateSwitch() {
  let titleDate = document.querySelector('#titleDate')
  const data = new Date()

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
  }
  function getDayWeek(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
      case 0:
        diaSemanaTexto = 'domingo';
        return diaSemanaTexto;
      case 1:
        diaSemanaTexto = 'segunda';
        return diaSemanaTexto;
      case 2:
        diaSemanaTexto = 'terça';
        return diaSemanaTexto;
      case diaSemanaTexto:
        diaSemanaTexto = 'quarta';
        return diaSemanaTexto;
      case 4:
        diaSemanaTexto = 'quinta';
        return diaSemanaTexto;
      case 5:
        diaSemanaTexto = 'sexta';
        return diaSemanaTexto;
      case 6:
        diaSemanaTexto = 'sábado';
        return diaSemanaTexto;
    }
  }


  function getMes(numeroMes) {

    let nomeMes;

    switch (numeroMes) {
      case 0:
        nomeMes = 'janeiro';
        return nomeMes;
      case 1:
        nomeMes = 'fevereiro';
        return nomeMes;
      case 2:
        nomeMes = 'março';
        return nomeMes;
      case 3:
        nomeMes = 'abril';
        return nomeMes;
      case 4:
        nomeMes = 'maio';
        return nomeMes;
      case 5:
        nomeMes = 'junho';
        return nomeMes;
      case 6:
        nomeMes = 'julho';
        return nomeMes;
      case 7:
        nomeMes = 'agosto';
        return nomeMes;
      case 8:
        nomeMes = 'setembro';
        return nomeMes;
      case 9:
        nomeMes = 'outubro';
        return nomeMes;
      case 10:
        nomeMes = 'novembro';
        return nomeMes;
      case 11:
        nomeMes = 'dezembro';
        return nomeMes;
    }
  }
  getMes(2)
  titleDate.innerHTML = ''
  titleDate.innerHTML += `${getDayWeek(data.getDay()) + ' '}`
  titleDate.innerHTML += `${data.getDay() + ' de '}`
  titleDate.innerHTML += `${getMes(data.getMonth()) + ' de '}`
  titleDate.innerHTML += `${data.getFullYear()} ${zeroAEsquerda(data.getHours()) + ":"}`
  titleDate.innerHTML += `${zeroAEsquerda(data.getMinutes())}`
}
// exerciseDateSwitch()

function exerciseDateSwitchResponse() {
  const titleDate = document.querySelector('#titleDate')
  const data = new Date()
  const options = {
    dateStyle: 'full'
    // timeStyle: 'short'
  }
  // titleDate.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'full' })
  titleDate.innerHTML = data.toLocaleDateString('pt-BR', options)
}
// exerciseDateSwitchResponse()

function exerciseDateSwitch2() {
  let titleDate = document.querySelector('#titleDate')
  const data = new Date()

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
  }
  function getDayWeek(diaSemana) {
    let diaSemanaTexto = ['Domingo', 'segunda', 'terça', 'quarta', 'quinta']
    
    return diaSemanaTexto[diaSemana]
  }

  function getMes(numeroMes) {
    let nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril']
    
    return nomeMes[numeroMes]
  }
  getMes(2)
  titleDate.innerHTML = ''
  titleDate.innerHTML += `${getDayWeek(data.getDay()) + ' '}`
  titleDate.innerHTML += `${data.getDay() + ' de '}`
  titleDate.innerHTML += `${getMes(data.getMonth()) + ' de '}`
  titleDate.innerHTML += `${data.getFullYear()} ${zeroAEsquerda(data.getHours()) + ":"}`
  titleDate.innerHTML += `${zeroAEsquerda(data.getMinutes())}`
}
// exerciseDateSwitch2()

function desestruturacao(){

  const pessoa = {
    name: 'Jhon',
    subName: 'Doe',
    age: 30,
    address: {
      street: 'Av Brazil',
      number: 312
    }
  }

  const {name, ...resto} = pessoa
  console.log(name, resto);


  // const { name = 'Não existe', subName } = pessoa
  // const { address: {street: st, number: n = 25}, address } = pessoa

  // console.log(name, subName)
  // console.log(st, n)
  // console.log(address)

}
desestruturacao()