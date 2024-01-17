function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")

  //pagar a tag img
  const img = document.querySelector("#profile img")

  //subistituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/images/avatar-light.jpg")
    img.setAttribute(
      "alt",
      "foto de Raphael Gregg fazendo sinal de positivo com as duas mãos na frente de placa informando distancia de picos no caparaó"
    )
  } else {
    // se tiver sem light mode, adicionar a imagem normal
    img.setAttribute(
      "alt",
      "foto de Raphael Gregg de oculos no topo do pico da bandeira no caparaó"
    )
  }
}
