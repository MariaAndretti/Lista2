function calcularDesconto(precoOriginal, percentualDesconto) {
    if (precoOriginal < 0 || percentualDesconto < 0) {
        throw new Error("Valores não podem ser negativos");
    }

    let valorDesconto = (precoOriginal * percentualDesconto) / 100;
    let precoFinal = precoOriginal - valorDesconto;

    return {
        precoOriginal: precoOriginal,
        percentualDesconto: percentualDesconto,
        valorDesconto: valorDesconto,
        precoFinal: precoFinal,
        economia: valorDesconto
    };
}

function processarClique() {
    const inputPreco = document.getElementById('precoInput');
    const inputDesc = document.getElementById('descontoInput');
    const display = document.getElementById('resultadoArea');

    const preco = parseFloat(inputPreco.value);
    const desconto = parseFloat(inputDesc.value);

    try {
        if (isNaN(preco) || isNaN(desconto)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const res = calcularDesconto(preco, desconto);

        const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        display.style.display = 'block';
        document.getElementById('outPreco').innerText = fmt(res.precoOriginal);
        document.getElementById('outPerc').innerText = res.percentualDesconto + "%";
        document.getElementById('outEconomia').innerText = fmt(res.valorDesconto);
        document.getElementById('outFinal').innerText = fmt(res.precoFinal);

    } catch (error) {
        alert(error.message);
    }
}

document.getElementById('btnCalcular').addEventListener('click', processarClique);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calcularDesconto;
}