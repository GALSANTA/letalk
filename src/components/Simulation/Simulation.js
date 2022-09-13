import React from 'react';
import './style.css';

function Simulation(props) {

    return (
       <section className='simulation'>
           <div className="view">
               <div className="view-area">
                   <div class="widget">
                        <span className="title-span">
                            Valor requerido
                        </span>
                        <span className="value-span">
                            R$ {props.valorRequerido}
                        </span>
                   </div>
                   <div class="widget">
                        <span className="title-span">
                            Taxa de Juros
                        </span>
                        <span className="value-span">
                            {props.taxaJuros}% ao mês
                        </span>
                   </div>
                   <div class="widget">
                        <span className="title-span">
                            Valor da parcela
                        </span>
                        <span className="value-span">
                            R$ {props.valorParcela}
                        </span>
                   </div>
               </div>
               <div className="view-area">
                   <div class="widget">
                        <span className="title-span">
                            Total de meses para quitar
                        </span>
                        <span className="value-span">
                            {props.mesesPagar} meses
                        </span>
                   </div>
                   <div class="widget">
                        <span className="title-span">
                            Total de juros
                        </span>
                        <span className="value-span">
                            R$ {props.totalJuros}
                        </span>
                   </div>
                   <div class="widget">
                        <span className="title-span">
                            Total a pagar
                        </span>
                        <span className="value-span">
                            R$ {props.totalPagar}
                        </span>
                   </div>
               </div>
           </div>
           <div className="table-section">
            <table>
                <thead>
                        <tr>
                            <th>SALDO DEVEDOR</th>
                            <th>JUROS</th>
                            <th>SALDO DEVEDOR AJUSTADO</th>
                            <th>VALOR DA PARCELA</th>
                            <th>VENCIMENTO</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        props.meses.map(item => {
                            return(
                                <tr>
                                <td data-label="SALDO DEVEDOR">{item.saldoDevedor}</td>
                                <td data-label="JUROS">{item.juros}</td>
                                <td data-label="SALDO DEVEDOR AJUSTADO">{item.saldoDevedorAjustado}</td>
                                <td data-label="VALOR DA PARCELA">{item.valorParcela}</td>
                                <td data-label="VENCIMENTO">{item.vencimento}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button className="button-green">Efetivar o empréstimo <i class="fa fa-arrow-right"></i></button>
           </div>
       </section>
    )
}

export default Simulation;