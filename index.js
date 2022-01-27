// pegar o valor do input do valor da conta
const valorConta = document.querySelector('.bill')

// pegar quantas pessoas são
const numPessoas = document.querySelector('.number-people')

// campos de informação
const campoTotal = document.querySelector('.total-person')
const campoGorjeta = document.querySelector('.tip')

// botão reset
const btnReset = document.querySelector('.btn-reset')

// pegar porcentagem de gorjeta
var btnGorjeta = document.querySelectorAll('.percentage')
const inputGorjetaCustom = document.querySelector('.custom')

// itero sobre cada botão de porcentagem de gorjeta
for (let btn of btnGorjeta) {
  // add evento de click
  btn.addEventListener('click', e => {
    // quando clico add a classe -> active
    e.preventDefault
    btn.classList.add('active')
  })
}

// tirar o active das classes do botão de porcentagem
function resetBtnGorjeta() {
  document.querySelectorAll('.active').forEach(btn => {
    btn.classList.remove('active')
  })
}

// fazer calculo
function calculo() {
  var gorjetaValor = 0

  // verificar se o campo de gorjeta está vazio ou se há porcentagem de gorjeta
  if (inputGorjetaCustom.value === '') {
    //se estiver vazio busque os botões
    for (let bt of btnGorjeta) {
      // quando o botão foi clicado ele recebeu mais uma classe -> active
      if (bt.classList.contains('active')) {
        // então pegamos o valor daquele botão que esta com a classe active
        gorjetaValor = parseFloat(bt.value)
      }
    }
  } else {
    gorjetaValor = parseFloat(inputGorjetaCustom.value) / 100
  }

  // colocar os valores em duas variáveis 1-gorjeta total por pessoa e 2-total por pessoa
  var totalGorjeta =
    (gorjetaValor * parseFloat(valorConta.value)) / parseInt(numPessoas.value)

  campoGorjeta.innerText = `$${totalGorjeta.toFixed(2)}`

  var total =
    (parseFloat(valorConta.value) + totalGorjeta) / parseInt(numPessoas.value)
  campoTotal.innerText = `$${total.toFixed(2)}`
}

// add evento: quando o mouse sai do input (nesse caso) a função calculo e chamada(?)
numPessoas.addEventListener('mouseout', calculo)

// botão reset
btnReset.addEventListener('click', () => {
  valorConta.value = ''
  numPessoas.value = ''
  inputGorjetaCustom.value = ''
  campoGorjeta.innerText = '$0.00'
  campoTotal.innerText = '$0.00'
  resetBtnGorjeta()
  gorjetaValor.value = ''
})
