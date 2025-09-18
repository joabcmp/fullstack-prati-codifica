function classIdade(numero) {
if (numero >= 0 && numero < 13) return "crianca";
    if (numero >= 13 && numero < 18) return "adolescente";
    if (numero >= 18 && numero < 50) return "adulto";
    if (numero >= 50) return "idoso";
    return "invalido";
}

module.exports = classIdade;