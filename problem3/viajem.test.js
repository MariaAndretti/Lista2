const calcularCustoViagem = require('./viagem');

describe("Teste de cálculo de custo de viagem", () => {
test("Deve calcular corretamente o custo para 300km, 12km/L, R$5.00", () => {

const resultado = calcularCustoViagem(300, 12, 5);

expect(resultado.litrosNecessarios).toBe(25);
expect(resultado.custoTotal).toBe(125);
expect(resultado.custoIdaVolta).toBe(250);

});

test("Deve calcular corretamente para 100km, 10km/L, R$6.00", () => {
const resultado = calcularCustoViagem(100, 10, 6);
expect(resultado.litrosNecessarios).toBe(10);
expect(resultado.custoTotal).toBe(60);

});

test("Deve lançar erro para valores inválidos", () => {
expect(() => calcularCustoViagem(0, 10, 5)).toThrow();
expect(() => calcularCustoViagem(100, 0, 5)).toThrow();
expect(() => calcularCustoViagem(100, 10, 0)).toThrow();

});
});
