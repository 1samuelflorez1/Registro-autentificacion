/**
 * LOGIN:
 * -----
 * 1. Usar Selector para capturar el formulario de Login.
 * 2. Escuchar el evento submit del formulario y llamar funcion de ingresarUsuario
 * 3. Previene el comportamiento predeterminado del envío del formulario
 * 4. Recupera los valores de email y contraseña del formulario.
 * 5. Obtener la lista de usuarios desde localStorage con la llave 'usuarios'.
 * 6. Verifica si el email ingresado existe en los usuarios registrados.
 *    Si no muestra la alerta correspondiente, Restea el formulario y retorna
 * 7. Verifica si la contraseña coincide
 *    Si no coincide, muestra la alerta correspondiente, Restea el formulario y retorna
 * 8. Guarda el usuarioLogueado en el LocalStorage
 * 9. Redirecciona al index.html
 */


const loginForm = document.getElementById('loginForm')

function ingresarUsuario(e){
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    const existeUsuario = usuarios.find((usuario) => usuario.email === email) //esto busca si en este caso, el email ya existe

    if(!existeUsuario){
        alert("El usuario o contraseñas son incorrectos")
        loginForm.reset()
        return
    }

    if(existeUsuario.password !== password){
        alert("La contraseña es incorrecta")
        loginForm.reset()
        return
    }
    const usuarioLogueado = {
        nombreCompleto: existeUsuario.nombre+" "+existeUsuario.apellido,
        email: existeUsuario.email
    }
    localStorage.setItem('logueado', JSON.stringify(usuarioLogueado))
    window.location.href = 'index.html'


}


loginForm.addEventListener('submit', ingresarUsuario)