document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("membershipForm");
    const modal = document.getElementById("modal");
    const cerrarBtn = document.getElementById("cerrar");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que se envíe el formulario

        // Capturar datos
        const nombre = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("registerPassword").value;
        const birthDate = document.getElementById("birthDate").value;

        // Crear nuevo usuario
        let nuevoUsuario = {
            nombreCompleto: nombre,
            email: email,
            numero: phone,
            contraseña: password,
            fechadenacimiento: birthDate
        };

        // Guardar en localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Personalizar modal
        modal.querySelector("h2").textContent = `🎉 ¡Gracias, ${nombre || "amig@"}, por unirte a ArteNova!`;
        modal.querySelector("p").textContent = "Nos alegra tenerte con nosotros. Pronto recibirás noticias exclusivas en tu correo.";

        // Mostrar modal
        modal.style.display = "flex";

        // Limpiar formulario
        form.reset();
    });

    // Cerrar modal
    cerrarBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
