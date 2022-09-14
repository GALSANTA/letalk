import React from 'react';
import './style.css';

function Form(props) {

    const [inputCPF, setInputCPF] = React.useState("CPF");
    const [inputUF, setInputUF] = React.useState("MG");
    const [inputDATA, setInputDATA] = React.useState("DATA DE NASCIMENTO");
    const [inputEMPRESTIMO, setInputEMPRESTIMO] = React.useState("QUAL O VALOR DO EMPRÉSTIMO?");
    const [inputVALORMES, setInputVALORMES] = React.useState("QUAL VALOR DESEJA PAGAR POR MÊS?");

    function handleSubmit(e) {
      e.preventDefault();
      props.callback(inputCPF, inputUF, inputDATA, inputEMPRESTIMO, inputVALORMES)
    }

    function transformDate() {
       document.getElementById('data').type="date";
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="input" id="" value={inputCPF} onChange={(e) => setInputCPF(e.target.value)} onMouseDown={_ => setInputCPF("")}  />
            <select id="select" className="input" value={inputUF} onChange={(e) => setInputUF(e.target.value)}>
              <option value="MG">MG</option>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="ES">ES</option>
            </select>
          <input type="text" id="data" className="input" value={inputDATA} onChange={(e) => setInputDATA(e.target.value)} onMouseDown={_ =>  transformDate()}  />
          <input type="text" className="input" id="" value={inputEMPRESTIMO} onChange={(e) => setInputEMPRESTIMO(e.target.value)} onMouseDown={_ => setInputEMPRESTIMO("")}/>
          <input type="text" className="input" id="" value={inputVALORMES} onChange={(e) => setInputVALORMES(e.target.value)}  onMouseDown={_ => setInputVALORMES("")}/>
          <input type="submit" className="button-orange" value="SIMULAR"/>
      </form>
    )
}

export default Form;