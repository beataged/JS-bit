//sukurti objektiną metoda render() ir į jį iš konstruktoriaus perkelti this.createAnimalElement(); this.createAnimalHtml();


class Animal {

    //2. Sukurti statini metodą createAnimal su keturiais argumentais, kuris gamintų Animal objektą ir dėtų jį į statinę savybę animals
    static animals = [];

    element; //nuoroda i html taga su animalu

    static start() {
        this.buttonCreate();
        this.buttonHideModal();

        // Animal.createAnimal('Zebras', 36, 'black-white', false);
        // Animal.createAnimal('Zirafa', 30, 'brown-white', true);
        // Animal.createAnimal('Liutas', 35, 'brown', false);
        // Animal.createAnimal('Dramblys', 20, 'grey', false);

        this.load();
    };

    static deleteAnimal(id) {
        this.animals.forEach((animal, index) => {
            if (id == animal.id) {
                this.clearZoo();
                this.animals.splice(index, 1);
                this.renderZoo();
            }
        });
        this.save();
    }

static editAnimal(id, specie, tailLong, color, hasHor){
    this.animals.forEach(animal =>{
        if(id===animal.id){
            this.clearZoo();
            animal.specie = specie;
            animal.tail = tailLong;
            animal.color = color;
            animal.horn = hasHorn;
            this.renderZoo();
        }
    });
    this.save();
    this.hideMOdal('#edit'); 
    
}


    static createAnimal(specie, tailLong, color, hasHorn) {
        this.clearZoo(); // iš html'o ištrinam visus gyvulius
        this.animals.push(new Animal(specie, tailLong, color, hasHorn));
        this.renderZoo(); // iš naujo sudedame visus gyvulius į html'ą
        this.save();
    }

    static save() {
        const data = [];
        this.animals.forEach(animal => {
            data.push({
                specie: animal.specie,
                tail: animal.tail,
                color: animal.color,
                horn: animal.horn
            })
        });
        localStorage.setItem('zooApp', JSON.stringify(data));
    };

    static load() {
        if (null === localStorage.getItem('zooApp')) {
            localStorage.setItem('zooApp', JSON.stringify([]));
        }
        JSON.parse(localStorage
            .getItem('zooApp'))
            .forEach(animal => this.createAnimal(animal.specie, animal.tail, animal.color, animal.horn));
    }

    //4 Sukurti statinį metodą renderZoo, kuris atvaizduotų visus sukurtus gyvūnus iš statinės savtbės-masyvo animal

    static renderZoo() {
        this.animals.forEach(animal => animal.render());
    }

    //5 Sukurti statinį metodą clearZoo() kuris ištrintų visus žvėris iš DOM HTML, bet ne iš masyvo animals


    static clearZoo() {
        this.animals.forEach(animal => {
            document.querySelector('body').removeChild(animal.element)
        });

    };

    static showEditModal(animal) {
        const modal = document.querySelector('#edit');
        modal.style.display = 'block';
        modal.style.opacity = 1;

        modal.querySelector('.btn-primary').dataset.id = animal.id;

        const specie = document.querySelector('#specie-modal');
        const tail = document.querySelector('#tail-modal');
        const color = document.querySelector('#color-modal');
        const horn = document.querySelector('#horn-modal');

        specie.value = animal.specie;
        tail.value = animal.tail;
        color.value = animal.color;
        horn.checked = animal.horn;

    };

    static showDeleteConfirmModal(id) {
        const modal = document.querySelector('#confirm-delete');
        modal.style.display = 'block';
        modal.style.opacity = 1;
        modal.querySelector('.btn-primary').dataset.id = id;
    }

    static hideEditModal() {
        const modal = document.querySelector('#' + id);
        modal.style.display = 'none';
        modal.style.opacity = 0;
        delete modal.querySelector('.btn-primary').dataset.id;
    }


    static buttonCreate() {
        const specie = document.querySelector('#specie');
        const tail = document.querySelector('#tail');
        const color = document.querySelector('#color');
        const horn = document.querySelector('#horn');
        document.querySelector('#button').
            addEventListener('click', () => {
                this.createAnimal(specie.value, tail.value, color.value, horn.checked);
            });
    }

    static buttonEdit(){
        const specie = document.querySelector('#specie-modal');
        const tail = document.querySelector('#tail-modal');
        const color = document.querySelector('#color-modal');
        const horn = document.querySelector('#horn-modal');

        document.querySelector('.modal .btn-primary').addEventListener('click', (e) => {
            this.editAnimal(e.target.dataset.id, specie.value, tail.value, color.value, horn.checked);
        });
    };

    static buttonConfirmDelete(){
        addEventListener('click', (e) => {
            this.deleteAnimal(e.target.dataset.id);
            this.hideModal('confirm-delete');
        });
    };
    

    static buttonHideModal() {
        document.querySelector('#edit .close').addEventListener('click', () => this.hideEditModal());
    };

    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie,
            this.tailLong = tailLong,
            this.color = color,
            this.hasHorn = hasHorn;
        this.createAnimalRandom();
    };

    render() {
        this.createAnimalElement();
        this.createAnimalHtml();
        this.deleteButton();
        this.editButton();
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
        const horn = this.horn ? 'With horn' : 'Without horn';
        const html = `
        <div class="card" style="width: 21rem;">
            <div class="card-body">
                <h5 class="card-title">${this.specie}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Color: ${this.color}</h6>
                <p class="card-text">Tail long: ${this.tail} cm. <i> ${horn} </i></p>
                <button type="button" class="btn btn-success">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
        `;
        this.element.innerHTML = html;
    }

    createAnimalRandom() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    };

    deleteButton() {
        this.element.querySelector('.btn-danger').addEventListener('click', () => this.constructor.deleteAnimal(this.id));
    };

    deleteButton() {
        this.element.querySelector('.btn-danger').addEventListener('click', () => this.constructor.deleteAnimal(this.id));
    };

    editButton() {
        this.element.querySelector('.btn-success').addEventListener('click', () => this.constructor.showEditModal(this));
    }
};


console.log(Animal.mas);

Animal.start();