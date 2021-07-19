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
    console.log(zeros++);
} else if (a1 == 1) {
    console.log(ones++);
} else {
    console.log(twos++);
}

if (a2 == 0) {
    console.log(zeros++);
} else if (a2 == 1) {
    console.log(ones++);
} else {
    console.log(twos++);
}

if (a3 == 0) {
    console.log(zeros++);
} else if (a3 == 1) {
    console.log(ones++);
} else {
    console.log(twos++);
}

if (a4 == 0) {
    console.log(zeros++);
} else if (a4 == 1) {
    console.log(ones++);
} else {
    console.log(twos++);
}