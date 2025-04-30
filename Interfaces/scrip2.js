$(document).ready(function() {
  
    // Agregar nueva fila
    $('#addBtn').click(function() {
      const newRow = `
        <tr style="animation: fadeIn 0.8s;">
          <td><input type="text" placeholder="Nombre" autofocus></td>
          <td><input type="text" placeholder="Departamento"></td>
          <td><input type="text" placeholder="Teléfono"></td>
          <td class="actions">
            <button class="saveBtn"><i class="fas fa-save"></i></button>
            <button class="deleteBtn"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `;
      $('#dataTable tbody').append(newRow);
    });
  
    // Guardar nueva fila
    $('#dataTable').on('click', '.saveBtn', function() {
      const row = $(this).closest('tr');
      const inputs = row.find('input');
      const values = inputs.map(function() { return $(this).val(); }).get();
  
      if (values.some(val => val.trim() === '')) {
        Swal.fire('Oops', 'Completa todos los campos.', 'warning');
        return;
      }
  
      row.html(`
        <td>${values[0]}</td>
        <td>${values[1]}</td>
        <td>${values[2]}</td>
        <td class="actions">
          <button class="editBtn"><i class="fas fa-edit"></i></button>
          <button class="deleteBtn"><i class="fas fa-trash"></i></button>
        </td>
      `);
    });
  
    // Editar fila
    $('#dataTable').on('click', '.editBtn', function() {
      const row = $(this).closest('tr');
      const columns = row.find('td').map(function() {
        return $(this).text();
      }).get();
  
      row.html(`
        <td><input type="text" value="${columns[0]}" autofocus></td>
        <td><input type="text" value="${columns[1]}"></td>
        <td><input type="text" value="${columns[2]}"></td>
        <td class="actions">
          <button class="saveBtn"><i class="fas fa-save"></i></button>
          <button class="deleteBtn"><i class="fas fa-trash"></i></button>
        </td>
      `);
    });
  
    // Eliminar fila con confirmación
    $('#dataTable').on('click', '.deleteBtn', function() {
      const row = $(this).closest('tr');
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          row.fadeOut(500, function() {
            $(this).remove();
          });
          Swal.fire('¡Eliminado!', 'El registro ha sido eliminado.', 'success');
        }
      });
    });
  
    // Buscar registros
    $('#searchInput').on('keyup', function() {
      const value = $(this).val().toLowerCase();
      $('#dataTable tbody tr').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  
    // Salir
    $('#logoutBtn').click(function() {
      Swal.fire({
        title: 'Cerrar sesión',
        text: '¿Estás seguro de cerrar la sesión?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Hasta luego!', '', 'success').then(() => {
            window.location.href = 'login.html'; // Redirige
          });
        }
      });
    });
  
  });
  