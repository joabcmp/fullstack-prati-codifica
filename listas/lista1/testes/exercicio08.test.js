const ordena = require("../codigo/exercicio08");

test("Verificação comum", () => {
    expect(ordena(5,7)).toBe("5, 7");
    expect(ordena(13,1)).toBe("1, 13");
    expect(ordena(12,-12)).toBe("-12, 12");
    expect(ordena(-3,0)).toBe("-3, 0");
});

test("Verifica valor invalido", () => {
    expect(ordena(3,3)).toBe("valores iguais");

});

