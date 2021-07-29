function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//a1 yra array

let a1 = ['atsuktuvas', 'pjuklas', 'plaktukas', 'reples'];

console.log(a1[1]);

a1[2] = 'kirvis';

console.log(a1);

//i masyva ideda nauja elementa i masyvo pabaiga
a1.push('kaltas');

a1.unshift('graztas');// prideda elementa i masyvo pradzia

a1.shift();//isima pirma elementa is pradzios

a1.pop(); // isima paskutini elementa is masyvo

for (let i = 0; i < a1.length; i++) {
    console.log(a1[i]);
}

//Sukurti masyvą, kurio ilgis 22 ir kurio reikšmės atsitiktiniai skaičiai nuo 5 iki 15

let masyvas = [];
let masyvas2 = [];

for (let i = 0; i < 22; i++) {
    let kint = rand(5, 15);
    if (kint % 2 !== 0) {
        masyvas2.push(kint);
    } else {
        masyvas2.push(++kint);
    }
}

console.log(masyvas2);

console.log("______________________________");

let m1 = [77, 99];
let m2 = m1; //priskyrimas pagal nuoroda(m2 tampa nuoroda i m1, kintamasis tiesiog gaunasi lyg turi du vardus)


m1.push(11);
m2.push(55);

console.log('m1:', m1, 'm2', m2);

console.log("________________1____________________");

//Sukurti masyvą, kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10;

let mas1 = [];

for (let i = 0; i < rand(10, 30); i++) {
    mas1.push(rand(0, 10));
}
console.log(mas1);

//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
console.log("________________2____________________");

let mas2 = [];
let suma =0;

for (let i = 0; i < rand(10, 30); i++) {
   
    suma +=  mas2.push(rand(0, 10));
}
console.log(mas2, suma);

//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
console.log("_______________3_____________________");

let mas3 = [];
let suma2 =0;

for (let i = 0; i < rand(10, 30); i++) {
    let kint = rand(0, 10);
    if(kint > 2){
        suma2 +=  mas3.push(kint);
    }
   
    
}
console.log(mas3, suma2);

//Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio ;
console.log("_______________4_____________________");
let mas4 = [];
let suma3 =0;

for (let i = 0; i < rand(10, 30); i++) {
    let kint = rand(0, 10);

    if(mas1[i] <= 2 ){
        mas1[i] === 0;
    }
   
    
}
console.log(mas1.slice());