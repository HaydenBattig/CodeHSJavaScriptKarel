function start(){
	// Write your code here
	
	
	turnLeft();
	move();
	turnRight();
	while(frontIsClear()){
	    move();
	}
	turnRight();
	move();
	turnLeft();
	jumpHurdle();
	jumpHurdle();
	jumpHurdle();
	jumpHurdle();
	jumpHurdle();
	jumpHurdle();
	jumpHurdle();
	jumpHurdle();
}
function jumpHurdle(){
    //bruh
    spin();
}
function spin(){
    turnRight();
    turnRight();
    turnRight();
    turnRight();
}