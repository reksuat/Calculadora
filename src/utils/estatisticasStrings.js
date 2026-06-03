export function filtrarStrings(dados) {
  return dados.filter(
    (item) => typeof item === "string" && isNaN(item.trim()) && item.trim() !== ""
  );
}

export function contarTotal(strings) {
  return strings.length;
}

export function contarUnicas(strings) {
  return new Set(strings).size;
}

export function stringMaisLonga(strings) {
  if (strings.length === 0) return null;
  return strings.reduce((maior, atual) =>
    atual.length > maior.length ? atual : maior
  );
}

export function stringMaisCurta(strings) {
  if (strings.length === 0) return null;
  return strings.reduce((menor, atual) =>
    atual.length < menor.length ? atual : menor
  );
}

export function contarFrequencia(strings) {
  const freq = {};
  strings.forEach((str) => {
    freq[str] = (freq[str] || 0) + 1;
  });
  return freq;
}

export function calcularEstatisticasStrings(dadosBrutos) {
  const strings = filtrarStrings(dadosBrutos);

  if (strings.length === 0) {
    return {
      totalStrings: 0,
      stringsUnicas: 0,
      stringMaisLonga: null,
      stringMaisCurta: null,
      frequenciaStrings: {},
    };
  }

  return {
    totalStrings: contarTotal(strings),
    stringsUnicas: contarUnicas(strings),
    stringMaisLonga: stringMaisLonga(strings),
    stringMaisCurta: stringMaisCurta(strings),
    frequenciaStrings: contarFrequencia(strings),
  };
}
