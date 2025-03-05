
/* 

PROYECTO: AMIGO SECRETO
AUTOR: NELLI YUNUEN 
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un 
campo de texto y lo agregarán a una lista visible al hacer clic en 
"Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará 
una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista 
debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se 
seleccionará aleatoriamente un nombre de la lista y se mostrará en la 
página.
*/

// Creando variable amigos / array para almacenar los nombres
let amigos = [];

// Creando función para agregar amigos
function agregarAmigo() {
    // Obteniendo el valor del input
    let nuevoAmigo = document.getElementById('amigo').value.trim();

    // si nuevoAmigo es una cadena vacia se evaluara como false -- nuevoAmigo === ""
    if (!nuevoAmigo) {
        // si es una cadena vacia se enviara una alerta para que ingrese un nombre
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Se agrega el nombre al arreglo
    amigos.push(nuevoAmigo);
    // Se manda a llamar para limpiar el input
    limpiarCampo();
    // Se manda llamar la funcion para mostrar la lista amigos
    actualizarListaAmigos();
}

// Creando funcion para limpiar el input
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

// Creando funcion para mostrar la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente

    // Usar un bucle for para iterar sobre el array amigos
    /* Forma desglosada
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }*/

    // Forma optimizada con innerHTML
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; // Agregar cada amigo como un <li>
    }
}

function sortearAmigo() {
    // Se valida que haya amigos disponibles antes de sortear
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade algunos nombres.");
        return; // Salimos de la funcion si no hay amigos
    } else if(amigos.length === 1){ // Se valida que haya mas de 1
        alert("Lo ideal es que haya mas nombres para sortear y sea mas divertido :)");
        return; // Salimos de la funcion si solo hay un amigo
    }

    // Si hay mas de un amigo, proceder a sortear
    // Generar un numero random entre 0 y la longitud del arreglo de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Buscar en el arreglo el nombre del amigo sorteado con el numero generado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el nombre del amigo sorteado
    document.getElementById('resultado').innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}