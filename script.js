let numeroDeCartas=0;
let todasCartas = ["card1.gif", "card2.gif", "card3.gif", "card4.gif", "card5.gif", "card6.gif", "card7.gif"];
let cartasDoJogo = [];
let numeroDeCliques = 0;
let comparacao = null;


const nomeVetor = ["frente", "verso"];

function entrarNumeroCartas(){
   // numeroDeCartas = 4;
        numeroDeCartas = parseInt(prompt("Entre com a quantidade de cartas do jogo (o número deve estar entre 4 e 14 e ser par):"));

    while (numeroDeCartas<4 || numeroDeCartas>14 || numeroDeCartas%2!==0){
        numeroDeCartas = parseInt(prompt("Entre com a quantidade de cartas do jogo (o número deve estar entre 4 e 14 e ser par):"));
    }
    const CartasSelecionadas = document.querySelector (".cartas");
    
    todasCartas.sort(comparador);  

    let j = 0;

    for(let i=0; i<numeroDeCartas; i++){ 

        cartasDoJogo[i] = todasCartas[j];
        j++;
        if(j >= numeroDeCartas/2){
            j = 0;
        }

    } 

    // cartasDoJogo = [1,2,3,1,2,3]
    cartasDoJogo.sort(comparador); 
    // cartasDoJogo = [1,3,2,1,2,3]
      // cartasDoJogo = [1,1,2,3,2,3]

    for(let i=0; i<numeroDeCartas; i++){ 
        CartasSelecionadas.innerHTML += `<div class="carta" data-identifier="card">
        <div class = "face back-face" data-identifier="back-face">
        <img src = "img/${cartasDoJogo[i]}">
        </div>
        <div class = "face front-face ${cartasDoJogo[i]}"  onclick="virarcarta(this)" data-identifier="front-face" >
        <img src = "img/front.png">
        </div>        
        </div>`;
    }     
    
}
entrarNumeroCartas();

function comparador() { 
	return Math.random() - 0.5; 
}
function virarcarta(selecionado){   
  // const girar = document.querySelector(".back-face");
    //selecionado.classList.add("virarback");
   // const girar2 = document.querySelector(".front-face");
   selecionado.classList.add("virarfrente");
   numeroDeCliques++;
      
   if(numeroDeCliques%2 !==0){
       comparacao = selecionado.classList[2];
   }else if(comparacao == selecionado.classList[2]){
    console.log("iguais");    
    }else{
        selecionado.classList.add("front-face");
    }

   
   
  
}  



