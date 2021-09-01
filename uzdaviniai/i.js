//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];
console.log('------------1------------');
console.log(mas1.length);

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, '785', 92, 'labas', 522, 6984];
console.log('------------2------------');
for(let i = 0; i<mas2.length; i++){
    console.log(i, mas2[i])
}

//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];
console.log('------------3------------');
for(let i = 0; i<mas3.length; i++){
    if(mas3[i]%2==0){
    console.log(i, mas3[i]);
    }
}

//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];
console.log('------------4------------');
mas4.forEach((i,k) => {
    if(i.substring(0,1) == 'A' || i.substring(0,1) == 'a'){
        console.log(k, i);
    }
})

//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = 'Storas zebras, bėga nuo zuulu genties medžiotojų.';
console.log('------------5------------');
let result1 = 0;
for(let i = 0; i<str1.length; i++){
    if(str1[i]==='z'){
    result1++;
    }
}
console.log(result1);

//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);
console.log('------------6------------');
set1.add('Labas');
set1.add('Ate');

console.log(set1.size);

//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = 'Ku ku';
console.log('------------6------------');
//console.log(str2.lastCharIs()) //po prototaipinimo eilutė turi veikti
String.prototype.lastCharIs = function(){
    return this.valueOf()[this.valueOf().length-1];
};
console.log(str2.lastCharIs());

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };
console.log('------------8------------');
for (const [key, value] of Object.entries(obj1)) {
    console.log(`${key}: ${value}`);
  }

//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"
class Grybas{
    tipas;

    constructor(tipas){
    this.tipas = tipas;
    }
}

const grybas1 = new Grybas('Baravykas');
const grybas2 = new Grybas('Ūmedė');
const grybas3 = new Grybas('Lepšis');
