import { enviaMenu } from "./enviaMenu.js"

//Pegar nome da mesa e mandar para o local storage
const btn = document.querySelector(".btn")
const inputNomeMesa = document.querySelector(".nome-da-mesa")

btn.addEventListener("click", () => {
  var nomeMesa = inputNomeMesa.value
  console.log(nomeMesa)
  if (nomeMesa === "") {
    console.log("vazio")
  } else {
    try {
      const mesa = JSON.parse(localStorage.getItem("Mesa")) || []
      mesa.push({
        nomeDaMesa: nomeMesa,
        pedido: [],
        total: 0.0
      })
      localStorage.setItem("Mesa", JSON.stringify(mesa))

      enviaMenu()

      window.location.assign("http://127.0.0.1:5500/Roses-Restaurant/src/pages/menu.html")
    } catch (error) {
      alert(
        "Estamos com problemas técnicos por favor chame um de nossos colaboradores."
      )
    }
  }
})
