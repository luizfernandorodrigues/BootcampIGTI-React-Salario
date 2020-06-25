import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    const { valor, cor = 'black' } = this.props;
    return (
      <div
        style={{
          marginTop: '40px',
          width: valor + '%',
          height: '20px',
          backgroundColor: cor,
        }}
      ></div>
    );
  }
}
