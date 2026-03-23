const calcularLucro = require('./lucro')

describe("Teste de cálculo de lucro", () => {
test("Deve calcular lucro corretamente", () => {

const resultado = calcularLucro(50, 80);

expect(resultado.lucro).toBe(30);
expect(resultado.margemLucro).toBeCloseTo(60);

});

test("Lucro zero quando preço igual ao custo", () => {
const resultado = calcularLucro(100, 100);

expect(resultado.lucro).toBe(0);
expect(resultado.margemLucro).toBe(0);

});

test("Prejuízo quando preço menor que custo", () => {
const resultado = calcularLucro(100, 80);

expect(resultado.lucro).toBe(-20);
expect(resultado.margemLucro).toBeCloseTo(-20);

});

test("Deve lançar erro para valores negativos", () => {
expect(() => calcularLucro(-50, 80)).toThrow();
expect(() => calcularLucro(50, -80)).toThrow();

});
});