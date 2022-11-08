const mybtn= document.getElementById("mybtn");
const prezzo=2;


mybtn.addEventListener("click",
function(){
    const age=document.getElementById("age").value;
    const numeroKm=document.getElementById("numeroKm").value;
    const prezzointero=(numeroKm * prezzo).toFixed(2);


    if (age == "minore") {
        let sconto= ((numeroKm * prezzo) * 20) / 100 ;
        let costo= (prezzointero - sconto).toFixed(2);
        console.log(`La tua tariffa scontata del 20% è di ${costo}euro`);
    }
    else if ( age == "over65"){
        let sconto= (numeroKm * prezzo) * 40 / 100;
        let costo=(prezzointero - sconto).toFixed(2);
        console.log(`La tua tariffa scontata del 40% è di ${costo}euro`);
    }
    else{
        console.log(`La tua tariffa senza sconti è di ${prezzointero}euro`);
    }
   
}
);

