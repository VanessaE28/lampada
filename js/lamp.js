// dom = lampada - lamp --- botaoligar - bt1 .
// informar os objetos que irá utilizar no código.

// evento = click = mouse/teclado.

// função = a ação, o que vai acontecer.


// const x=14 --- const é uma variável fixo.
// let x=14 --- let é uma variável que pode ser modificada.

// DOM

const lampada = document.querySelector('#lampada') // procura alguém na página html se tem alguém com o nome de 'lampada'.
const bt01 = document.querySelector('#btligar')
const bt02 = document.querySelector('#btdesligar')

// eventos

bt01.addEventListener('click', ligar)

bt02.addEventListener('click', desligar)

lampada.addEventListener('dblclick', quebrar)

// função

function ligar(){
    lampada.src = "images/acesa.gif"
}

function desligar(){
    lampada.src = "images/apagada.gif"
}

function quebrar(){
    lampada.src = "images/quebrada.jpg"
}






