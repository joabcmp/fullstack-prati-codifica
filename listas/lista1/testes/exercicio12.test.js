const tabuada = require("../codigo/exercicio12");

describe("Exercício 12 - tabuada", () => {
    test("Verificação comum", () => {
        expect(tabuada(1)).toEqual("1x1= 1, 2x1= 2, 3x1= 3, 4x1= 4, 5x1= 5, 6x1= 6, 7x1= 7, 8x1= 8, 9x1= 9, 10x1= 10, ");
        expect(tabuada(3)).toEqual("1x3= 3, 2x3= 6, 3x3= 9, 4x3= 12, 5x3= 15, 6x3= 18, 7x3= 21, 8x3= 24, 9x3= 27, 10x3= 30, ");
    });
});


