const tipoTriangulo = require("../codigo/exercicio06");

describe("Exercício 6 - Classifica triangulo", () => {
    test("Verificação comum", () => {
        expect(tipoTriangulo(5,5,5)).toBe("equilatero");
        expect(tipoTriangulo(3,5,5)).toBe("isoceles");
        expect(tipoTriangulo(5,3,5)).toBe("isoceles");
        expect(tipoTriangulo(5,5,3)).toBe("isoceles");
        expect(tipoTriangulo(3,4,5)).toBe("escaleno");
    });

    test("Verifica valor invalido", () => {
        expect(tipoTriangulo(0, 5, 5)).toBe("valor invalido");
        expect(tipoTriangulo(5, -5, 5)).toBe("valor invalido");
        expect(tipoTriangulo(1, 2, 8)).toBe("Os lados não formam um triângulo");
    });
});



