// Este script está hecho para modificar la página de tejados para hacer su uso un poco más conveniente.

// La utilidad:
// Este código mueve los botones "Finalizar Figura", "Hacer Backup" y "Guardar" a la esquina superior derecha de la ventana, y los mantiene ahí aunque se haga zoom o scroll por la imagen.
// Además, añade un contador de figuras y hace que los botones cambien de color a un color aleatorio cada vez que se los clica, para confirmar que se han clicado correctamente.

// Para usarlo:
// Estando en la página "http://10.8.0.6:1003/trazar/<NUMERO>/", abrir el menú "Inspeccionar" en el buscador, y en la pestaña "Consola", copiar el siguiente código.

var div = document.querySelector('.col-6');
div.style.position = 'fixed';
div.style.top = '0';
div.style.left = '0';
div.style.right = '0';
div.style.width = '100%';
div.style.padding = '10px 20px 0 50%';
div.style.zIndex = '100000000';
div.style.textAlign = 'right';

const contenedor = document.getElementById('cordenadas');
const letrero = document.createElement('div');
div.appendChild(letrero);

const guardarbut = document.getElementById('save-buton');
const backupbut = document.getElementById('hacer-backup-btn');
const finfigbut = document.getElementById('finalize-buton');
const listaFigs = document.getElementById('cordenadas');

function getRandColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  return color
}

function contarDivs() {
    const divsHijos = contenedor.querySelectorAll('div');
    
    const contador = divsHijos.length;

    letrero.textContent = 'Figuras: ' + contador;

    var randcolor = getRandColor();
    finfigbut.setAttribute('style', 'background-color: ' + randcolor + ' !important;');
}

function guardarclicked() {
    var randcolor = getRandColor();
    guardarbut.setAttribute('style', 'background-color: ' + randcolor + ' !important;');
}

function backupclicked() {
    randcolor = getRandColor();
    backupbut.setAttribute('style', 'background-color: ' + randcolor + ' !important;');
}

guardarbut.addEventListener('click', guardarclicked);

backupbut.addEventListener('click', backupclicked);

finfigbut.addEventListener('click', contarDivs);

listaFigs.addEventListener('click', contarDivs);
