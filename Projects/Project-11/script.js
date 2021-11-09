const icon = document.getElementById('nav-icon')
const nav = document.getElementById('nav')
const font = document.getElementById('font-display')

let active = 0

icon.addEventListener('click', () => {
    if (active === 0) {
        openNav()
    } else {
        closenav()
    }
})

function openNav() {
    icon.classList.add('active')
    nav.classList.add('full')
    font.classList.add('show')
    active = 1
}

function closenav() {
    icon.classList.remove('active')
    nav.classList.remove('full')
    font.classList.remove('show')
    active = 0
}