const formatDate = (value: Date): string => {
  const date = new Date(value);

  return date.toLocaleString('pt-br', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

export default formatDate;
