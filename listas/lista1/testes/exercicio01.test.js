const ehPar = require("../codigo/exercicio01");

test("Verifica se 4 é par", () => {
    expect(ehPar(4)).toBe("par");
});

test("Verifica se 5 é ímpar", () => {
    expect(ehPar(5)).toBe("impar");
});

test("Zero deve ser considerado par", ()=> {
    expect(ehPar(0)).toBe("par");
});

test("Números negativos funcionam corretamente", ()=> {
    expect(ehPar(-1)).toBe("impar");
    expect(ehPar(-2)).toBe("par");
});
