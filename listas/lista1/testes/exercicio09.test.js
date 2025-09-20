const contagem10 = require("../codigo/exercicio09");

describe("Exercício 9 - Média de números até zero", () => {
    test("Verificação comum", () => {
        expect(contagem10()).toEqual("10 9 8 7 6 5 4 3 2 1 ");
    });
});



