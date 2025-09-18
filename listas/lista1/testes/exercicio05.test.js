const calculaIMC = require("../codigo/exercicio05");

test("Verificação comum", () => {
    expect(calculaIMC(45, 1.70)).toBe("magreza");
    expect(calculaIMC(82, 1.85)).toBe("normal");
    expect(calculaIMC(85, 1.70)).toBe("sobrepeso");
    expect(calculaIMC(110, 1.70)).toBe("obesidade");
    expect(calculaIMC(130, 1.60)).toBe("obesidade grave");
});

test("Verifica valor invalido", () => {
    expect(calculaIMC(0, 1.70)).toBe("invalido");
    expect(calculaIMC(45, 0)).toBe("invalido");
    expect(calculaIMC(-45, 1.70)).toBe("invalido");
    expect(calculaIMC(45, -1.70)).toBe("invalido");
});

