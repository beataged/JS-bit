function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}



let a = rand(2, 10);

let b = rand(2, 10);

let c = rand(2, 10);

// Surasti ir i console.log išvesti dviejų mažesnių kintamųjų sumą

console.log(a, b, c);

if (a >= b && a >= c) {
    console.log(b + c);
} else if (b > a && b >= c) {
    console.log(a + c);
} else {
    console.log(a + b);
}

//dėstytojo sprendimas:
// if(a>=b){
//     if(a>=c){
//         console.log('b+c', b+c);
//     }
// }
// if(b>a){
//     if(b>=c){
//         console.log('a+c', a+c);
//     }
// }
// if(c>a){
//     if(c>b){
//         console.log('a+b', a+b)
//     }
// }

//Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()

let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);
console.log('skaiciai:')
console.log(a1, a2, a3, a4);

let _0 = 0;
let _1 = 0;
let _2 = 0;

if (a1 == 0) _0++;
if (a2 == 0) _0++;
if (a3 == 0) _0++;
if (a4 == 0) _0++;

if (a1 == 1) _1++;
if (a2 == 1) _1++;
if (a3 == 1) _1++;
if (a4 == 1) _1++;

if (a1 == 2) _2++;
if (a2 == 2) _2++;
if (a3 == 2) _2++;
if (a4 == 2) _2++;

console.log('suma:')
console.log(_0, _1, _2);

console.log('kitoks sprendimas');

let __2 = 0;

//suskaiciuojama kiek yra dvejetu:
if (a1 == 2) __2++;
if (a2 == 2) __2++;
if (a3 == 2) __2++;
if (a4 == 2) __2++;

//skaiciuoja suma, kokia is viso yra suma skaiciu 
let __1 = a1 + a2 + a3 + a4 - (2 * __2);

let __0 = 4 - __1 - __2;

console.log(__0, __1, __2);

//Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

let x1 = rand(0, 100);
let x2 = rand(0, 100);
let x3 = rand(0, 100);

let xxx = x1 + x2 + x3;
let xxxVid = xxx / 3;

console.log('skaiciai nuo 0 iki 100');
console.log(x1, x2, x3);
console.log(xxxVid);

let daliklis = 0;
let kaDalinam = 0;

if (x1 <= 10 || x1 >= 90) {
    kaDalinam -= x1;
    daliklis--;
}
if (x2 <= 10 || x2 >= 90) {
    kaDalinam -= x2;
    daliklis--;
}
if (x3 <= 10 || x3 >= 90) {
    kaDalinam -= x3;
    daliklis--;
}
console.log('sprendimas:');
console.log(kaDalinam / daliklis, kaDalinam, daliklis);

//1.

let egzaminoRezultatas = rand(1, 10);

// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

if (egzaminoRezultatas >= 4) {
    console.log(egzaminoRezultatas, 'Islaikyta');
} else {
    console.log(egzaminoRezultatas, 'Neislaikyta');
}

//2.

let eksperimentoRezultatas = rand(1, 4);

// I6vesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
if (eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4) {
    console.log(eksperimentoRezultatas, 'Pavyko');
} else {
    console.log(eksperimentoRezultatas, 'Nepavyko');
}

//3.

let automobilioGreitis = rand(40, 125);

// Išvesti automobilio greitį ir baudos dydį, jeigu greitis didesnis nei 60. Bauda yra viršytas greitis X 5
if (automobilioGreitis > 60) {
    console.log(automobilioGreitis, 'Bauda: ', (automobilioGreitis - 60) * 5)
} else {
    console.log(automobilioGreitis, 'baudos nera');
}

//4. let   eilesNumeris   =   rand ( 1 ,  3... by Arvydas Kijakauskas (Dėstytojas)

//4.

let eilesNumeris = rand(1, 30);

//Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
if (eilesNumeris % 2 == 0) {
    console.log(eilesNumeris, 'Eile porine')
} else {
    console.log(eilesNumeris, 'Eile neporine')
}

//5.

//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę
let raideABC = rand(1, 3);

if (raideABC == 1) {
    console.log('A');
} else if (raideABC == 3) {
    console.log('B');
} else {
    console.log('C');
}

//6.

let pirmas = rand(0, 2);

let antras = rand(0, 2);

// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma

if ((pirmas * antras) > (pirmas + antras)) {
    console.log(pirmas, antras, 'Sandauga didesne');
} else if ((pirmas * antras) < (pirmas + antras)) {
    console.log(pirmas, antras, 'Suma didesne');
} else {
    console.log(pirmas, antras, 'Lygus');
}

//7.

let asilai = rand(0, 2);

let karves = rand(0, 2);

console.log(asilai, karves);

// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

if (asilai == 0 && karves == 0) {
    console.log('Gyvuliu nera');
} else {
    console.log('Gyvuliu yra: ', asilai + karves);
}

//8.

let dalyvis1 = rand(1, 4);

let dalyvis2 = rand(1, 4);

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju
console.log('Dalyviu skaiciai', dalyvis1, dalyvis2);

if (dalyvis1 + dalyvis2 > 6 || dalyvis1 == dalyvis2) {
    console.log(dalyvis1, dalyvis2, 'Laimejo');
} else {
    console.log('Pralaimejo');
}

//9.

let daug = rand(1000000, 9999999);

// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.

if (daug%5 == 0) {
    console.log(daug, 'dalijasi is 5', daug / 5);
} else if (daug % 10 == 0) {
    console.log(daug, 'dalijasi is 10', daug / 10);
} else if (daug % 33 == 0) {
    console.log(daug, 'dalijasi is 33', daug / 33);
} else if (daug%5 == 0 && daug%10 == 0){
    console.log(daug, 'dalijasi is 5 ir 10', daug / 5, daug / 10);
} else if (daug%5 == 0 && daug%10 == 0 && daug%33){
    console.log(daug, 'dalijasi is 5 10 ir 33', daug / 5, daug / 10, daug / 33);
}else if (daug % 5 != 0 || daug % 10 != 0 || daug % 33 != 0){
    console.log(daug, 'dalijasi su liekana');
}

//10.

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';

let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';

// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu

let s;

s = rand(1, 3);

if (s == 1) {

    as = 'akmuo';

} else if (s == 2) {

    as = 'zirkles'

} else {

    as = 'popierius'

}

s = rand(1, 3);

if (s == 1) {

    tu = 'akmuo';

} else if (s == 2) {

    tu = 'zirkles'

} else {

    tu = 'popierius'

}

console.log('as:', as,'tu:', tu);

if((as == 'akmuo' && tu == 'akmuo') || (as == 'zirkles' && tu == 'zirkles') || (as == 'popierius' && tu == 'popierius') ){
    console.log('Lygiosios');
}else if((as == 'popierius' && tu == "akmuo") || (as == 'akmuo' && tu == 'zirkles')||(as == 'zirkles' && tu == 'popierius') ){
    console.log('Laimejau as');
}else if((tu == 'popierius' && as == "akmuo") || (tu == 'akmuo' && as == 'zirkles')||(tu == 'zirkles' && as == 'popierius') ){
    console.log('Laimejai tu');
}else {
    console.log('zaidimo ner')
}