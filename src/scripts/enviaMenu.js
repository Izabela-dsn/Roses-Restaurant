export const enviaMenu = () => {
  const menu = [
    {
      tipoPedido: "Entrada",
      pratoTipo: "prato-entrada",
      nomePrato: "Batata frita com queijo e bacon",
      ingredientesPrato: "Batata, queijo mussarela e bacon.",
      precoUnitarioPrato: 25.0
    },
    {
      tipoPedido: "Entrada",
      pratoTipo: "prato-entrada",
      nomePrato: "Polenta frita com queijo ralado",
      ingredientesPrato: "Polenta e queijo parmesão",
      precoUnitarioPrato: 16.0
    },
    {
      tipoPedido: "Entrada",
      pratoTipo: "prato-entrada",
      nomePrato: "Bruschettas",
      ingredientesPrato: "Molho vermelho e tomates cerejas confitados",
      precoUnitarioPrato: 15.0
    },
    {
      tipoPedido: "Prato Principal",
      pratoTipo: "prato-principal",
      nomePrato: "Nhoque de Mandioquinha",
      ingredientesPrato: "Caldo de ragu bovino com nhoque de mandioquinha",
      precoUnitarioPrato: 25.0
    },
    {
      tipoPedido: "Prato Principal",
      pratoTipo: "prato-principal",
      nomePrato: "Galinhada Caipira",
      ingredientesPrato: "Galinhada com milho e galinha caipira",
      precoUnitarioPrato: 30.0
    },
    {
      tipoPedido: "Prato Principal",
      pratoTipo: "prato-principal",
      nomePrato: "Suflê de Vegetais",
      ingredientesPrato: "suflê com milho, cenoura, batata.",
      precoUnitarioPrato: 16.0
    },
    {
      tipoPedido: "Sobremesa",
      pratoTipo: "sobremesa",
      nomePrato: "Sorvete de Chocolate",
      ingredientesPrato: "Sorvete com calda.",
      precoUnitarioPrato: 7.0
    },
    {
      tipoPedido: "Sobremesa",
      pratoTipo: "sobremesa",
      nomePrato: "Pudim",
      ingredientesPrato: "Pudim de leite condensado",
      precoUnitarioPrato: 5.2
    },
    {
      tipoPedido: "Sobremesa",
      pratoTipo: "sobremesa",
      nomePrato: "Taça de acaí",
      ingredientesPrato: "Açaí acompanhado de calda",
      precoUnitarioPrato: 18.0
    },
    {
      tipoPedido: "Bebidas",
      pratoTipo: "bebidas",
      nomePrato: "Coca-cola",
      ingredientesPrato: "1L",
      precoUnitarioPrato: 9.0
    },
    {
      tipoPedido: "Bebidas",
      pratoTipo: "bebidas",
      nomePrato: "Suco natural",
      ingredientesPrato: "1L - Limão, laranja, uva",
      precoUnitarioPrato: 10.0
    }
  ]
  try {
    const cardapio = JSON.parse(localStorage.getItem("Cardapio")) || []
    cardapio.push(menu)
    localStorage.setItem("Cardapio", JSON.stringify(cardapio))
  } catch {
    alert(
      "Estamos com problemas técnicos por favor chame um de nossos colaboradores."
    )
  }
}
