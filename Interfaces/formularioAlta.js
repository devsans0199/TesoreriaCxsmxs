const form = document.getElementById("altaForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const datos = {
    nombre: form.nombre.value,
    telefono: form.telefono.value,
    area: form.area.value,
    adscrito: form.adscrito.value,
    sueldo: parseFloat(form.sueldo.value)
  };

  console.log("Empleado registrado:", datos);

  mensaje.textContent = "Registro guardado correctamente.";

  form.reset();

  setTimeout(() => {
    mensaje.textContent = "";
  }, 3000);
});
