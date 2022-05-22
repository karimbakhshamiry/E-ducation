const navBar = document.querySelector('.nav')
const openMenuBtn = document.querySelector('.open-menu')
const navMenu = document.querySelector('.nav-menu')

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
// CODE FOR SWIPER

const testimonialsSwiper = new Swiper('.testimonials-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }

})