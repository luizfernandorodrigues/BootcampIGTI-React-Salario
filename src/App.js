import React, { Component } from 'react';
import InputNumero from './components/InputNumero/InputNumero';
import ContainerLeitura from './components/ContaionerLeitura/ContainerLeitura';
import ComponenteSomenteLeitura from './components/ComponenteSomenteLeitura/ComponenteSomenteLeitura';
import ComponenteProgressBar from './components/ComponenteProgressBar/ComponenteProgressBar';
import {
  calculaInss,
  calculaIrPf,
  formatNumber,
} from '../src/helpers/utilitarioSalario.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salarioBruto: 0,
      baseInss: 0,
      descontoInss: 0,
      baseIrPf: 0,
      descontoIrPf: 0,
      salarioLiquido: 0,
    };
  }

  componentDidMount() {
    const salarioBrutoInicial = 1000;
    const baseInssInicial = salarioBrutoInicial;
    const descontoInssInicial = calculaInss(baseInssInicial);
    const baseIrPfInicial = salarioBrutoInicial - descontoInssInicial;
    const descontoIrPfInicial = calculaIrPf(baseIrPfInicial);
    const salarioLiquidoInicial =
      salarioBrutoInicial - descontoInssInicial - descontoIrPfInicial;

    this.setState({
      salarioBruto: salarioBrutoInicial,
      baseInss: baseInssInicial,
      descontoInss: descontoInssInicial,
      baseIrPf: baseIrPfInicial,
      descontoIrPf: descontoIrPfInicial,
      salarioLiquido: salarioLiquidoInicial,
    });
  }

  handleSalarioBruto = (novoSalario) => {
    const salario = novoSalario;
    const baseInss = salario;
    const descontoInss = calculaInss(baseInss);
    const baseIrPf = salario - descontoInss;
    const descontoIrPf = calculaIrPf(baseIrPf);
    const salarioLiquidoInicial = salario - descontoInss - descontoIrPf;

    this.setState({
      salarioBruto: salario,
      baseInss: salario,
      descontoInss: descontoInss,
      baseIrPf: baseIrPf,
      descontoIrPf: descontoIrPf,
      salarioLiquido: salarioLiquidoInicial,
    });
  };

  render() {
    const descricaoSalarioLiquido = 'Salário Liquido';
    const {
      salarioBruto,
      baseInss,
      descontoInss,
      baseIrPf,
      descontoIrPf,
      salarioLiquido,
    } = this.state;
    const objetoLeitura = {
      baseInss: baseInss,
      descontoInss: descontoInss,
      baseIrPf: baseIrPf,
      descontoIrPf: descontoIrPf,
    };
    return (
      <div className="container">
        <h1 style={style.alinhamentoTexto}>React Salário</h1>
        <InputNumero
          valorSalario={salarioBruto}
          onChangeSalarioBruto={this.handleSalarioBruto}
        />
        <ContainerLeitura objetoLeitura={objetoLeitura} />
        <ComponenteSomenteLeitura
          descricao={descricaoSalarioLiquido}
          valor={formatNumber(salarioLiquido.toFixed(2))}
        />
        <ComponenteProgressBar
          descontoInss={objetoLeitura.descontoInss}
          descontoIrPf={objetoLeitura.descontoIrPf}
          salarioLiquido={salarioLiquido}
        />
      </div>
    );
  }
}

const style = {
  alinhamentoTexto: {
    textAlign: 'center',
  },
};
