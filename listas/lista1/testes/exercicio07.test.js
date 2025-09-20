const valorMacas = require("../codigo/exercicio07");

describe("Exercício 7 - Calcula venda maçãs", () => {
    test("Verificação comum", () => {
        expect(valorMacas(5)).toBe(1.5);
        expect(valorMacas(11)).toBe(3.3);
        expect(valorMacas(12)).toBe(3);
        expect(valorMacas(25)).toBe(6.25);
    });

    test("Verifica valor invalido", () => {
        expect(valorMacas(0)).toBe(0);
        expect(valorMacas(-3)).toBe("valor invalido");
    });
});