module.exports = {

    async simular(request, response) {

        const cpf = request.body.cpf;
        const uf = request.body.uf;
        const date = request.body.date;
        const valorEmprestimo = request.body.valorEmprestimo;
        const valorParcela = request.body.valorParcela;

        if (valorEmprestimo < 50000) {
            return response.status(401).send("Valor do empréstimo tem que ser no mínimo maior que R$ 50.000,00")
        }

        if (valorParcela < valorEmprestimo * 0.1 ) {
            return response.status(401).send("Valor da parcela tem que ser no mínimo 1% do valor do emprétismo")

        }

        const juro = verificarJuros(uf);
        const array = calculo(valorEmprestimo, valorParcela, juro);

        return response.send({
            valorEmprestimo:valorEmprestimo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            valorParcela: valorParcela.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            juros: (verificarJuros(uf) * 100).toLocaleString('pt-br'),
            mesesPagar: array[0],
            totalJuros: array[1],
            totalPagar: array[2],
            parcelas: array[3]
        });
    },
};


function formatarData(date) {

    return (adicionaZero(date.getDate().toString()) + "/" + (adicionaZero(date.getMonth()+1).toString()) + "/" + date.getFullYear());
}

function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
function verificarJuros(uf) {

    var porcentagem;

    if (uf === "MG") {
        porcentagem = 0.01;
    } else if (uf === "SP") {
        porcentagem = 0.008;
    } else if (uf === "RJ") {
        porcentagem = 0.009;
    } else {
        porcentagem = 0.0111;
    }
    return porcentagem
}

function calculo(valorEmprestimo, valorParcela, porcentagem) {

    var meses = 0;
    var totalJuros = 0;
    var parcelas = [];
    var date = new Date();
    var totalPagar = valorEmprestimo;
    while (valorEmprestimo !== 0) {

        var saldoDevedor = valorEmprestimo;
        var juros = (valorEmprestimo * porcentagem);
        var saldoDevedorAjustado = juros + valorEmprestimo;
        var millisec = date.setMonth(date.getMonth() + meses);
        var vencimento = formatarData(new Date(millisec));
        totalJuros += juros;

        parcelas.push({
            saldoDevedor: saldoDevedor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            juros: juros.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            saldoDevedorAjustado: saldoDevedorAjustado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            valorParcela: valorEmprestimo > valorParcela ?  valorParcela.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) : valorEmprestimo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            vencimento: vencimento
        })

        var valorEmprestimo = saldoDevedorAjustado - valorParcela;

        if (valorEmprestimo < 0) {
            valorEmprestimo = 0;

            parcelas.push({
                saldoDevedor: 0,
                juros: "",
                saldoDevedorAjustado: "",
                valorParcela: "",
                vencimento: ""
            })
        }
        meses += 1;
    }

    totalPagar += totalJuros;
    return [meses, totalJuros, totalPagar, parcelas]
}