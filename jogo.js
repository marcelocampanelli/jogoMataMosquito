
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
//para pegar a palavra de req (depois do ?dificil ?normal)
//para subtituir o ? do req por nada, assim ficando apenas dificil/normal
nivel = nivel.replace('?','')

if(nivel === 'normal') {
  criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
  criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris'){
  criaMosquitoTempo = 750
}


//joga esta função AjustaTamanhoPalcoJogo dentro do body, com o atributo
//onresize para sempre que for alterado o tamanho do body da pagina
//a função ser chamada sempre automaticamente e assim sempre mantendo a varial
// alturaxlargura atualizadas

function ajustaTamanhoPalcoJogo(){
   altura = window.innerHeight
   largura = window.innerWidth

   console.log(largura,altura)
}
 
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    tempo -= 1

    if(tempo < 0){
      clearInterval(cronometro)
      clearInterval(criaMosquito)
      window.location.href = 'vitoria.html'
    }else {
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)

function posicaoRandomica(){

  //remover mosquito anterior (caso exista)
  if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

    //validação das vidas
    if(vidas > 3){
      window.location.href = 'fim_de_jogo.html'
    }else{
     document.getElementById('v' + vidas).src='css/imagens/coracao_vazio.png'
  }
    vidas++
  }


  //random * largura//altura para criarem variavem até o limite
  //maximo aceito pelo navegador
  //math.floor para arredondar para o valor.
  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90
  
  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY
  
  console.log(posicaoX, posicaoY)


  //ciar o elemento html
  var mosquito = document.createElement('img')
  mosquito.src = 'css/imagens/mosca.png'
  mosquito.className = tamanhoAleatorio() +' '+ladoAleatorio()
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function (){
    this.remove()
  }
  //acessa o body e cria um "filho"
  document.body.appendChild(mosquito)


  
}

function tamanhoAleatorio(){
  var classe = Math.floor(Math.random() * 3 )

  switch( classe ) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
  //neste caso nao precisa do break devido ao return
  //pq o return já encerra a function
}


function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2 )

  switch( classe ) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'

  }
}