let numeroDeCartas=0;
const frente = ["card1.gif", "card2.gif", "card3.gif", "card4.gif", "card5.gif", "card6.gif", "card7.gif"];
const verso = ["card8.gif", "card9.gif", "card10.gif", "card11.gif", "card12.gif", "card13.gif", "card14.gif"];
/*const frente = [
            "card1.gif", "card2.gif", "card3.gif", "card4.gif", "card5.gif", "card6.gif", "card7.gif",
            "card8.gif", "card9.gif", "card10.gif", "card11.gif", "card12.gif", "card13.gif", "card14.gif"
        ];*/
//console.log(card);

const nomeVetor = ["frente", "verso"];

function entrarNumeroCartas(){
        numeroDeCartas = parseInt(prompt("Entre com a quantidade de cartas do jogo (o número deve estar entre 4 e 14 e ser par):"));

    while (numeroDeCartas<4 || numeroDeCartas>14 || numeroDeCartas%2!==0){
        numeroDeCartas = parseInt(prompt("Entre com a quantidade de cartas do jogo (o número deve estar entre 4 e 14 e ser par):"));
    }
    const CartasSelecionadas = document.querySelector (".cartas");
    //let aleatorio = 0;
    frente.sort(comparador);  
    
    for(let i=0; i<numeroDeCartas/2; i++){ 
        //aleatorio = Math.floor(Math.random() * 7);
        //console.log(aleatorio);
      //  if(i % 2 == 0){
                    
            CartasSelecionadas.innerHTML += `<div class="carta">
            <div class = "back-face face">
            <img src = "img/${frente[i]}">
            </div>
            <div class = "front-face face">
            <img src = "img/front.png">
            </div>        
            </div>`;
      //  }else{
           // verso.sort(comparador);          
            CartasSelecionadas.innerHTML += `<div class="carta">
            <div class = "back-face face">
            <img src = "img/${frente[i]}">
            </div>
            <div class = "front-face face">
            <img src = "img/front.png">
            </div>        
            </div>`;
       // }
    }           
}
entrarNumeroCartas();

function comparador() { 
	return Math.random() - 0.5; 
}

