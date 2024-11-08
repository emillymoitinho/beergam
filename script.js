
// Efeito do h1 'Tendencias'
const texto = document.getElementById("text_tendencia");

texto.addEventListener("mouseout", () => {
  texto.textContent = "Tendencias";
});

texto.addEventListener("mouseover", () => {
  texto.textContent = "< Tendencias";
});


function seta() {
    const sidebar = document.getElementById("menu");
    sidebar.classList.toggle("menuAumentado");
  
  }

