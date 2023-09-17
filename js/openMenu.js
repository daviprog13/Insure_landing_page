const btnMobile = document.querySelector('.menu-burguer')
const navigator = document.querySelector('.navigator')

export default function handleOpenMenu() {
  navigator.classList.toggle('active')
}

btnMobile.addEventListener('click', handleOpenMenu)
