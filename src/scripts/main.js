//Pegar nome da mesa e mandar para o local storage
const btn = document.querySelector(".btn")
const inputNomeMesa = document.querySelector(".nome-da-mesa")

btn.addEventListener("click", () => {
  var nomeMesa = inputNomeMesa.value
  alert(nomeMesa)
  try {
    const mesa = JSON.parse(localStorage.getItem(`${nomeMesa}`)) || []
    mesa.push({
      nomeDaMesa: nomeMesa
    })
    localStorage.setItem(`${nomeMesa}`, JSON.stringify(mesa))
  } catch (error) {
    alert(
      "Estamos com problemas técnicos por favor chame um de nossos colaboradores."
    )
  }
})
