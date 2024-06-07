// Variable para almacenar los grupos creados
var grupos = [];

// Función para cambiar la visibilidad de los formularios
function toggleForm(id) {
  var form = document.getElementById(id);
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Función para generar las casillas de matrículas según el número de alumnos
function generarCasillasMatriculas(numAlumnos) {
  var matriculasContainer = document.getElementById("matriculasContainer");
  matriculasContainer.innerHTML = "";
  for (var i = 0; i < numAlumnos; i++) {
    matriculasContainer.innerHTML += '<label for="matricula' + (i + 1) + '">Matrícula ' + (i + 1) + ':</label>' +
                                      '<input type="text" id="matricula' + (i + 1) + '"><br>';
  }
}

// Función para crear un nuevo grupo
function crearNuevoGrupo() {
  var escuela = document.getElementById("escuela").value;
  var nombreGrupo = document.getElementById("nombreGrupo").value;
  var numAlumnos = document.getElementById("numAlumnos").value;
  var matriculas = [];
  for (var i = 0; i < numAlumnos; i++) {
    var matricula = document.getElementById("matricula" + (i + 1)).value.trim();
    if (matricula !== "") {
      matriculas.push(matricula);
    }
  }

  // Crear un objeto para el nuevo grupo
  var nuevoGrupo = {
    escuela: escuela,
    nombre: nombreGrupo,
    numAlumnos: numAlumnos,
    matriculas: matriculas
  };

  // Agregar el nuevo grupo a la lista de grupos
  grupos.push(nuevoGrupo);

  // Generar código QR único para el grupo
  generarCodigoQR(escuela, nombreGrupo);

  // Limpiar los campos del formulario
  limpiarFormulario();

  // Mostrar un mensaje de éxito
  alert("¡Grupo creado con éxito!");
}

// Función para generar código QR
function generarCodigoQR(escuela, nombreGrupo) {
  var qrCanvas = document.getElementById("qrCanvas");
  var qr = new QRious({
    element: qrCanvas,
    value: escuela + "-" + nombreGrupo // Concatenamos la escuela y el nombre del grupo para crear un código único
  });
  document.getElementById("codigoQR").style.display = "block";
}

// Función para limpiar el formulario
function limpiarFormulario() {
  document.getElementById("escuela").value = "";
  document.getElementById("nombreGrupo").value = "";
  document.getElementById("numAlumnos").value = "";
  var matriculasContainer = document.getElementById("matriculasContainer");
  matriculasContainer.innerHTML = "";
}
