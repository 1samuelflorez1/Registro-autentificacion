/**
 * INDEX:
 * ------
* 1. Comprueba si un usuario ha iniciado sesión recuperando la clave 'Logueado' de localStorage.
* 2. Si ningún usuario ha iniciado sesión, redirige a la página de inicio de sesión.
* 3. Si un usuario ha iniciado sesión, muestra un mensaje de bienvenida con su nombre y apellido.
* 3. El botón de salir, al hacer clic, elimina la sesión del usuario de localStorage.
* 4. Muestra una alerta de despedida y redirige a la página de Login.
*/

const logOut = document.getElementById('logout')
const logueado = JSON.parse(localStorage.getItem('logueado'))

if (!logueado){
    window.location.href = "login.html"
}else {
    const saludo = document.getElementById('saludo')
    saludo.innerHTML = `
    
    Bienvenid@, ${logueado.nombreCompleto}

    `
}

function salir(){
    alert("Vuelve pronto")
    localStorage.removeItem('logueado')
    window.location.href = "login.html"
}

logOut.addEventListener('click', salir)