const calcularRentabilidade = require('./investimento');

describe("Teste de rentabilidade de investimento", () => {
test("Deve calcular corretamente a rentabilidade simples", () => {

const resultado = calcularRentabilidade(1000, 1200);

expect(resultado.lucro).toBe(200);
expect(resultado.rentabilidade).toBeCloseTo(20);

});

test("Deve calcular rentabilidade anualizada", () => {
const resultado = calcularRentabilidade(1000, 1200, 12);
expect(resultado.rentabilidadeAnual).toBeCloseTo(20);

});

test("Sem meses, rentabilidade anual deve ser null", () => {
const resultado = calcularRentabilidade(1000, 1200);
expect(resultado.rentabilidadeAnual).toBeNull();

});

test("Investimento sem lucro", () => {
const resultado = calcularRentabilidade(1000, 1000);
expect(resultado.lucro).toBe(0);
expect(resultado.rentabilidade).toBe(0);

});

test("Deve lançar erro para valores inválidos", () => {
expect(() => calcularRentabilidade(0, 1000)).toThrow();
expect(() => calcularRentabilidade(1000, -100)).toThrow();

});
});