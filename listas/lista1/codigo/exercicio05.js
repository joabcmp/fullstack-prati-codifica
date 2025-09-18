function calculaIMC(peso, altura) {
    if (peso<=0 || altura <= 0) return "invalido";
    const imc = peso/(altura**2);

    if (imc<18.5) return "magreza";
    else if (imc>=18.5 && imc<25) return "normal";
    else if (imc>=25 && imc<30) return "sobrepeso";
    else if (imc>=30 && imc<40) return "obesidade";
    else if (imc>=40) return "obesidade grave";
};

module.exports = calculaIMC;