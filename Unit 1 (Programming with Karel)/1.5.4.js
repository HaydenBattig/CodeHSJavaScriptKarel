function start(){
    move();
    makePancakes();
    moveTwice();
    makePancakes();
    moveTwice();
    makePancakes();
    move();
}

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();                 
}
function moveTwice(){
    move();
    move();
}
function makePancakes(){
    putBall();
    putBall();
    putBall();
}