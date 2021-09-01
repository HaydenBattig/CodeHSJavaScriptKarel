function start() {
    if (facingEast()){
        move();
    } else if(facingSouth()){
        turnLeft();
        move();
    } else if(facingWest()){
        turnLeft();
        turnLeft();
        move();
    }
    
}