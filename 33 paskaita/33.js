const setas = new Set(['Lietus', 'Sniegas', 'Puga', 'Slapdriba', 'Vetra']);

console.log(setas);

const mas = [...setas];

console.log(mas);

localStorage.setItem('orai', JSON.stringify(mas));

const setas2 = new Set(...JSON.parse(localStorage.getItem('orai')));

console.log(setas2);