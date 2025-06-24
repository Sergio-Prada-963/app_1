const form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const username = form.username.value;
    const password = form.password.value;

    const isValid =
        (username === "usuario1" && password === "1234") ||
        (username === "usuario2" && password === "9999");

    if (isValid) {
        localStorage.setItem("usuario", username); 
        window.location.href = "/web_js/home.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});