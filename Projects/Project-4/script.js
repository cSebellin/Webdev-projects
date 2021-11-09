const date = new Date();
const minutes = date.getMinutes()
const hours = date.getHours()
const seconds = date.getSeconds()
const secondHandler = document.getElementsByClassName('.seconds')

console.log(hours);
console.log(minutes);
console.log(seconds);

function setClock() {
    secondHandler.style.transform = rotate(+1 + 'deg');
}


setClock()