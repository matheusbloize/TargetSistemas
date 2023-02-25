// 1
// Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

let i = 13
let sum = 0
let k = 0
while (k < i) {
  k += 1
  sum = sum + k
}
console.log(sum) // 91
// soma = 91

console.log("-------") // separador
//-------------------------------------------------------------------------

// 2
// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

let Fibonacci = [0, 1, 1, 2, 3]

function FibonacciSequence(number) {
  for (let i = 0; i < number; i++) {
    Fibonacci.push(Fibonacci.slice(-2)[0] + Fibonacci.slice(-2)[1])
  }
  console.log(Fibonacci)
  return Fibonacci
}

// RESPOSTA:
// O número passado na função FibonacciSequence, será quantas vezes a mesma acrescentará os números da sequência de Fibonacci

// EXEMPLO:
FibonacciSequence(0) // Somente mostrará os 5 primeiros, que foram os escolhidos para a variável Fibonacci
FibonacciSequence(1) // Mostrará [0, 1, 1, 2, 3, 5], que consiste na variável Fibonacci [0, 1, 1, 2, 3] com o acréscimo de 1 número
FibonacciSequence(5) // Mostrará [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55], que consiste na variável Fibonacci [0, 1, 1, 2, 3] com o acréscimo de 5 números, e assim por diante

console.log("-------") // separador
//-------------------------------------------------------------------------

// 3
// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

fetch("./data/dados.json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then((res) => res.json())
  .then((data) => {
    mapData(data)
  })
  .catch(err => console.log(err)
  )

function mapData(data) {
  const media = []
  const diasComFaturamentoMaiorQueZero = []
  const diasComFaturamentoMaiorQueMediaMensal = []
  // Mostrando utilização do método de array map
  data.map((data) => {
    if (data.valor === 0) {
      return
    }
    else if (data.valor > 20865) {
      diasComFaturamentoMaiorQueMediaMensal.push(data.dia)
    }
    diasComFaturamentoMaiorQueZero.push(data.dia)
    media.push(data.valor)
  })

  // Mostrando utilização do laço de repetição for

  let menorValor = data[0].valor
  let maiorValor = data[0].valor
  const menorValorDia = []
  const maiorValorDia = []
  const diasZeroArr = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].valor !== 0) {
      menorValor > data[i].valor ? menorValor = data[i].valor : menorValor = menorValor
      maiorValor < data[i].valor ? maiorValor = data[i].valor : maiorValor = maiorValor
    } else if (data[i].valor === 0) {
      diasZeroArr.push(data[i].dia)
    }
    if (data[i].valor === menorValor) {
      menorValorDia.push(data[i].dia)
    } else if (data[i].valor === maiorValor) {
      maiorValorDia.push(data[i].dia)
    }
  }

  console.log(`Dias com 0 valor de faturamento: ${diasZeroArr.join(", ")}`)
  console.log(`O menor valor foi de R$${menorValor.toFixed(2)} e foi registrado no dia ${menorValorDia.pop()}`)
  console.log(`O maior valor foi de R$${maiorValor.toFixed(2)} e foi registrado no dia ${maiorValorDia.pop()}`)
  console.log(`Faturamento mensal: R$${media.reduce((total, item) => total + item).toFixed(2)}, contando os ${diasComFaturamentoMaiorQueZero.length} dias em que o faturamento diário foi maior do que 0`)
  console.log(`Média mensal: R$${((media.reduce((total, item) => total + item)) / diasComFaturamentoMaiorQueZero.length).toFixed(2)}`)
  console.log(`Tivemos ${diasComFaturamentoMaiorQueMediaMensal.length} dias em que o faturamento diário foi superior à média mensal, sendo estes: ${diasComFaturamentoMaiorQueMediaMensal.join(", ")} `)

  console.log("-------") // separador
  //-------------------------------------------------------------------------

  // 4
  //   Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
  //   SP – R$67.836, 43
  //   RJ – R$36.678, 66
  //   MG – R$29.229, 88
  //   ES – R$27.165, 48
  //   Outros – R$19.849, 53

  // Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

  const SP = ["SP", 67836.43]
  const RJ = ["RJ", 36678.66]
  const MG = ["MG", 29229.88]
  const ES = ["ES", 27165.48]
  const OutrosEstados = ["Outros Estados", 19849.53]

  const estados = [SP, RJ, MG, ES, OutrosEstados]

  let valorTotal = []
  const arrParaMapear = []
  for (let i = 0; i < estados.length; i++) {
    arrParaMapear.push(estados[i].slice(1))
  }

  let arrParaFiltar = []
  arrParaMapear.map((item) => {
    arrParaFiltar.push(item.reduce((total, item) => item + total))
  })

  valorTotal = arrParaFiltar.reduce((total, item) => total + item)

  const resultado = []
  const resultadoSlice = []
  const resultadoFilter = []
  const resultadoDoisDigitos = []
  const resultadoFinal = []

  console.log(`Valor total: R$${valorTotal}`)

  for (let i = 0; i < estados.length; i++) {
    resultado.push((estados[i].slice(0)[1] / valorTotal))
    resultadoSlice.push(resultado[i].toString().slice(0, 5))
    resultadoFilter.push(resultadoSlice[i].toString()[4] >= 5 ? ((Number(resultadoSlice[i]) + 0.01).toString()) : null)
    if (resultadoFilter[i] > resultadoSlice[i]) {
      resultadoDoisDigitos.push(resultadoFilter[i])
      resultadoFinal.push(resultadoDoisDigitos[i].slice(2, 4))
    } else {
      resultadoDoisDigitos.push(resultadoSlice[i])
      resultadoFinal.push(resultadoDoisDigitos[i].slice(2, 4))
    }
    console.log(`O Estado de ${estados[i].slice(0)[0]} fez R$${estados[i].slice(0)[1]} atingindo assim ${resultadoFinal[i]}%`)
  }

  console.log("-------") // separador
  //-------------------------------------------------------------------------

  // 5
  // Escreva um programa que inverta os caracteres de um string.

  function reverseString(string) {
    let resultado = ""
    for (let i = 0; i < string.length; i++) {
      resultado = resultado + string[string.length - i - 1]
    }
    console.log(`Se inverter a palavra ${string}, ela vira ${resultado}`)
    return resultado
  }

  reverseString("Teste")
  reverseString("Recife")
}







