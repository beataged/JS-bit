function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

var w = window.innerWidth - 100;
var h = window.innerHeight - 100;
const ball = document.querySelector('.balls');

// const intervalID = setInterval(go, 1000);
let count = 0;

function go(){
ball.style.top = rand(0,h) + 'px';
ball.style.left = rand(0,w) + 'px';
}

let intervalID;
console.log(w,h);

let isGo = false;

ball.addEventListener('click', () => {
    if(isGo){
       clearTimeout(intervalID);
       isGo = false; 
    }else
    go();
    intervalID = setInterval(go, 1000);
    isGo = true;
    
})