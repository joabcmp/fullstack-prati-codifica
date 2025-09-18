function tipoTriangulo(valorA, valorB, valorC) {
    //verifica os valores
    if (valorA<=0 || valorB<=0 || valorA<=0) return "valor invalido";

    // Verifica se forma triangulo
    if (valorB + valorC<valorA || valorA + valorC<valorB || valorA + valorB<valorC) return "Os lados não formam um triângulo";

    else if (valorA === valorB && valorB === valorC) return "equilatero";
    else if (valorA === valorB || valorB === valorC || valorA == valorC) return "isoceles";
    else return "escaleno";

};

module.exports = tipoTriangulo;