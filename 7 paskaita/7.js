function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let kiekIpiltaSriubos = rand(280, 300);
let saukstuSkaitiklis = 0;

do {

    let saukstuPasemta = rand(15, 19);
    if (saukstuPasemta > kiekIpiltaSriubos) {
        saukstuPasemta = kiekIpiltaSriubos;
    }

    kiekIpiltaSriubos = kiekIpiltaSriubos - saukstuPasemta;
    saukstuSkaitiklis++;

} while (kiekIpiltaSriubos > 0);

console.log('Viso saukstu buvo:', saukstuSkaitiklis);
console.log('Sriubos liko:', kiekIpiltaSriubos);

let steikas = rand(350, 450);
let sakuciuSkaitiklis = 0;
let kramtymuSkaitiklis = 0;

do{

    let atpjautaSteiko = rand(10,30);

    if(atpjautaSteiko > steikas){
        atpjautaSteiko = steikas;
    }

    steikas = steikas - atpjautaSteiko;
    sakuciuSkaitiklis++;

    do{

        let kiekVienuKrimstelejimuSuvalgomSteiko = rand(1, 7);
        atpjautaSteiko = atpjautaSteiko - kiekVienuKrimstelejimuSuvalgomSteiko;
        kramtymuSkaitiklis++;

    }while (atpjautaSteiko > 0)

    console.log('Liko atpjauta steiko: ', atpjautaSteiko);

}while (steikas > 0)

console.log('viso tiek kartu dirbta su sakute:', sakuciuSkaitiklis);
console.log('viso tiek kramtyta:', kramtymuSkaitiklis);
