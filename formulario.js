// Objeto usuario
let usuario = {
    nombre: "",
    email: "",
    puntuacion: "",
    comentarios: "",
    recomienda: ""
};

// Función para enviar datos del formulario
function enviar() {
    const formulario = document.getElementById("usuario");

    // usar el name correcto ("name")
    usuario.nombre = formulario.elements["name"].value.trim();
    usuario.email = formulario.elements["email"].value.trim();
    usuario.puntuacion = formulario.elements["puntuacion"].value;
    usuario.comentarios = formulario.elements["comentarios"].value.trim();
    usuario.recomienda = formulario.elements["recomienda"].value;
    console.log("Usuario desde formulario:", usuario);

    mostrar(); // muestra el alert
}




//Boton

document.getElementById("usuario").addEventListener("submit", function (event) {
    event.preventDefault(); // evita que se recargue la página
    enviar(); // llena el objeto y llama a mostrar()
});

function mostrar() {
    alert("¡Gracias por tu opinión!");
}


