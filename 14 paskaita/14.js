function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let lapai = 'Ruduo';

const sniegas = [1, 2, 3];

sniegas.push(4);

console.log(sniegas);

for (let i = 0; i < 10; i++) {
    const bla = 'BLA';
    console.log(bla);
}

console.log('________________________________');

function labas(name) {
    console.log(`labas, ${name}`);
}

//Anonimine funkcija
const hello = function (name) {
    console.log(`labas, ${name}`)
}

//Arrow funkcija
const hi = (name) => { console.log(`labas, ${name}`) }

labas('Rapolai');
labas('Zita');

hello('John');
hello('Ann');

hi('Tom');
hi('Julia');

const ezerai = [
    [2, 'Didelis'],
    [44, 'Ilgas'],
    [11, 'Trumpas'],
    [9, 'Apvalus'],
    [1, 'Gilus']
];

function ezeretuvas1(a, b) {
    return a[0] - b[0];
}

console.log(ezerai.sort(ezeretuvas1));

console.log(ezerai.slice().sort((a, b) => a[0] - b[0]));

function ezeretuvas(a, b) {

    console.log('a:', a, 'b: ', b);

    if (a[1] > b[1]) {
        return 1;
    } else if (a[1] < b[1]) {
        return -1;
    } else {
        return 0;
    }
}

console.log(ezerai.slice().sort(ezeretuvas1));
console.log(ezerai.slice().sort((a, b) => a[0] - b[0]));

console.log('___________EVENTAI____________________');

const spaustiButton = document.querySelector('button');
console.log(spaustiButton);

spaustiButton.addEventListener('click', e => {
    console.log(e);
    spaustiButton.style.display = 'none';
})

spaustiButton.addEventListener('mouseover', () => {
    spaustiButton.style.color = 'black';
});

//Atskiri elementai
//Tamsiai žaliai nuspalvinti h1 tagą;
//Tagui i pridėti klasę small;
//Iš tago h1 pašalinti klasę main;
//Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
//Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelector("h1").style.color = 'darkgreen';

const tagas1 = document.querySelector('i');
tagas1.classList.add('small');

