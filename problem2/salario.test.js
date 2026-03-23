const calcularSalarioComBonus = require('./salario');

describe("Teste de cálculo de salário com bônus", () => {
test("Deve calcular corretamente bônus de 10% sobre 2000", () => {

const resultado = calcularSalarioComBonus(2000, 10);

expect(resultado.valorBonus).toBe(200);
expect(resultado.salarioFinal).toBe(2200);

});

test("Deve calcular corretamente bônus de 25% sobre 1000", () => {

const resultado = calcularSalarioComBonus(1000, 25);

expect(resultado.valorBonus).toBe(250);
expect(resultado.salarioFinal).toBe(1250);

});

test("Bônus 0% deve manter o salário", () => {

const resultado = calcularSalarioComBonus(1500, 0);
expect(resultado.salarioFinal).toBe(1500);

});

test("Deve lançar erro para valores negativos", () => {
expect(() => calcularSalarioComBonus(-1000, 10)).toThrow();
expect(() => calcularSalarioComBonus(1000, -10)).toThrow();

});
});