const calcular17 = document.getElementById('calcular17')
const calcular25 = document.getElementById('calcular25')
const calcularMargem = document.getElementById('calcularMargem')

calcular17.addEventListener('click', function () {
  calcularPrecoVenda(0.17) // Margem de 17%
})

calcular25.addEventListener('click', function () {
  calcularPrecoVenda(0.25) // Margem de 25%
})

calcularMargem.addEventListener('click', function () {
  const margemDesejada = parseFloat(
    document.getElementById('margemDesejada').value
  )

  if (isNaN(margemDesejada)) {
    alert('Por favor, insira uma margem desejada válida.')
    return
  }

  calcularPrecoVenda(margemDesejada / 100) // Converte a margem desejada em decimal
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
  document.getElementById('precoVenda').textContent = precoVenda.toFixed(2)
}
