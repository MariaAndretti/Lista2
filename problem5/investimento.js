function calcularRentabilidade(inicial, atual, meses = null) {
    if (inicial <= 0 || atual < 0) {
        throw new Error("Valores inválidos para cálculo");
    }

    const lucro = atual - inicial;
    const rentabilidade = (lucro / inicial) * 100;
    
    let rentabilidadeAnual = null;

    if (meses && meses > 0) {
        const taxaDecimal = rentabilidade / 100;
        rentabilidadeAnual = (Math.pow(1 + taxaDecimal, 12 / meses) - 1) * 100;
    }

    return {
        lucro: Number(lucro.toFixed(2)),
        rentabilidade: Number(rentabilidade.toFixed(2)),
        rentabilidadeAnual: rentabilidadeAnual !== null ? Number(rentabilidadeAnual.toFixed(2)) : null
    };
}

function uiCalcular() {
    const vI = parseFloat(document.getElementById('vInicial').value);
    const vA = parseFloat(document.getElementById('vAtual').value);
    const t = document.getElementById('tempo').value;
    const meses = t ? parseFloat(t) : null;

    try {
        const res = calcularRentabilidade(vI, vA, meses);
        
        document.getElementById('results').style.display = 'block';
        document.getElementById('outLucro').innerText = `R$ ${res.lucro.toFixed(2)}`;
        document.getElementById('outRent').innerText = `${res.rentabilidade}%`;

        if (res.rentabilidadeAnual !== null) {
            document.getElementById('areaAnual').style.display = 'block';
            document.getElementById('outAnual').innerText = `${res.rentabilidadeAnual}% a.a.`;
        } else {
            document.getElementById('areaAnual').style.display = 'none';
        }

    } catch (e) {
        alert(e.message);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calcularRentabilidade;
}