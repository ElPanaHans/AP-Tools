// Función para manejar el clic en "Lend"
function handleLendClick() {
    // Cambiar el fondo y color del botón "Lend"
    document.querySelector(".options_lend").style.backgroundColor = "#001f3f";
    document.querySelector(".options_lend").style.color = "#fff";
  
    // Cambiar el fondo y color del botón "Borrow" de vuelta
    document.querySelector(".options_borrow").style.backgroundColor = "#cccccc";
    document.querySelector(".options_borrow").style.color = "#000";
  
    // Mostrar la sección "Lend" y ocultar "Borrow"
    document.getElementById("lend-option").style.display = "block";
    document.getElementById("borrow-option").style.display = "none";
  }
  
  // Función para manejar el clic en "Borrow"
  function handleBorrowClick() {
    // Cambiar el fondo y color del botón "Borrow"
    document.querySelector(".options_borrow").style.backgroundColor = "#001f3f";
    document.querySelector(".options_borrow").style.color = "#fff";
  
    // Cambiar el fondo y color del botón "Lend" de vuelta
    document.querySelector(".options_lend").style.backgroundColor = "#cccccc";
    document.querySelector(".options_lend").style.color = "#000";
  
    // Mostrar la sección "Borrow" y ocultar "Lend"
    document.getElementById("borrow-option").style.display = "block";
    document.getElementById("lend-option").style.display = "none";
  }
  
  // Asignar las funciones a los eventos de clic
  document.querySelector(".options_lend").addEventListener("click", handleLendClick);
  document.querySelector(".options_borrow").addEventListener("click", handleBorrowClick);
  