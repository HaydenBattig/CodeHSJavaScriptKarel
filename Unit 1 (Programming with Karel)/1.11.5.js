function start(){
	if (facingSouth()){
	    turnLeft();
	} else if (facingWest()){
	    turnRight();
	    turnRight();
	}else if (facingNorth()){
	    turnRight();
	}else if (facingEast()){
	    
	}
}