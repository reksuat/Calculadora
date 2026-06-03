export function filtrarNumeros(dados) {
  return dados.filter((item) => typeof item === "number" && !isNaN(item));
}

export function calcularSoma(numeros) {
  if (numeros.length === 0) return 0;
  return numeros.reduce((acc, curr) => acc + curr, 0);
}

export function calcularMedia(numeros) {
  if (numeros.length === 0) return 0;
  return calcularSoma(numeros) / numeros.length;
}

export function calcularMediana(numeros) {
  if (numeros.length === 0) return 0;
  
  const ordenados = [...numeros].sort((a, b) => a - b);
  const meio = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 !== 0) {
    return ordenados[meio];
  }
  
  return (ordenados[meio - 1] + ordenados[meio]) / 2;
}

export function calcularModa(numeros) {
  if (numeros.length === 0) return [];

  const frequencia = {};
  let maxFrequencia = 0;
  let modas = [];

  numeros.forEach(num => {
    frequencia[num] = (frequencia[num] || 0) + 1;
    if (frequencia[num] > maxFrequencia) {
      maxFrequencia = frequencia[num];
    }
  });

  if (maxFrequencia === 1) return [];

  for (const num in frequencia) {
    if (frequencia[num] === maxFrequencia) {
      modas.push(Number(num));
    }
  }

  return modas;
}

export function obterMinMax(numeros) {
  if (numeros.length === 0) return { minimo: 0, maximo: 0 };
  return {
    minimo: Math.min(...numeros),
    maximo: Math.max(...numeros)
  };
}

export function calcularEstatisticasNumericas(dadosBrutos) {
  const numeros = filtrarNumeros(dadosBrutos);

  if (numeros.length === 0) {
    return {
      media: 0,
      mediana: 0,
      moda: "Nenhuma",
      minimo: 0,
      maximo: 0,
      soma: 0,
    };
  }

  const minMax = obterMinMax(numeros);
  const arrayModa = calcularModa(numeros);

  return {
    media: calcularMedia(numeros).toFixed(2),
    mediana: calcularMediana(numeros),
    moda: arrayModa.length > 0 ? arrayModa.join(", ") : "Nenhuma",
    minimo: minMax.minimo,
    maximo: minMax.maximo,
    soma: calcularSoma(numeros),
  };
}