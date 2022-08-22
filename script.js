
const cartas = document.querySelector('.content');
let qtde;
let num;
function startgame(){
    qtde = Number(prompt('Olá! Com quantas cartas prefere jogar?🃏'));
    while (qtde < 4 || qtde > 14 || qtde % 2 !== 0){
        qtde = Number(prompt('Perdão, não é possível jogar com esse número de cartas!🥺'));
    }
    if (qtde === 4) {
        let versos4 = ['verso1','verso1','verso2','verso2'];
        for(let c=0 ; c < qtde ; c++){
            let num = Math.floor(Math.random() * versos4.length);
            cartas.innerHTML = cartas.innerHTML + `<div onclick="virar(this)" class="card ${versos4[num]} frente"></div>`;
            versos4.splice(num ,1);
        }
    }
    if (qtde === 6) {   
        let versos6 = ['verso1','verso1','verso2','verso2','verso3','verso3'];
        for(let c=0 ; c < qtde ; c++){
            let num = Math.floor(Math.random() * versos6.length);
            cartas.innerHTML = cartas.innerHTML + `<div onclick="virar(this)" class="card ${versos6[num]} frente"></div>`;
            versos6.splice(num ,1);
        }
    }
    if (qtde === 8) {   
        let versos8 = ['verso1','verso1','verso2','verso2','verso3','verso3','verso4','verso4'];
        for(let c=0 ; c < qtde ; c++){
            let num = Math.floor(Math.random() * versos8.length);
            cartas.innerHTML = cartas.innerHTML + `<div onclick="virar(this)" class="card ${versos8[num]} frente"></div>`;
            versos8.splice(num ,1);
        }
    }
    if (qtde === 10) {   
        let versos10 = ['verso1','verso1','verso2','verso2','verso3','verso3','verso4','verso4','verso5','verso5'];
        for(let c=0 ; c < qtde ; c++){
            let num = Math.floor(Math.random() * versos10.length);
            cartas.innerHTML = cartas.innerHTML + `<div onclick="virar(this)" class="card ${versos10[num]} frente"></div>`;
            versos10.splice(num ,1);
        }
    }
    if (qtde === 12) {   
        let versos12 = ['verso1','verso1','verso2','verso2','verso3','verso3','verso4','verso4','verso5','verso5','verso6','verso6'];
        for(let c=0 ; c < qtde ; c++){
            let num = Math.floor(Math.random() * versos12.length);
            cartas.innerHTML = cartas.innerHTML + `<div onclick="virar(this)" class="card ${versos12[num]} frente"></div>`;
            versos12.splice(num ,1);
        }
    }
    if (qtde === 14) {   
        let versos14 = ['verso1','verso1','verso2','verso2','verso3','verso3','verso4','verso4','verso5','verso5','verso6','verso6','verso7','verso7'];
        for(let c=0 ; c < qtde ; c++){
            let num = Math.floor(Math.random() * versos14.length);
            cartas.innerHTML = cartas.innerHTML + `<div onclick="virar(this)" class="card ${versos14[num]} frente"></div>`;
            versos14.splice(num ,1);
        }
    }
}

startgame();

let contajogadas = 0 ;
let exposed = [];
let first;
let second;

function virar(carta){
    if(exposed.length === 0 && carta.classList.contains('frente')==true){
        carta.classList.remove('frente');
        first = carta;
        exposed.push(carta.innerHTML);
    }else if (exposed.length === 1 && carta.classList.contains('frente')==true){
        carta.classList.remove('frente');
        second = carta;
        exposed.push(carta.innerHTML);
        console.log(JSON.stringify(first.classList));
        setTimeout(isequal,1200);
    }
    
} 

function isequal(){
    contajogadas++;
    if(exposed.length===2){
        if(JSON.stringify(first.classList)===JSON.stringify(second.classList)){
            exposed = [];
        }else{
            first.classList.add('frente');
            second.classList.add('frente');
            exposed = [];
        }
    }
   // endgame();
}
