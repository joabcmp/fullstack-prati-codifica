const ehPar = require("../codigo/exercicio01");

describe("Exercício 1 - Verifica par ou impar", () => {
    test("Verificação comum", () => {
        expect(ehPar(4)).toBe("par");
        expect(ehPar(5)).toBe("impar");
        expect(ehPar(0)).toBe("par");
        expect(ehPar(-1)).toBe("impar");
        expect(ehPar(-2)).toBe("par");
    });
});


