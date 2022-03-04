import { carregaItens } from "./carregaItens.js"

carregaItens()

const itensDoMenu = document.querySelectorAll(".item-menu")
const btn = document.querySelector(".btn-para-espera")
const mesa = JSON.parse(localStorage.getItem("Mesa")) || []
const pedido = []

btn.addEventListener("click", () => {
  try {
    itensDoMenu.forEach(item => {
      var qtdDePratos = item.children[2].value
      var precoDoPrato = item.children[1].innerHTML
      var nomeDoPrato = item.children[2].name

      if (qtdDePratos >= 1) {
        pedido.push({ qtdDePratos, precoDoPrato, nomeDoPrato })
      }
    })
    console.log(pedido)
    mesa[0].pedido.push(pedido)
    localStorage.setItem("Mesa", JSON.stringify(mesa))
  } catch {
    alert(
      "Estamos com problemas técnicos por favor chame um de nossos colaboradores."
    )
  }
})
