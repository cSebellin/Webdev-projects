const open = document.getElementById('open')
const close = document.getElementById('close')

let getClass = document.getElementById('nav')

open.addEventListener('click', () => {
    console.log();
    if (getClass.className = 'nav disable') {
        getClass.classList.replace('disable', 'active')
    }
})

close.addEventListener('click', () => {
    if (getClass.className = 'nav active') {
        getClass.classList.replace('active', 'disable')
    }
})

// function changeClass() {
//     console.log(getClass.className);

//     if (getClass.className = 'nav disable') {
//         getClass.classList.replace('disable', 'active')
//     } else if (getClass.className = 'nav active') {
//         getClass.classList.replace('active', 'disable')
//     }
//     console.log(getClass.className);
// }