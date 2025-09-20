const fatorial = require("../codigo/exercicio14");

describe("Exercício 14 - Fatorial", () => {
    test("verificação comum", () => {
        expect(fatorial(5)).toBe(120);
        expect(fatorial(0)).toBe(1);
        expect(fatorial(1)).toBe(1);
        expect(fatorial(10)).toBe(3628800);
    });

    test("Verifica valor invalido", () => {
        expect(fatorial(-2)).toBe("entrada inválida");
        expect(fatorial(4.5)).toBe("entrada inválida");
        expect(fatorial("abc")).toBe("entrada inválida");
        expect(fatorial(null)).toBe("entrada inválida");
        expect(fatorial(undefined)).toBe("entrada inválida");
        expect(fatorial(NaN)).toBe("entrada inválida");

    });
});
