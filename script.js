const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo');

let estaPulando = false;
let posicaoInicial = 0;

function lidarComKeyup(evento) {
    //quando pressionar espaço( tecla 32)
    if(evento.keyCode === 32){
        if (!estaPulando) {
            pular();  
        } 
        
    }    
}

function pular() {   
    estaPulando = true;
    let intervalo = setInterval(() => {
        if (posicaoInicial >= 150) {
            clearInterval(intervalo);

            //descendo
            let descerIntervalo = setInterval(() => {
                if (posicaoInicial <= 0) {
                    clearInterval(intervalo);
                    estaPulando = false;
                } else {
                    posicaoInicial -= 20;
                    dino.style.bottom = posicaoInicial + 'px';
                }                              
            }, 20);
        } else {

            //subindo
            posicaoInicial += 20; 
            //passa para o css a nova informação de posição do bottom
            dino.style.bottom = posicaoInicial + 'px';
        }       
    }, 20 );
}

function criarCactos() {
    //cria uma div como no HTML
    const cactos = document.createElement('div');

    let posicaoCactos = 1000;
    let apareceCactos = Math.random() * 6000;
    
    cactos.classList.add('cactos');
    cactos.style.left = 1000 + 'px';
    
    fundo.appendChild(cactos);

    let intervaloEsq = setInterval(() => {
        if(posicaoCactos < -60){
            clearInterval(intervaloEsq);
            fundo.removeChild(cactos);
        }else if(posicaoCactos > 0 && posicaoCactos < 60 && posicaoInicial < 60 ){
            clearInterval(intervaloEsq);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        }else{
            posicaoCactos -= 10;
            cactos.style.left = posicaoCactos + 'px';
        }
    }, 20);
    setTimeout(criarCactos, apareceCactos);
}

criarCactos();
//Ouve o evento gerado quando aperta uma tecla e passa para a função
document.addEventListener('keyup', lidarComKeyup);