function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let salyga = rand(1,3);

//jei salyga == 1 tai bus krokodilas (tas kas yra po klaustuko), tas kas yra po dvitaskio yra else
let kazkasPriskirta = (salyga==1) ? 'krokodilas' :(salyga == 2) ?'zebras' : 'dramblys' ;
let kazkasPriskirtaIf;

if(salyga == 1){
    kazkasPriskirtaIf = 'krokodilas';
}else if(salyga == 2){
    kazkasPriskirtaIf = 'zebras';
}else 
    kazkasPriskirtaIf = 'dramblys';

console.log(kazkasPriskirta, kazkasPriskirtaIf);

let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);
console.log('skaiciai:')
console.log(a1, a2, a3, a4);

let _0 = 0;
let _1 = 0;
let _2 = 0;

(a1 == 2) ? _2++ : ((a1 == 1) ? _1++ : _0++);
(a2 == 2) ? _2++ : ((a2 == 1) ? _1++ : _0++);
(a3 == 2) ? _2++ : ((a3 == 1) ? _1++ : _0++);
(a4 == 2) ? _2++ : ((a4 == 1) ? _1++ : _0++);

console.log(_0, _1, _2);

let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

let islaikyta = (egzaminoRezultatas >= 4) ? 'egzaminas islaikytas' : 'egzaminas neislaikytas';

console.log(egzaminoRezultatas,islaikyta);

//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 

let pranesimas = ((dalyvis1+dalyvis2)>6 ) ? 'Laimejo' ? (dalyvis1=dalyvis2): 'laimejo': 'Pralaimejo';

console.log(dalyvis1, dalyvis2, pranesimas);

console.log('-----------------------');

let box1 = 'A';

if(2>1){
    let box2 = 'B';
    console.log('if', box1)
}

console.log(box1);
console.log(box2);
