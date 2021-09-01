function start(){
    turnLeft();
    move();
    turnRight();
	jumpHurdle();
	turnRight();
	move();
	turnLeft();
}

function jumpHurdle(){
    for (var i = 0; i < 5; i++){
        move();
        move();
        move();
    }
}