// JavaScript Document

function desenhar (){
				
//Nesta linha esta sendo desenhada a area do campo preto
	colorRect(0, 0, canvas.width, canvas.height, 'black')
	
	if(mostrarVitoria == true){
		if(playerScore >= WINNING){
			
			canvasContext.fillStyle = 'white';
			canvasContext.fillText("Você Venceu", 100, 80);
			canvasContext.fillText("Click to Continue", 100, 100);
			
			return;
			
		}
		if(npcScore >= WINNING){
			
			canvasContext.fillStyle = 'white';
			canvasContext.fillText("Você Perdeu", 100, 80);
			canvasContext.fillText("Click to Continue", 100, 100);
			
			return;
		}

	}
		
// desenha a rede de divisão do campo	
	desenhaRede();
		
//player da esquerda
	colorRect(0, paddleY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white')

//maquina que joga contra o Player.
	colorRect(canvas.width - PADDLE_WIDTH, paddle2Y, PADDLE_WIDTH, PADDLE_HEIGHT,'white')

//bola
	colorCirle(ballX, ballY, 'white');

	canvasContext.fillText(playerScore, 100, 100);
	canvasContext.fillText(npcScore, canvas.width - 100, 100);
					
}
			
//função que gera a bola
function colorCirle(centerX, centerY, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, 10, 0, Math.PI*2, true);
	canvasContext.fill();
}
			
			
//simplificando a o gerar de cada canvas com uma função simples
function colorRect(leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
}
			
//calculando a posição do mouse e retornando os valores
function calculateMousePosition(evt){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
				
	return{
		x:mouseX,
		y:mouseY	
	}
				
}