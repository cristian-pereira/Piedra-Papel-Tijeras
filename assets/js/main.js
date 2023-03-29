const botones = document.querySelectorAll('.botones')

const piedra = document.querySelector('.piedra')
const papel = document.querySelector('.papel')
const tijera = document.querySelector('.tijera')

const manoUsuario = document.querySelector('.mano-usuario')
const manoComputador = document.querySelector('.mano-computador')

const puntajeUsuario = document.querySelector('.puntaje-usuario')
const puntajeComputador = document.querySelector('.puntaje-computador')

const manos = document.querySelector('.manos')

window.addEventListener('load', () => {
    animation();
    jugar();
})

const animation = () => {
    botones.forEach(entry => {
        entry.addEventListener('click', () => {
            manos.classList.add('manos--animacion')
    
            setTimeout(() => {
                manos.classList.remove('manos--animacion')
            }, 2000);
        })
    })
}

const jugar = () => {
    
    botones.forEach(boton => {
        boton.addEventListener('click', e => {

            const opciones = ['piedra', 'papel', 'tijera'];
            let opcion  = e.target.parentNode.classList[1];
            let random = Math.floor(Math.random() * 3);
            manos.innerHTML = `
                <img class="mano-usuario" src="assets/img/piedra_ada.png" alt="imagen de piedra">
                <img class="mano-computador" src="assets/img/piedra_computadora.png" alt="imagen de piedra">
            `;
            setTimeout(() => {
                manos.innerHTML = `
                    <img class="mano-usuario" src="assets/img/${opcion}_ada.png" alt="imagen de piedra">
                    <img class="mano-computador" src="assets/img/${opciones[random]}_computadora.png" alt="imagen de piedra">
                `;
            }, 2000);
        })
    })
}
