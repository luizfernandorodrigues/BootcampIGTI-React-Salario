import React, { Component } from 'react';
import css from './containerLeitura.module.css';
import ComponenteSomenteLeitura from '../ComponenteSomenteLeitura/ComponenteSomenteLeitura';
import { formatNumber } from '../../helpers/utilitarioSalario.js';

export default class ContainerLeitura extends Component {
  render() {
    const baseInss = 'Base INSS:';
    const descontoInss = 'Desconto INSS:';
    const baseIrPf = 'Base IRPF:';
    const descontoIrPf = 'Desconto IRPF:';

    const { objetoLeitura } = this.props;

    return (
      <div className={css.divMain}>
        <ComponenteSomenteLeitura
          descricao={baseInss}
          valor={formatNumber(objetoLeitura.baseInss)}
        />
        <ComponenteSomenteLeitura
          descricao={descontoInss}
          valor={formatNumber(objetoLeitura.descontoInss.toFixed(2))}
        />
        <ComponenteSomenteLeitura
          descricao={baseIrPf}
          valor={formatNumber(objetoLeitura.baseIrPf.toFixed(2))}
        />
        <ComponenteSomenteLeitura
          descricao={descontoIrPf}
          valor={formatNumber(objetoLeitura.descontoIrPf.toFixed(2))}
        />
      </div>
    );
  }
}
