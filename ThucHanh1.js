let imgMy = ''
imgMy = document.getElementById('myImage')
function init(){
    imgMy = document.getElementById('myImage')
    imgMy.style.position = 'relative'
    imgMy.style.left = '0px'
}
function moveRight(){
    imgMy.style.left = parseInt(imgMy.style.left) + 20 + 'px'
}
function moveLeft() {
    imgMy.style.left = parseInt(imgMy.style.left) - 20 + 'px'
}
window.onload = init
