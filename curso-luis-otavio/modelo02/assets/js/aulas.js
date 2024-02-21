function ternaria(){
    const pontoUsuario = 1000
    const nivelUsuario = pontoUsuario >= 100 ? 'Usuário Vip' : 'Usuário Normal'

    const corUsuario = null
    const corPadrao = corUsuario || 'Preto'
    console.log(nivelUsuario, corPadrao);
}

// ternaria()

function data(){
    // // const data = new Date()
    // // console.log(data.toString()); 
                        //a, m, d, M, s, ms
    function teste(){
        const data = new Date(2019, 3, 20, 15,14,27)
        console.log('Dia', data.getDate());
        console.log('Dia', data.getMonth());//mês começa do 0
        console.log('Ano', data.getFullYear());
        console.log('Dia semana', data.getDay()); //0 = domingo e 6 = sábado
        //...
    }
    //teste()

    function zeroAEsquerda (num){
        return num >= 10 ? num : `0${num}`
    }

    function formataData(data){
        const dia = zeroAEsquerda(dataAtual.getDate())
        const mes = zeroAEsquerda(dataAtual.getMonth() +1)
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


function switchAndCase(){
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

function exerciseDateSwitch(){
    let titleDate = document.querySelector('#titleDate')
    titleDate.innerHTML = 'HENRIQUE'
}
exerciseDateSwitch()