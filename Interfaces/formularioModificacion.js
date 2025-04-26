// Simulación de datos existentes
const empleado = {
    nombre: "Laura Gómez",
    telefono: "5523456789",
    area: "Recursos Humanos",
    adscrito: "Oficina Central",
    sueldo: 18500.00
  };
  
  // Rellenar el formulario con los datos simulados
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nombre").value = empleado.nombre;
    document.getElementById("telefono").value = empleado.telefono;
    document.getElementById("area").value = empleado.area;
    document.getElementById("adscrito").value = empleado.adscrito;
    document.getElementById("sueldo").value = empleado.sueldo;
  });
  
  document.getElementById("modificarForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const datosModificados = {
      nombre: document.getElementById("nombre").value,
      telefono: document.getElementById("telefono").value,
      area: document.getElementById("area").value,
      adscrito: document.getElementById("adscrito").value,
      sueldo: parseFloat(document.getElementById("sueldo").value)
    };
  
    console.log("Datos actualizados:", datosModificados);
  
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Cambios guardados correctamente.";
  
    setTimeout(() => {
      mensaje.textContent = "";
    }, 3000);
  });
  