
const esc = window.document.getElementById("area")
const esc2 = window.document.querySelector('button')

esc.addEventListener('mouseenter', entrar)
esc.addEventListener('click', clicar)
esc.addEventListener('mouseout' , sair)
esc2.addEventListener('click' , clicar2)


function clicar(){ 

const audio = window.document.querySelector('audio')
audio.currentTime = 2.0
audio.play()
}

function clicar2(){

const audio = window.document.querySelector('audio')   
audio.pause()    
}

function entrar(){
  esc.style.background = "blue"
}

function sair(){
  esc.style.background = "black"
  
}

