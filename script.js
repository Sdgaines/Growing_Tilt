const getCircle = document.querySelectorAll('.circle');
const getSquare = document.querySelectorAll('.square');


getCircle.forEach(circle => {
    circle.addEventListener('mouseover', () => {
        shrink();
        circle.classList.add('enlarge');
    })
})



function shrink() {
    getCircle.forEach(circle => {
        circle.classList.remove('enlarge')
    })
}

getSquare.forEach(square => {
    square.addEventListener('mouseover', () => {
        rotate();
        square.classList.add('tilt');
    })
})



function rotate() {
    getSquare.forEach(square => {
        square.classList.remove('tilt')
    })
}




