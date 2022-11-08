const mybtn= document.getElementById("mybtn");
const prezzo=2;


mybtn.addEventListener("click",
function(){
    const userName=document.getElementById("userName").value;
    const age=document.getElementById("age").value;
    const numeroKm=document.getElementById("numeroKm").value;
    const prezzointero=(numeroKm * prezzo).toFixed(2);
    var element = document.getElementById("divOff");
    element.classList.add("active");
    console.log(element)


    if (age == "minore") {
        let sconto= ((numeroKm * prezzo) * 20) / 100 ;
        let costo= (prezzointero - sconto).toFixed(2);
        document.getElementById("divOff").style.display = "flex";
        document.getElementById("userNameOut").innerHTML=`${userName}`;
        document.getElementById("offertaOut").innerHTML=`${age}`;
        document.getElementById("carrozzaOut").innerHTML=Math.floor(Math.random() * 11);
        document.getElementById("codiceOut").innerHTML=Math.floor(Math.random() * 1000000);
        document.getElementById("costoOut").innerHTML=`${costo}`;
        console.log(`La tua tariffa scontata del 20% è di ${costo}euro`);
    }
    else if ( age == "over65"){
        let sconto= (numeroKm * prezzo) * 40 / 100;
        let costo=(prezzointero - sconto).toFixed(2);
        document.getElementById("divOff").style.display = "flex";
        document.getElementById("userNameOut").innerHTML=`${userName}`;
        document.getElementById("offertaOut").innerHTML=`${age}`;
        document.getElementById("carrozzaOut").innerHTML=Math.floor(Math.random() * 11);
        document.getElementById("codiceOut").innerHTML=Math.floor(Math.random() * 1000000);
        document.getElementById("costoOut").innerHTML=`${costo}`;
        console.log(`La tua tariffa scontata del 20% è di ${costo}euro`);
    }
    else{
        console.log(`La tua tariffa senza sconti è di ${prezzointero}euro`);
        document.getElementById("divOff").style.display = "flex";
        document.getElementById("userNameOut").innerHTML=`${userName}`;
        document.getElementById("offertaOut").innerHTML=`${age}`;
        document.getElementById("carrozzaOut").innerHTML=Math.floor(Math.random() * 11);
        document.getElementById("codiceOut").innerHTML=Math.floor(Math.random() * 1000000);
        document.getElementById("costoOut").innerHTML=`${costo}`;
        console.log(`La tua tariffa scontata del 20% è di ${costo}euro`);
    }
   
}
);

