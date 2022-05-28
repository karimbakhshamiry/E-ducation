const categoryItemsDiv = document.querySelectorAll('.cat-item')
const categoryItemBtns = Array.from(document.querySelector('.categories-container').children)

categoryItemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryItemsDiv.forEach(div => {
            if (div.id === btn.className) {
                div.className = 'cat-item show'
            } else {
                div.className= 'cat-item'
            }
        })
    })
});