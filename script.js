function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains ('ligth')) {
  //     html.classList.remove('ligth')
  //   } else {
  //      html.classList.add('ligth')
  // }
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se tiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
