const navBar = document.querySelector('.nav')
const openMenuBtn = document.querySelector('.open-menu')
const navMenu = document.querySelector('.nav-menu')
const loginFormContainer = document.querySelector('.login-container')
const userBtn = document.getElementById('user-btn')
const closeLoginFormBtn = document.getElementById('close-login-form')
const toggleDarkLightBtn = document.querySelector('.darklight')
const dark = toggleDarkLightBtn.classList.contains('fa-sun-o') ? 0 : 1

if (dark) {
    document.querySelector('.main-style').href = 'assets/css/style_dark.css'
}

toggleDarkLightBtn.addEventListener('click', () => {
    if (toggleDarkLightBtn.classList.contains('fa-sun-o')) {
        document.querySelector('.main-style').href = 'assets/css/style_dark.css'
        toggleDarkLightBtn.className = 'fa fa-moon-o darklight'
        dark = 1
    } else {
        document.querySelector('.main-style').href = 'assets/css/style.css'
        toggleDarkLightBtn.className = 'fa fa-sun-o darklight'
        dark = 0
    }
})


window.addEventListener('scroll', () => {
    navBar.classList.toggle('window-scroll', scrollY > 10)
})

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

window.addEventListener('scroll', () => {
    navMenu.classList.remove('open')

    openMenuBtn.classList.add('open-menu')
    openMenuBtn.classList.remove('close-menu')
    openMenuBtn.children[0].className = 'fa fa-bars'
})

userBtn.addEventListener('click', () => {
    document.querySelector('.overlay').style.right = '0'
    loginFormContainer.style.right = '0'
})

closeLoginFormBtn.addEventListener('click', () => {
    document.querySelector('.overlay').style.right = '-150%'
    loginFormContainer.style.right = '-150%'
})
