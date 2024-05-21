const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const tryAgain = document.querySelector("#tryAgain")
const message = document.querySelector("#message")
const fortune = [
  "Acredite em si mesmo e você será imparável.",
  "Cada dia é uma nova oportunidade para brilhar.",
  "Se você pode sonhar, pode realizar.",
  "A persistência leva ao sucesso.",
  "A jornada mais longa começa com um único passo.",
  "Sua determinação é sua maior força.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Encare cada desafio como uma chance de crescimento.",
  "Grandes coisas nunca vêm da zona de conforto.",
  "Mude seus pensamentos e você mudará seu mundo.",
  "A adversidade revela o verdadeiro campeão que há em você.",
  "Você é mais forte do que imagina.",
  "O que você faz hoje pode melhorar todos os amanhãs."
]


fortuneCookie.addEventListener('click', handleTryClick)
tryAgain.addEventListener('click', handleResetClick)
document.querySelector('keydown', function(e) {
  if(e.key == 'Enter' && screen2.classList.contains('hide')){
    handleTryClick()
  } else if (e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}) 

function handleTryClick() {
  toggleScreen()
  pickFortune()
}

function handleResetClick() {
  toggleScreen()
}

function pickFortune() {
  let allFortunes = fortune.length
  let randomNumber = Math.floor(Math.random() * allFortunes)  
  screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
}

function toggleScreen() {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}
