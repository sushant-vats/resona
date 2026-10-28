import './style.css'

const intro = document.getElementById('intro')
const button = document.getElementById('stage')

function start() {
  intro.classList.add('leaving')
  stage.classList.remove('hidden')
  setTimeout(() => intro.remove(), 900)
}

intro.addEventListener('click', start, { once: true })