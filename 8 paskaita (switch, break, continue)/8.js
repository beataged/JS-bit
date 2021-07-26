//Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3?
console.log('Uzduotis 1');

let beLiekanos = 0;

for (let i = 5; i <= 100; i++) {

    if (i % 3 == 0) {
        beLiekanos++;
    }
}
console.log(beLiekanos);

//Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3 arba iš 5?
console.log('Uzduotis 2');

let beLiekanos2 = 0;

for (let i = 5; i <= 100; i++) {

    if (i % 3 == 0 || i % 5 == 0) {
        beLiekanos2++;
    }
}

console.log(beLiekanos2);

//Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3 ir iš 5?
console.log('Uzduotis 3');

let beLiekanos3 = 0;

for (let i = 5; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        beLiekanos3++;
    }
}
console.log(beLiekanos3);

console.log('Switch, break, continue');

//kopustas, bulve

let darzove = 'kopustas';
//let darzove = 'bulve';
//let darzove = 'pomidoras';

// if(darzove == 'kopustas'){
//     console.log('Verdam kopustiene');
// }else if(darzove == 'bulve'){
//     console.log('kepam bulvinius blynus')
// }

switch (darzove) {
    case 'kopustas':
        console.log('Verdam kopustiene');
        break;

    case 'bulve':
        console.log('kepam bulvinius blynus');
        break;

    case 'pomidoras':
        console.log('darom keciupa');
        break;

    default:
        console.log('Nieko nedarom');
}

console.log('Pastomato pavyzdys');

let siuntinioDydis = 'S';

switch (siuntinioDydis) {
    case 'S':
        console.log('Dedam i S');
        if(rand(0,3)){
            console.log('ded')
        }
    case 'M':
        console.log('Dedam i M');
    case 'L':
        console.log('Dedam i L');
    case 'XL':
        console.log('Dedam i XL');
    default:
        console.log('Dedam i XL');
}

console.log('BREAK');
// ciklo viduje idejus break ciklas nutruksta

//nuo 77 iki 777 reikia surasti pirma skaiciu kuris dalinasi is 23 be liekanos

// bigCycle: for (let i = 77; i <= 777; i++) {

//     for (let i = 77; i <= 777; i++) {

//         console.log('mazas');


//         if (i % 23 === 0) {
//             console.log(i);
//             break bigCycle;
//         }
//     }
// }

for (let i = 77; i <= 777; i++) {

    console.log('mazas');


    if (i % 23 === 0) {
        console.log(i);
    }
}

let counter = 0;
while(true){
    console.log(counter);//
    counter++;
    if(counter >= 10){
        break;
    }

}

console.log('___________________________');
let skaicius = 77;

do{

}while(++skaicius % 23 !== 0);

console.log(skaicius);


console.log('___________________________');

//Rasti trečią skaičių pradedant 5 iki 100 kuris be liekanos dalijasi iš 3?

skaitiklis = 1;

for (let i = 5; i <= 100; i++) {

    if (i % 3 == 0 ) {
        skaitiklis++;
    }
    if(skaitiklis == 4){
        console.log(i);
        break;
    }
}

let sk = 4;
let c = -3;
let iki = 100;

do{

}while(++sk % 3  ||++c);

console.log(sk);
