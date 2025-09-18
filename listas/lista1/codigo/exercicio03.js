function verifAprov(numero) {
    if (numero >= 0 && numero < 4) return "reprovado";
    else if (numero >= 4 && numero < 7) return "recuperacao";
    else if (numero>=7 && numero<10) return "aprovado";
    return "invalido";
}

module.exports = verifAprov;