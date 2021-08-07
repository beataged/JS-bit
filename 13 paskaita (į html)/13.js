let masyvas = [3, 2, 5, 1, 4];

console.log(masyvas.slice());

function lygintuvas(a,b){
    console.log('a:', a, 'b: ', b);
    return a - b;
}

masyvas.sort(lygintuvas);

console.log(masyvas);

let ezerai = [
    [2, 'Didelis'],
    [8, 'Ilgas'],
    [11, 'Trumpas'],
    [1, 'Apvalus'],
    [7, 'Gilus']
];

function lygintuvas2(a, b) {

    console.log('a:', a, 'b: ', b);

    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}

function ezeruLygintuvas(a, b) {

    console.log('a:', a, 'b: ', b);

    if (a[1] > b[1]) {
        return 1;
    } else if (a[1] < b[1]) {
        return -1;
    } else {
        return 0;
    }
}

console.log(ezerai.sort(ezeruLygintuvas));

ezerai.sort(lygintuvas2);

console.log(ezerai);
console.log("____________________________")
function zodzioIlgis(a, b) {

    console.log('a:', a, 'b: ', b);

    if (a[1].length > b[1].length) {
        return -1;
    } else if (a[1].length < b[1].length) {
        return 1;
    } else {
        return 0;
    }
}

console.log(ezerai.sort(zodzioIlgis));

console.log('____________sujungimas su HTML___________');

let newH1 = document.createElement('h1');
let newH12 = document.createElement('h1');

let labasVakaras = document.createTextNode('Labas Vakaras');
newH1.appendChild(labasVakaras);

let oldH1 = document.querySelector(".old");
let body = document.querySelector('body');
let container = document.querySelector('.container');

//parenkam ka norim insertint newh1 ir po ko oldH1, body yra tevinis elementas i kurio vidu dedame naujai sukurta elementa
container.insertBefore(newH1, oldH1);
container.appendChild(newH1); //prideda i gala

container.style.backgroundColor = 'blue';
newH1.style.color = 'red';


let h1 = document.querySelector('.old'); //pasirenkamas elementas
h1.classList.add('bla'); //pritaikoma klase bla (be tasko, nes classList tik klases buna)


console.log(newH1);
console.log(oldH1);
console.log(body);

let lis = document.querySelectorAll('li');

console.log(lis);

for(let i = 0; lis.length < 10; i++){
    if (i % 3 === 0) {
        lis[i].style.color = 'green';
    }
}

for(let i = 0; i < 10; i++){

    let newDiv = document.createElement('div');
    let hello = document.createTextNode('hello');
    newDiv.appendChild(hello);
    
    let container = document.querySelector('.container');

    container.appendChild(newDiv);


    if (i % 3 === 0) {
        newDiv.style.color = 'Green';
    }
}


// //1. Sukuriam elementą
// let newH1 = document.createElement("h1");

// //2. Sukuriam text nodą
// let labasVakaras = document.createTextNode("Labas Vakaras!");

// //3. Text nodą įdedame į elementą
// newH1.appendChild(labasVakaras);

// //4. Surandam html'e tėvinį tagą į kurį dėsim elementą
// let container = document.querySelector(".container");

// //5. Į tėvą įdedame sukurtą elementą
// container.appendChild(newH1);

