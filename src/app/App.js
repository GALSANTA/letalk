import React from 'react';
import api from '../services/api';
import './style.css';
import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import Simulation from '../components/Simulation/Simulation';
import {Footer, Header, Main} from '../components/Bootstrap/Bootstrap';

function App() {

    const [showEmprestimo, setShowEmprestimo] = React.useState(false);
    const [valorRequerido, setValorRequerido] = React.useState();
    const [taxaJuros, setTaxaJuros] = React.useState();
    const [valorParcela, setValorParcela] = React.useState();
    const [mesesPagar, setMesesPagar] = React.useState();
    const [totalPagar, setTotalPagar] = React.useState();
    const [totalJuros, setTotalJuros] = React.useState();
    const [parcelas, setParcelas] = React.useState();

    const [dados, setDados] = React.useState();


    async function fazerSimulacao(cpf, uf, nascimento, valorEmprestimo, valorParcela) {

        const response = await api.post('/simular', {
            cpf: cpf,
            uf: uf,
            date: nascimento,
            valorEmprestimo: parseFloat(valorEmprestimo),
            valorParcela: parseFloat(valorParcela)
        });

        setDados({
            cpf,
            uf, 
            nascimento,
            valorEmprestimo,
            valorParcela, 
            parcelas: response.data.parcelas
        });
        
        setValorRequerido(response.data.valorEmprestimo)
        setTaxaJuros(response.data.juros)
        setValorParcela(response.data.valorParcela)
        setMesesPagar(response.data.mesesPagar)
        setTotalPagar(response.data.totalPagar)
        setTotalJuros(response.data.totalJuros)
        setParcelas(response.data.parcelas)
        setShowEmprestimo(true)
    }

    async function fazerEmprestimo() {

        await api.post('/emprestimo', {
            cpf: dados.cpf,
            uf: dados.uf,
            date: dados.nascimento,
            valorEmprestimo: parseFloat(dados.valorEmprestimo),
            valorParcela: parseFloat(dados.valorParcela),
        });
    }

    return (
        <>
            <Header>
                <Text className="app-title" >Simule e solicite o seu empréstimo.</Text>
            </Header>
            <Main>
                <Text className="app-subtitle-form">Preencha o formulário abaixo para simular</Text>
                <Form callback={fazerSimulacao}/>
            </Main>
            <Footer>
                {
                    showEmprestimo ?
                    <>
                    <Text className="app-subtitle-form">Veja a simulação para o seu empréstimo antes de efetivar</Text>
                    <Simulation 
                        valorRequerido={valorRequerido}
                        taxaJuros={taxaJuros}
                        valorParcela={valorParcela}
                        mesesPagar={mesesPagar}
                        totalJuros={totalJuros}
                        totalPagar={totalPagar}
                        parcelas={parcelas}
                        callback={fazerEmprestimo}
                    />
                    </> :
                    <></>
                }
            </Footer>
        </>
    )
}

export default App;