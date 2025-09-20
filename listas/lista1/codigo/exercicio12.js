function tabuada(numero) {
    var saida = "";
    for (let contador = 1; contador<=10; contador++){
        saida = saida + contador + "x" + numero + "= "+ numero*contador + ", "
    }
    return saida;
};

module.exports = tabuada;