//objektas, kitaip nei kintamasis, gali tureti daug savybiu. kiekvienas objektas savyje gali tureti kita objekta kaip savybe, tas kitas dar kita ir tt.
//objekte galima aprasyti ne tik savybes, bet ir veiksma (funkcija)

let daiktas = {
    name: 'Pjuklas', //savybe
    tipas: 'Medzio pjuklas', //savybe
    dantuKiekis: 45, //savybe
    pjauti: function(){console.log('dziru, dziru');} //metodas
}

console.log(daiktas);

daiktas.pjauti();

let vardas = 'Bobikai';

let str = `labas ${vardas}`;

console.log(str);

console.log(str.length);

let vp = "jonas\njonaitis";
console.log(vp);

let grazus = 'Labai grazus';

console.log(grazus);
console.log(grazus[9]+grazus[10]+grazus[11]);

let zuikis = 'Zuikis puikis ilgaausis eina namo miegoti';
console.log(zuikis.length);

for(let i = 0; i<=40; i++){
  console.log(zuikis[i]);  
}

console.log('_______________________________')
for(let i = 0; i<=40; i++){

    if(zuikis[i] == ' '){
        continue;
    }
    console.log(zuikis[i]);  
  }

  //Suskaičiuoti visas a raides
  console.log('_______________________________')

  let counter=0;

  for(let i = 0; i<=40; i++){

    if(zuikis[i] == 'a'){
        counter++;
    }
     
  }console.log('a raidziu yra:', counter); 

  //pakeicia i didziasias raides:
  console.log(zuikis.toLocaleUpperCase());

  //suranda u raide:
  console.log(zuikis.indexOf('u'));

  //suranda nuo galo raide i
  console.log(zuikis.lastIndexOf('i'));

  //sis metodar suranda ar yra zodis puikis kintamajame zuikis
  console.log(zuikis.includes('puikis'));

  console.log(zuikis.includes('puikis'));

  console.log('Slice_________________________');
  let zod = 'zirafa';
  console.log(zod);

console.log(zod.slice(2), 'pjauna nuo 2');

console.log(zod.substring(1,4), 'substring nuo 1 iki 4')

for(let i = 0; i<=6; i++){
    console.log(zod.slice(-i));
}