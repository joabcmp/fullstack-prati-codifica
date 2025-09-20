const menu = require("../codigo/exercicio04");

describe("Exercício 4 - Menu switch-case", () => {
    test("Verificação comum", () => {
        expect(menu(1)).toBe("Opção 1 selecionada");
        expect(menu(2)).toBe("Opção 2 selecionada");
        expect(menu(3)).toBe("Opção 3 selecionada");
    });

    test("Verifica valor invalido", () => {
        expect(menu(-3)).toBe("Opção inválida");
        expect(menu(4)).toBe("Opção inválida");
    });
});
