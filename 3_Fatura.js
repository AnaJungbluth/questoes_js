const fs = require('fs');

const dadosFaturamento = JSON.parse(fs.readFileSync('./dados.json', 'utf8'));

const diasComFaturamento = dadosFaturamento.filter(dia => dia.valor > 0);
const menorValor = diasComFaturamento.length > 0 ?
    Math.min(...diasComFaturamento.map(dia => dia.valor)) : 0;
const maiorValor = Math.max(...dadosFaturamento.map(dia => dia.valor));

const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
const mediaMensal = diasComFaturamento.length > 0 ?
    somaFaturamento / diasComFaturamento.length : 0;
const diasAcimaDaMedia = dadosFaturamento.reduce((count, dia) =>
    dia.valor > mediaMensal ? count + 1 : count, 0);

const formatMenorValor = menorValor.
    toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const formatMaiorValor = maiorValor.
    toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const formatMediaMensal = mediaMensal.
    toLocaleString('pt-BR', { maximumFractionDigits: 2, style: 'currency', currency: 'BRL' });

console.log("Menor valor de faturamento:", formatMenorValor);
console.log("Maior valor de faturamento:", formatMaiorValor);
console.log("A média mensal de faturamento foi", formatMediaMensal, "sendo assim tiveram",
    diasAcimaDaMedia, "dias em que o faturamento foi acima da média mensal");