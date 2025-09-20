const imprime10 = require("../codigo/exercicio10");

describe("Exercício 10 - Imprime 10 vezes", () => {
    test("Verificação comum", () => {
        expect(imprime10(1)).toEqual("1 1 1 1 1 1 1 1 1 1 ");
        expect(imprime10(10)).toEqual("10 10 10 10 10 10 10 10 10 10 ");
    });
});



