let box1 = 6;
let box2 = 5;
let result = 10;
let result2;

function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

result = box1 + box2;
result += box1 //result = result + box1

result++; //prie rezultato pridedamas 1
result--; //atimamas 1 is rezultato

result2 = 8 % 3; //rezultato liekana

console.log(result);

console.log(result2);

let box3 = 'labas';

box3++; //NaN (Not a Number)

console.log(box3);

console.log('3 > 5', 3 > 5);
console.log('3 < 5', 3 < 5);
console.log('3 != 5', 3 != 5);

console.log('z > A', 'z' > 'Z');
console.log('z > Z', 'z' > 'Z');
console.log('z < z123', 'z' > 'z123');

// console.log(rand(5,10));

// let check = rand(1, 9);

// if (check < 5) {
//     console.log('taip');
//     console.log(check);
// }
// else if (check == 5) {
//     console.log('lygu');
//     console.log(check);
// }
// else {
//     console.log('ne');
//     console.log(check);
// }

//1uzdavinys. Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()

let number1 = rand(0, 4);
let number2 = rand(0, 4);

console.log(number1);
console.log(number2);

if (number1 > number2 && number1 != 0 && number2 != 0) {
    console.log(number1 / number2);
} else if (number1 == 0 || number2 == 0) {
    console.log('Dalyba is nulio neglaima');
}
else
    console.log(number2 / number1);

//2 uzdavinys. Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.
console.log('2uzduotis');

let number2_1 = rand(0, 25);
let number2_2 = rand(0, 25);
let number2_3 = rand(0, 25);

console.log(number2_1);
console.log(number2_2);
console.log(number2_3);

if (number2_1 > number2_2 && number2_1 > number2_3 && number2_2 > number2_3) {
    console.log(number2_2);
} else if (number2_1 > number2_2 && number2_1 > number2_3 && number2_2 < number2_3) {
    console.log(number2_3);
} else if (number2_3 > number2_1 && number2_3 > number2_2 && number2_1 > number2_2) {
    console.log(number2_1);
} else if (number2_3 > number2_1 && number2_3 > number2_2 && number2_1 < number2_2) {
    console.log(number2_2);
} else if (number2_2 > number2_1 && number2_2 > number2_3 && number2_1 > number2_3) {
    console.log(number2_1);
} else if (number2_2 > number2_1 && number2_2 > number2_3 && number2_1 < number2_3) {
    console.log(number2_3);
} else if (number2_1 == number2_2 || number2_1 == number2_3 || number2_2 == number2_3) {
    console.log('vidurines reiksmes nera');
}
console.log('2uzduotis_kitaip');
const numbers = [rand(0, 25), rand(0, 25), rand(0, 25)];
console.log(numbers);
console.log(numbers.sort(function (a, b) { return a - b }));
console.log(numbers[1]);

//3 užduotis. Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 
console.log('3uzduotis');
const krastines = [rand(1, 10), rand(1, 10), rand(1, 10)];
console.log(krastines.sort(function (a, b) { return a - b }));
console.log(krastines[2]);
if (krastines[2] > krastines[0] + krastines[1]) {

    console.log('trikampio sudaryti negalima');
} else {
    console.log('trikampį sudaryti galima')
}

//4 užduotis. Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()
console.log('4 uzduotis');
let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);

let zeros = 0;
let ones = 0;
let twos = 0;
console.log(a1, a2, a3, a4);

if (a1 == 0) {
    zeros++;
} else if (a1 == 1) {
    ones++;
} else {
    twos++;
}

if (a2 == 0) {
    zeros++;
} else if (a2 == 1) {
    ones++;
} else {
    twos++;
}

if (a3 == 0) {
    zeros++;
} else if (a3 == 1) {
    ones++;
} else {
    twos++;
}

if (a4 == 0) {
    zeros++;
} else if (a4 == 1) {
    ones++;
} else {
    twos++;
}

console.log(zeros, ones, twos);

//5 užduotis. Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

console.log('5 uzduotis');

let b1 = rand(-10, 10);
let b2 = rand(-10, 10);
let b3 = rand(-10, 10);

if(b1 < 0){
    console.log('+', b1, '+');
}else if(b2 < 0){
    console.log('+', b2, '+');
}else if(b3 < 0){
    console.log('+', b3, '+');
}else if(b1 > 0){
    console.log('-', b1, '-');
}else if(b2 > 0){
    console.log('-', b2, '-');
}else if(b3 > 0){
    console.log('-', b3, '-');
}else if(b1 == 0){
    console.log('*', b1, '*');
}else if(b2 == 0){
    console.log('*', b2, '*');
}else {
    console.log('*', b3, '*');
}

//6 užduotis. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
console.log('6 uzduotis');
let zvakes = rand(5, 3000);

if(zvakes >= 1000){
    console.log(zvakes,'kaina: ', zvakes * 0.97);
}else if(zvakes >= 2000){
    console.log(zvakes,'kaina: ', zvakes * 0.96);
}else{
    console.log(zvakes, 'kaina: ', zvakes);
}

//7 užduotis. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

let c1 = rand(0,100);
let c2 = rand(0,100);
let c3 = rand(0,100);

let suma = c1+c2+c3;
let kiekis = 3;

console.log(c1, c2, c3);
console.log('vidurkis:', (c1+c2+c3)/3);

if(c1 <= 10 || c1 >= 90){
    suma = suma - c1;
    kiekis--;
}if(c2 <= 10 || c2 >= 90){
    suma = suma - c2;
    kiekis--;
}if(c3 <= 10 || c3 >= 90){
    suma = suma - c3;
    kiekis--;
}

console.log('naujas vidurkis:', suma / kiekis, 'skaiciu suma ir kiekis:', suma, kiekis);
