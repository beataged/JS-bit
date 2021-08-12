//Reikia sukurti objektą, kuriame yra savybė name. Ir reikia sukurti metodą setName(vardas) kuris į tą savybę įrašytų vardą.
//2. Parašyti metodą koksVardas() kuris su console.log atspausdintų duotą vardą

const vardinis = {
    name: null,
    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        console.log(this.name);
    }
};

//3. html'e nusipaišyti mygtuką. Tam mygtukui priskirti click eventą kurį paspaudus yra iškviečiamas koksVardas() metodas

vardinis.setName('Anatolija');

// const duok = vardinis.getName.bind(vardinis);

// // document.querySelector('button').addEventListener('click', () => vardinis.getName());

// document.querySelector('button').addEventListener('click', duok);

const z2 = {
    vardas: null,
    setName: function (vardas) {
        this.vardas = vardas;
    },
    getName: function () {
        console.log(this.vardas);
    },
};

class Zmogus {
    constructor() {
        this.vardas = null;
        // this.getName = this.getName.bind(this);
    }
    setName(vardas) {
        this.vardas = vardas;
    }

    getName = () => {
        console.log(this.vardas);
    }
}

//tas pats kas const z2 = {}
const z1 = new Zmogus();

z1.setName('Anatolija');
z2.setName('Anatolija');

console.log(z1, z2);

const duok = z2.getName.bind(z2);

document.querySelector('button').addEventListener('click', z1.getName);

document.querySelector('button').addEventListener('click', duok);

class Animal {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie,
        this.tailLong = tailLong,
        this.color = color,
        this.hasHorn = hasHorn;
        console.log(this.specie);
        this.createAnimalElement();
        this.createAnimalHtml();
    };
//5. Sukurkite createAnimalElement metodą, kuris sukuria naują DIV elementą ir jį įdeda į DOM'ą (htmlą)
//6. Nuorodą į tą elementą užsaugokite naujai sukurtoje savybėje element
//7. createAnimalElement įdėkite į konstruktorių ir paleiskite jame
    createAnimalElement(){
        this.element = document.createElement('div');
        document.body.appendChild(this.element);

    };

//8. sukurti metodą animalHtml, kuriame sudėliojame animalo apraš htmlą
//9. aprašą įdėti su innerHTML į sukurtą savybę element su div tagu
//10. paleisti padarytą metodą konstruktoriuje
    createAnimalHtml(){
        const horn = this.hasHorn ? 'Has horn' : 'No horn';
        const html = `
        <h1> ${this.specie}</h1>
        <span> Tail long: ${this.tailLong}cm</span>
        <span> Color: ${this.color}</span>
        <i> ${horn}</i>
        `;
        this.element.innerHTML = html;
    }

};

let zveriuMasyvas = [];

const gyvunas1 = new Animal('Zebras', 36, 'black-white', false);
const gyvunas2 = new Animal('Zirafa', 30, 'brown-white', true);
const gyvunas3 = new Animal('Liutas', 35, 'brown', false);
const gyvunas4 = new Animal('Dramblys', 20, 'grey', false);

zveriuMasyvas.push(gyvunas1, gyvunas2, gyvunas3, gyvunas4);

console.log(zveriuMasyvas);

const specie = document.querySelector('#specie');
const tale = document.querySelector('#tail');
const color = document.querySelector('#color');

document.querySelector('#button').addEventListener('click', () => {
    zveriuMasyvas.push(new Animal(specie.value, tail.value, color.value, hasHorns.checked ));
})

//14. sukurti metodą kuris generuotų atsitiktinius skaičius nuo 1000000 iki 9999999 ir priskirti tą skaičių savybei id, ir pasileistų konstruktoriuje



