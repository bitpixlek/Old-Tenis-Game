// JavaScript Document
var ballX = 50;
var ballY = 50;
var ballSpeedX = 6;
var ballSpeedY = 6;

var paddleY = 250;
var paddle2Y = 250;
var playerScore =  0;

const PADDLE_WIDTH = 15;
const PADDLE_HEIGHT = 100;
const WINNING = 3;

var mostrarVitoria = false;


//reseta a bola após passar dos players
function ballReset(){
	if(playerScore >= WINNING || npcScore >= WINNING ){
		mostrarVitoria = true;		
	}
	
	ballSpeedX = -ballSpeedX;
	ballX = canvas.width/2;
	ballY = canvas.height/2;
}


//move a bola seguindo o tipo de impacto e movendo ela seguindo a direção
function move(){
	npc();
				
//atribuido valores ao objeto para move-lo
	ballX += ballSpeedX;
	ballY += ballSpeedY;
				
	if(ballX > canvas.width){
		if(ballY > paddle2Y && ballY < paddle2Y+PADDLE_HEIGHT){
			ballSpeedX = -ballSpeedX;
			
			var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT/2);
			ballSpeedY = deltaY * 0.2;
			
		}else{
			playerScore++;
			ballReset();
			vencedor();
		}
	}
				
	if(ballX <= 0){
		if(ballY > paddleY && ballY < paddleY+PADDLE_HEIGHT){
			ballSpeedX = -ballSpeedX;
			
			var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT/2);
			ballSpeedY = deltaY * 0.1;
			
		}else{
			npcScore++;
			ballReset();
			vencedor();
		}
	}
				
	if(ballY > canvas.height){
		ballSpeedY = -ballSpeedY;	
	}
	if(ballY <= 0){
		ballSpeedY = -ballSpeedY;
	}
}