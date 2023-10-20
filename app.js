const calcular17 = document.getElementById('calcular17')
const calcular25 = document.getElementById('calcular25')

const calcularMargem = document.getElementById('calcularMargem')

calcular17.addEventListener('click', function () {
  calcularPrecoVenda(17)
})

calcular25.addEventListener('click', function () {
  calcularPrecoVenda(25)
})

calcularMargem.addEventListener('click', function () {
  const margemDesejada = parseFloat(
    document.getElementById('margemDesejada').value
  )

  if (isNaN(margemDesejada)) {
    alert('Por favor, insira uma margem desejada válida.')
    return
  }

  calcularPrecoVenda(margemDesejada)
})

function calcularPrecoVenda(margem) {
  const precoCusto = parseFloat(document.getElementById('precoCusto').value)

  if (isNaN(precoCusto)) {
    alert('Por favor, insira um valor válido para o preço de custo.')
    return
  }

  const precoVenda = precoCusto + precoCusto * (margem / 100)
  document.getElementById('precoVenda').textContent =
    'R$ ' + precoVenda.toFixed(2)
}
