export const calculaTotalPedido = valores => {
  console.log(valores)

  const mesa = JSON.parse(localStorage.getItem("Mesa")) || []
  var novosValores = []
  try {
    valores.map(function(valor){
      var valorPrato = parseFloat((valor.precoDoPrato).replace("R$ ", " ")).toFixed(2)
      var qtd = parseInt(valor.qtdDoPrato)
      var valoresDoPedido = qtd * valorPrato
      console.log(valoresDoPedido)
      novosValores.push(valoresDoPedido)
    })
    console.log(novosValores)
    var totalPedido = novosValores.reduce((totalPedido,novosValores)=> totalPedido + novosValores,0).toFixed(2)
    console.log(totalPedido)
    mesa[mesa.length-1].total = totalPedido
    localStorage.setItem("Mesa", JSON.stringify(mesa))
    
  } catch  {
    alert(
      "Estamos com problemas técnicos por favor chame um de nossos colaboradores."
    )
  }
}

