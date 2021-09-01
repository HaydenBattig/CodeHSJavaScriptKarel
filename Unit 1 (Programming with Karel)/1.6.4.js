function start(){
    yote();
    move();
    turnRight();
    moveThrice();
    turnLeft();
    yote();

    
}
function yote(){
    move();
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    turnRight();
    
}

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}
function moveThrice(){
    move();
    move();
    move();
}