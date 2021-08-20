const line = document.querySelector('#line');

for(let i = 400; i <= 3000; i+=200){

const part = document.createElement('div');
part.classList.add('part');
const digit = document.createElement('span');
part.appendChild(digit);
digit.appendChild(document.createTextNode(i + 'px'));
line.appendChild(part);

}

const ball = document.querySelector('.ball');

document.addEventListener('scroll', () => {
    ball.style.top = window.scrollY + 400 +'px';
    console.log(window.scrollY);

});






