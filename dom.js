//getElementById nos permite la manipulacion un elemento con id de la pagina web.
let titulo = document.getElementById("frutas");

//textContent nos permite cambiar el contenido del texto del elemento
titulo.textContent = "Favorites fruits";

//getElementsByClassName nos permite la manipulacion todos los elementos con el mismo nombre de clase.

let elementos = document.getElementsByClassName("fruit");
for (let i = 0; i < elementos.length; i++) {
  //style.  nos permite cambiar el estilo css a un elemento.

  elementos[i].style.color = "blue";
}

//createElement nos permite crear un nuevo elemento al final de nuestro dom.
let nuevoParrafo = document.createElement("p");

//aqui podemos colocar nuestro nuevo elemento.
nuevoParrafo.textContent = "Tambien me gusta el salpicon de frutas";

document.body.appendChild(nuevoParrafo);

//En este bloque nos permite que al pasar el mouse por el elemento cambie fondo a color amarillo.
titulo.onmouseover = function () {
  titulo.style.backgroundColor = "yellow";
};

//En este bloque nos permite que al salir del bloque anterior vuelva al color original o al mecionado.
titulo.onmouseout = function () {
  titulo.style.backgroundColor = "white";
};

//Este bloque nos permite eliminar elementos existentes en el DOM.

let eliminar = document.getElementById("boton");

boton.onclick = function () { 
  nuevoParrafo.remove();
};
