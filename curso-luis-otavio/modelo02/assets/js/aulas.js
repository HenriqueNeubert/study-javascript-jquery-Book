function ternaria(){
    const pontoUsuario = 1000
    const nivelUsuario = pontoUsuario >= 100 ? 'Usuário Vip' : 'Usuário Normal'

    const corUsuario = null
    const corPadrao = corUsuario || 'Preto'
    console.log(nivelUsuario, corPadrao);
}

// ternaria()
