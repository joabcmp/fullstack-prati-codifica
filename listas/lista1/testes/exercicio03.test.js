const verifAprov = require("../codigo/exercicio03");

describe("Exercício 3 - Verifica aprovação", () => {
    test("Verificação comum", () => {
        expect(verifAprov(3.9)).toBe("reprovado");
        expect(verifAprov(4)).toBe("recuperacao");
        expect(verifAprov(6.9)).toBe("recuperacao");
        expect(verifAprov(7)).toBe("aprovado");
    });

    test("Verifica valor invalido", () => {
        expect(verifAprov(-3)).toBe("invalido");
    });
});

