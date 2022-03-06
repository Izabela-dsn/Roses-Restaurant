//pegar valor total
const mesa = JSON.parse(localStorage.getItem("Mesa")) || []
const totalDaMesa = mesa[0].total

const campoValorTotal = document.querySelector(".item-pedido-valor")
campoValorTotal.innerHTML = `R$ ${totalDaMesa.toFixed(2)}`

//botões de pagamento
const btnPix = document.querySelector(".btn-pix")
const btnDinhCartao = document.querySelector(".btn-cartao-dinheiro")
const pix = document.querySelector(".pix")
const dinheiroCartao = document.querySelector(".cartao-dinheiro")

btnPix.onclick = (e)=>{
    e.preventDefault()
    pix.classList.add("active")
    dinheiroCartao.classList.remove("active")
}

btnDinhCartao.onclick = (e)=>{
    e.preventDefault()
    pix.classList.remove("active")
    dinheiroCartao.classList.add("active")
}