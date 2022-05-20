const navBar = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    navBar.classList.toggle('window-scroll', scrollY > 100)
})