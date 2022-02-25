const menu = {
  item1: {
    tipoPedido: "Entrada",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item2: {
    tipoPedido: "Entrada",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item3: {
    tipoPedido: "Entrada",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item4: {
    tipoPedido: "Prato Principal",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item4: {
    tipoPedido: "Prato Principal",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item5: {
    tipoPedido: "Prato Principal",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item6: {
    tipoPedido: "Sobremesa",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item7: {
    tipoPedido: "Sobremesa",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item8: {
    tipoPedido: "Sobremesa",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item9: {
    tipoPedido: "Bebidas",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  },
  item10: {
    tipoPedido: "Bebidas",
    nomePrato: "Salada",
    ingredientesPrato: "",
    precoUnitarioPrato: 12.3
  }
}

window.onload = () => {
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
