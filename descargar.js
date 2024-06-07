// Función para verificar la contraseña y descargar la lista de asistencia en Excel
function verificarContrasena() {
  var contrasena = document.getElementById("contrasena").value;
  if (contrasena === "123Conalep") {
    descargarListaAsistencia();
  } else {
    alert("Contraseña incorrecta. Por favor, intenta de nuevo.");
  }
}

// Función para descargar la lista de asistencia en Excel
function descargarListaAsistencia() {
  // Aquí deberías implementar la lógica para generar y descargar un archivo Excel con la lista de asistencia
  alert("Descargando lista de asistencia en Excel...");
}
