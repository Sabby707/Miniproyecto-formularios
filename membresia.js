//registar usuario
document.getElementById("btn-register-membresia").addEventListener("click", function() {
    let nuevoUsuario = {
        nombreCompleto: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        numero: document.getElementById("phone").value,
        contraseña: document.getElementById("registerPassword").value,
        fechadenacimiento: document.getElementById("birthDate").value
    };
  

    // Obtener la lista de usuarios del almacenamiento local (localStorage) o inicializar un array vacío si no existe
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Agregar el nuevo usuario a la lista
    usuarios.push(nuevoUsuario);
    
    // Guardar el nuevo usuario en el almacenamiento local (localStorage)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Bienvenido, " + nuevoUsuario.nombreCompleto + "!");

    // Limpiar los campos del formulario
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("birthDate").value = "";

});



