function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// betkas yra funkcijos parametras
function randomSkirtumas(betKas){ // funkcijos deklaracija
    let r = rand(100,300);
    console.log(r-betKas);
}

let sk = 55; //busimas funkcijos argumentas

randomSkirtumas(sk); //funkcijos iskvietimas

let str = 'Zvirblis'

function zvirblis(x){
    return x[4];
}

console.log(zvirblis(str));

function betKokiaRaide(x, y){
    return x[y-1];
}

console.log(betKokiaRaide(str, 3));