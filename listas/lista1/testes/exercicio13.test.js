const mediaAteZero = require("../codigo/exercicio13");

describe("Exercício 13 - Média de números até zero", () => {
    test("verificação comum", () => {
        expect(mediaAteZero([2, 4, 6, 0, 10])).toBe(4);
        expect(mediaAteZero([1.5, 2.5, 3.5, 0])).toBeCloseTo(2.5);
        expect(mediaAteZero([5, 5, 0, 100, 200])).toBe(5);
        expect(mediaAteZero([25, 15, 10, 100, 200])).toBe(70);

    });
    test("Verifica valor invalido", () => {
        expect(mediaAteZero("123")).toBe("entrada inválida");
        expect(mediaAteZero([1, 2, "x", 0])).toBe("todos os valores devem ser números válidos");
        expect(mediaAteZero([0, 1, 2, 3])).toBe("nenhum número válido antes do zero");
    });
});
