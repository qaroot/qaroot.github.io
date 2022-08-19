const modal = document.querySelector ('.modal')
const loginBtn = document.querySelector ('.login-btn')
const closeBtn = document.querySelector ('.close')

loginBtn.addEventListener('click', modalOpen)
closeBtn.addEventListener('click', modalClose)
window.addEventListener('click', outsideClick)


function modalOpen () {
    modal.style.display = 'block'
}

function modalClose () {
    modal.style.display = 'none'
}

function outsideClick (e){
    if(e.target == modal) {
        modalClose()
    }
}