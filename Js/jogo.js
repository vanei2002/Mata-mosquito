var largura = 0;
var altura = 0;
var vida = 1;
var tempo = 15;

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '') //passa um novo parametro

if(nivel === 'normal'){
    criarMosquitoTempo = 1500

} else if(nivel === 'dificil'){
     criarMosquitoTempo = 1000

  }else if(nivel === 'extremo'){
         criarMosquitoTempo = 750
  }


function medida(){

    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura,altura)

}

medida()

var cronometro = setInterval( function (){

    tempo -= 1

    if(tempo < 0){

        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'   

    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    

}, 1000);

function posicaoRandoica() {

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vida > 4){
             window.location.href = 'fimDejogo.html'
        }else{
            document.getElementById('v'+vida).src ='../image/coracao_vazio.png'

        }
        vida++
    }


    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img') //Criando elementos
    mosquito.src = '../image/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY +'px'
    mosquito.style.position = 'absolute'
    mosquito.id='mosquito'
    mosquito.onclick = function (){ this.remove()}

    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
    var  aleatorio = Math.floor(Math.random() * 3)

    if(aleatorio == 0){
        return 'mosquitoUm'
    }

    else if(aleatorio == 1){
        return 'mosquitoDois'
    }

    else{
        return 'mosquitoTres'
    }

}

function ladoAleatorio(){
    var  classe = Math.floor(Math.random() * 2)

    if(classe == 0){
        return 'ladoA'
    }

    else if(classe == 1){
        return 'ladoB'
    }

}

