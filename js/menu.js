const hamburguer = document.querySelector('.hamburguer-menu')
const menu = document.querySelector('.navbar')

hamburguer.addEventListener('click', () => {
  menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
  if (menu.classList.contains("spread") && e.target != menu && e.target != hamburguer) {

    menu.classList.toggle("spread")
  }
  })
