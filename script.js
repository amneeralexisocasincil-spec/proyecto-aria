
const boton = document.getElementById("boton");
const contenido = document.getElementById("contenido");

boton.addEventListener("click", function() {

    contenido.classList.remove("oculto");

    boton.textContent = "Una pequeña sorpresa para ti 💗";

    boton.disabled = true;

    // Lluvia de corazones
    for (let i = 0; i < 30; i++) {
        crearCorazon();
    }
});

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.textContent = ["❤️", "💕", "💗", "🌸"][
        Math.floor(Math.random() * 4)
    ];

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.fontSize = (15 + Math.random() * 20) + "px";

    corazon.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 7000);
}
