 // Manipulación del DOM
 const titulo = document.getElementById("titulo");
 titulo.textContent = "Título modificado dinámicamente"

 const descripcion = document.querySelector(".descripcion")
 descripcion.innerHTML = "<strong>Descripción actualizada</strong>"

 const imagen = document.querySelector("img")
 imagen.setAttribute("src", "nueva-imagen.png")
 imagen.setAttribute("alt", "Imagen modificada")