# 💻 Questões Resolvidas com JavaScript

Este repositório contém soluções em **JavaScript** para alguns desafios clássicos de programação.  
Todas as questões podem ser executadas no **Visual Studio Code** com Node.js.

---

## 2️⃣ Fibonacci

**Descrição:**
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

**IMPORTANTE:**
- Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código.

**Como rodar:**

```bash
  node 2_Fibonacci.js
```

## 3️⃣ Faturamento 

**Descrição:**
Diário Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**IMPORTANTE:**
- Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
- Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

**Como rodar:**

```bash
  node 3_Fatura.js
```
---

## 4️⃣ Faturamento Mensal por Estado

**Descrição:**
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

| Estado | Faturamento |
|---|---|
| SP | R$67.836,43 |
| RJ | R$36.678,66 | 
| MG | R$29.229,88 |
| ES | R$27.165,48 |
| Outros | R$19.849,53 |

Escreva um programa onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Como rodar:**

```bash
  node 4_Faturamento_percentual.js
```

---

## 5️⃣ Inverter String 

**Descrição:**
Escreva um programa que inverta os caracteres de um string.

**IMPORTANTE:**
- Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
- Evite usar funções prontas, como, por exemplo, reverse;

**Como rodar:**

```bash
  node 5_Inverte_string.js
```
