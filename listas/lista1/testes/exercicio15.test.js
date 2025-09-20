const fibonacci = require("../codigo/exercicio15");

describe("Exercício 15 - Fibonacci", () => {
    test("verificação comum", () => {
        expect(fibonacci()).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});
