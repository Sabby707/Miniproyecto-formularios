// Objeto usuario
let usuario = {
    nombre: "",
    email: "",
    puntuacion: "",
    comentarios: "",
    recomienda: ""
};

// Enviar datos del formulario
function enviar() {
    const formulario = document.getElementById("usuario");

    usuario.nombre = formulario.elements["name"].value.trim();
    usuario.email = formulario.elements["email"].value.trim();
    usuario.puntuacion = formulario.elements["puntuacion"].value;
    usuario.comentarios = formulario.elements["comentarios"].value;
    usuario.recomienda = formulario.elements["recomienda"].value;
    console.log("Usuario desde formulario:", usuario);

    mostrar();
}




//Boton

document.getElementById("usuario").addEventListener("submit", function (event) {
    event.preventDefault(); 
    enviar(); 
});




