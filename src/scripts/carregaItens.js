// popular cardapio

const itemMenu = (
  tipoPedido,
  pratoTipo,
  nomePrato,
  ingredientes,
  valorUniPrato
) => {
  const novoConteudo = document.createElement("div")
  novoConteudo.classList.add(pratoTipo)
  const conteudo = `
                <label for="item" class="item-menu">
                  <p>
                    ${nomePrato}
                    <legend>
                      ${ingredientes}
                    </legend>
                  </p>
                  <p>R$ ${valorUniPrato.toFixed(2)}</p>
                  <input
                    type="number"
                    name= "${nomePrato}"
                    id="item"
                    min="0"
                    max="8"
                    placeholder="0"
                    
                  />
                </label>
              
    `
  novoConteudo.innerHTML = conteudo
  return novoConteudo
}

const menuEntrada = document.querySelector(".entrada")
const menuPratoPrincipal = document.querySelector(".prato-principal")
const menuSobremesaBebida = document.querySelector(".sobremesa-bebida")

export const carregaItens = () => {
  const dados = JSON.parse(localStorage.getItem("Cardapio")) || []
  const cardapio = dados[0]
  //console.log(cardapio)

  cardapio.forEach(element => {
    if (element.pratoTipo === "prato-entrada") {
      menuEntrada.appendChild(
        itemMenu(
          element.tipoPedido,
          element.pratoTipo,
          element.nomePrato,
          element.ingredientesPrato,
          element.precoUnitarioPrato
        )
      )
    } else if (element.pratoTipo === "prato-principal") {
      menuPratoPrincipal.appendChild(
        itemMenu(
          element.tipoPedido,
          element.pratoTipo,
          element.nomePrato,
          element.ingredientesPrato,
          element.precoUnitarioPrato
        )
      )
    } else if (
      element.pratoTipo === "sobremesa" ||
      element.pratoTipo === "bebidas"
    ) {
      menuSobremesaBebida.appendChild(
        itemMenu(
          element.tipoPedido,
          element.pratoTipo,
          element.nomePrato,
          element.ingredientesPrato,
          element.precoUnitarioPrato
        )
      )
    }
  })
}
