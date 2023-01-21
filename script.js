function toggleMode() {
  //alert("oi")
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil diurna.")
  } else {
    img.setAttribute("src", "./assets/avatar-black.png")
    img.setAttribute("alt", "Foto de perfil noturna.")
  }
}
