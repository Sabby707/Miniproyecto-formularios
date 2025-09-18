document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const mensaje = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(
            usuario => usuario.email === email && usuario.contraseña === password
        );

        if (usuarioEncontrado) {
            mensaje.textContent = `👋 ¡Bienvenido de nuevo, ${usuarioEncontrado.nombreCompleto}!`;
            mensaje.style.color = "green";

            // Puedes redirigir después de 1 segundo, si quieres
            setTimeout(() => {
                window.location.href = "index.html"; // o donde quieras llevarlo
            }, 1500);

        } else {
            mensaje.textContent = "❌ Correo o contraseña incorrectos.";
            mensaje.style.color = "red";
        }
    });
});
