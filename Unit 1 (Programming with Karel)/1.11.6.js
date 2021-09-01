function start() {
    if (facingEast()){
        makeRightSquare();
    }else if (facingNorth()){
        makeLeftSquare();
    }
}
function makeLeftSquare(){
    for (var i = 0; i < 4; i++) {
        if (noBallsPresent()){
            putBall();
        }
        if (frontIsClear()){
            move();
        }
        if (frontIsBlocked()){
            if (leftIsBlocked()){
                turnRight();
            }
            if (rightIsBlocked()){
                turnLeft();
            }
        }
    }
}
function makeRightSquare(){
    for (var i = 0; i < 4; i++) {
        if (noBallsPresent()){
            putBall();
        }
        if (frontIsClear()){
            move();
        }
        if (frontIsBlocked()){
            if (leftIsBlocked()){
                turnRight();
            }
            if (rightIsBlocked()){
                turnLeft();
            }
        }
    }
}