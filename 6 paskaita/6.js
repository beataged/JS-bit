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

//8 Deklaruokite kintam??j?? (jeigu reikia kelis kintamuosius) u?? ciklo rib??. Ciklo viduje generuokite atsitiktinius skai??ius funkcija rand(), kurie yra i?? intervalo 10???25. Cikl?? kartokite tol, kol ciklo viduje bus sugeneruotas skai??ius ma??esnis nei 12;A Ciklo viduje sugeneruot?? reik??m?? priskirkite kintamajam, kur?? suk??r??te u?? ciklo rib?? ir j?? atspauzdinkite;B Suskai??iuokite kiek iteracij?? padar??te ir j?? kiek?? atspauzdinkite pasinaudodami console.log u?? ciklo rib?? jam pasibaigus;C Skai??iuokite ciklo viduje generuojam?? reik??mi?? sum??, atmesdami (neskai??iuodami) skai??ius, kurie yra didesni nei 18, j?? priskirdami kintamajam, kur?? suk??r??te u?? ciklo rib??. Rezultat?? atspauzdinkite pasinaudodami console.log u?? ciklo rib??;D Sum?? skai??iuokite kaip C dalyje, bet papildomai susikurkite kintam??j??, kuriame suskai??iuokite kiek reik??mi?? atmet??te (nesumavote). Rezultat?? su suma ir atmest?? reik??mi?? kiekiu atspauzdinkite pasinaudodami console.log u?? ciklo rib??;E Suskai??iuokite kiek tarp cikle atsitiktinai generuojam?? reik??mi?? yra lygini?? ir kiek nelygini?? skai??i??. Rezultat?? atspauzdinkite pasinaudodami console.log u?? ciklo rib?? jam pasibaigus.F Cikl?? i?? dalies B kartokite tol,  kol to ciklo iteracij?? kiekis bus didesnis nei 20 (vieno ciklo). Paskai??iuokite kiek pakartojim?? buvo atlikta ir rezultat?? atspauzdinkite paba

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

} while (visoMazuCiklu >= 20);

console.log(visoMazuCiklu, random);


//9. Ciklo viduje generuokite atsitiktinius skai??ius funkcija rand(), kurie yra i?? intervalo 5-10. Cikl?? kartokite tol, kol ciklo viduje bus sugeneruotas skai??ius 5;A Ciklo viduje paleiskite dar vien?? cikl?? kur?? kartokite tiek kart??, koks skai??ius buvo sugeneruotas. Paskai??iuokite kiek iteracij?? padar?? i??orinis ciklas ir kiek bendrai iteracij?? padar?? vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log u?? ciklo rib?? jam pasibaigus; B Padarykite taip, kad i??orinis ciklas pasibaigt?? kai 5 yra sugeneruojamas ne pirm??, bet tre??i?? kart?? ir paskai??iuokite iteracijas analogi??kai kaip A dalyje; C Padarykite analogi??kai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus i?? eil??s;

console.log('Devintas');

let skaicius;

do {
    skaicius = rand(5, 10);
    console.log(skaicius);
} while (skaicius == 5);

console.log('Devintas A');

let skaicius2;
let didelis = 0;
let mazas = 0;

do {
    didelis++;
    skaicius2 = rand(5, 10);
    console.log(skaicius2);
    for(let i = 0; i <= skaicius2; i++){
        mazas++;
    }
   
} while (skaicius2 == 5);

console.log(didelis, mazas);