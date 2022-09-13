import React from 'react';
import api from './services/api';
import './style.css';
import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import Simulation from '../components/Simulation/Simulation';
import {Footer, Header, Main} from '../components/Bootstrap/Bootstrap';

function App() {

    const [showEmprestimo, setShowEmprestimo] = React.useState(false);
    const [valorRequerido, setValorRequerido] = React.useState()
    const [taxaJuros, setTaxaJuros] = React.useState()
    const [valorParcela, setValorParcela] = React.useState()
    const [mesesPagar, setMesesPagar] = React.useState()
    const [totalPagar, setTotalPagar] = React.useState()
    const [totalJuros, setTotalJuros] = React.useState()
    const [meses, setMeses] = React.useState()

    async function fazerSimulacao(cpf, estado, data, emprestimo, valorMes) {

        const response = await api.post('/devs', {
            cpf,
            estado,
            data,
            emprestimo,
            valorMes
        });

        
        // setShowEmprestimo(true)
        // setValorRequerido("60.000,00")
        // setTaxaJuros("1")
        // setValorParcela("15.000,00")
        // setMesesPagar("5")
        // setTotalPagar("61.545,53")
        // setTotalJuros("1545,53")
        // setMeses([
        //     {
        //         saldoDevedor: "60.000,00",
        //         juros: "600,00" ,
        //         saldoDevedorAjustado: "60.600,00",
        //         valorParcela: "15.000,00",
        //         vencimento: "20/09/21"
        //     },

        //     {
        //         saldoDevedor: 45600,
        //         juros: 456 ,
        //         saldoDevedorAjustado: 46056,
        //         valorParcela: 15000,
        //         vencimento: "20/09/21"
        //     },
        //     {
        //         saldoDevedor: 31056,
        //         juros: 310.56,
        //         saldoDevedorAjustado: 60600,
        //         valorParcela: 15000,
        //         vencimento: "20/09/21"
        //     },
        //     {
        //         saldoDevedor: 16366,
        //         juros: 163.67 ,
        //         saldoDevedorAjustado: 60600,
        //         valorParcela: 15000,
        //         vencimento: "20/09/21"
        //     },
        //     {
        //         saldoDevedor: 1530.23,
        //         juros: 15.30 ,
        //         saldoDevedorAjustado: 60600,
        //         valorParcela: 15000,
        //         vencimento: "20/09/21"
        //     },
        //     {
        //         saldoDevedor: 0,
        //         juros: "" ,
        //         saldoDevedorAjustado: "",
        //         valorParcela: "",
        //         vencimento: ""
        //     }
        // ]);
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
                        meses={meses}
                    />
                    </> :
                    <></>
                }
            </Footer>
        </>
    )
}

export default App;