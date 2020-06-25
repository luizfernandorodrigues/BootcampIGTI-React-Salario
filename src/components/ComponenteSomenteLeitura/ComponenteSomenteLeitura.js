import React, { Component } from 'react';
import css from './componenteSomenteLeitura.module.css';

export default class ComponenteSomenteLeitura extends Component {
  render() {
    const { descricao, valor } = this.props;
    return (
      <div className={css.divMain}>
        <label className={css.default}>{descricao}</label>
        <input
          className={css.default}
          type="text"
          readOnly
          value={`R$ ${valor}`}
        />
      </div>
    );
  }
}
