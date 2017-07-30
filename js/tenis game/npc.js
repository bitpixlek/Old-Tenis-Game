// JavaScript Document
var npcScore = 0;
var npcPaddleSpeed = ballSpeedY * 1.15 ;

//função que faz o npc seguir a bola
function npc(){
	var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
		
	if(paddle2YCenter < ballY - 35){
		paddle2Y += npcPaddleSpeed;
	}
	if(paddle2YCenter > ballY + 35){
		paddle2Y -= npcPaddleSpeed;
	}	
}


