const array1 = [3, 6, 10];
let suma = 0;
let iteracijos = 0;
let suma2 = 0;

//element kintamojo vietoje gali buti irasyta belekas, ka sugalvojam, i grazina indeksa, trecias parametras grazina pati masyva
array1.forEach((element, i, trecias) => {
    console.log(element, i, trecias);
    suma += element;
    iteracijos++;
    suma2 += element * i;
});

console.log(suma, iteracijos, suma2);


//0 

//3 + 6 = 9 + 0 = 9
//6 + 10 = 16 + 9 = 25
// 10 + <=> 25

// let suma55 = 0;

// [3, 6, 10].forEach((bi, i, trecias) => suma55 += trecias[i+1] ? bi + trecias[i+1] : 0 )

// console.log(suma55);

console.log('_____________objektai____________');

const array2 = [3, 6, 10];
const obj = {nulis:3, vienas:6, du:10};

array2.push(22);
obj.trys = 22;
obj.suma = function(a,b){return a + b};

console.log(obj, obj.vienas, obj.suma(5,9));
console.log(array2, array2[1]);


//Sukurti tuščią objektą ir jam priskirti dvi savybes savybeA ir savybeB. Abi savybės lygios skaičiui 25

const objektas = {};
objektas.savybeA = 25;
objektas.savybeB = 25;

console.log(objektas);

//Objektui pridėti savybę sumaAB, kuri yra lygi savybių sumai 

objektas.sumaAB = objektas.savybeA + objektas.savybeB;

console.log(objektas);

//Objektui pridėti savybę objektasC, kuri yra lygi tuščiam objektui

objektas.objektasC = {};

//Objekto savybei objektasC priskirti dvi savybes savybeA ir savybeB. Abi savybės lygios skaičiui 42

objektas.objektasC.savybeA = 42;
objektas.objektasC.savybeB = 42;

//Objekto savybei objektasC pridėti savybę sumaAB, kuri yra lygi objekto objektasC savybių savybeA ir savybeB sumai

objektas.objektasC.sumaAB = objektas.objektasC.savybeA + objektas.objektasC.savybeB;

console.log(objektas);

let suo = 'bobikas';
//obj.bobikas = 55;
obj[suo] = 55;
console.log(obj);

//Objektui pridėti savybes iš masyvo: const objektoSavybes = ['bobikas', 'sarikas', 'margis']; kurios lygios 0

const objektoSavybes = ['bobikas', 'sarikas', 'margis'];
objektas3 = {};

objektoSavybes.forEach(element => {objektas3[element] = 0});

console.log(objektas3);


// const dukra = document.querySelector("#d");
// const tevas = document.querySelector("#t");
// const senelis = document.querySelector("#s");

// dukra.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('Dukrele');
// })

// senelis.addEventListener('click', e => {
//     console.log('Senis saltis');
// })

// tevas.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log('Tetukas');
    
// })

const kvads = document.querySelectorAll(".kvad").forEach(k => {
    k.addEventListener('click', e =>{
        e.stopPropagation();
        e.preventDefault(); //kai spaudi ant linko neina i linka
        e.target.style.borderColor = 'blue'; //paimam ta elementa kuriame ivyko eventas
    })
})

