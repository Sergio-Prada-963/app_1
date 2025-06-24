document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = localStorage.getItem("usuario");
    const usernameSpan = document.getElementById("username");
    const logoutBtn = document.getElementById("logout-btn");

    if (usernameSpan) {
        usernameSpan.textContent = nombreUsuario ? nombreUsuario : "";
    }

    logoutBtn.addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "/web_js/index.html";
    });

    
    const botones = document.querySelectorAll(".card button");

    botones.forEach((btn) => {
        btn.addEventListener("click", function () {
            const card = btn.closest(".card");

            const producto = {
                id: btn.id,
                nombre: card.querySelector("h3").textContent,
                precio: card.querySelector("p").textContent,
                imagen: card.querySelector("img").src
            };

            // Obtener carrito actual (si existe)
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            // Agregar producto al carrito
            carrito.push(producto);

            // Guardar nuevamente
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${producto.nombre} agregado al carrito`);
        });
    });
});
