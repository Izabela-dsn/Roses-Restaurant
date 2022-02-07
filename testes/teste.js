const teste = document.querySelectorAll("input[type=radio]")
const label = document.querySelectorAll(".percentages")
var total = 0

for (let l of label) {
  l.addEventListener("click", e => {
    e.preventDefault()
    teste.forEach(inpu => {
      if (l.htmlFor === inpu.id) {
        //l.classList.toggle("active")
        total = inpu.value
        console.log(inpu.value)
      }
    })
    console.log("ESSe" + total)
  })
}
