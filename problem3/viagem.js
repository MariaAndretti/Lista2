function calcularCustoViagem(distancia, consumo, preco) {

    if (distancia <= 0 || consumo <= 0 || preco <= 0) {
        throw new Error("Valores devem ser maiores que zero");
    }

    const litrosNecessarios = distancia / consumo;
    const custoTotal = litrosNecessarios * preco;
    const custoIdaVolta = custoTotal * 2;

    return {
        distancia: distancia,
        consumo: consumo,
        litrosNecessarios: Number(litrosNecessarios.toFixed(2)),
        custoTotal: Number(custoTotal.toFixed(2)),
        custoIdaVolta: Number(custoIdaVolta.toFixed(2))
    };
}

function processarCalculo() {
    const inputDist = document.getElementById('distancia');
    const inputCons = document.getElementById('consumo');
    const inputPrec = document.getElementById('preco');
    const display = document.getElementById('resultadoViagem');

    const d = parseFloat(inputDist.value);
    const c = parseFloat(inputCons.value);
    const p = parseFloat(inputPrec.value);

    try {
        if (isNaN(d) || isNaN(c) || isNaN(p)) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const res = calcularCustoViagem(d, c, p);

        const fmtMoeda = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        display.style.display = 'block';
        document.getElementById('outDistancia').innerText = res.distancia + " km";
        document.getElementById('outConsumo').innerText = res.consumo + " km/L";
        document.getElementById('outLitros').innerText = res.litrosNecessarios + " Litros";
        document.getElementById('outCustoIda').innerText = fmtMoeda(res.custoTotal);
        document.getElementById('outCustoTotal').innerText = fmtMoeda(res.custoIdaVolta);

    } catch (error) {
        alert("Erro: " + error.message);
    }
}

if (typeof document !== 'undefined') {
    document.getElementById('btnCalcular').addEventListener('click', processarCalculo);
}

