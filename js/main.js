const mybtn= document.getElementById("mybtn");
const numeroKm=document.getElementById("numeroKm").value;
const prezzo=2;
const prezzointero=(numeroKm * prezzo).toFixed(2);
var age;
var sconto;
var costo;

mybtn.addEventListener("click",
function(){
    const age=document.getElementById("age").value;

    if (age < 17) {
        let sconto= ((numeroKm * prezzo) * 20) / 100 ;
        let costo= (prezzointero - sconto).toFixed(2);
        console.log(`La tua tariffa scontata del 20% è di ${costo}euro`);
    }
    else if ( age >= 65){
        let sconto= (numeroKm * prezzo) * 40 / 100;
        let costo=(prezzointero - sconto).toFixed(2);
        console.log(`La tua tariffa scontata del 20% è di ${costo}euro`);
    }
    else{
        console.log(`La tua tariffa senza sconti è di ${prezzointero}euro`);
    }
   
}
);

