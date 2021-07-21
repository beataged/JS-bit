function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let i;

if (i < 5) {
    console.log('if');
}


while (i != 55) {
    i = rand(0, 100);
    console.log('while', i);
}


//while ir do while skiriasi tuo, kad while pirma tikrina salyga ir jei viskas ok, tada padaro, do while pirma padaro, o po to tikrina salyga
do {
    i = rand(0, 100);
    console.log('do while', i);
} while (i != 55) {
}

let j = 0;

while (j < 5) {
    console.log('jot', j);
    j++;
}

//for skiriasi tuo, kad jis suoptimizuotas taip, kad jam galima nurodyti kiek kartu suktis
for (let t = 0; t < 5; t++) {
    console.log('raide t', t);
}


//Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;A Paskaičiuokite jų sumą ir priskirkite ją kintamajam.Pasinaudokite console.log atspauzdinkite sumos kintamąjį; B Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;C Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;D Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
console.log('Pirmas A')

let pirmas = rand(5, 25);
let antras = rand(5, 25);
let trecias = rand(5, 25);

let suma = pirmas + antras + trecias;
console.log(suma);

console.log('Pirmas B')

let p = pirmas.toString();
let a = antras.toString();
let t = trecias.toString();

//dar vienas sprendimas:
let d = '' + pirmas + antras + trecias;
console.log(d);

console.log(pirmas, antras, trecias);
console.log("suma:" + p + a + t);

console.log('Pirmas C');
console.log(p + ' ' + a + ' ' + t);

console.log('Pirmas D');
console.log(p + ' ' + a + ' ' + t + ' ' + suma);

//2 Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
console.log('Antras');
let x = rand(5, 10);

console.log(x);


// 3 Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
console.log('Trecias');

let c = 'Labas';

for (let i = 1; i <= 5; i++) {
    console.log(c);
}

//4 Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
console.log('Ketvirtas');

for (let i = 1; i <= 7; i++) {
    console.log(x);
}

//5 Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
console.log('Penktas');

for (let i = 1; i <= x; i++) {
    console.log(x);
}

//6 Pasinaudojus ciklu ir ir console.log atspausdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
console.log('Penktas');

for (let i = 1; i <= x; i++) {
    if(x>7){
    console.log(x);
}else {
    console.log('maziau nei 7');
}
}

//7 Sukurkite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;A Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;B Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;C Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;D Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspazdinkite pasinaudodami console.log;
console.log('Septintas A');

let e ;
let eB =0;
let eC = ' ';


for (let i = 1; i <= 5; i++) {
    f = rand(10, 20);
    e = f;
    console.log(e);
}

console.log('Septintas B');

for (let i = 1; i <= 5; i++) {
    f = rand(10, 20);
    eB += f;
}
console.log(eB);

console.log('Septintas C');

for (let i = 1; i <= 5; i++) {
    f = rand(10, 20);
    eC += f + ' '; 
}console.log(eC);

console.log('Septintas D');

let eD = '';
let sum = 0;

for (let i = 1; i <= 5; i++) {
    let skaiciai = rand(10, 20);
    eD += skaiciai + ' '; 
    eD += skaiciai + ' ';
    sum += skaiciai;
}console.log(eD, 'sum', sum);

//8 Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;A Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;B Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;C Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;D Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;E Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.F Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. 
console.log('Astuntas A');

let g;

do{
    g = rand(10, 25);
}while (g < 12);
console.log(g);

console.log('Astuntas B');

let gB;

do{
    gB = rand(10, 25);
}while (g < 12);
console.log(g);





