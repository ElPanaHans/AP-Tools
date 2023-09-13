document.addEventListener("DOMContentLoaded", function () {
    const headerFaSolid = document.querySelector(".header_fa-solid");
    const navFaSolid = document.querySelector(".nav_fa-solid");
    const nav = document.querySelector(".nav");
    const headerImg = document.querySelector(".header__img");
  
    // Agrega un evento clic al icono de navegación para cerrar el menú
    navFaSolid.addEventListener("click", function () {
      // Oculta el menú al hacer clic en nav_fa-solid
      nav.style.display = "none";
  
      // Restaura la visibilidad de header_fa-solid y header__img
      headerFaSolid.style.visibility = "visible";
      headerImg.style.visibility = "visible";
    });
  
    // Agrega un evento clic al icono en el encabezado para abrir el menú
    headerFaSolid.addEventListener("click", function () {
      // Muestra el menú al hacer clic en header_fa-solid
      nav.style.display = "block";
  
      // Oculta header_fa-solid y header__img sin dejar espacio
      headerFaSolid.style.visibility = "hidden";
      headerImg.style.visibility = "hidden";
    });
  });
  