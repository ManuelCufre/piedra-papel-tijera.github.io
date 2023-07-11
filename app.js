const ficha = document.querySelectorAll(".ficha");
const mostrarUsuario = document.getElementById("mostrar-usuario")

ficha.forEach(element => {
    element.onclick = () => {
        let numeroAleatorio = Math.floor(Math.random() * 3 + 1)
        if (element.id == "piedra") {
            mostrarUsuario.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`
        } else if (element.id == "papel") {
            mostrarUsuario.innerHTML = `<i class="fa-regular fa-hand"></i>`
        } else {
            mostrarUsuario.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`
        }

        maquina(numeroAleatorio);
        resultado(element.id, numeroAleatorio)
    }
});

const mostrarMaquina = document.getElementById("mostrar-maquina")


function maquina(numeroAleatorio) {

    console.log(numeroAleatorio);

    if (numeroAleatorio == 1) {
        mostrarMaquina.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`
    } else if (numeroAleatorio == 2) {
        mostrarMaquina.innerHTML = `<i class="fa-regular fa-hand"></i>`
    } else {
        mostrarMaquina.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`
    }
}

function resultado(elemento, numeroAleatorio) {

    const resultado = document.getElementById('resultado')

    if (elemento == "piedra" && numeroAleatorio == 1) {
        resultado.innerHTML = "Empate"
    } else if (elemento == "piedra" && numeroAleatorio == 2) {
        resultado.innerHTML = "Perdiste!!!"
    } else if (elemento == "piedra" && numeroAleatorio == 3) {
        resultado.innerHTML = "Ganaste!!!"
    } else if (elemento == "papel" && numeroAleatorio == 1) {
        resultado.innerHTML = "Ganaste"
    } else if (elemento == "papel" && numeroAleatorio == 2) {
        resultado.innerHTML = "Empate!!!"
    } else if (elemento == "papel" && numeroAleatorio == 3) {
        resultado.innerHTML = "Perdiste!!!"
    } else if (elemento == "tijera" && numeroAleatorio == 1) {
        resultado.innerHTML = "Perdiste!!"
    } else if (elemento == "tijera" && numeroAleatorio == 2) {
        resultado.innerHTML = "Ganaste!!!"
    } else if (elemento == "tijera" && numeroAleatorio == 3) {
        resultado.innerHTML = "Empate!!!"
    }
}
