//7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose. Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų arba atimtų akmenis iš statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius. Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

class Kibiras1 {

    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose(){

    }

    constructor() {
        this.akmenuKiekis = 0;
    };
    prideti1Akmeni(){
        this.akmenuKiekis ++; //i objekta, konkretus kibiras
        Kibiras1.visiAkmenys++;//i bendra statine savybe skaiciuoja, visiems kibirams 
    };
    pridetiDaugAkmenu (kiekis){
        this.akmenuKiekis += kiekis;
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