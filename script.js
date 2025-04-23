document.addEventListener('DOMContentLoaded', () => {
    const registros = document.querySelectorAll('.registro');
    const modal = document.getElementById('modal');
    const modalTexto = document.getElementById('modal-texto');
    const cerrar = document.getElementById('cerrar-modal');
    const salir = document.getElementById('salir');
    const buscador = document.getElementById('buscador');
    const filas = document.querySelectorAll('#tabla-registros tbody tr');
  
    // Mostrar datos en el modal al hacer clic en un registro
    registros.forEach(fila => {
      fila.addEventListener('click', () => {
        const datos = Array.from(fila.children).map(td => td.textContent);
        modalTexto.textContent = `ID: ${datos[0]} | Nombre: ${datos[1]} | Email: ${datos[2]}`;
        modal.style.display = 'block';
      });
    });
  
    // Cerrar modal
    cerrar.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Salir
    salir.addEventListener('click', () => {
      alert('Saliendo del sistema...');
      // Aquí podrías redirigir o cerrar sesión
      // window.location.href = "logout.html";
    });
  
    // Filtrado en vivo del buscador
    buscador.addEventListener('input', () => {
      const filtro = buscador.value.toLowerCase();
      filas.forEach(fila => {
        const texto = fila.textContent.toLowerCase();
        fila.style.display = texto.includes(filtro) ? '' : 'none';
      });
    });
  });
  