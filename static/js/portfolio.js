//barra de navegacion//
const navButtons = Array.from(document.getElementsByClassName('nav__item'))
navButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        navButtons.forEach((b)=>{b.classList.remove('active')})
        button.classList.add('active')
    })
})
//observador

const secciones = Array.from(document.getElementsByClassName('section'))
let indice
const observer = new IntersectionObserver((entradas) => 
{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            indice = secciones.indexOf(entrada.target)
            console.log(indice)
            navButtons[indice]
            navButtons.forEach((b)=>{b.classList.remove('active')})
            navButtons[indice].classList.add('active')
        }
    })
},
{
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.7
}
)

secciones.forEach(seccion => observer.observe(seccion))

/* burger */
let burger = document.getElementById('burger')
let menu = document.getElementById('menu')
burger.addEventListener('click', () => {
    if (burger.classList.contains('activo')) {
        burger.classList.remove('activo')
        burger.classList.add('no_activo')
        menu.classList.remove('media')
    }
    else {
        burger.classList.add('activo')
        burger.classList.remove('no_activo')
        menu.classList.add('media')
    }
})


//tipado perfil
const tipeado = new Typed('.auto__type', {
    strings: ['Desarrollador', 'Ingeniero Mecatrónico'], // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html',
})

//proyectos carrucel

const carruselContainer = document.getElementById('carrusel')
const cards = Array.from(document.getElementsByClassName('card'))
const btnSiguiente = document.getElementById('next')
const btnAnterior = document.getElementById('prev')
let totalCards = cards.length - 1
let inicio = 0
//media query carrusel max 850px
let screen_550 = window.matchMedia("(max-width: 550px)")
let screen_850 = window.matchMedia("(max-width: 850px)")
let screen_1149 = window.matchMedia("(max-width: 1149px)")

cards[0].classList.add('scale_card')
function carrusel(i = 0) {
    cards.forEach((card) => {
        card.classList.remove('scale_card')
    })
    if (screen_550.matches) {
        carruselContainer.style.transform = `translateX(${-i * 280}px)`;
    }
    else if (screen_850.matches) {
        carruselContainer.style.transform = `translateX(${-i * 390}px)`;
    }
    else if (screen_1149.matches) {
        carruselContainer.style.transform = `translateX(${-i * 390}px)`;
    }
    else {
        carruselContainer.style.transform = `translateX(${-i * 390}px)`;

    }
    cards[i].classList.add('scale_card')
}
cards.forEach((card, i) => {
    card.addEventListener('click', () => {
        id = i
        carrusel(i)
    })
})
btnAnterior.addEventListener('click', () => {
    if (inicio > 0) {
        inicio--
        carrusel(inicio)
    }
})
btnSiguiente.addEventListener('click', () => {
    if (inicio < totalCards) {
        inicio++
        carrusel(inicio)
    }
})
//formulario
function validarInputs(input) {
    switch (input.target.name) {
        case 'name':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[0].classList.add('oculto')
            } else {
                document.getElementsByClassName('form__label')[0].classList.remove('oculto')
            }
            break;
        case 'email':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[1].classList.add('oculto')
            } else {
                document.getElementsByClassName('form__label')[1].classList.remove('oculto')
            }
            break;
        case 'subject':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[2].classList.add('oculto')
            } else {
                document.getElementsByClassName('form__label')[2].classList.remove('oculto')
            }
            break;
        case 'text__area':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[3].classList.add('oculto')
            } else {
                document.getElementsByClassName('form__label')[3].classList.remove('oculto')
            }
            break;
    }
}
const expresionesRegulares = {
    nombre: /^[a-zA-ZÄ-ÿ\s]{1,40}$/,
    email: /^[\w\d.-]*@?[\w\d]*\.[\w\d]+$/,
}
const formulario = document.getElementById('form')
const inputs = document.querySelectorAll('.form__input')
inputs.forEach(input => {
    input.addEventListener('blur', validarInputs)
})

//boton links
let btnLinks = document.getElementById('boton__link')
let redes = document.getElementById('redes')
btnLinks.addEventListener('click', () => {

    if (redes.classList.contains('activo_redes')) {
        redes.classList.remove('activo_redes')
    }
    else {
        redes.classList.add('activo_redes')
    }
})