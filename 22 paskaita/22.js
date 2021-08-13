//Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai savybei metodus prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

//visos savybes visada yra su this.

console.log('______________Kibiras1____________');

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    };
    //zemiau yra klases metodai:
    prideti1Akmeni(){
        this.akmenuKiekis ++;
    };
    pridetiDaugAkmenu (kiekis){
        this.akmenuKiekis += kiekis;
    };
    kiekPririnktaAkmenu() {
        console.log('Kibire yra akmenu: ',this.akmenuKiekis);
    };
};

//sukurtas objektas (kibiras), i kibira galima kraut akmenis
const kibiras = new Kibiras1();
//klausiame kiek pririnkta akmenu:
kibiras.kiekPririnktaAkmenu();
//pridedam viena akmeni ir vel klausiam kiek akmenu:
kibiras.prideti1Akmeni();
kibiras.kiekPririnktaAkmenu();
//pridedam dar 10 ir vel klausiam ir susumuoja visus akmenis ir pries tai pridetus.
kibiras.pridetiDaugAkmenu(10);
kibiras.kiekPririnktaAkmenu();

//Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
console.log('______________Pinigine____________');

class Pinigine{
    constructor(){
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    };
    ideti(kiekis){
        if(kiekis<=2){
            this.metaliniaiPinigai += kiekis;
        }else{
            this.popieriniaiPinigai += kiekis;
        }
    };
    skaiciuoti(){
        console.log('Popieriniai pinigai: ', this.popieriniaiPinigai, 'Metaliniai pinigai: ',this.metaliniaiPinigai,'Pinigu suma: ', this.metaliniaiPinigai+this.popieriniaiPinigai);
    };
};

const pinigine1 = new Pinigine();

pinigine1.ideti(2);
pinigine1.ideti(100);
pinigine1.ideti(0.5);
pinigine1.ideti(5);
pinigine1.skaiciuoti();

//Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
console.log('______________Troleibusas____________');

class Troleibusas{
    constructor(){
        this.keleiviuSkaicius = 0;
    };
    ilipa(keleiviuSkaicius){
        this.keleiviuSkaicius += keleiviuSkaicius; 
    };
    islipa(keleiviuSkaicius){
        this.keleiviuSkaicius -= keleiviuSkaicius;
    };
    vaziuoja(){
        if(this.keleiviuSkaicius > 0){
        console.log('Vaziuoja keleiviu', this.keleiviuSkaicius);
        }else {
            console.log('Vaziuoja keleiviu: 0')
        }
    };
}

const troleibusas = new Troleibusas();

troleibusas.ilipa(500);
troleibusas.islipa(100);
troleibusas.vaziuoja();

//Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
console.log('______________Pinigine2____________');

class Pinigine2{
    constructor(){
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    };
    ideti(kiekis){
        if(kiekis<=2){
            this.metaliniaiPinigai += kiekis;
        }else{
            this.popieriniaiPinigai += kiekis;
        }
    };
    skaiciuoti(){
        console.log('Popieriniai pinigai: ', this.popieriniaiPinigai, 'Metaliniai pinigai: ',this.metaliniaiPinigai,'Pinigu suma: ', this.metaliniaiPinigai+this.popieriniaiPinigai);
    };
};



console.log('______________TV____________');

class TV {
    static programa = ['MTV', 'TNT', 'TV6', 'RenTv'];

    static naujaPrograma(pr){
        this.programa = pr; //this rodo i klase
    }

    constructor(){
        this.savininkas = 'Parduotuve'; //this rodo i objekta
        this.kanalas = null;
        this.programa = ['LRT', 'TV3', 'LNK', 'Polonia'];
    }

    pirkimas(vardas){
        this.savininkas = vardas;
    };
    perjungtiKanala(nr){
        this.kanalas = nr;
    };
    infoApieTv(){
        console.log(`Savininkas: ${this.savininkas} Kanalas: ${this.kanalas}`);
    };
}

const tv1 = new TV();
const tv2 = new TV();
const tv3 = new TV();

tv2.pirkimas('Antanas');
tv2.programa = ['MTV', 'TNT', 'TV6', 'RenTv'];
tv3.programa = ['MTV', 'TNT', 'TV6', 'RenTv'];
tv1.programa = ['MTV', 'TNT', 'TV6', 'RenTv'];

tv3.pirkimas('Birute');
tv3.perjungtiKanala(2);
tv2.perjungtiKanala(2);

tv1.infoApieTv();
tv2.infoApieTv();
tv3.infoApieTv();

