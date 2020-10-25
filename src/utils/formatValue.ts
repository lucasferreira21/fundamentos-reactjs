const formatValue = (value: number): string => {
  const valueFormat = Intl.NumberFormat().format(value);

  const valueReal = Number(valueFormat).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return valueReal;
};

export default formatValue;
