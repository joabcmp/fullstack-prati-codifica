function contagem10() {
    var contagem = "";
    for (let contador=10; contador>0; contador--){
        contagem = contagem + contador + " ";
    }

    return contagem;
};

module.exports = contagem10;