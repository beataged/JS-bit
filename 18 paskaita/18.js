//Sukurti html failą. Jame sukurti du text tipo input laukelius. Dar sukurti du mygtukus. Paspaudus vieną į konsolę išvedame vieno input laukelio tekstą, paspaudus kitą - kito.
const textInput = document.querySelector('#input1');
const button = document.querySelector('#uzduotis');

//button.addEventListener('click', () => console.log(textInput.value));

const textInput2 = document.querySelector('#input2');
const button2 = document.querySelector('#uzduotis1');

//button2.addEventListener('click', () => console.log(textInput2.value));

//Paspaudus vieną mygtuką į konsolę išvesti skaičių kiek abiejuose input laukeliuose yra raidžių, o paspaudus kitą, abu laukelius išvalyti.

button.addEventListener('click', () => console.log(textInput.value.length + textInput2.value.length));

button2.addEventListener('click', () => {
    textInput.value = null;
    textInput2.value = null;
});

//Sukurti trečią mygtuką, kurį paspaudus abiejų input laukelių reikšmes įrašome į masyvą ir tą masyvą išvedame į konsolę

const button3 = document.querySelector('#uzduotis3');

button3.addEventListener('click', () => {
    console.log([textInput.value, textInput2.value]);
})

//Kaip vadinasi pigiausia knyga iš čia https://in3.dev/knygos/

let price ;
let title ;
let type;

fetch("https://in3.dev/knygos/")

  .then(response => response.json())

  .then(data => {
      type = data[0].type;
      title = data[0].title;
      price = data[0].price;
      data.forEach(i => {
          if(i.price < price){
              price = i.price;
              title = i.title;
              type = i.type;
          }
      });
      fetch('https://in3.dev/knygos/types/').then(response => response.json()).then(data => {
          data.forEach(tipas => {
              if(tipas.id == type){
                  type = tipas.title;
              }
          }) 
            console.log(price,title,type);
      });

  });