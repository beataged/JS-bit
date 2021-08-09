//Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 

const input1 = document.querySelector('#input1');
const uzduotis1 = document.querySelector('#uzduotis1');

uzduotis1.addEventListener('click', () => console.log(input1.value));

//Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log

const input2 = document.querySelector('#uzduotis2');
input2.addEventListener('change', () => {
    console.log(input2.value);
})

//Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log

const input3 = document.querySelectorAll('[name=labas]');

input3.forEach(i => {
    i.addEventListener('change', () =>{
        console.log(i.value);
    })
});

//4 Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”

const input4 = document.querySelector('#scales');

input4.addEventListener('change', () => {
    if(input4.checked === true){
        console.log("Pazymeta");
    }else if(input4.checked === false){
        console.log("Nepazymeta");
    }
});

//5 Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint arba atžymint checkbox’ą), išvesti į console.log visų pažymėtų checkbox’ų reikšmes

const input5 = document.querySelectorAll('.labas');

input5.forEach(i =>{
    i.addEventListener('change', () =>{
        input5.forEach(i => {
          if(i.checked){
            console.log(i.value);
        }  
        })
    })
})

//6 Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.

const h1 = document.querySelector('#h1');

uzduotis1.addEventListener('click', () => {
    h1.innerText = input1.value;
})

//7 Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.

input3.forEach(i =>{
    i.addEventListener('change', () =>{
        let h3 = document.createElement('h3');
        document.body.appendChild(h3);
        h3.innerText = i.value;
    });
});

//8 Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią masyvą (arba vieną objektą su 5 masyvais viduje). Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą (5 uždavinio atveju įrašyti masyvą su pažymėtom reikšmėm) ir į console.log išvesti tą masyvą.

const result = {
    pirmas: [],
    antras: [],
    trecias: [],
    ketvirtas: [],
    penktas: []
}

document.querySelector('#b1').addEventListener('click', () => {
    result.pirmas.push(document.querySelector('#i1').value);
    console.log(result);
});

document.querySelector('#i2').addEventListener('change', () => {
    result.antras.push(document.querySelector('#i2').value);
    console.log(result);
})