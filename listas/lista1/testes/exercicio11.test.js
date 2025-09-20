const calcula = require("../codigo/exercicio11");


describe("Exercício 11 - Soma 5 numeros", () => {
    test("Verificação comum", () => {
        expect(calcula(1, 1, 1, 1, 1)).toEqual(5);
        expect(calcula(10, 11, 12, 13, 14)).toEqual(60);
        expect(calcula(-3, 0, 3, 9, -3)).toEqual(6);
    });
});