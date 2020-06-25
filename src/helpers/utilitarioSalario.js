function calculaInss(salario) {
  const salarioMinimo = 1045.0;
  const limiteSegundaFaixa = 2089.6;
  const limiteTerceiraFaixa = 3134.4;
  const limiteMaximo = 6101.06;

  let retorno = 0;

  if (salario <= salarioMinimo) {
    retorno += (salario * 7.5) / 100;
  } else if (salario > salarioMinimo + 0.1 && salario <= limiteSegundaFaixa) {
    retorno += (salarioMinimo * 7.5) / 100;
    if (salario <= limiteSegundaFaixa) {
      retorno += ((salario - salarioMinimo) * 9) / 100;
    } else {
      retorno += ((limiteSegundaFaixa - salarioMinimo) * 9) / 100;
    }
  } else if (
    salario > limiteSegundaFaixa + 0.1 &&
    salario <= limiteTerceiraFaixa
  ) {
    retorno += ((salario - limiteSegundaFaixa) * 12) / 100;
  } else if (salario > limiteTerceiraFaixa + 0.1 && salario <= limiteMaximo) {
    retorno += ((salario - limiteTerceiraFaixa) * 14) / 100;
  } else retorno = 713.1;

  return retorno;
}

function calculaIrPf(salarioLiquido) {
  const valorMinimo = 1903.98;
  const limitePrimeiraFaixa = 2826.65;
  const limiteSegundaFaixa = 3751.05;
  const limiteTerceiraFaixa = 4664.68;

  /* Até 1.903,98	0%	0,00
  De 1.903,99 até 2.826,65	7,5%	142,80
  De 2.826,66 até 3.751,05	15%	354,80
  De 3.751,06 até 4.664,68	22,5%	636,13
  Acima de 4.664,69	27,5%	869,36
*/
  if (salarioLiquido <= valorMinimo) {
    return 0;
  }

  if (
    salarioLiquido > valorMinimo + 0.1 &&
    salarioLiquido <= limitePrimeiraFaixa
  ) {
    return (salarioLiquido * 7.5) / 100 - 142.8;
  }

  if (
    salarioLiquido > limitePrimeiraFaixa + 0.1 &&
    salarioLiquido <= limiteSegundaFaixa
  ) {
    return (salarioLiquido * 15) / 100 - 354.8;
  }

  if (
    salarioLiquido > limiteSegundaFaixa + 0.1 &&
    salarioLiquido <= limiteTerceiraFaixa
  ) {
    return (salarioLiquido * 22.5) / 100 - 636.13;
  }

  if (salarioLiquido > limiteTerceiraFaixa) {
    return (salarioLiquido * 27.5) / 100 - 869.36;
  }
}

const formatter = Intl.NumberFormat('pt-BR');

function formatNumber(value) {
  return formatter.format(value);
}

export { calculaInss, calculaIrPf, formatNumber };
