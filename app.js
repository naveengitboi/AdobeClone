
///navbar

const menuOpen = document.querySelector('#menuOpen') 
const menuClose = document.querySelector('#menuClose') 
const navLink = document.querySelector('.navLinks')
menuClose.style.display = 'none'


menuOpen.addEventListener('click', () => {
    navLink.classList.add('navUlActive')
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
})

menuClose.addEventListener('click', () => {
    navLink.classList.remove('navUlActive')
    menuOpen.style.display = 'block'
    menuClose.style.display = 'none'
})

///animation stop

// const animcontent = document.querySelector('.belowBannerContent')

// animcontent.style.background = 'red'

// animcontent.addEventListener('onmouseover', () =>{
    
// })

// animcontent.addEventListener('click', () => {
    
// })