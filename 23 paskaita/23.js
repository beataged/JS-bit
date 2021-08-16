//7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose. Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų arba atimtų akmenis iš statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius. Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

class Kibiras1 {

    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose(){
        console.log("Visuose kibiruose yra akmenu: ", this.visiAkmenys)
    };

    static bendrasAkmenuSkaicius(akmenuSkaicius){
        this.visiAkmenys += akmenuSkaicius;
    };

    constructor() {
        this.akmenuKiekis = 0;
    };

    prideti1Akmeni(){
        this.akmenuKiekis ++; //i objekta, konkretus kibiras
        this.constructor.bendrasAkmenuSkaicius(1);//i bendra statine savybe skaiciuoja, visiems kibirams. this parodo i klase, o construkctor parodo is kur objektas kiles (this.constructor === Kibiras1)
        //sitas objektas (this) yra konstruojamas (constructor) ===> grazina klase is ko sitas objektas padarytas
    };

    pridetiDaugAkmenu (kiekis){
        this.akmenuKiekis += kiekis;
        this.constructor.bendrasAkmenuSkaicius(kiekis)
    };

    kiekPririnktaAkmenu() {
        console.log('Kibire yra akmenu: ',this.akmenuKiekis);
    };
};

const kibiras = new Kibiras1();
const kibiras66 = new Kibiras1();
const kibiras77 = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(10);
kibiras.kiekPririnktaAkmenu();

kibiras66.prideti1Akmeni();
kibiras66.pridetiDaugAkmenu(12);
kibiras66.kiekPririnktaAkmenu();

kibiras77.prideti1Akmeni();
kibiras77.pridetiDaugAkmenu(18);
kibiras77.kiekPririnktaAkmenu();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();

//4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

console.log('______________Troleibusas2____________');

class Troleibusas{

    static visiKeleiviai = 0;
    
    static keleiviuSkaiciusVisuoseTroleibusuose(){
        console.log("Visuose troleibusuose yra keleiviu: ", this.visiKeleiviai);
    };

    static bendrasKeleiviuSkaicius(keleiviuSkaicius){
        this.visiKeleiviai += keleiviuSkaicius;
    };


    constructor(){
        this.keleiviuSkaicius = 0;
    };
    ilipa(keleiviuSkaicius){
        this.keleiviuSkaicius += keleiviuSkaicius; 
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    };
    islipa(keleiviuSkaicius){
        if(this.keleiviuSkaicius < keleiviuSkaicius){
            keleiviuSkaicius = this.keleiviuSkaicius;
        }
        
        this.keleiviuSkaicius -= keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
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
const troleibusas2 = new Troleibusas();
const troleibusas3 = new Troleibusas();

troleibusas.ilipa(500);
troleibusas.islipa(100);
troleibusas.vaziuoja();

troleibusas2.ilipa(100);
troleibusas2.islipa(50);
troleibusas2.vaziuoja();

troleibusas3.ilipa(300);
troleibusas3.islipa(200);
troleibusas3.vaziuoja();

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();