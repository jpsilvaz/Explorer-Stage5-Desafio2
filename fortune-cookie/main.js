// Variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const btnTryAgain = document.querySelector("#tryAgain")
const textCookie = document.querySelector("h2")
const texts = [
  'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Você é do tamanho do seu sonho.',
  'Todas as coisas são difíceis antes de se tornarem fáceis.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Siga os bons e aprenda com eles.',
  'Uma boa época para terminar tarefas antigas.',
]

// Eventos
fortuneCookie.addEventListener('click', openedCookie)
btnTryAgain.addEventListener('click', openedAnother)

// Funções
function openedCookie () {
  toggleScreen ()
  textCookie.innerText = `${texts[randomTexts()]}`
}

function openedAnother () {
  toggleScreen ()
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function randomTexts () {
  return Math.floor(Math.random() * texts.length);
}