function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Sukurti masyvą iš 11 elementų, kurie yra atsitiktiniai skaičiai nuo 3 iki 7

let mas = [];
for (let i = 0; i < 11; i++) {
    mas.push(rand(3, 7));

}

console.log(mas);

//2. išrūšiuoti nuo didžiausio iki mažiausio
for (let i = 0; i < 11; i++) {
    mas.sort(function (a, b) { return b - a });
}

console.log(mas);

//3 Sukurti Set'ą iš 11 elementų, kurie yra atsitiktiniai skaičiai nuo 3 iki 17
const mySet = new Set();
while (mySet.size < 11) {
    mySet.add(rand(3, 17));
}

console.log(mySet);

//4. padidinti Set'ą iki 15 elementų (tie patys atsitiktiniai skaičiai nuo 3 iki 17)
while (mySet.size < 15) {
    mySet.add(rand(3, 17));
}

console.log(mySet);

//5. iš seto išmesti visas reikšmes, kurios dalinasi iš 3
mySet.forEach(i => i%3? '' : mySet.delete(i))

console.log(mySet);

//6. išrūšiuoti gautą Set'ą didėjimo tvarka (tą patį Setą, o ne sukurtą naują).

const mas6 = [...mySet].sort((a,b) => a - b);
mySet.clear();
mas6.forEach(e => mySet.add(e));

console.log(mySet);

//7. išrūšiuoti 1 uždavinio masyvą taip, kad pirma eitų lyginiai skaičiai, o toliau nelyginiai
mas.sort((a,b) => a%2 - b%2);
console.log(mas);

//8 sukurkite Map tipo objektą, kuriame būtų įrašyti keturi skirtingi gyvuliai, kurių pavadinimai eitų kaip indeksai, o reikšmės būtų uodegų ilgiai cm.

map1 = new Map();

['Zuikis', 'Kiskis', 'Triusis', 'Rabitas'].forEach(z => map1.set(z, rand(5, 25)));

console.log(map1)