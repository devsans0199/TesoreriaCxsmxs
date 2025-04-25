// Datos simulados
const records = [
  { id: 1, nombre: "Cliente Juan Pérez" },
  { id: 2, nombre: "Cliente Ana López" },
  { id: 3, nombre: "Cliente Carlos Martínez" },
];

// Referencias
const container = document.getElementById("records-container");
const searchInput = document.getElementById("search");

// Función para renderizar registros
function renderRecords(filter = "") {
  container.innerHTML = "";

  records
    .filter(record => record.nombre.toLowerCase().includes(filter.toLowerCase()))
    .forEach(record => {
      const div = document.createElement("div");
      div.className = "record";
      div.innerHTML = `
        <span>${record.nombre}</span>
        <div class="record-buttons">
          <button class="modify-btn" onclick="modifyRecord(${record.id})">Modificar</button>
          <button class="delete-btn" onclick="deleteRecord(${record.id})">Eliminar</button>
        </div>
      `;
      container.appendChild(div);
    });
}

// Función para modificar un registro
function modifyRecord(id) {
  const nuevoNombre = prompt("Ingrese el nuevo nombre:");
  if (nuevoNombre) {
    const index = records.findIndex(r => r.id === id);
    if (index !== -1) {
      records[index].nombre = nuevoNombre;
      renderRecords(searchInput.value);
    }
  }
}

// Función para eliminar un registro
function deleteRecord(id) {
  const confirmDelete = confirm("¿Seguro que deseas eliminar este registro?");
  if (confirmDelete) {
    const index = records.findIndex(r => r.id === id);
    if (index !== -1) {
      records.splice(index, 1);
      renderRecords(searchInput.value);
    }
  }
}

// Buscar mientras escribe
searchInput.addEventListener("input", (e) => {
  renderRecords(e.target.value);
});

// Botón de salir
document.getElementById("logout").addEventListener("click", () => {
  alert("Has salido del sistema.");
  // Puedes agregar aquí redireccionamiento si quieres
});

// Inicializar vista
renderRecords();
