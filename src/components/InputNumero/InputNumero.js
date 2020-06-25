import React, { Component } from 'react';

export default class InputNumero extends Component {
  handleSalarioBruto = (event) => {
    console.log(event.target.value);
    const novoSalario = event.target.value;

    this.props.onChangeSalarioBruto(novoSalario);
  };

  render() {
    const { valorSalario } = this.props;
    return (
      <div>
        <label>Salário</label>
        <input
          value={valorSalario}
          type="number"
          onChange={this.handleSalarioBruto}
        />
      </div>
    );
  }
}
