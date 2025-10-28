document.addEventListener("DOMContentLoaded", () => {
  // FILTRO DE TURNOS //
  const select = document.getElementById("turno");
  const opcoes = document.querySelectorAll(".turno-opcao");

    if (select && opcoes.length > 0) {
    select.addEventListener("change", () => {
      opcoes.forEach(o => o.style.display = "none");
      const valor = select.value;

      if (valor === "integral") document.getElementById("integral").style.display = "flex";
      if (valor === "manha") document.getElementById("manha").style.display = "flex";
      if (valor === "tarde") document.getElementById("tarde").style.display = "flex";
      if (valor === "manha_tarde") {
        document.getElementById("manha").style.display = "flex";
        document.getElementById("tarde").style.display = "flex";
      }
    });
  }
});
// SISTEMA DE LOGIN //