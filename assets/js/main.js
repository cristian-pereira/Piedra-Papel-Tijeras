const botones = document.querySelectorAll('.botones')

const puntajeUsuario = document.querySelector('.puntaje-usuario')
const puntajeComputador = document.querySelector('.puntaje-computador')

const ganador = document.querySelector('.ganador')

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
                setTimeout(() => {
                    validacion(opcion, opciones[random])
                    gana()
                }, 500);
            }, 2000);
        })
    })
}

const validacion = (opcion, opciones) => {
    if ((opcion === 'piedra' && opciones === 'tijera')
     || (opcion === 'papel' && opciones === 'piedra')
     || (opcion === 'rijera' && opciones === 'papel')) {
        Swal.fire({
            icon: 'success',
            title: 'El jugador Gana',
            text: 'Obtienes 1 punto',
            width: '50em',
            confirmButtonText: 'OK!',
        })
        puntajeUsuario.innerHTML = parseInt(puntajeUsuario.innerHTML) + 1
    }else if (opcion === opciones ){
        Swal.fire({
            icon: 'info',
            title: 'Estan empatados',
            width: '50em',
            confirmButtonText: 'OK!',
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'La computadora gana',
            text: 'Obtiene 1 punto',
            width: '50em',
            confirmButtonText: 'OK!',
        })
        puntajeComputador.innerHTML = parseInt(puntajeComputador.innerHTML) + 1

    }
}

const gana = () => {
    if ( parseInt(puntajeComputador.innerHTML) === 3) {
        Swal.fire({
            icon: 'error',
            title: '¡Has perdido!',
            text: ':(',
            width: '50em',
            confirmButtonText: 'OK!',
        })
        ganador.innerHTML = `
            <p>La computadora gana :(</p>
        `
    }else if(parseInt(puntajeUsuario.innerHTML) === 3){
        Swal.fire({
            icon: 'success',
            title: '¡Has Ganado!',
            text: ':D',
            width: '50em',
            confirmButtonText: 'OK!',
        })
        ganador.innerHTML = `
            <p>¡Ganaste! :D</p>
        `
    }

    if ((parseInt(puntajeComputador.innerHTML) === 3) || (parseInt(puntajeUsuario.innerHTML) === 3)) {
       setTimeout(() => {
           puntajeUsuario.innerHTML = 0;
           puntajeComputador.innerHTML = 0;
           ganador.innerHTML = ''
       }, 3000);
    }
}