const categoryItemsDiv = document.querySelectorAll('.cat-item')
const categoryItemBtns = Array.from(document.querySelector('.categories-container').children)

categoryItemBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        // code that changes the backgroud of category labels/btn
        document.querySelector('.categories-container span.selected').classList.remove('selected')
        btn.classList.add('selected')

        // code that brings to corresponding category div to the user sight
        categoryItemsDiv.forEach(div => {
            if (btn.classList.contains(div.id)) {
                div.className = 'cat-item show'
            } else {
                div.className= 'cat-item'
            }
        })
    })
});