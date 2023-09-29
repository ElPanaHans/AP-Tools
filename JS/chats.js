document.addEventListener("DOMContentLoaded", function () {
    const selectedContainer = localStorage.getItem("selectedContainer");
    const container1 = document.getElementById("container-1");
    const container2 = document.getElementById("container-2");
  
    if (selectedContainer === "container-1") {
      container1.style.display = "block";
      container2.style.display = "none";
    } else if (selectedContainer === "container-2") {
      container1.style.display = "none";
      container2.style.display = "block";
    }
  });
  