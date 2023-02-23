// Variáveis de aplicação
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnReset = document.querySelector('#btnReset')
const fortunes = [
  'Você terá um dia maravilhoso!',
  'Uma grande surpresa está por vir!',
  'Seu trabalho árduo será recompensado em breve.',
  'Siga seus sonhos, eles podem se tornar realidade.',
  'Você encontrará a resposta que está procurando em breve.',
  'Nada na vida é pra sempre, nem a felicidade, muito menos a tristeza',
  'Bora codar dev '
]

// Eventos
btnLucky.addEventListener('click', handleGetLucky)
btnReset.addEventListener('click', haandleResetClick)

// Funções callback

function getFortune() {
  //Função usada para pegar uma frase aleatória na constante fortunes
  const randomIndex = Math.floor(Math.random() * fortunes.length) //floor é para arredondar o número
  return fortunes[randomIndex]
}

function handleGetLucky(event) {
  screen1.classList.add('hide')
  screen2.classList.remove('hide')

  screen2.querySelector('p').innerText = getFortune()
}

function haandleResetClick(event) {
  screen2.classList.add('hide')
  screen1.classList.remove('hide')
}
