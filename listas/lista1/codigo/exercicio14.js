function fatorial(numero) {
    if (isNaN(numero) || numero<0 ||typeof numero !== "number" || !Number.isInteger(numero)) return "entrada inválida";

    let resultado = 1;
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }

    return resultado;
}

module.exports = fatorial;
