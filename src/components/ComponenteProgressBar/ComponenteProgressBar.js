import React, { Component } from 'react';
import Bar from '../Bar/Bar';
import css from './componenteProgressBar.module.css';

export default class ComponenteProgressBar extends Component {
  render() {
    const { descontoInss, descontoIrPf, salarioLiquido } = this.props;
    const corDescontoInss = '#e67e22';
    const corDescontoIrPf = '#c0392b';
    const corSalarioLiquido = '#16a085';
    return (
      <div className={css.divMain}>
        <Bar valor={descontoInss} cor={corDescontoInss} />
        <Bar valor={descontoIrPf} cor={corDescontoIrPf} />
        <Bar valor={salarioLiquido} cor={corSalarioLiquido} />
      </div>
    );
  }
}
