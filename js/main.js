// prendi dati inseriti dall'user nell'input 
let age=document.getElementById("age").value;
let numeroKm=document.getElementById("numeroKm").value;

function mybtn() {
    console.log(`La tua età è ${age}`)
    console.log(`Vuoi percorrere ${numeroKm} km`)
}
// calcola prezzo intero
const prezzo=0.21;
const prezzointero=(numeroKm * prezzo).toFixed(2);

