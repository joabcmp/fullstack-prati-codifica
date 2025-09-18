const classIdade = require("../codigo/exercicio02");

test("Verificacao comum", () => {
    expect(classIdade(0)).toBe("crianca");
    expect(classIdade(12)).toBe("crianca");
    expect(classIdade(13)).toBe("adolescente");
    expect(classIdade(17)).toBe("adolescente");
    expect(classIdade(18)).toBe("adulto");
    expect(classIdade(49)).toBe("adulto");
    expect(classIdade(50)).toBe("idoso");
    expect(classIdade(70.5)).toBe("idoso");
});

test("Verifica idade negativa", () => {
    expect(classIdade(-5)).toBe("invalido");
});