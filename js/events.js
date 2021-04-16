let myButtonsLogin = document.getElementsByTagName("button");//document.getElementById("login");

// Primero defino una funcion
function myButtonClicked(parametro) {
    console.log("Boton clickeado");
    console.dir(parametro);
}

// luego gestiono los eventos
// Con Event Listener
//myButtonLogin.addEventListener("click", myButtonClicked);

// Asigne a todos los botones la misma funcion
for (const button of myButtonsLogin) {
    button.addEventListener("click", myButtonClicked);
}


let limpiar = document.getElementById("clean");

limpiar.onclick = () => {
    let lista = document.getElementById("myCarrito");
    lista.parentNode.removeChild(lista)
    console.log("Voy a limpiar el carrito")
};


// Ahora Arroy function
//myButtonLogin.onclick = (parametro) => console.log("Boton clickeado" + parametro);


