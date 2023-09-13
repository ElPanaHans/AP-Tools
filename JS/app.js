// app.js

// Función para guardar datos en localStorage
function saveFormData() {
    const firstName = document.getElementById("f-Name").value;
    const lastName = document.getElementById("l-Name").value;

    // Comprobar si localStorage está disponible en el navegador
    if (typeof(Storage) !== "undefined") {
        // Guardar datos en localStorage
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
    }
}

// Función para mostrar datos en la página de perfil
function loadProfileData() {
    // Comprobar si localStorage está disponible en el navegador
    if (typeof(Storage) !== "undefined") {
        // Recuperar datos de localStorage
        const firstName = localStorage.getItem("firstName");
        const lastName = localStorage.getItem("lastName");

        // Comprobar si los datos existen y mostrarlos en la página de perfil
        if (firstName && lastName) {
            const profileNameElement = document.getElementById("profileName");
            profileNameElement.textContent = firstName + " " + lastName;
        }
    }
}

// Llamar a la función loadProfileData() cuando se cargue la página de perfil
if (window.location.pathname === "/profile.html") {
    loadProfileData();
}


// ----------------------------------

// Función para mostrar la imagen seleccionada
function displaySelectedImage() {
    console.log("Función displaySelectedImage() se ha llamado"); // Agregar esta línea
    const verifyInput = document.getElementById("verify_input");
    const selectedImage = verifyInput.files[0];
    
    if (selectedImage) {
        const imageURL = URL.createObjectURL(selectedImage);
        const profileImage = document.querySelector(".image_img");
        profileImage.src = imageURL;
    }
}


console.log(displaySelectedImage)