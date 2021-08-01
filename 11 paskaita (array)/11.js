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
    mas4.push(rand(0, 10));
    if(mas4[i] <= 2){
        mas4[i] = 0;
    }
}
console.log(mas4.slice());

//Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
console.log("_______________5_____________________");

let mas5 = [];
let maxReiksme = 0;
let maxReiksmiuSuma = 0;

for (let i = 0; i < rand(10, 30); i++) {
    mas5.push(rand(0, 10));
    if(mas5[i]> maxReiksme){
        maxReiksme = mas5[i];
    }
    
}
for (let i = 0; i < rand(10, 30); i++) {
    if(mas5[i] == maxReiksme){
        maxReiksmiuSuma++;
    }
}

console.log(mas5);
console.log('Didziausia reiksme', maxReiksme, 'suma:', maxReiksmiuSuma);

//Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
console.log("_______________6_____________________");

let mas6 = [];

for (let i = 0; i < rand(10, 30); i++) {
    mas6.push(rand(0, 10));

    if(mas6[i] == 0){
        mas6[i] = i;
    }
    
}
console.log(mas6);

// /Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
console.log("_______________7_____________________");

let mas7 = [];

for (let i = 0; i < rand(10, 30); i++) {
    mas7.push(rand(0, 10));

}
console.log(mas7);

while (mas7.length < 30){
    mas7.push(rand(0, 10));
}

console.log('ilgis 30:', mas7)

//Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log("_______________8_____________________");

let mas8 = [];
let mas8_1 = [];
let mas8_2 = [];

for (let i = 0; i < rand(10, 30); i++) {
    mas8.push(rand(0, 10));
    if(mas8[i] <= 2){
        mas8_1.push(mas8[i]);
    }else{
        mas8_2.push(mas8[i]);
    }

}
console.log(mas8); 

console.log('reiksmes mazesnes arba lygios 2: ', mas8_1);
console.log('reiksmes didesnes uz 2: ', mas8_2);

//Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
console.log("_______________9_____________________");

let mas8 = [];
let mas8_1 = [];
let mas8_2 = [];

for (let i = 0; i < rand(10, 30); i++) {
    mas8.push(rand(0, 10));
    if(mas8[i] <= 2){
        mas8_1.push(mas8[i]);
    }else{
        mas8_2.push(mas8[i]);
    }

}
console.log(mas8); 

console.log('reiksmes mazesnes arba lygios 2: ', mas8_1);
console.log('reiksmes didesnes uz 2: ', mas8_2);
