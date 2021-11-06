const circle = document.getElementById('circle')
const hole = document.getElementById('hole')

circle.addEventListener('mouseover', ()=>{
    hole.classList.add('event')
})

circle.addEventListener('mouseout', ()=>{
    hole.classList.remove('event')
})