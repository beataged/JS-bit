let nu = 5.26;
//sis metodas suapvalina iprastu budu
console.log(Math.round(nu));

//apvalina zemyn, rodo tik sveika dali, nesvarnu kiek yra po kablelio
console.log(Math.floor(nu));

//visada apvalins i didesne puse
console.log(Math.ceil(nu));

//toFixed leidzia pasirinkti kiek skaiciu po kablelio rodo, bet grazinamas stringas, ne skaicius
console.log((0.1 + 0.2).toFixed(5));

//parseInt yra funkcija, kuri is stringo padaro skaiciu
console.log(parseInt('100px'));
console.log(parseFloat('10.25252px25'));

console.log('____FUNKCIJOS____');

//Funkcijos deklaravimas

let name1 = 'Braske';


function sayHello(t2) { //t2 yra parametras
    console.log(`${t2}, ${name1}!!!`);
}

//Funkcijos iskvietimas

sayHello(name1); //name1 yra argumentas

for (i = 0; i < 20; i++) {
    sayHello();
}

function zoo(animal) {
    console.log(`Zoo sode gyvena ${animal} `);
}

zoo('varle');
zoo('liutas');

//Padarykite funkcija skaicius kuri console.logintų skaičių perduodamą į tą funkciją kaip argumentas. Paleiskite ciklą 20 kartų ir tegul funkcija skaičius atspausdina ciklo numerį

function skaicius(x) {
    console.log(x);
}

for (i = 0; i < 20; i++) {
    skaicius(i);
}

function sumuokle(a, b) {
    let suma = a + b;
    return suma;
}

let kiek = sumuokle(5, 7);

console.log(kiek);

function zoologas(animal) {
    if (animal == 'papuga' || animal == 'varna' || animal == 'zyle') {
        return 'tai yra paukstis';
    }
    if (animal == 'vilkas' || animal == 'lape' || animal == 'zuikis') {
        return 'tai yra zinduolid';
    }
    return 'Nezinau tokio';
}

console.log(zoologas('vilkas'));

//Parašyti funkciją, kuri nuspręstų ar skaičius yra porinis. Pasinaudokite šia funkcija ir iš ciklo sukamo 20 kartų atspausdinkite neporinius (nelyginius) ciklo numerius

function arlyginis(x) {
    if (x % 2 == 0) {
        return 'skaicius porinis';
    }
    return 'skaicius neporinis';
}

for (let i = 0; i < 20; i++) {
    if (arlyginis(i) == 'skaicius neporinis') {
        console.log(i);
    }
}


function arNelyginis(skaicius) {
    return Boolean(skaicius % 2); //grazina 1 paversta i true arba 0 paversta i false

}

for (let i = 1; i <= 20; i++) {
    if (arNelyginis(i));
    console.log(`Ciklas nr. ${i} yra nelyginis`);
}

function kiekARaidziu(string){
    let counter = 0;
    for(const x of string)
    if(x == 'a'){
        counter++;
    }
    return counter;
}

console.log('Yra a raidziu', kiekRaidziu('Papuga'));
console.log('Yra a raidziu', kiekRaidziu('Vilkas'));
console.log('Yra a raidziu', kiekRaidziu('zuikis'));

function kiekRaidziu(string, raide) {
    let counter = 0;

    for (const x of string) {

        if (x.toLowerCase() == raide) {
            counter++;
        }
    }

    return counter;
}

console.log('Yra p raidziu', kiekRaidziu('Papuga', 'p'));
console.log('Yra k raidziu', kiekRaidziu('Vilkas', 'k'));
console.log('Yra u raidziu', kiekRaidziu('zuikis', 'u'));

function reverseWord(word){
let reversed ='';
    for(let i=word.length-1; i>=0; i--){
        reversed += word[i];
    }
return reversed;
}

console.log(reverseWord('sula'));

//stringe visas balses pakeisti i *

function zvaigzdute(word){
    const regex = /[aeiouūįąęėų]/gi;
    word.replaceAll(regex, "*");

return word.replaceAll(regex, "*");;
}

console.log(zvaigzdute('pąpęga'));
