/* This program draws a big tower from Karel's starting spot */
function start(){
    bruh();
	lmao();
	if (facingEast()){
	    turnLeft();
	}
	while(frontIsClear()){
	    if (facingNorth()){
	        putBall();
	        move();
	    }else {
	        putBall();
	    }
	}
	if (frontIsBlocked()){
	    putBall();
	}
}
function bruh(){
    if (facingSouth()){
	    turnRight();
	    turnRight();
	}
}
function lmao(){
    if (facingWest()){
	    turnRight();
	}
}