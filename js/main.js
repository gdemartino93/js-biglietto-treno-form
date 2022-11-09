const mybtn= document.getElementById("mybtn");
const prezzo=0.21;
const offBtn = document.getElementById("offBtn")
offBtn.addEventListener("click",
function seisicuro() {
    let seisicuro = confirm("Sei sicuro di voler cancellare i dati del tuo biglietto?");
    if (seisicuro) {
        document.getElementById("numeroKm").value = "";
        document.getElementById("userName").value = "";
        document.getElementById("age").value = "";
        document.getElementById("userNameOut").innerHTML="";
        document.getElementById("offertaOut").innerHTML="";
        document.getElementById("carrozzaOut").innerHTML="";
        document.getElementById("codiceOut").innerHTML="";
        document.getElementById("costoOut").innerHTML="";
        document.getElementById("prezzointero").innerHTML="";
    } else {
      alert("Azione annullata");
    }
  })
mybtn.addEventListener("click",
function(){
    const userName=document.getElementById("userName").value;
    const age=document.getElementById("age").value;
    const numeroKm=document.getElementById("numeroKm").value;
    const prezzointero=(numeroKm * prezzo).toFixed(2);
    var open = document.getElementById("divOff");
    open.classList.add("active");
    


    if (age == "minore") {
        let sconto= ((numeroKm * prezzo) * 20) / 100 ;
        let costo= (prezzointero - sconto).toFixed(2);
        document.getElementById("divOff").style.display = "flex";
        document.getElementById("userNameOut").innerHTML=`${userName}`;
        document.getElementById("offertaOut").innerHTML=`${age}`;

        // valore da 1 a 10, ESCLUSO ZERO

        document.getElementById("carrozzaOut").
        innerHTML=Math.floor(Math.random() * 10 ) + 1;

        // Escluso ZERO

        document.getElementById("codiceOut").innerHTML=Math.floor(Math.random() * 1000000) + 1;
        document.getElementById("prezzointero").innerHTML=`${prezzointero}`
        document.getElementById("costoOut").innerHTML=`${costo}`;
      
    }
    else if ( age == "over65"){
        let sconto= (numeroKm * prezzo) * 40 / 100;
        let costo=(prezzointero - sconto).toFixed(2);
        document.getElementById("divOff").style.display = "flex";
        document.getElementById("userNameOut").innerHTML=`${userName}`;
        document.getElementById("offertaOut").innerHTML=`${age}`;

        // VALORE DA 1 A 10 ESCLUSO ZERO

        document.getElementById("carrozzaOut").
        innerHTML=Math.floor(Math.random() * 10) + 1;

        // ESCLUSO ZERO
        document.getElementById("prezzointero").innerHTML=`${prezzointero}`;
        document.getElementById("codiceOut").innerHTML=Math.floor(Math.random() * 1000000);
        document.getElementById("costoOut").innerHTML=`${costo}`;
       
    }
    else{
        // mostra row dati ticket

        document.getElementById("divOff").style.display = "flex";

        document.getElementById("userNameOut").innerHTML=`${userName}`;
        document.getElementById("offertaOut").innerHTML=`${age}`;

        // VALORE DA 1 A 10 ESCLUSO ZERO
        document.getElementById("carrozzaOut").innerHTML=Math.floor(Math.random() * 10)+1;

        // Escluso Zero
        document.getElementById("codiceOut").innerHTML=Math.floor(Math.random() * 1000000);
        document.getElementById("costoOut").innerHTML=`${prezzointero}`;
        
    }
   
}
);

