const valorConta = document.querySelector(".bill")
const numPessoas = document.querySelector(".number-people")
const campoTotalPorPessoa = document.querySelector(".total-person")
const campoGorjeta = document.querySelector(".tip")
const campoValorTotal = document.querySelector(".total-value")
const btnReset = document.querySelector(".btn-reset")
const btnCalc = document.querySelector(".btn-calculate")
const btnGorjeta = document.querySelectorAll(".percentage")
const inputGorjetaCustom = document.querySelector(".custom")
const mesa = JSON.parse(localStorage.getItem("Mesa")) || []
var gorjetaValor = 0

// Calculo
btnCalc.addEventListener("click", function (e) {
  e.preventDefault()

  const conta = parseFloat(valorConta.value)
  const pessoas = parseInt(numPessoas.value)

  if (isNaN(conta) || isNaN(pessoas)) {
    alert("Por favor preencha os campos vazios")
  }

  if (inputGorjetaCustom.value === "") {
    for (let bt of btnGorjeta) {
      if (bt.classList.contains("active")) {
        gorjetaValor = parseFloat(bt.value)
      }
    }
  } else {
    gorjetaValor = parseFloat(inputGorjetaCustom.value) / 100
  }

  // colocar os valores em duas variáveis
  // 1-gorjeta total por pessoa e 2-total por pessoa
  var totalGorjetaPorPessoa = (gorjetaValor * conta) / pessoas
  var totalPorPessoa = (conta + totalGorjetaPorPessoa) / pessoas
  var totalGorjeta = gorjetaValor * conta
  var valorTotal = conta + totalGorjeta

  campoGorjeta.innerText = `$${totalGorjetaPorPessoa.toFixed(2)}`
  campoTotalPorPessoa.innerText = `$${totalPorPessoa.toFixed(2)}`
  campoValorTotal.innerText = `$${valorTotal.toFixed(2)}`

  mesa[0].total = valorTotal
  localStorage.setItem("Mesa", JSON.stringify(mesa))
})

// Adicionar classe active no botão
for (let btn of btnGorjeta) {
  btn.addEventListener("click", e => {
    e.preventDefault()
    btn.classList.add("active")
  })
}

// tirar o active das classes do botão de porcentagem
function resetBtnGorjeta() {
  document.querySelectorAll(".active").forEach(btn => {
    btn.classList.remove("active")
  })
}

// botão reset
btnReset.addEventListener("click", e => {
  e.preventDefault()
  valorConta.value = ""
  numPessoas.value = ""
  inputGorjetaCustom.value = ""
  campoGorjeta.innerText = "$0.00"
  campoTotalPorPessoa.innerText = "$0.00"
  campoValorTotal.innerText = "$0.00"
  resetBtnGorjeta()
  gorjetaValor = 0
})
