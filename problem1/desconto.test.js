const calcularDesconto = require('./desconto');

describe("Teste de cálculo de desconto", () => {
test("Deve calcular corretamente o desconto de 10% sobre 100", () => {

const resultado = calcularDesconto(100, 10);

expect(resultado.valorDesconto).toBe(10);
expect(resultado.precoFinal).toBe(90);
expect(resultado.economia).toBe(10);

});

test("Deve calcular corretamente desconto de 25% sobre 200", () => {

const resultado = calcularDesconto(200, 25);

expect(resultado.valorDesconto).toBe(50);
expect(resultado.precoFinal).toBe(150);

});

test("Deve lançar erro para valores negativos", () => {
expect(() => calcularDesconto(-100, 10)).toThrow();
expect(() => calcularDesconto(100, -10)).toThrow();

});

test("Desconto 0% deve manter o preço original", () => {

const resultado = calcularDesconto(100, 0);
expect(resultado.precoFinal).toBe(100);


});
});