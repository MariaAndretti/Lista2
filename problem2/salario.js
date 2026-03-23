function calcularSalarioComBonus(salarioBase, percentualBonus) {
    
    if (salarioBase < 0 || percentualBonus < 0) {
        throw new Error("Valores não podem ser negativos");
    }

    let valorBonus = (salarioBase * percentualBonus) / 100;
    let salarioFinal = salarioBase + valorBonus;

    return {
        salarioBase: salarioBase,
        percentualBonus: percentualBonus,
        valorBonus: valorBonus,
        salarioFinal: salarioFinal
    };
}

function interagirComTela() {
    const inputSalario = document.getElementById('salarioInput');
    const inputBonus = document.getElementById('bonusPercInput');
    const display = document.getElementById('resultadoArea');

    const salario = parseFloat(inputSalario.value);
    const bonus = parseFloat(inputBonus.value);

    try {
        if (isNaN(salario) || isNaN(bonus)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const resultado = calcularSalarioComBonus(salario, bonus);

        const formatarBRL = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        display.style.display = 'block';
        document.getElementById('outSalario').innerText = formatarBRL(resultado.salarioBase);
        document.getElementById('outPerc').innerText = resultado.percentualBonus + "%";
        document.getElementById('outValorBonus').innerText = formatarBRL(resultado.valorBonus);
        document.getElementById('outFinal').innerText = formatarBRL(resultado.salarioFinal);

    } catch (error) {
        alert("Erro no cálculo: " + error.message);
    }
}

if (typeof document !== 'undefined') {
    document.getElementById('btnCalcular').addEventListener('click', interagirComTela);
}
 if (typeof module !== 'undefined' && module.exports) {
    module.exports = calcularSalarioComBonus;
}