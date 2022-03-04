//pegar valor total
const mesa = JSON.parse(localStorage.getItem("Mesa")) || []
const totalDaMesa = mesa[0].total

const campoValorTotal = document.querySelector(".item-pedido-valor")
campoValorTotal.innerHTML = `R$ ${totalDaMesa.toFixed(2)}`

//botões de pagamento
