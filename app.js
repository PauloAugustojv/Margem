const calcularMargem = document.getElementById('calcularMargem')
const calcular17 = document.getElementById('calcular17')
const calcular25 = document.getElementById('calcular25')
const calcularDesconto = document.getElementById('calcularDesconto')
const resultadoDescontoSpan = document.getElementById('resultadoDesconto')

calcularMargem.addEventListener('click', function () {
  calcularPrecoVenda(
    parseFloat(document.getElementById('margemDesejada').value) / 100
  )
})

calcular17.addEventListener('click', function () {
  calcularPrecoVenda(0.17)
})

calcular25.addEventListener('click', function () {
  calcularPrecoVenda(0.25)
})

calcularDesconto.addEventListener('click', function () {
  const precoVenda = parseFloat(
    document.getElementById('precoVendaDesconto').value
  )
  const precoDesconto = parseFloat(
    document.getElementById('precoDesconto').value
  )

  if (isNaN(precoVenda) || isNaN(precoDesconto)) {
    alert(
      'Por favor, insira valores válidos para o preço de venda e o desconto.'
    )
    return
  }

  const resultadoDesconto = ((precoVenda / precoDesconto - 1) * 100).toFixed(9)
  resultadoDescontoSpan.textContent = `Resultado do Desconto: ${resultadoDesconto}%`
})

function calcularPrecoVenda(rentabilidade) {
  const precoCusto = parseFloat(document.getElementById('precoCusto').value)

  if (isNaN(precoCusto) || isNaN(rentabilidade)) {
    alert(
      'Por favor, insira valores válidos para o preço de custo e rentabilidade.'
    )
    return
  }

  const precoVenda = precoCusto / (1 - rentabilidade)
  document.getElementById('precoVenda').textContent = `R$ ${precoVenda.toFixed(
    2
  )}`
}
