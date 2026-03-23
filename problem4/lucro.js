function calcularLucro(custo, precoVenda) {
    if (custo < 0 || precoVenda < 0) {
        throw new Error("Valores não podem ser negativos");
    }

    const lucro = precoVenda - custo;
    
    let margemLucro = 0;
    if (custo !== 0) {
        margemLucro = (lucro / custo) * 100;
    }

    return {
        custo: custo,
        precoVenda: precoVenda,
        lucro: Number(lucro.toFixed(2)),
        margemLucro: Number(margemLucro.toFixed(2))
    };
}

function processarAnalise() {
    const inputCusto = document.getElementById('custo');
    const inputVenda = document.getElementById('venda');
    const display = document.getElementById('resultadoArea');
    const outLucro = document.getElementById('outLucro');
    const labelRes = document.getElementById('labelResultado');

    const custo = parseFloat(inputCusto.value);
    const venda = parseFloat(inputVenda.value);

    try {
        if (isNaN(custo) || isNaN(venda)) {
            alert("Preencha ambos os valores corretamente.");
            return;
        }

        const res = calcularLucro(custo, venda);
        const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        display.style.display = 'block';
        document.getElementById('outCusto').innerText = fmt(res.custo);
        document.getElementById('outVenda').innerText = fmt(res.precoVenda);
        document.getElementById('outMargem').innerText = res.margemLucro.toFixed(2) + "%";
        outLucro.innerText = fmt(res.lucro);

        if (res.lucro >= 0) {
            outLucro.className = 'status-positivo';
            labelRes.innerText = "Lucro:";
        } else {
            outLucro.className = 'status-negativo';
            labelRes.innerText = "Prejuízo:";
        }

    } catch (error) {
        alert(error.message);
    }
}

if (typeof document !== 'undefined') {
    document.getElementById('btnCalcular').addEventListener('click', processarAnalise);
}
