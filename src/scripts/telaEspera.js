import { calculaTotalPedido } from "./calculaTotalPedido.js"

const mesa = JSON.parse(localStorage.getItem("Mesa")) || []
const nomeMesa = document.querySelector(".nome-mesa")
const listaPedido = document.querySelector("ul")
var valores = []
const pedido = (nomePrato, valor, qtd) => {
  const novoPedido = document.createElement("li")
  novoPedido.classList.add("item-pedido")
  const pedido = `
    <p>${qtd}x ${nomePrato}</p>
    <p>${valor}</p>  
  `
  novoPedido.innerHTML = pedido
  return novoPedido
}

nomeMesa.innerHTML = `Mesa ${mesa[mesa.length-1].nomeDaMesa}`

const carregaPedido = () => {
  try {
    var mesaAtual = mesa[mesa.length-1]
    const pedidos = mesaAtual.pedido

    pedidos.forEach(itemPedido => {
      for(var item of itemPedido){
        const precoDoPrato = item.precoDoPrato
        const nomeDoPrato = item.nomeDoPrato
        const qtdDoPrato = item.qtdDePratos

        valores.push({qtdDoPrato:qtdDoPrato, precoDoPrato:precoDoPrato})
        listaPedido.appendChild(pedido(nomeDoPrato, precoDoPrato, qtdDoPrato))
    }
  })
  calculaTotalPedido(valores)
   
  } catch {
    alert(
      "Estamos com problemas técnicos por favor chame um de nossos colaboradores."
    )
  }
}
carregaPedido()
