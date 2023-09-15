document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");

  // Ocultar el cargador cuando la página se haya cargado completamente
  window.addEventListener("load", function () {
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000); // Tiempo de espera de 6 segundos (ajusta según lo desees)
  });

  // También puedes ocultar el cargador cuando se inicia la animación de la navegación
  const navLinks = document.querySelectorAll(".nav_a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      loader.style.display = "block";
    });
  });
});
