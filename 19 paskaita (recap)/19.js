//kintamuju deklaravimas

let vienas = 'namuose';
const du = 'gaideliai';

vienas = 'kazkam';

//du = 'kazkam'; konstantai negalima reiksmes priskirti kitokios nei buvo priskirta deklaruojant

const trys = ['a', 'b'];
console.log(trys);
trys.push('c');
console.log(trys);


const masyvas = ['vienas', 'žalias', 'ir', 'trys', 'raudoni'];

for (let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
}

masyvas.forEach(i => {
    console.log(i);
})

for(const i in masyvas){
    console.log(masyvas[i]);
}

let w = 0;
while (w < masyvas.length){
    console.log(masyvas[w]);
    w++;
}

for(const i of masyvas){
    console.log(i);
}

//function suma(a, b){}

function suma(a, b){
    return a+b;
}

console.log(suma(1,2));

function skirtumas(a,b){
    return a-b;
}

console.log(skirtumas(7,5));

function skaiciuoti (v, a, b){
    if(v == '+'){
        return suma(a,b);
    }if(v == '-'){
        return skirtumas(a,b);
    }
}

console.log(skaiciuoti("+", 7, 6));

function skaiciuoti2 (v){
    if(v == '+'){
        return suma;
    }if(v == '-'){
        return skirtumas;
    }
}

console.log(skaiciuoti2('-')(100,200));