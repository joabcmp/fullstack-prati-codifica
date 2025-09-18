function ordena(valor1, valor2) {
    if (valor1>valor2) return valor2 + ", " + valor1;
    else if (valor1<valor2) return valor1 + ", " + valor2
    else return "valores iguais";
};

module.exports = ordena;

