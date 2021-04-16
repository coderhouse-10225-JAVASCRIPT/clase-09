let myButtonsLogin = document.getElementsByTagName("button");//document.getElementById("login");

// Primero defino una funcion
function myButtonClicked(parametro) {
    console.log("Boton clickeado");
    console.dir(parametro);
}

// luego gestiono los eventos
// Con Event Listener
//myButtonLogin.addEventListener("click", myButtonClicked);

for (const button of myButtonsLogin) {
    button.addEventListener("click", myButtonClicked);
}



// Ahora Arroy function
//myButtonLogin.onclick = (parametro) => console.log("Boton clickeado" + parametro);


