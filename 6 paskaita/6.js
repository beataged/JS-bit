let kint = '';
// for(let i=1; i <=4; i++){
//     console.log('START');
//     for(let j = 1; j <= kint; j++){
//         console.log('B');
//     }
//     kint++;
//     console.log('END');
// }

// for(let i=1; i <=4; i++){
//     console.log('DIDELIS START');
//     for(let j = 1; j <= 3; j++){
//         console.log('B');
//     }
//     console.log('DIDELIS MID');
//     for(let k = 1; k <= 3; k++){
//     console.log('C');
//     }
//     console.log('DIDELIS END');
// }

// for (let i = 1; i <= 4; i++) {
//     console.log('DIDELIS START');
//     for (let j = 1; j <= 7; j++) {
//         if (j <= 3) {
//             console.log('B');
//         }
//         if (j == 4) {
//             console.log('DIDELIS MID');
//         } else {
//             console.log('C');
//         }
//     }
//     console.log('DIDELIS END');
// }

// for(let i=0; i<5; i++){
//     let eil = '';
//     for(j = 0; j < 5; j++){
//         eil += 'A';
//     }
//     console.log(eil);   
// }

// for(let i=0; i<1; i++){
//     let eil = '';
//     for(j = 0; j < 5; j++){
//         eil += 'A';
//         console.log(eil); 
//     }
// }

// let A = 'A';
// let B = 1;
// let eilute = '';
// for (let i = 0; i < 6; i++){
//     for(let j = 0; j < B; j++){
//         eilute += A;
//     }

//     eilute += ' ';
//     B++;
// }
// console.log('Ats', eilute);

// let A = 'A';
// let B = 1;
// let eilute = '';
// let c = 1;
// let j;

// for (let i = 0; i <+ 9; i++){
//     for(j = 0; j < c; j++){
//         eilute += A;

//     }

//     eilute += ' ';
//     if (i == 5){
//         B *= -1;
//         j *= -1;
//     }
//     c++;
// }
// console.log(eilute);
let A = 'A';
let eilute = '';
let kiekis = 1;
let pirmyn = true;


for (let i = 0; i < 9; i++) {
    for (let j = 0; j < kiekis; j++) {
        eilute += A;
    }
    eilute += ' ';
    if (i == 4) {
        pirmyn = !pirmyn;
    }
    pirmyn ? kiekis++ : kiekis--;
}

console.log(eilute);

function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//8 Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;A Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;B Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;C Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;D Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;E Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.F Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite paba

let random;

console.log('Astuntas A');

do {
    random = rand(10, 25);
    console.log(random);

} while (random >= 12)


console.log('Astuntas B');
let visoCiklu = 0;

do {
    random = rand(10, 25);
    visoCiklu++;
} while (random >= 12)
console.log(visoCiklu);


console.log('Astuntas C');
let suma = 0;

do {
    random = rand(10, 25);
    suma += random > 18 ? 0 : random;
} while (random >= 12)
console.log(suma);

console.log('Astuntas D');
suma = 0;
let atmesta = 0;

suma1 = 0;
let atmesta1 = 0;

do {
    random = rand(10, 25);
    random > 18 ? atmesta++ : suma += random;
    if (random > 18) {
        atmesta1++;
    } else {
        suma1 += random;
    }

} while (random >= 12)
console.log(suma, atmesta);
console.log(suma1, atmesta1);

console.log('Astuntas E');

let lyginis = 0;
let nelyginis = 0;

do {
    random = rand(10, 25);

    if (random % 2 === 0) {
        lyginis++;
    } else {
        nelyginis++;
    }

} while (random >= 12)
console.log(lyginis, nelyginis);

console.log('Astuntas F');

let visoMazuCiklu;
let visoDideliuCiklu;

do {
    visoMazuCiklu = 0;
    visoDideliuCiklu++;
    do {
        random = rand(10, 25);
        visoMazuCiklu++;
    } while (random >= 12)

}while (visoMazuCiklu >= 20);

console.log(visoMazuCiklu, random);


//9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;aCiklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus; B Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje; C Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;

console.log('Devintas A');
 

for(let i = 0; i<skaicius; i++){
    let skaicius = rand(5, 10);
    if (skaicius == 5){
        console.log(skaicius);
    }
}