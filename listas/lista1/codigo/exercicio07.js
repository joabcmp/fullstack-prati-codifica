function valorMacas(quantidade) {
    
if(quantidade>=12) return 0.25*quantidade;
if(quantidade<12 && quantidade>=0) return 0.30*quantidade;
else return "valor invalido";

};

module.exports = valorMacas;