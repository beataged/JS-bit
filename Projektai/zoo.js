//sukurti objektiną metoda render() ir į jį iš konstruktoriaus perkelti this.createAnimalElement(); this.createAnimalHtml();


class Animal {

    //2. Sukurti statini metodą createAnimal su keturiais argumentais, kuris gamintų Animal objektą ir dėtų jį į statinę savybę animals
    static mas = [];

    static createAnimal(specie, tailLong, color, hasHorn) {
        this.mas.push(new Animal(specie, tailLong, color, hasHorn));
    };

    //4 Sukurti statinį metodą renderZoo, kuris atvaizduotų visus sukurtus gyvūnus iš statinės savtbės-masyvo animal

    static renderZoo() {
        this.mas.forEach(animal => {
            animal.render();
        });
    };

    //5 Sukurti statinį metodą clearZoo() kuris ištrintų visus žvėris iš DOM HTML, bet ne iš masyvo animals

    static clearZoo(){
        this.mas.forEach(animal => document.querySelector('body').removeChild(animal.element));
    };

    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie,
        this.tailLong = tailLong,
        this.color = color,
        this.hasHorn = hasHorn;
    };

    render() {
        this.createAnimalElement();
        this.createAnimalHtml();
    }

    //5. Sukurkite createAnimalElement metodą, kuris sukuria naują DIV elementą ir jį įdeda į DOM'ą (htmlą)
    //6. Nuorodą į tą elementą užsaugokite naujai sukurtoje savybėje element
    //7. createAnimalElement įdėkite į konstruktorių ir paleiskite jame

    createAnimalElement() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);

    };

    //8. sukurti metodą animalHtml, kuriame sudėliojame animalo apraš htmlą
    //9. aprašą įdėti su innerHTML į sukurtą savybę element su div tagu
    //10. paleisti padarytą metodą konstruktoriuje

    createAnimalHtml() {
        const horn = this.hasHorn ? 'Has horn' : 'No horn';
        const html = `
        <h1> ${this.specie}</h1>
        <span> Tail long: ${this.tailLong}cm</span>
        <span> Color: ${this.color}</span>
        <i> ${horn}</i>
        <button data-id="${this.id}">Delete</button>
        `;
        this.element.innerHTML = html;
    }

};

Animal.createAnimal('Zebras', 36, 'black-white', false);
Animal.createAnimal('Zirafa', 30, 'brown-white', true);
Animal.createAnimal('Liutas', 35, 'brown', false);
Animal.createAnimal('Dramblys', 20, 'grey', false);

console.log(Animal.mas);

Animal.renderZoo();
//Animal.clearZoo();

const specie = document.querySelector('#specie');
const tale = document.querySelector('#tail');
const color = document.querySelector('#color');

document.querySelector('#button').addEventListener('click', () => {
    Animal.clearZoo();
    Animal.createAnimal(specie.value, tail.value, color.value, hasHorns.checked);
    Animal.renderZoo();
})

//14. sukurti metodą kuris generuotų atsitiktinius skaičius nuo 1000000 iki 9999999 ir priskirti tą skaičių savybei id, ir pasileistų konstruktoriuje
