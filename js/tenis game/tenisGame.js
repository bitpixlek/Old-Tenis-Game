// JavaScript Document
var canvas;
var canvasContext;

window.onload = function(){
//atribuição da tag canvas a uma variavel "canvas"
	canvas = document.getElementById('game_area');
//atribuindo contexto 2D ao "canvas"
	canvasContext = canvas.getContext('2d');
				
	var fps = 30;
//intervalo onde cada frame é gerado
	setInterval(function(){
	move();
	desenhar();
				
	}, 500/fps);
	
//evento usado para reiniciar o jogo
	canvas.addEventListener('click', function(evt){
		playerScore = 0;
		npcScore = 0;
		mostrarVitoria = false;
		
	});
				
//pegando o movimento do mouse e passando para o auxiliar
	canvas.addEventListener('mousemove', function(evt){
	var mousePos = calculateMousePosition(evt);
// essa variavel, denomina o valor do eixo Y que será passado para a movimentação do Player
	paddleY = mousePos.y - (PADDLE_HEIGHT/2);
					
	})
}


//cria um loop para desenhar a rede de divisão do campo
function desenhaRede(){
	for(var i = 0; i < canvas.height; i+= 40){
		colorRect(canvas.width/2 - 1, i, 2, 20, 'white');
	}
}