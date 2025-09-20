function mediaAteZero(numeros) {
    if (!Array.isArray(numeros)) return "entrada inválida";

    let soma = 0;
    let count = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== "number" || isNaN(numeros[i])) {
            return "todos os valores devem ser números válidos";
        }
        if (numeros[i] === 0) break;
        soma += numeros[i];
        count++;
    }

    if (count === 0) return "nenhum número válido antes do zero";
    return soma / count;
}

module.exports = mediaAteZero;
