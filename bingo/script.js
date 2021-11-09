const startgame = document.getElementById('random-generator');
const boxes = document.querySelectorAll('.box-todo');
let randomNum = 0

startgame.addEventListener('click', () => {
    randomNum = Math.floor(Math.random(1) * 30)
    console.log(randomNum);

    boxes.forEach(box => {
        console.log(box.id);
        if (box.id == randomNum) {
            box.classList.add('selected')
        } else {
            box.classList.remove('selected')
        }

    });
})