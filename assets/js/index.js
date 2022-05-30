const navBar = document.querySelector('.nav')
const openMenuBtn = document.querySelector('.open-menu')
const navMenu = document.querySelector('.nav-menu')
const navLinks = document.querySelectorAll('.nav-items')
const loginFormContainer = document.querySelector('.login-container')
const userBtn = document.getElementById('user-btn')
const closeLoginFormBtn = document.getElementById('close-login-form')
const toggleDarkLightBtn = document.querySelector('.darklight')
const mainStyleTag = document.querySelector('.main-style')
let darkMode


// getting the hang of dark mode

    // getting darkMode value from localStorage
if (localStorage.getItem('darkMode')) {
    darkMode = JSON.parse(localStorage.getItem('darkMode'))
} else {
    darkMode = 1
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
}

    // synchronizing darkMode localStorage value with the current state of web page
if (darkMode === 0) {
    mainStyleTag.href = 'assets/css/light_mode_style.css'
    toggleDarkLightBtn.className = 'fa fa-moon-o darklight'
} else {
    mainStyleTag.href = 'assets/css/dark_mode_style.css'
}

    // adding the event to the darklight button (toggling dark mode)
toggleDarkLightBtn.addEventListener('click', () => {
    if (toggleDarkLightBtn.classList.contains('fa-sun-o')) {
        mainStyleTag.href = 'assets/css/light_mode_style.css'
        toggleDarkLightBtn.className = 'fa fa-moon-o darklight'
        darkMode = 0
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    } else {
        mainStyleTag.href = 'assets/css/dark_mode_style.css'
        toggleDarkLightBtn.className = 'fa fa-sun-o darklight'
        darkMode = 1
        localStorage.setItem('darkMode', JSON.stringify(darkMode))

    }
})

// expand the faq's answer on click event of its corresponding icon
document.querySelectorAll('.expand-question').forEach(element => {
    element.addEventListener('click', () => {

        // hide all other faqs answers
        const currentFaq = document.querySelector('.show-answer')

        if (currentFaq) {
            const elementAnswer = element.parentElement.children[1].children[1]

            if (currentFaq.isEqualNode(elementAnswer)) {
                
                toggleShowFaqAnswer(element)

            } else {

                currentFaq.classList.toggle('show-answer')
    
                currentFaq.parentElement.parentElement.children[0].classList.remove('fa-minus')
                currentFaq.parentElement.parentElement.children[0].classList.add('fa-plus')
                
                // show the clicked question's answer
                toggleShowFaqAnswer(element)

            }
        } else {
            toggleShowFaqAnswer(element)
        }

    })
})

// function to control show faq's answer

function toggleShowFaqAnswer(crossmark) {
    // show the clicked question's answer
    crossmark.parentElement.children[1].children[1].classList.toggle('show-answer')
        
    // handle the plus/minus sign
    if (crossmark.classList.contains('fa-plus')) {
        crossmark.classList.remove('fa-plus')
        crossmark.classList.add('fa-minus')
    } else {
        crossmark.classList.remove('fa-minus')
        crossmark.classList.add('fa-plus')
    }
}


// CODE FOR OPENING THE MENU
openMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open')

    if (openMenuBtn.classList.contains('open-menu')) {
        openMenuBtn.classList.remove('open-menu')
        openMenuBtn.classList.add('close-menu')

        openMenuBtn.children[0].className = 'fa fa-times'
    } else {
        openMenuBtn.classList.add('open-menu')
        openMenuBtn.classList.remove('close-menu')

        openMenuBtn.children[0].className = 'fa fa-bars'
    }
})

// hide dropdown menu on scroll, and change the nav color properties

window.addEventListener('scroll', () => {
    navMenu.classList.remove('open')
    navBar.classList.toggle('window-scroll', scrollY > 10)
    
    openMenuBtn.classList.add('open-menu')
    openMenuBtn.classList.remove('close-menu')
    openMenuBtn.children[0].className = 'fa fa-bars'
})

// adding event to userBtn to bring out the login page
userBtn.addEventListener('click', () => {
    document.querySelector('.overlay').style.right = '0'
    loginFormContainer.style.right = '0'
})

// adding event to closeLoginFormBtn to push out the login page
closeLoginFormBtn.addEventListener('click', () => {
    document.querySelector('.overlay').style.right = '-150%'
    loginFormContainer.style.right = '-150%'
})
