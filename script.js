let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const button = document.getElementById("guess-button");
console.log(palabra);
button.addEventListener("click", intentar);

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        mostrarPalabra(palabra, 'green'); // Mostrar la palabra en verde si es correcta
        terminar("<h1>¡¡¡FELICIDADES!!!😀</h1>");
        return;
    }
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) { //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if (palabra.includes(INTENTO[i])) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN);
    }
    document.getElementById("grid").appendChild(ROW);
    document.getElementById("grid").appendChild(document.createElement('br'));
    intentos--;
    if (intentos === 0) {
        terminar("<h1>¡INTENTA OTRA VEZ!</h1>");
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value.toUpperCase();
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

function mostrarPalabra(palabra, color) {
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        SPAN.innerHTML = palabra[i];
        SPAN.style.backgroundColor = "pink"; // Establecer el color
        ROW.appendChild(SPAN);
    }
    document.getElementById("grid").appendChild(ROW);
    document.getElementById("grid").appendChild(document.createElement('br'));
}