function imprime10(numero) {
    var saida = "";
    for (let contador=10; contador>0; contador--){
        saida = saida + numero + " ";
    }

    return saida;
};

module.exports = imprime10;