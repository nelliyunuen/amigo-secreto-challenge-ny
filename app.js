// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* 
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

// Creando variable amigos
let amigos = [];

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value.trim(); // Obtenemos el valor del input y eliminamos espacios

    // Verificamos que el campo no esté vacío
    if (nuevoAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // Salimos de la función si el nombre está vacío
    } else{
        amigos.push(nuevoAmigo); // Agregamos al nuevo amigo al arreglo
        limpiarCampo();
    }
    console.log(amigos);
}

function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerText += texto;
    return;
}


// function agregarEnLista(){
//     let lista = document.getElementById('listaAmigos');
//     listaAmigos.innerHTML += `<li>${nuevoAmigo}</li>`; // Agregamos el nuevo amigo como un elemento de lista
// }





// Comprobar si el arreglo tiene contenido
function comporbarArreglo(){
    if(amigos.length === 0){
        console.log("El arreglo esta vacio");
        alert("No hay amigos para sortear. Ingrese al menos dos");
        
    } else if(amigos.length === 1){
        console.log("El arreglo solo tiene un elemento");
        alert("Lo ideal es que haya mas nombres para poder sortear :)");
    } else{
        console.log("El arreglo tiene contenido");
        // Funcion sortear amigos
    }
    console.log(amigos);
}

comprobarArreglo(amigos);


function sortearAmigo(){
    // Solicitar y guardar nuevoAmigo
    agregarAmigo();
    asignarTextoElemento('listaAmigos',`<li>${nuevoAmigo}</li>`);
    console.log(amigos);
    

}

