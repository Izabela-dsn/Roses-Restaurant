import { calculaTotalPedido } from "./calculaTotalPedido.js"

const mesa = JSON.parse(localStorage.getItem("Mesa")) || []
const nomeMesa = document.querySelector(".nome-mesa")
const listaPedido = document.querySelector("ul")
var valores = []
const pedido = (nomePrato, valor) => {
  const novoPedido = document.createElement("li")
  novoPedido.classList.add("item-pedido")
  const pedido = `
    <p>${nomePrato}</p>
    <p>${valor}</p>  
  `
  novoPedido.innerHTML = pedido
  return novoPedido
}

nomeMesa.innerHTML = `Mesa ${mesa[0].nomeDaMesa}`

const carregaPedido = () => {
  mesa.forEach(item => {
    const pedidos = item.pedido[0]
    pedidos.forEach(itemPedido => {
      //console.log(itemPedido)
      const precoDoPrato = itemPedido.precoDoPrato
      const nomeDoPrato = itemPedido.nomeDoPrato
      const qtdDoPrato = itemPedido.qtdDePratos
      valores.push(qtdDoPrato, precoDoPrato)

      listaPedido.appendChild(pedido(nomeDoPrato, precoDoPrato))
    })
    console.log(valores)
    calculaTotalPedido(valores)
  })
}
carregaPedido()
