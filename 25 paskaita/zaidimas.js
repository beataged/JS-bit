function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function go() {
    ball.style.top = rand(0, h) + 'px';
    ball.style.left = rand(0, w) + 'px';
}

let w = window.innerWidth - 200;
let h = window.innerHeight - 200;

window.addEventListener('resize', () => {
    w = window.innerWidth - 200;
    h = window.innerHeight - 200;
});


// const ball = document.querySelector('.ball');

let intervalID;
let isGo = false

// ball.addEventListener('click', () => {
//     if (isGo) {
//         clearTimeout(intervalID);
//         isGo = false;
//     } else {
//         go();
//         intervalID = setInterval(go, 3000);
//         isGo = true;
//     }


// });


class Burbulai {
    static burbulai;
    static w;
    static h;
    // static start = false;

    static start(){
        document.querySelector('body').addEventListener('click', () => this.naujasBurbulas());
        this.ekranoDydis();
        this.burbulai = new Map();
        const startButton = document.querySelector('button#start');
        startButton.addEventListener('click', e => {
            e.stopPropagation();
            for(let i = 1; i<=5; i++){
                setTimeout(this.naujasBurbulas, this.rand(1, 2000))
            }
            startButton.style.display = 'none';
        })
    }
    // static naujasBurbulas () {
    //     if (!this.start ) {
    //         document.querySelector('body').addEventListener('click', () => {this.naujasBurbulas(); });
    //         this.start = true;
    //     }
    //     if (this.w === undefined || this.h === undefined) {
    //         this.ekranoDydis();
    //     }
    //     if (!this.burbulai) { // jei burbulai yra tusti
    //         this.burbulai = new Map(); //Mapas yra objektas kurio struktura labai panasi i masyva, tik kiekvienas stalcius yra ne indeksais 0, 1, 2, bet galima pavadinti kaip nori tuos indeksus       
    //     }
    //     //Toliau statiniame metode sukurti naują Burbulo objektą ir jį įrašyti į Mapą, raktu arba indeksu naudojant savybę id:
    //     const b = new Burbulai();
    //     this.burbulai.set(b.id, b);


    // }

    static naujasBurbulas = () => {
        const b = new Burbulai();
        this.burbulai.set(b.id, b);
    }

    static ekranoDydis() {
        this.w = window.innerWidth - 200;
        this.h = window.innerHeight - 200;
    }

    static rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static pagautas(b) {
        document.querySelector('body').removeChild(b.element);
        this.burbulai.delete(b.id);

    }

    constructor() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
        this.element = document.createElement('div');//sukuriamas naujas div
        this.element.classList.add('ball'); //jam priskiriama klase ball
        // document.querySelector('body').appendChild(this.element); //idejimas i DOM'a
        this.element.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        this.varyk();
        setTimeout(this.varyk, 30);

        this.element.addEventListener('click', e => {
            e.stopPropagation;
            this.constructor.pagautas(this)
        });

        document.querySelector('body').appendChild(this.element);
        this.timerId = setInterval(this.varyk, 3000);
    }

    varyk = () => {
        this.element.style.top = this.constructor.rand(0, this.constructor.h) + 'px';
        this.element.style.left = this.constructor.rand(0, this.constructor.w) + 'px';
    }


}

// for (let i = 1; i <= 5; i++) {
//     Burbulai.naujasBurbulas();
// }

Burbulai.start();


