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
const tagas = document.querySelector("h1");
tagas.style.color = 'darkgreen';

const tagas1 = document.querySelector('i');
tagas1.classList.add('small');

const tagas2 = document.querySelector('h1');
tagas2.classList.remove('main');

const tagas3 = document.querySelector('h2');
tagas3.classList.add('first');
tagas3.classList.remove('main');

const tagas4 = document.querySelector('span');
tagas4.style.fontSize = '10px';
tagas4.style.color = 'grey';

//Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//a Suskaičiuoti kiek yra h2 tagų;
//b Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
//c Visus h2 tagus nuspalvinti šviesiai mėlynai
//d Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
//e Pabraukti visus tagus su klase new;
//f Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
//g Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
//h Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
//i Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
//2a
const heading2 = document.querySelectorAll ('h2');
//2b
console.log('h2 nariu yra:', heading2.length);

let counter = 0;
for(let i = 0; i<heading2.length; i++){
    if(!heading2[i].classList.contains('first')){
        counter++;
    }
}
console.log(counter);

// const allH1NotFirst = document.querySelector('h2:not(.first)');

//2c
heading2.forEach(i =>i.style.color = 'lightblue');

//2d

// const divai = document.querySelector('div.prices > h2');
// divai.forEach(i => i.classList.add('price-tag'));

//2ee Pabraukti visus tagus su klase new;

const tagai = document.querySelectorAll('.new');
tagai.forEach(i => i.style.textDecoration = "underline");

//f Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

const gyvunai = document.querySelectorAll('ul');
console.log("gyvunu ir zirafu yra:", gyvunai.length);

const zirafos = document.querySelectorAll('#zirafos > li');
console.log("zirafu yra:", zirafos.length-1);

//g Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

gyvunai.forEach(i => {
    i.style.border = "2px solid black";
    i.style.padding = "15px 50px";
});

//h Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

const naujiGyvunai = document.querySelectorAll('ul .new');
console.log('nauju gyvunu yra:', naujiGyvunai.length);

//i Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

const ats = {};

document.querySelectorAll('ul').forEach(ul => {
    ats[ul.id] = ul.querySelectorAll('.new').length;
});

console.log(ats);

// /Elementų events
//a Padaryti tai ką liepia mygtukai Header1 sekcijoje;
const click = document.querySelector('#h1-color');

click.addEventListener('click', () => tagas.style.color = 'red' );

const click2 = document.querySelector('#h1-font');

click2.addEventListener('click', () => tagas.style.fontSize = '10px' );

const click3 = document.querySelector('#h1-color-back');

click3.addEventListener('click', () => tagas.style.color = null );

const click4 = document.querySelector('#h1-font-back');

click4.addEventListener('click', () => tagas.style.fontSize = null );

//b Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;



// tagas1. addEventListener('click', () => )
//c Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
//d Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
//e Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
//f Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
//g Padaryti tai ką liepia mygtukai Header2 sekcijoje;

