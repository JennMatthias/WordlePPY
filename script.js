let intentos = 6;
let diccionario = ['APPLE', 'WHITE', 'WINGS', 'YOUTH', 'TWICE', 'GREEN', 'SUPER', 'COLOR', 'FLUID'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const button = document.getElementById("guess-button");
console.log(palabra);
button.addEventListener("click", intentar);

let palabraApi = "";
const UrlApi = "https://random-word-api.herokuapp.com/word?length=5&lang=es";
console.log(palabraApi);
fetch(UrlApi).then(response => response.json()).then(response=>{
    palabraApi=response[0].toUpperCase();
    console.log("API: ",palabraApi);
}).catch(err =>{
    console.log("Lista auxiliar: ",palabra);
});

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabraApi) {
        mostrarPalabra(palabraApi, 'green'); // Mostrar la palabra en verde si es correcta
        terminar("<h1>¡¡¡FELICIDADES!!!😀</h1>");
        return;
    }
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabraApi) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabraApi[i]) { //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if (palabraApi.includes(INTENTO[i])) { //AMARILLO
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

function mostrarPalabra(palabraApi, color) {
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabraApi) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        SPAN.innerHTML = palabraApi[i];
        SPAN.style.backgroundColor = "#ba0c51";
        ROW.appendChild(SPAN);
    }
    document.getElementById("grid").appendChild(ROW);
    document.getElementById("grid").appendChild(document.createElement('br'));
}
